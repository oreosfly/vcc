import * as React from 'react';
import { Layout } from 'antd';
const { Content,Sider } = Layout;
import Meta from './pages/editor/meta';
import {Route } from 'react-router-dom';
import Editor from './pages/editor/editor';

const style={
    height:"100%"
}
export default class Layout2 extends React.Component {
    public render() {
        return (
            <Layout style={style}>
                <Sider theme="light"><Meta /></Sider>
                <Content>
                    <Route path="/editor" component={Editor} />
                </Content>
            </Layout>)
    }
}