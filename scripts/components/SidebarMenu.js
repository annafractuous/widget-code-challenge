import React from 'react';
import autobind from 'autobind-decorator';

// Components
import ProfilePic from './ProfilePic';

class SidebarMenu extends React.Component {
  render () {
    var details = this.props.details;
    return (
      <fieldset className="profile-widget">
        <header className="row">
          <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
            <ProfilePic url={details.image}/>
          </div>
          <div className="col-lg-8 col-md-8 col-sm-8 col-xs-8">
            <h4>{details.firstName}<br/>{details.lastName}</h4>
            <span className="subtitle">{details.followers} followers</span>
          </div>
        </header>
        <nav className="row">
          <ul className="nav nav-stacked">
            <a href="#" className="no-underline"><li>
                Edit user
                <span className="glyphicon glyphicon-user" aria-hidden="true"></span>
            </li></a>
            <a href="#" className="no-underline"><li className="current-item">
                Web statistics
                <span className="glyphicon glyphicon-stats" aria-hidden="true"></span>
            </li></a>
            <a href="#" className="no-underline"><li>
                Upload settings
                <span className="glyphicon glyphicon-wrench" aria-hidden="true"></span>
              </li></a>
            <a href="#" className="no-underline"><li>
                Events
                <span className="glyphicon glyphicon-map-marker" aria-hidden="true"></span>
            </li></a>
          </ul>
        </nav>
      </fieldset>
    )
  }
}

export default SidebarMenu;
