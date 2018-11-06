import React, { Component } from "react";
import "./App.css";
import "antd/dist/antd.css";
import DataParamsInput from "./components/DataParamsInput";

class App extends Component {
  render() {
    return (
      <div className="App">
        <DataParamsInput />
      </div>
    );
  }
}

export default App;
