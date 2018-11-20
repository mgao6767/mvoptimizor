import React, { Component } from "react";
import Plot from "react-plotly.js";
import { URL_RETURNS } from "../../constants/urls";

class PriceHistoryChart extends Component {
  constructor(props) {
    super(props);
    const { params, weights } = this.props;
    const startDate = params.dateRange[0].format("YYYY-MM-DD"),
      endDate = params.dateRange[1].format("YYYY-MM-DD");
    this.state = {
      data: [
        {
          x: Object.keys(weights),
          y: [],
          type: "scatter",
          mode: "lines",
          name: "Selected Portfolio"
        }
      ],
      layout: {
        showlegend: false,
        title: "Accumulated Return on $1,000 Inital Investments",
        xaxis: {
          autorange: true,
          range: [startDate, endDate],
          rangeselector: {
            buttons: [
              {
                count: 1,
                label: "1m",
                step: "month",
                stepmode: "backward"
              },
              {
                count: 6,
                label: "6m",
                step: "month",
                stepmode: "backward"
              },
              { step: "all" }
            ]
          },
          rangeslider: { range: [startDate, endDate] },
          type: "date"
        },
        yaxis: {
          autorange: true,
          type: "linear"
        }
      },
      config: { displayModeBar: false }
    };
  }
  componentWillReceiveProps(nextProps) {
    this.update(nextProps);
  }
  update = props => {
    const { params, weights } = props;
    const startDate = params.dateRange[0].format("YYYY-MM-DD"),
      endDate = params.dateRange[1].format("YYYY-MM-DD"),
      tickers = props.tickers;
    const body = {
      start_date: startDate,
      end_date: endDate,
      tickers,
      weights,
      freq: "daily"
    };
    const init = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body)
    };
    fetch(URL_RETURNS, init)
      .then(res => res.json())
      .then(data => {
        const ret = Object.values(data["weighted_return"]);
        const cumRet = ret
          .map(x => x + 1)
          .reduce(function(r, a) {
            if (r.length > 0) a *= r[r.length - 1];
            r.push(a);
            return r;
          }, []);
        this.setState({
          data: [
            {
              x: Object.keys(data["weighted_return"]),
              y: cumRet.map(x => x * 1000),
              type: "scatter",
              mode: "lines",
              name: "Selected Portfolio"
            }
          ]
        });
      });
  };
  componentDidMount() {
    this.update(this.props);
  }
  render() {
    return (
      <Plot
        style={{ width: "100%", height: "100%" }}
        data={this.state.data}
        layout={this.state.layout}
        config={this.state.config}
        // useResizeHandler={true}
        // onInitialized={figure => {
        //   this.setState(figure);
        // }}
        // onUpdate={figure => {
        //   this.setState(figure);
        // // }}
        // onHover={this.handleHover}
        // onClick={this.handlClick}
      />
    );
  }
}

export default PriceHistoryChart;
