import * as React from 'react';
import { Router, Route } from 'react-router';
import './App.scss';

import logo from './logo.svg';


class App extends React.Component {
    public render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Welcome to React</h2>
                </div>
                <Router>
                    <Route path="/verify" component={verify}>
                    </Route>
                </Router>
            </div>)
    );
    }
}

export default App;
