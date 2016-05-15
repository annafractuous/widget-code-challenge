import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router';
import { browserHistory } from 'react-router';

// Bind Scope
import autobind from 'autobind-decorator';

/*
  App
*/
@autobind
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      hs_data: {}
    }
  }

  renderData(key) {
  }

  render() {
    return (
      <div>
        <h1>HOLA</h1>
      </div>
    )
  }
}

var routes = (
  <Router history={browserHistory}>
    <Route path="/" component={App} />
  </Router>
)

ReactDOM.render(routes, document.querySelector('#main'));
