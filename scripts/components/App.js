import React from 'react';

// Components
import SidebarMenu from './SidebarMenu';
import UserWidget from './UserWidget';

/*
  App
*/
class App extends React.Component {
  componentWillMount() {
    var users = require("../../resources/users.json"),
        uiContent = require("../../resources/uiContent.json");
    this.setState({
      currentUser: users["1"],
      viewingUser: users["2"],
      menuDetails: uiContent["sidebarMenu"],
      widgetDetails: uiContent["userWidget"]
    })
  }

  render() {
    return (
      <div>
        <div className="col-xs-12 col-sm-5 col-md-3 col-lg-3 widget-area">
          <SidebarMenu uiContent={this.state.menuDetails} user={this.state.currentUser} />
        </div>
        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 widget-area">
          <UserWidget uiContent={this.state.widgetDetails} user={this.state.viewingUser} />
        </div>
      </div>
    )
  }
}

export default App;
