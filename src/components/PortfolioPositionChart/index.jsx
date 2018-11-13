import React, { Component } from "react";
import Plot from "react-plotly.js";

export class PortfolioPositionChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          values: this.props.weights,
          labels: this.props.assets,
          type: "pie",
          hole: 0.5,
          hoverinfo: "label+percent+name"
        }
      ],
      layout: {
        showlegend: true,
        title: this.props.title
      },
      config: { displayModeBar: false }
    };
  }

  componentWillReceiveProps(nextProps) {
    console.log("recevied new props", nextProps);
  }

  render() {
    return (
      <Plot
        style={{ width: "100%", height: "100%" }}
        data={this.state.data}
        layout={this.state.layout}
        config={this.state.config}
        useResizeHandler={true}
      />
    );
  }
}

export default PortfolioPositionChart;
