import * as React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import './App.scss';
import Layout1 from './Layout1';
import Layout2 from './Layout2';

import { createBrowserHistory } from 'history';

export const history = createBrowserHistory();


class Vrouter extends Router {
    public history: any;
    constructor(props:object) {
        super(props);
        this.history = history
    }
}
class App extends React.Component {
    public render() {
        return (
            <Vrouter>
                <div className="App">
                    <Route component={Layout2} path={['/editor']} />
                    <Route component={Layout1} path={['/verify']} />
                </div>
            </Vrouter>)
    }
}

export default App;
