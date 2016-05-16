import React from 'react';
import autobind from 'autobind-decorator';

// Components
import ProfilePic from './ProfilePic';

class SidebarMenu extends React.Component {
  render () {
    return (
      <fieldset>
        <div className="row profile-header">
          <div className="col-md-4">
            <ProfilePic />
          </div>
          <div className="col-md-8">
            <h5>COURTNEY <br/> TIMMONS</h5>
            <span className="subtitle">15,323 followers</span>
          </div>
        </div>
      </fieldset>
    )
  }
}

export default SidebarMenu;
