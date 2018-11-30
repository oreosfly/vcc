import { Input, Button } from 'antd';
import * as React from 'react';
import "./index.scss";

export default class Verify extends React.Component {
    constructor(props:object) {
        super(props);
        this.state = { 
            btn_clock:0
        };

    }
    public render() {
        return (
            <div>
                <div className="email-container">
                    <Input className="email-input" addonAfter="@vite.org" placeholder="请输入vite邮箱"
                        size="large" />
                    <Button type="primary" className="btn-send">发送</Button>
                </div>
                < div className="token-container">
                    <Input placeholder="请填写token" style={{ height: "100%" }} />
                </div>
                < div className="login-btn">
                    <Button type="primary">登陆</Button>
                </div>
            </div>
        )
    }

}