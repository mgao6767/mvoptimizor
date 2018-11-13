import React, { Component } from "react";
import { connect } from "react-redux";
import { Spin, List, message } from "antd";

class OptimizationOutput extends Component {
  state = { msgShown: false };
  status = () => {
    if (this.props.optimizationError && !this.state.msgShown) {
      message.error("Optimization failed!");
      this.setState({ msgShown: true });
    }
    return this.props.loading;
  };
  render() {
    const data = [
      {
        title: "Selected Assets",
        content: this.props.allState["selectedAssets"].join(", ")
      },
      {
        title: "Data Period",
        content: this.props.allState["dateRange"]
          .map(dt => dt.format("YYYY-MM-DD"))
          .join(" to ")
      },
      {
        title: "Data Frequency",
        content: this.props.allState["freq"]
      },
      {
        title: "Expected Return Method",
        content: this.props.allState["expectedReturnMethod"]
      },
      {
        title: "Covariance Matrix Method",
        content: this.props.allState["covarianceMethod"]
      },
      {
        title: "Optimization",
        content: this.props.allState["longOnly"]
          ? "Long Position Only"
          : "Long-Short Position"
      }
    ];
    return (
      <div className="optimization-output">
        <Spin
          spinning={this.status()}
          size="large"
          style={{ padding: "100px" }}
        >
          <List
            size="small"
            style={{ textAlign: "left", margin: 20 }}
            // header={<div>Summary</div>}
            // footer={<div>MVOptimizor v0.1</div>}
            bordered={false}
            split={false}
            dataSource={data}
            renderItem={item => (
              <List.Item>
                <List.Item.Meta title={item.title} description={item.content} />
              </List.Item>
            )}
          />
        </Spin>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.waitingResults,
  allState: state,
  optimizationError: state.optimizationError
});

export default connect(mapStateToProps)(OptimizationOutput);
