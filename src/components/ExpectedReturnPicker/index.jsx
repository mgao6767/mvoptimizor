import React, { Component } from "react";
import { Radio } from "antd";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { updateExpectedReturnMethod } from "../../actions/updateExpectedReturnMethod";

class ExpectedReturnPicker extends Component {
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
        name="expected-return-method"
        defaultValue={this.props.method}
        //buttonStyle="solid"
        onChange={this.onChange}
      >
        <Radio.Button value="arithmetic">Sample Mean</Radio.Button>
        <Radio.Button value="geometric">Geometric Mean</Radio.Button>
      </Radio.Group>
    );
  }
}

const mapStateToProps = state => ({
  method: state.expectedReturnMethod
});

const mapDispatchToProps = dispatch => {
  return {
    update: bindActionCreators(updateExpectedReturnMethod, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExpectedReturnPicker);
