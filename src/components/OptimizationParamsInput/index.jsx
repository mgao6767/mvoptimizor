import React, { Component } from "react";
import { Card, Divider } from "antd";
import LongOnlySwitch from "../LongOnlySwitch";
import ExpectedReturnPicker from "../ExpectedReturnPicker";
import CovariancePicker from "../CovariancePicker";
import "./style.css";

class OptimziationParamsInput extends Component {
  render() {
    return (
      <Card className="optimization-params-input">
        <Divider orientation="left">Expected Return</Divider>
        <ExpectedReturnPicker />

        <Divider orientation="left">Covariance Matrix</Divider>
        <CovariancePicker />

        <Divider orientation="left">Long Position Only</Divider>
        <LongOnlySwitch />
      </Card>
    );
  }
}

export default OptimziationParamsInput;
