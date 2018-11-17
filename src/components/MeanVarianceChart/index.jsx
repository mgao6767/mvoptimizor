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
          mode: "lines+markers",
          name: "Frontier",
          marker: { size: 3 }
        },
        {
          x: this.props.result["params"]["assets standard deviation"].map(x =>
            parseFloat((parseFloat(x) * 100).toFixed(2))
          ),
          y: this.props.result["params"]["assets expected return"].map(x =>
            parseFloat((parseFloat(x) * 100).toFixed(2))
          ),
          text: this.props.result["params"]["assets"],
          type: "scatter",
          mode: "markers",
          name: "Assets",
          marker: { size: 10 }
        },
        {
          x: [this.props.result["gmvp"]["standard deviation"]].map(x =>
            parseFloat((parseFloat(x) * 100).toFixed(2))
          ),
          y: [this.props.result["gmvp"]["expected return"]].map(x =>
            parseFloat((parseFloat(x) * 100).toFixed(2))
          ),
          type: "scatter",
          mode: "markers",
          name: "GMVP",
          marker: { size: 12 }
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
        },
        hovermode: "y"
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

  handleHover = e => {
    e.points.forEach(element => {
      if (element.curveNumber === 0) {
        const id = element.pointIndex;
        // console.log(this.props.result["portfolios"][id]);
        this.props.onPortfolioSelectedHover(id);
      }
    });
  };

  handlClick = e => {
    e.points.forEach(element => {
      if (element.curveNumber === 0) {
        const id = element.pointIndex;
        // console.log(this.props.result["portfolios"][id]);
        this.props.onPortfolioSelectedClick(id);
      }
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
        onInitialized={figure => {
          this.setState(figure);
        }}
        onUpdate={figure => {
          this.setState(figure);
        }}
        onHover={this.handleHover}
        onClick={this.handlClick}
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
