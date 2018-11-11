import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Select, Spin } from "antd";
import debounce from "lodash/debounce";
import { updateSelectedAssets } from "../../actions/updateSelectedAssets";

const Option = Select.Option;

class AssetsPicker extends Component {
  constructor(props) {
    super(props);
    this.fetchTickers = debounce(this.fetchTickers, 300);
    this.state = {
      data: [],
      value: this.props.value,
      fetching: false
    };
  }

  fetchTickers = ticker => {
    if (ticker.length <= 1) return;
    // console.log("fetching asset", ticker);
    this.setState({ data: [], fetching: true });
    fetch(`http://localhost:5000/assets/ticker=${ticker}`)
      .then(response => response.json())
      .then(body => {
        this.setState({ data: Object.values(body), fetching: false });
      });
  };

  handleChange = values => {
    // if (values === this.state.value) return;
    this.setState({
      value: values,
      data: [],
      fetching: false
    });
    this.props.update(values);
  };

  render() {
    const { fetching, data, value } = this.state;
    return (
      <Select
        autoFocus={true}
        mode="multiple"
        value={value}
        allowClear={true}
        placeholder="Select assets..."
        notFoundContent={fetching ? <Spin size="small" /> : null}
        filterOption={false}
        onSearch={this.fetchTickers}
        onSelect={this.handleSelect}
        onChange={this.handleChange}
        style={{ width: "100%" }}
      >
        {data.map(d => (
          <Option key={d.Ticker} value={d.Ticker}>{`${d.Ticker} - ${
            d.Name
          }`}</Option>
        ))}
      </Select>
    );
  }
}

const mapStateToProps = state => ({
  value: state.selectedAssets
});

const mapDispatchToProps = dispatch => {
  return {
    update: bindActionCreators(updateSelectedAssets, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AssetsPicker);
