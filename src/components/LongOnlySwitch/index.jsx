import React, { Component } from "react";
import { Switch, Icon } from "antd";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { updateLongOnly } from "../../actions/updateLongOnly";

class LongOnlySwitch extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }
  onChange(e) {
    this.props.update(e);
  }
  render() {
    return (
      <Switch
        className="long-only-switch"
        defaultChecked={this.props.longOnly}
        checkedChildren={<Icon type="check" />}
        unCheckedChildren={<Icon type="close" />}
        onChange={this.onChange}
      />
    );
  }
}

const mapStateToProps = state => ({
  longOnly: state.longOnly
});

const mapDispatchToProps = dispatch => {
  return {
    update: bindActionCreators(updateLongOnly, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LongOnlySwitch);
