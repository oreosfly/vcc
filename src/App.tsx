import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Layout } from 'antd';
const {Content } = Layout;
import './App.scss';
import verify from './pages/verify'




class App extends React.Component {
    public render() {
        return (
            <div className="App">
                <Router>
                    <Layout >
                        <Route path="/verify" component={verify} />
                    </Layout>
                    <Layout>
                        <Content className="Verify-container">
                            <Route path="/verify" component={verify} />
                        </Content>
                    </Layout>
                </Router>
            </div>)
    }
}

export default App;
