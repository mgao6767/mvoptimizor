import React, { Component } from "react";
import { Radio, Tooltip } from "antd";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { updateFrequency } from "../../actions/updateFrequency";

class FrequencyPicker extends Component {
  onChange = e => {
    e.preventDefault();
    this.props.update(e.target.value);
  };

  render() {
    return (
      <Radio.Group
        defaultValue={this.props.freq}
        //buttonStyle="solid"
        onChange={this.onChange}
      >
        <Radio.Button value="daily">Daily</Radio.Button>
        <Radio.Button value="weekly">Weekly</Radio.Button>
        <Radio.Button value="monthly">Monthly</Radio.Button>
        <Tooltip placement="bottomLeft" title="Terrible Idea">
          <Radio.Button value="annual" disabled={true}>
            Annual
          </Radio.Button>
        </Tooltip>
      </Radio.Group>
    );
  }
}

const mapStateToProps = state => ({
  freq: state.freq
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
