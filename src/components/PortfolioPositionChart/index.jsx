import React, { Component } from "react";
import Plot from "react-plotly.js";

export class PortfolioPositionChart extends Component {
  constructor(props) {
    super(props);
    let values = [],
      labels = [];
    if (this.props.long) {
      this.props.weights.forEach((w, i) => {
        if (w >= 0) {
          values.push(w);
          labels.push(this.props.assets[i]);
        }
      });
    } else {
      this.props.weights.forEach((w, i) => {
        if (w < 0) {
          values.push(Math.abs(w));
          labels.push(this.props.assets[i]);
        }
      });
    }
    this.state = {
      data: [
        {
          values: values,
          labels: labels,
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
    let values = [],
      labels = [];
    if (nextProps.long) {
      nextProps.weights.forEach((w, i) => {
        if (w >= 0) {
          values.push(w);
          labels.push(nextProps.assets[i]);
        }
      });
    } else {
      nextProps.weights.forEach((w, i) => {
        if (w < 0) {
          values.push(Math.abs(w));
          labels.push(nextProps.assets[i]);
        }
      });
    }
    this.setState({
      data: [
        {
          values: values,
          labels: labels,
          type: "pie",
          hole: 0.5,
          sort: false,
          hoverinfo: "label+percent+name"
        }
      ]
    });
  }

  render() {
    return (
      <Plot
        style={{ width: "100%", height: "100%" }}
        data={this.state.data}
        layout={this.state.layout}
        config={this.state.config}
        //useResizeHandler={true}
        // onInitialized={figure => this.setState(figure)}
        // onUpdate={figure => {
        //   console.log("pie update, data:", figure.data);
        //   return;
        //   if (this.state.data === figure.data) return;
        //   this.setState(figure);
        // }}
      />
    );
  }
}

export default PortfolioPositionChart;
