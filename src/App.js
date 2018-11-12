import React, { Component } from "react";
import "./App.css";
import "antd/dist/antd.css";
import StepProgress from "./components/Steps";
import MeanVarianceChart from "./components/MeanVarianceChart";

class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     graphData: null
  //   };
  // }
  // componentDidMount() {
  //   getAssetReturn().then(data => {
  //     this.setState({
  //       graphData: Object.values(data).map(d => {
  //         return { ...d, date: new Date(d["date"]) };
  //       }, "date")
  //     });
  //   });
  // }
  render() {
    return (
      <div className="App">
        <h1>MVOptimizor</h1>
        <div className="Input">
          <StepProgress />
        </div>
        <div className="Output">
          <MeanVarianceChart />
        </div>
      </div>
    );
  }
}

export default App;
