import React, { Component } from "react";
import { connect } from "react-redux";
import { Tabs, message } from "antd";
import OptimizationResult from "../OptimizationResult";

const TabPane = Tabs.TabPane;

class OptResults extends Component {
  constructor(props) {
    super(props);
    this.newTabIndex = 0;
    const panes = [
      {
        title: "Result",
        content: "Results will be displayed here",
        key: "init"
      }
    ];
    this.state = {
      activeKey: panes[0].key,
      panes
    };
  }

  onChange = activeKey => {
    this.setState({ activeKey });
  };

  onEdit = (targetKey, action) => {
    this[action](targetKey);
  };

  componentWillReceiveProps(nextProps) {
    if (this.props["result"] === nextProps["result"]) return;
    this.add(nextProps["result"]);
  }

  add = result => {
    message.success("Optimization complete!");
    const panes = this.state.panes;
    const activeKey = `newTab${this.newTabIndex++}`;
    panes.push({
      title: `Result ${this.newTabIndex}`,
      content: (
        <OptimizationResult
          allState={this.props.allState}
          result={result[result.length - 1]}
        />
      ),
      key: activeKey
    });
    this.setState({ panes, activeKey });
  };

  remove = targetKey => {
    let activeKey = this.state.activeKey;
    let lastIndex;
    this.state.panes.forEach((pane, i) => {
      if (pane.key === targetKey) {
        lastIndex = i - 1;
      }
    });
    const panes = this.state.panes.filter(pane => pane.key !== targetKey);
    if (lastIndex >= 0 && activeKey === targetKey) {
      activeKey = panes[lastIndex].key;
    }
    if (lastIndex < 0 && this.state.panes.length > 1)
      activeKey = this.state.panes[1].key;
    this.setState({ panes, activeKey });
  };

  render() {
    return (
      <div>
        <Tabs
          hideAdd
          onChange={this.onChange}
          activeKey={this.state.activeKey}
          type="editable-card"
          onEdit={this.onEdit}
        >
          {this.state.panes.map(pane => (
            <TabPane tab={pane.title} key={pane.key}>
              {pane.content}
            </TabPane>
          ))}
        </Tabs>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  result: state.optimizationResults,
  allState: state
});

export default connect(mapStateToProps)(OptResults);
