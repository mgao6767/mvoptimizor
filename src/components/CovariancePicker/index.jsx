import React, { Component } from "react";
import { Radio } from "antd";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { updateCovarianceMethod } from "../../actions/updateCovarianceMethod";

class CovariancePicker extends Component {
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
        name="covariance-method"
        defaultValue={this.props.method}
        //buttonStyle="solid"
        onChange={this.onChange}
      >
        <Radio.Button value="sample">Sample Covariance</Radio.Button>
        <Radio.Button value="factor" disabled={true}>
          Factor Model
        </Radio.Button>
      </Radio.Group>
    );
  }
}

const mapStateToProps = state => ({
  method: state.covarianceMethod
});

const mapDispatchToProps = dispatch => {
  return {
    update: bindActionCreators(updateCovarianceMethod, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CovariancePicker);
