import React, { Component } from "react";
import ReactGA from "react-ga";
import "./App.css";
import { Row, Col, Affix } from "antd";
import "antd/dist/antd.css";
import StepProgress from "./components/Steps";
import ReactMarkdown from "react-markdown";
import OptResults from "./components/Tabs";

const README = `
Developed by [Adrian Gao](https://adrian-gao.com) | Version 0.1.4

**Note**: For use of University of Sydney students only due to data license (education).
* Data: End-df-Day US stock prices since 1962, including all stocks trading on NASDAQ, AMEX, NYSE and ARCA.
* Source: [Quandl](https://www.quandl.com/data/EOD-End-of-Day-US-Stock-Prices/documentation/product-overview), published by [Quotemedia](https://www.quotemedia.com/).

**Disclaimer**: The analyses of this app are performed programmatically and do not represent investment opinions. Seek a professional financial advisor for investment advices.
`;

ReactGA.initialize("UA-114057186-1");
ReactGA.pageview("/optimization");

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
        <h1 style={{ marginTop: 50 }}>Mean-Variance Portfolio Optimization</h1>
        <Row gutter={50}>
          <Col className="gutter-row" span={6}>
            <div className="gutter-box">
              <Affix offsetTop={0}>
                <StepProgress />
                <div style={{ marginTop: 50 }}>
                  <ReactMarkdown>{README}</ReactMarkdown>
                </div>
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
