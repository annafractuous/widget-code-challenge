import React from 'react';
import autobind from 'autobind-decorator';

// Components
import ProfilePic from './ProfilePic';

class SidebarMenu extends React.Component {
  render () {
    return (
      <fieldset>
        <div className="col-md-4">
          <ProfilePic />
        </div>
      </fieldset>
    )
  }
}

export default SidebarMenu;
