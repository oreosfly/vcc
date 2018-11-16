import { Input, Button } from 'antd';
import * as React from 'react';

export default class Verify extends React.Component {
    public render() {
        return (
            <div>
                <div style={{ marginBottom: 16,display:"flex",alignItems:"center"}}>
                    <Input addonAfter="@vite.org" placeholder="请输入vite邮箱"
                        size="large" />
                    <Button type="primary">发送</Button>
                </div>
                < div style={{ marginBottom: 16 }}>
                        <Input placeholder="请填写token" />
                    </div>
                    < div style={{ marginBottom: 16 }}>
                        <Button type="primary">登陆</Button>
                    </div>
                </div>
                )
            }
            
}