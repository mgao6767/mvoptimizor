import React, { Component } from "react";
import { connect } from "react-redux";
import { Tabs, message, Card, Row, Col } from "antd";
import { MeanVarianceChart } from "../MeanVarianceChart";
import SummaryCard from "../OptimizationOutput/SummaryCard";

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
      panes
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

  add = result => {
    message.success("Optimization complete!");
    const panes = this.state.panes;
    const activeKey = `newTab${this.newTabIndex++}`;
    panes.push({
      title: `Result ${this.newTabIndex}`,
      content: (
        <div>
          <Row gutter={10}>
            <Col className="gutter-row" span={18}>
              <div className="gutter-box">
                <Card
                  title="Return-Risk Chart"
                  hoverable={true}
                  // style={{ marginBottom: 10 }}
                >
                  <MeanVarianceChart result={result[result.length - 1]} />
                </Card>
              </div>
            </Col>
            <Col className="gutter-row" span={6}>
              <div className="gutter-box">
                <SummaryCard allState={this.props.allState} />
              </div>
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
