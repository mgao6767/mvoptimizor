import React, { Component } from "react";
import { Card, Divider } from "antd";
import DateRangePicker from "../DateRangePicker";
import FrequencyPicker from "../FrequencyPicker";
// import MarketPicker from "../MarketPicker";
import AssetsPicker from "../AssetsPicker";
import "./style.css";

class DataParamsInput extends Component {
  render() {
    return (
      <Card className="data-params-input">
        {/* <Divider orientation="left">Select a market</Divider>
        <MarketPicker /> */}
        <Divider orientation="left">Select assets</Divider>
        <AssetsPicker />

        <Divider orientation="left">Select data period</Divider>
        <DateRangePicker />

        <Divider orientation="left">Select data frequency</Divider>
        <FrequencyPicker />
      </Card>
    );
  }
}

export default DataParamsInput;
