import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Layout } from 'antd';
const { Content,Sider } = Layout;
import './App.scss';
import Verify from './pages/verify';
import Meta from './pages/editor/meta';
import Editor from './pages/editor/editor';


class Layout1 extends React.Component {
    public render() {
        return (
            <Layout>
                <Content className="Verify-container">
                    {this.props.children}
                </Content>
            </Layout>)
    }
}

class Layout2 extends React.Component {
    public render() {
        return (
            <Layout>
                <Sider><Meta /></Sider>
                <Content className="Verify-container">
                    {this.props.children}
                </Content>
            </Layout>)
    }
}

class App extends React.Component {
    public render() {
        return (
            <div className="App">
                <Router>
                        <Route  component={Layout1} >
                        <Route path="/verify" component={Verify}></Route>
                        </Route>
                        <Route  component={Layout2} >
                        <Route path="/editor" component={Editor}></Route>
                        </Route>
                </Router>
            </div>)
    }
}

export default App;
