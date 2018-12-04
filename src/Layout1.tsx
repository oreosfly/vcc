import * as React from 'react';
import { Layout } from 'antd';
import {Route } from 'react-router-dom';
import Verify from './pages/verify';
import "./layout1.scss"
                        
const { Content } = Layout;
export default class Layout1 extends React.Component {
    public render() {
        return (
            <Layout style={{height:"100%"}}>
                <Content className="verify">
                    <Route path="/verify" component={Verify} />
                </Content>
            </Layout>)
    }
}