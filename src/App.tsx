import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.scss';
import Layout1 from './Layout1';
import Layout2 from './Layout2';

class App extends React.Component {
    public render() {
        return (
            <Router>
                <div className="App">
                    <Route component={Layout2} path={['/editor']}/>
                    <Route component={Layout1} path={['/verify']} />
                </div>
            </Router>)
    }
}

export default App;
