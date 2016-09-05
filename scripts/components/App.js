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
      userDetails: [],
      menuItems: []
    }
  }

  componentWillMount() {
    this.setState({
      userDetails: require("../../resources/users.json"),
      menuItems: require("../../resources/sidebarMenu.json"),
    })
  }

  render() {
    return (
      <div>
        <div className="col-xs-12 col-sm-5 col-md-3 col-lg-3 widget-area">
          <SidebarMenu menuItems={this.state.menuItems} user={this.state.userDetails[0]} />
        </div>
        <div className="col-xs-12 col-sm-6 col-md-5 col-lg-5 widget-area">
          <UserWidget user={this.state.userDetails[1]} />
        </div>
      </div>
    )
  }
}

export default App;
