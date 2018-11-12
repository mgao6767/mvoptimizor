import React, { Component } from "react";
import { connect } from "react-redux";
import { Spin } from "antd";

class OptimizationOutput extends Component {
  render() {
    return (
      <div className="optimization-output">
        <Spin
          spinning={this.props.loading}
          size="large"
          style={{ padding: "100px" }}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.waitingResults
});

export default connect(mapStateToProps)(OptimizationOutput);
