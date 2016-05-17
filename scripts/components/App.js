import React from 'react';

// Components
import SidebarMenu from './SidebarMenu';
import UserWidget from './UserWidget';

/*
  App
*/
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
      <div className="container">
        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 widget-area">
          <SidebarMenu details={this.state.details["1"]}/>
        </div>
        <div className="col-xs-12 col-sm-6 col-md-5 col-lg-5 widget-area">
          <UserWidget details={this.state.details["2"]}/>
        </div>
      </div>
    )
  }
}

export default App;
