import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ReactDom from "react-dom";
import { Home, Login } from "./components";

const PrimartLayout = () => (
  <div className="primary-layout">
    <div>primary head</div>
    <main>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
      </Switch>
    </main>
  </div>
);

const App = () => (
  <BrowserRouter basename='static'>
    <PrimartLayout />
  </BrowserRouter>
);

ReactDom.render(<App />, document.getElementById("main"));