import React from 'react';
import autobind from 'autobind-decorator';

// Components
import SidebarMenu from './SidebarMenu';

/*
  App
*/
@autobind
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      details: {}
    }
  }

  componentWillMount() {
    var userDetails = require("../../resources/details.json");
    this.setState({
      details: userDetails
    })
  }

  renderData(key) {
  }

  render() {
    return (
      <div className="col-xs-12 col-sm-12 col-md-4 col-md-4-offset-2 col-lg-4 col-lg-4-offset-2">
        <SidebarMenu details={this.state.details["1"]}/>
      </div>
    )
  }
}

export default App;
