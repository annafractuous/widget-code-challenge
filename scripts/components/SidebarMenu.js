import React from 'react';
import autobind from 'autobind-decorator';

// Components
import ProfilePic from './ProfilePic';

class SidebarMenu extends React.Component {
  render () {
    var details = this.props.details;
    return (
      <fieldset className="profile-widget">
        <div className="row profile-header">
          <div className="col-md-4">
            <ProfilePic url={details.image}/>
          </div>
          <div className="col-md-8">
            <h5>{details.firstName} <br/> {details.lastName}</h5>
            <span className="subtitle">{details.followers} followers</span>
          </div>
        </div>
        <div className="row profile-menu">
          <ul className="nav nav-pills nav-stacked">
            <li>
              <a href="#">
                Edit user
              </a>
            </li>
            <li className="current-item">
              <a href="#">
                Web statistics
              </a>
            </li>
            <li>
              <a href="#">
                Upload settings
              </a>
            </li>
            <li>
              <a href="#">
                Events
              </a>
            </li>
          </ul>
        </div>
      </fieldset>
    )
  }
}

export default SidebarMenu;
