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
      hs_data: {}
    }
  }

  renderData(key) {
  }

  render() {
    return (
      <div className="col-xs-12 col-sm-12 col-md-4 col-md-4-offset-2 col-lg-4 col-lg-4-offset-2">
        <SidebarMenu />
      </div>
    )
  }
}

export default App;
