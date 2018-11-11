import React, { Component } from "react";
import { Steps, Button, message } from "antd";
import DataParamsInput from "../DataParamsInput";
import OptimizationParamsInput from "../OptimizationParamsInput";
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
    content: "Last-content"
  }
];

class StepProgress extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0
    };
  }

  next() {
    const current = this.state.current + 1;
    this.setState({ current });
  }

  prev() {
    const current = this.state.current - 1;
    this.setState({ current });
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
            <Button type="primary" onClick={() => this.next()}>
              Start
            </Button>
          )}
          {current === steps.length - 1 && (
            <Button
              type="primary"
              onClick={() => message.success("Processing complete!")}
            >
              Done
            </Button>
          )}
        </div>
      </div>
    );
  }
}

export default StepProgress;
