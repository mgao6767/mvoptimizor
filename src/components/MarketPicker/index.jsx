import React, { Component } from "react";
import { Select } from "antd";
import { updateMarket } from "../../actions/updateMarket";
import store from "../../store";

const Option = Select.Option;

class MarketPicker extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }
  onChange(value) {
    store.dispatch(updateMarket(value));
  }
  render() {
    return (
      <Select
        defaultValue="NYSE"
        onChange={this.onChange}
        className="market-picker"
      >
        <Option value="NYSE">NYSE</Option>
        <Option value="NASDAQ">NASDAQ</Option>
      </Select>
    );
  }
}

export default MarketPicker;
