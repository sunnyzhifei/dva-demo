import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/indexPage/IndexPage';
import Example from './routes/example';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={Example} />
        <Route path="/product" exact component={IndexPage} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
