import React, { Component } from "react";
import { connect } from "react-redux";
import Plot from "react-plotly.js";

class MeanVarianceChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          x: [1, 2, 3],
          y: [2, 6, 3],
          type: "scatter",
          mode: "lines+points",
          marker: { color: "red" }
        }
      ],
      layout: { title: "Expected Return - Standard Deviation Distribution" },
      frames: [],
      config: {}
    };
  }

  render() {
    return (
      <Plot
        data={this.state.data}
        layout={this.state.layout}
        // frames={this.state.frames}
        config={this.state.config}
        onInitialized={figure => this.setState(figure)}
        onUpdate={figure => this.setState(figure)}
      />
    );
  }
}

const mapStateToProps = state => ({
  result: state.optimizationResults
});

export default connect(mapStateToProps)(MeanVarianceChart);
