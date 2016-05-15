import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router';
import { browserHistory } from 'react-router';

// Bind Scope
import autobind from 'autobind-decorator';

// Components
import App from './components/App';

var routes = (
  <Router history={browserHistory}>
    <Route path="/" component={App} />
  </Router>
)

ReactDOM.render(routes, document.querySelector('#main'));
