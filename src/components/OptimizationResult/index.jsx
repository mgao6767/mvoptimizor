import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Row, Col, Card, Radio } from "antd";
import MeanVarianceChart from "../MeanVarianceChart";
import SummaryCard from "../OptimizationOutput/SummaryCard";
import PortfolioPositionChart from "../PortfolioPositionChart";
import { updatePortfolioSelectionMethod } from "../../actions/updatePortfolioSelectionMethod";

class OptimizationResult extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activePortfolioID: 0,
      weights: Object.values(this.props.result["portfolios"][0]["weights"]),
      assets: Object.keys(this.props.result["portfolios"][0]["weights"]),
      portfolioSelectionMethod: "hover"
    };
  }
  onPortfolioSelectedHover = activePortfolioID => {
    if (this.state.portfolioSelectionMethod !== "hover") return;
    this.setState({
      activePortfolioID,
      weights: Object.values(
        this.props.result["portfolios"][activePortfolioID]["weights"]
      ),
      assets: Object.keys(
        this.props.result["portfolios"][activePortfolioID]["weights"]
      )
    });
  };
  onPortfolioSelectedClick = activePortfolioID => {
    if (this.state.portfolioSelectionMethod !== "click") return;
    this.setState({
      activePortfolioID,
      weights: Object.values(
        this.props.result["portfolios"][activePortfolioID]["weights"]
      ),
      assets: Object.keys(
        this.props.result["portfolios"][activePortfolioID]["weights"]
      )
    });
  };
  onPortfolioSelectionMethodChange = e => {
    e.preventDefault();
    this.setState({
      portfolioSelectionMethod: e.target.value
    });
    this.props.update(e.target.value);
  };
  render() {
    return (
      <div className="optimization-result">
        <Row gutter={10}>
          <Col className="gutter-row" span={18}>
            <div className="gutter-box" style={{ marginBottom: 10 }}>
              <Card title="Return-Risk Chart" hoverable={true}>
                <MeanVarianceChart
                  result={this.props.result}
                  onPortfolioSelectedHover={this.onPortfolioSelectedHover}
                  onPortfolioSelectedClick={this.onPortfolioSelectedClick}
                />
              </Card>
            </div>
            <div className="gutter-box" style={{ marginBottom: 10 }}>
              <Card
                title="Portfolio Position"
                hoverable={true}
                extra={
                  <Radio.Group
                    defaultValue={this.state.portfolioSelectionMethod}
                    buttonStyle="solid"
                    onChange={this.onPortfolioSelectionMethodChange}
                  >
                    <Radio.Button value="hover">Hover</Radio.Button>
                    <Radio.Button value="click">Click</Radio.Button>
                  </Radio.Group>
                }
              >
                <Row gutter={5}>
                  <Col className="gutter-row" span={12}>
                    <div className="gutter-box">
                      <PortfolioPositionChart
                        title={"Long Position"}
                        long={true}
                        weights={this.state.weights}
                        assets={this.state.assets}
                      />
                    </div>
                  </Col>
                  <Col className="gutter-row" span={12}>
                    <div className="gutter-box">
                      <PortfolioPositionChart
                        title={"Short Position"}
                        long={false}
                        weights={
                          this.props.allState["longOnly"]
                            ? []
                            : this.state.weights
                        }
                        assets={
                          this.props.allState["longOnly"]
                            ? []
                            : this.state.assets
                        }
                      />
                    </div>
                  </Col>
                </Row>
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
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    update: bindActionCreators(updatePortfolioSelectionMethod, dispatch)
  };
};

export default connect(
  null,
  mapDispatchToProps
)(OptimizationResult);
