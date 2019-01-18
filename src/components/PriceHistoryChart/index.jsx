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
      tickers: this.props.tickers,
      weights,
      startDate,
      endDate,
      data: [
        {
          x: [],
          y: [],
          type: "scatter",
          mode: "lines",
          name: "Selected Portfolio"
        }
      ],
      layout: {
        showlegend: false,
        title: "Accumulated Return on $100 Inital Investments",
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
    this.update(nextProps.weights);
  }
  componentDidMount() {
    const init = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        start_date: this.state.startDate,
        end_date: this.state.endDate,
        tickers: this.props.tickers,
        freq: "daily"
      })
    };
    fetch(URL_RETURNS, init)
      .then(res => res.json())
      .then(data => {
        this.setState({
          rawRet: data
        });
        this.update(this.state.weights);
      });
  }

  update = weights => {
    const ret = Object.entries(this.state.rawRet).map(x => {
      const weight = weights[x[0]];
      return Object.values(x[1]).map(x => x * weight);
    });
    const cumRet = aSum(...ret)
      .map(x => x + 1)
      .reduce(function(r, a) {
        if (r.length > 0) a *= r[r.length - 1];
        r.push(a);
        return r;
      }, []);
    const dates = Object.keys(Object.values(this.state.rawRet)[0]);
    this.setState({
      data: [
        {
          x: dates,
          y: cumRet.map(x => x * 100),
          type: "scatter",
          mode: "lines",
          name: "Selected Portfolio"
        }
      ]
    });
  };
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
function aSum(/*arrays list*/) {
  var total = [];
  for (var i = 0, l0 = arguments.length; i < l0; i++)
    for (var j = 0, arg = arguments[i], l1 = arg.length; j < l1; j++)
      total[j] = (total[j] === undefined ? 0 : total[j]) + arg[j];
  return total;
}
export default PriceHistoryChart;
