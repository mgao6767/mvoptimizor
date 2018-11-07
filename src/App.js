import React, { Component } from "react";
import "./App.css";
import "antd/dist/antd.css";
import StepProgress from "./components/Steps";

class App extends Component {
  render() {
    return (
      <div className="App">
        <StepProgress />
      </div>
    );
  }
}

export default App;
