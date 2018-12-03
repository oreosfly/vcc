import { Input, Button } from 'antd';
import * as React from 'react';
import "./index.scss";
import { sendMail } from "../../services";
import { CountDown } from "../../utils/clock"

enum SENDSTATUS {
    no_send = 0,
    sending,
    sent
}
interface IState {
    btnClock: number,
    sendStatus: SENDSTATUS,
    emailAddr: string
}

const timeToWait = 60*1000;
export default class Verify extends React.Component<any, IState> {
    constructor(props: object) {
        super(props);
        this.state = {
            btnClock: 0,
            sendStatus: SENDSTATUS.no_send,
            emailAddr: ""
        };

    }
    onEmailChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ emailAddr: e.target.value })
    }
    public render() {
        return (
            <div>
                <div className="email-container">
                    <Input className="email-input" addonAfter="@vite.org" placeholder="请输入vite邮箱"
                        size="large" onChange={this.onEmailChange} />
                    <Button type="primary" className="btn-send" loading={this.state.sendStatus !== SENDSTATUS.no_send} onClick={this.sendMail.bind(this)}>{this.state.sendStatus===SENDSTATUS.sent?this.state.btnClock/1000:'发送'}</Button>
                </div>
                < div className="token-container">
                    <Input placeholder="请填写token" style={{ height: "100%" }} />
                </div>
                < div className="login-btn">
                    <Button type="primary" id='log'>登陆</Button>
                </div>
            </div>
        )
    }
    private async sendMail() {
        if (this.state.sendStatus !== SENDSTATUS.no_send || !this.state.emailAddr) {
            return;
        }
        this.setState({ sendStatus: SENDSTATUS.sending });
        const { data } = await sendMail({ emailAddr: this.state.emailAddr });
        if (data.code !== 0) {
            // toast err
            this.setState({ sendStatus: SENDSTATUS.sending });
            return;
        }
        this.setState({ sendStatus: SENDSTATUS.sent });
        const tickTask = (c:CountDown) => {
            if(c.showTime===0){
                this.setState({ sendStatus:SENDSTATUS.no_send });
                return;
            };
            this.setState({ btnClock: c.showTime })
        }
        new CountDown({ initTime: timeToWait, interval: 1000, tickTask });
    }

}