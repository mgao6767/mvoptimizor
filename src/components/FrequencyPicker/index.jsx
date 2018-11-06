import React, { Component } from "react";
import { Radio } from "antd";
import { connect } from "react-redux";
import store from "../../store";
import { updateFrequency } from "../../actions/updateFrequency";

class FrequencyPicker extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    e.preventDefault();
    store.dispatch(updateFrequency(e.target.value));
  }

  render() {
    return (
      <Radio.Group
        defaultValue={"daily"}
        //buttonStyle="solid"
        onChange={this.onChange}
      >
        <Radio.Button value="daily">Daily</Radio.Button>
        <Radio.Button value="weekly">Weekly</Radio.Button>
        <Radio.Button value="monthly">Monthly</Radio.Button>
        <Radio.Button value="annual">Annual</Radio.Button>
      </Radio.Group>
    );
  }
}

const mapStateToProps = state => ({
  freq: state.frequency
});

export default connect(mapStateToProps)(FrequencyPicker);
