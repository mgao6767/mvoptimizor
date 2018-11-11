import React, { Component } from "react";
import "./App.css";
import "antd/dist/antd.css";
import StepProgress from "./components/Steps";
// import { getAssetReturn } from "./actions/getAssetReturn";
// import TradeChart from "./components/TradeChart";
// import AssetsPicker from "./components/AssetsPicker";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      graphData: null
    };
  }
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
        <StepProgress />
        <br />
      </div>
    );
  }
}

export default App;
