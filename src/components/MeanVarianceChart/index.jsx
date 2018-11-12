import React, { Component } from "react";
// import { connect } from "react-redux";
import Plot from "react-plotly.js";

export class MeanVarianceChart extends Component {
  constructor(props) {
    super(props);
    const x = (this.props.result
      ? this.props.result["standard deviation"]
      : []
    ).map(x => parseFloat((parseFloat(x) * 100).toFixed(2)));
    const y = (this.props.result
      ? this.props.result["expected return"]
      : []
    ).map(x => parseFloat((parseFloat(x) * 100).toFixed(2)));
    this.state = {
      data: [
        {
          x: x,
          y: y,
          type: "scatter",
          mode: "lines+points",
          name: "Efficient Frontier"
        }
      ],
      layout: {
        showlegend: true,
        title: "Expected Return - Standard Deviation Distribution",
        xaxis: {
          title: "Standard Deviation (% p.a.)",
          range: [0, Math.max(...x) + 10]
        },
        yaxis: {
          title: "Expected Return (% p.a.)",
          range: [Math.min(...y) - 5, Math.max(...y) + 5]
        }
      },
      // frames: [],
      config: { displayModeBar: false }
    };
  }

  // componentWillReceiveProps(nextProps) {
  //   this.setState({
  //     data: [
  //       {
  //         x: nextProps.latestResult["standard deviation"],
  //         y: nextProps.latestResult["expected return"],
  //         type: "scatter",
  //         mode: "lines+points"
  //       }
  //     ]
  //   });
  // }

  render() {
    return (
      <Plot
        style={{ width: "100%", height: "100%" }}
        data={this.state.data}
        layout={this.state.layout}
        // frames={this.state.frames}
        config={this.state.config}
        useResizeHandler={true}
        // onInitialized={figure => this.setState(figure)}
        // onUpdate={figure => this.setState(figure)}
      />
    );
  }
}

// const mapStateToProps = state => ({
//   hasResult: state.optimizationResults.length > 0,
//   latestResult: state.optimizationResults[state.optimizationResults.length - 1]
// });

// export default connect(mapStateToProps)(MeanVarianceChart);

export default MeanVarianceChart;
