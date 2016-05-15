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
      <div className="col-xs-12 col-sm-12 col-md-3 col-md-3-offset-2 col-lg-3 col-lg-3-offset-2">
        <h1>HOLA</h1>
        <SidebarMenu />
        <div className="col-md-4">
        </div>
      </div>
    )
  }
}

export default App;
