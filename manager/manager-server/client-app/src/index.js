import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import App from './App';
import Actions from './actions/Actions';
import Overview from './overview/Overview';
import './index.css';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="overview" component={Overview} />
      <Route path="actions" component={Actions} />
    </Route>
  </Router>,
  document.getElementById('root')
);
