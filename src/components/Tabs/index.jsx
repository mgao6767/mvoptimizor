import React, { Component } from "react";
import { connect } from "react-redux";
import { Tabs, message, Card, Row, Col } from "antd";
import { MeanVarianceChart } from "../MeanVarianceChart";
import SummaryCard from "../OptimizationOutput/SummaryCard";
import PortfolioPositionChart from "../PortfolioPositionChart";

const TabPane = Tabs.TabPane;

class OptResults extends Component {
  constructor(props) {
    super(props);
    this.newTabIndex = 0;
    const panes = [
      {
        title: "Result",
        content: "Results will be displayed here",
        key: "init"
      }
    ];
    this.state = {
      activeKey: panes[0].key,
      panes,
      activePortfolioID: 0
    };
  }

  onChange = activeKey => {
    this.setState({ activeKey });
  };

  onEdit = (targetKey, action) => {
    this[action](targetKey);
  };

  componentWillReceiveProps(nextProps) {
    if (this.props["result"] === nextProps["result"]) return;
    this.add(nextProps["result"]);
  }

  onPortfolioSelected = activePortfolioID => {
    console.log("received port id", activePortfolioID);
    const result = this.props.result;
    this.setState({
      activePortfolioID,
      weights: Object.values(
        result[result.length - 1]["portfolios"][activePortfolioID]["weights"]
      ),
      assets: Object.keys(
        result[result.length - 1]["portfolios"][activePortfolioID]["weights"]
      )
    });
    console.log("port", this.state.weights);
  };

  add = result => {
    message.success("Optimization complete!");
    const panes = this.state.panes;
    const activeKey = `newTab${this.newTabIndex++}`;
    this.setState({
      weights: Object.values(
        result[result.length - 1]["portfolios"][0]["weights"]
      ),
      assets: Object.keys(result[result.length - 1]["portfolios"][0]["weights"])
    });
    panes.push({
      title: `Result ${this.newTabIndex}`,
      content: (
        <div>
          <Row gutter={10} style={{ marginBottom: 10 }}>
            <Col className="gutter-row" span={18}>
              <div className="gutter-box">
                <Card
                  title="Return-Risk Chart"
                  hoverable={true}
                  // style={{ marginBottom: 10 }}
                >
                  <MeanVarianceChart
                    result={result[result.length - 1]}
                    onPortfolioSelected={this.onPortfolioSelected}
                  />
                </Card>
              </div>
            </Col>
            <Col className="gutter-row" span={6}>
              <div className="gutter-box">
                <SummaryCard allState={this.props.allState} />
              </div>
            </Col>
          </Row>
          <Row gutter={10}>
            <Col className="gutter-row" span={18}>
              <div className="gutter-box">
                <Card title="Portfolio Position" hoverable={true}>
                  <PortfolioPositionChart
                    title={"Long Position"}
                    weights={this.state.weights}
                    assets={this.state.assets}
                  />
                </Card>
              </div>
            </Col>
            <Col className="gutter-row" span={6}>
              <div className="gutter-box" />
            </Col>
          </Row>
        </div>
      ),
      key: activeKey
    });
    this.setState({ panes, activeKey });
  };

  remove = targetKey => {
    let activeKey = this.state.activeKey;
    let lastIndex;
    this.state.panes.forEach((pane, i) => {
      if (pane.key === targetKey) {
        lastIndex = i - 1;
      }
    });
    const panes = this.state.panes.filter(pane => pane.key !== targetKey);
    if (lastIndex >= 0 && activeKey === targetKey) {
      activeKey = panes[lastIndex].key;
    }
    if (lastIndex < 0 && this.state.panes.length > 1)
      activeKey = this.state.panes[1].key;
    this.setState({ panes, activeKey });
  };

  render() {
    return (
      <div>
        <Tabs
          hideAdd
          onChange={this.onChange}
          activeKey={this.state.activeKey}
          type="editable-card"
          onEdit={this.onEdit}
        >
          {this.state.panes.map(pane => (
            <TabPane tab={pane.title} key={pane.key}>
              {pane.content}
            </TabPane>
          ))}
        </Tabs>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  result: state.optimizationResults,
  allState: state
});

export default connect(mapStateToProps)(OptResults);
