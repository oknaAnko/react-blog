import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage";
import PostPage from "./pages/PostPage/PostPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

import "./App.scss";

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/posty/:id" component={PostPage} />
          <Route path="" component={NotFoundPage} />
        </Switch>
      </div>
    </Router>
  );
};
export default App;
