import React, { Component } from "react";
import { Radio } from "antd";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { updateFrequency } from "../../actions/updateFrequency";

class FrequencyPicker extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    e.preventDefault();
    this.props.update(e.target.value);
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

const mapDispatchToProps = dispatch => {
  return {
    update: bindActionCreators(updateFrequency, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FrequencyPicker);
