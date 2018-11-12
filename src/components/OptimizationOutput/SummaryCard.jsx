import React, { Component } from 'react';
import { List, Card } from "antd";


class SummaryCard extends Component {
    render() {
        const data = [
            {
                title: "Selected Assets",
                content: this.props.allState["selectedAssets"].join(", ")
            },
            {
                title: "Data Period",
                content: this.props.allState["dateRange"]
                    .map(dt => dt.format("YYYY-MM-DD"))
                    .join(" to ")
            },
            {
                title: "Data Frequency",
                content: this.props.allState["freq"]
            },
            {
                title: "Expected Return Method",
                content: this.props.allState["expectedReturnMethod"]
            },
            {
                title: "Covariance Matrix Method",
                content: this.props.allState["covarianceMethod"]
            },
            {
                title: "Optimization",
                content: this.props.allState["longOnly"]
                    ? "Long Position Only"
                    : "Long-Short Position"
            }
        ];
        return (
            <div className="optimization-summary-card">
                <Card title='Summary' hoverable={true}>
                    <List
                        size="small"
                        style={{ textAlign: "left", margin: 20 }}
                        // header={<div>Summary</div>}
                        // footer={<div>MVOptimizor v0.1</div>}
                        bordered={false}
                        split={false}
                        dataSource={data}
                        renderItem={item => (
                            <List.Item>
                                <List.Item.Meta title={item.title} description={item.content} />
                            </List.Item>
                        )}
                    />
                </Card>
            </div>
        );
    }
}


export default SummaryCard;
