import * as React from 'react';
import { Layout } from 'antd';
const { Content,Sider } = Layout;
import Meta from './pages/editor/meta';
import {Route } from 'react-router-dom';
import Editor from './pages/editor/editor';


export default class Layout2 extends React.Component {
    public render() {
        return (
            <Layout>
                <Sider><Meta /></Sider>
                <Content>
                    <Route path="/editor" component={Editor} />
                </Content>
            </Layout>)
    }
}