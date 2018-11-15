import React, { Component } from "react";
import { Row, Col, Card } from "antd";
import MeanVarianceChart from "../MeanVarianceChart";
import SummaryCard from "../OptimizationOutput/SummaryCard";
import PortfolioPositionChart from "../PortfolioPositionChart";

class OptimizationResult extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activePortfolioID: 0,
      weights: Object.values(this.props.result["portfolios"][0]["weights"]),
      assets: Object.keys(this.props.result["portfolios"][0]["weights"])
    };
  }
  onPortfolioSelected = activePortfolioID => {
    // console.log("received port id", activePortfolioID);
    this.setState({
      activePortfolioID,
      weights: Object.values(
        this.props.result["portfolios"][activePortfolioID]["weights"]
      ),
      assets: Object.keys(
        this.props.result["portfolios"][activePortfolioID]["weights"]
      )
    });
    // console.log("port", this.state.weights);
  };
  render() {
    return (
      <div className="optimization-result">
        <Row gutter={10} style={{ marginBottom: 10 }}>
          <Col className="gutter-row" span={18}>
            <div className="gutter-box">
              <Card title="Return-Risk Chart" hoverable={true}>
                <MeanVarianceChart
                  result={this.props.result}
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
            <div className="gutter-box" />
          </Col>
        </Row>
      </div>
    );
  }
}

export default OptimizationResult;
