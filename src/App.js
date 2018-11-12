import React, { Component } from "react";
import "./App.css";
import { Row, Col, Affix } from "antd";
import "antd/dist/antd.css";
import StepProgress from "./components/Steps";
// import MeanVarianceChart from "./components/MeanVarianceChart";
import OptResults from "./components/Tabs";

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
        <Row gutter={50}>
          <Col className="gutter-row" span={6}>
            <div className="gutter-box">
              <Affix offsetTop={0}>
                <StepProgress />
              </Affix>
            </div>
          </Col>
          <Col className="gutter-row" span={18}>
            <div className="gutter-box Output">
              <OptResults />
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;
