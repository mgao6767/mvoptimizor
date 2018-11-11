import React, { Component } from "react";
import { DatePicker } from "antd";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import store from "../../store";
import { updateDateRange } from "../../actions/updateDateRange";
import moment from "moment";

const RangePicker = DatePicker.RangePicker;

class DateRangePicker extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.disabledDate = this.disabledDate.bind(this);
  }
  onChange(dates) {
    this.props.update(dates);
  }
  disabledDate(current) {
    // Can not select days after today and today
    return (
      current &&
      current >
        moment()
          .subtract(1, "day")
          .endOf("day")
    );
  }
  render() {
    return (
      <RangePicker
        className="date-range-picker"
        disabledDate={this.disabledDate}
        ranges={{
          "Past 3 Months": [
            this.props.end_date.clone().subtract(3, "months"),
            this.props.end_date
          ],
          "Past 6 Months": [
            this.props.end_date.clone().subtract(6, "months"),
            this.props.end_date
          ]
        }}
        defaultValue={[this.props.start_date, this.props.end_date]}
        onChange={this.onChange}
      />
    );
  }
}

function mapStateToProps(state) {
  console.log(store.getState());
  return { start_date: state.dateRange[0], end_date: state.dateRange[1] };
}

function mapDispatchToProps(dispatch) {
  return {
    update: bindActionCreators(updateDateRange, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DateRangePicker);
