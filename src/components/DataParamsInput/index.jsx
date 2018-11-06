import React, { Component } from "react";
import { Card, Divider } from "antd";
import DateRangePicker from "../DateRangePicker";
import FrequencyPicker from "../FrequencyPicker";
import MarketPicker from "../MarketPicker";
import "./style.css";

// const gridStyle = {
//   width: "100%",
//   textAlign: "center",
//   bordered: false
// };

class DataParamsInput extends Component {
  render() {
    return (
      //   <Card className="data-params-input">
      //     <Card.Grid style={gridStyle}>
      //       <Divider orientation="left">Select a market</Divider>
      //       <MarketPicker />
      //     </Card.Grid>

      //     <Card.Grid style={gridStyle}>
      //       <Divider orientation="left">Select data period</Divider>
      //       <DateRangePicker />
      //     </Card.Grid>

      //     <Card.Grid style={gridStyle}>
      //       <Divider orientation="left">Select data frequency</Divider>
      //       <FrequencyPicker />
      //     </Card.Grid>
      //   </Card>
      <Card className="data-params-input">
        <Divider orientation="left">Select a market</Divider>
        <MarketPicker />

        <Divider orientation="left">Select data period</Divider>
        <DateRangePicker />

        <Divider orientation="left">Select data frequency</Divider>
        <FrequencyPicker />
      </Card>
    );
  }
}

export default DataParamsInput;
