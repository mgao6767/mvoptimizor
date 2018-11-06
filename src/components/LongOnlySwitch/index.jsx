import React, { Component } from "react";
import { Switch } from "antd";
import { updateLongOnly } from "../../actions/updateLongOnly";
import store from "../../store";

class LongOnlySwitch extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }
  onChange(e) {
    store.dispatch(updateLongOnly(e));
  }
  render() {
    return <Switch defaultChecked onChange={this.onChange} />;
  }
}

export default LongOnlySwitch;
