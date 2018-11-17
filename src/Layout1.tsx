import * as React from 'react';
import { Layout } from 'antd';
import {Route } from 'react-router-dom';
import Verify from './pages/verify';
                        
const { Content } = Layout;


const style = {
    "margin": "300px auto 0",
    "width": "400px"

}
export default class Layout1 extends React.Component {
    public render() {
        return (
            <Layout>
                <Content style={style}>
                    <Route path="/verify" component={Verify} />
                </Content>
            </Layout>)
    }
}