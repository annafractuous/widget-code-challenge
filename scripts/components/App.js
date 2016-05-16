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

  render() {
    return (
      <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
        <SidebarMenu details={this.state.details["1"]}/>
      </div>
    )
  }
}

export default App;
