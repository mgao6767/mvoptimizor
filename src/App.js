import React, { Component } from "react";
import "./App.css";
import "antd/dist/antd.css";
import StepProgress from "./components/Steps";
import { getAssetReturn } from "./actions/getAssetReturn";
import TradeChart from "./components/TradeChart";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      graphData: null
    };
  }
  componentDidMount() {
    getAssetReturn().then(data => {
      this.setState({
        graphData: Object.values(data).map(d => {
          return { ...d, date: new Date(d["date"]) };
        }, "date")
      });
    });
  }
  render() {
    return (
      <div className="App">
        <StepProgress />
        <br />
        {this.state.graphData !== null && (
          <TradeChart type="svg" data={this.state.graphData} />
        )}
      </div>
    );
  }
}

export default App;
