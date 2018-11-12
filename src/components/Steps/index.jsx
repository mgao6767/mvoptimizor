import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Steps, Button, message } from "antd";
import DataParamsInput from "../DataParamsInput";
import OptimizationParamsInput from "../OptimizationParamsInput";
import OptimizationOutput from "../OptimizationOutput";
import { postOptimizationParams } from "../../actions/optimization";
import store from "../../store";
import "./style.css";

const Step = Steps.Step;

const steps = [
  {
    title: "Data",
    content: <DataParamsInput />
  },
  {
    title: "Optimization",
    content: <OptimizationParamsInput />
  },
  {
    title: "Results",
    content: <OptimizationOutput />
  }
];

class StepProgress extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0
    };
  }
  sendOptParamsToServer() {
    //TODO
    this.props.sendParams(store.getState());
  }

  next() {
    const current = this.state.current + 1;
    this.setState({ current });
    if (current === 2) {
      if (store.getState()["selectedAssets"].length < 2) {
        message.error("Need at least two assets!");
        return;
      }
      this.sendOptParamsToServer();
    }
  }

  prev() {
    const current = this.state.current - 1;
    this.setState({ current });
  }

  begining() {
    this.setState({ current: 0 });
  }

  render() {
    const { current } = this.state;
    return (
      <div className="step-progress">
        <Steps current={current}>
          {steps.map(item => (
            <Step key={item.title} title={item.title} />
          ))}
        </Steps>
        <div className="steps-content">{steps[current].content}</div>
        <div className="steps-action">
          {current > 0 && (
            <Button style={{ marginRight: 8 }} onClick={() => this.prev()}>
              Previous
            </Button>
          )}
          {current < steps.length - 2 && (
            <Button type="primary" onClick={() => this.next()}>
              Next
            </Button>
          )}
          {current === steps.length - 2 && (
            <Button
              type="primary"
              onClick={() => {
                this.next();
              }}
            >
              Start
            </Button>
          )}
          {current === steps.length - 1 && (
            <Button type="primary" onClick={() => this.begining()}>
              Done
            </Button>
          )}
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    sendParams: bindActionCreators(postOptimizationParams, dispatch)
  };
};

export default connect(
  null,
  mapDispatchToProps
)(StepProgress);
