import React from 'react';

// Components
import ProfilePic from './ProfilePic';

class SidebarMenu extends React.Component {
  addActiveClass(event) {
    event.preventDefault();
    var currentlySelected = document.getElementsByClassName('current-item')[0];
    var justPressed = event.currentTarget.getElementsByTagName('li')[0];
    if (currentlySelected !== justPressed) {
      currentlySelected.className = currentlySelected.className.replace("current-item", "");
      justPressed.className += " current-item";
    }
  }

  render () {
    var details = this.props.details;
    return (
      <fieldset className="sidebar-widget">
        <header className="row">
          <div className="col-lg-5 col-md-5 col-sm-5 col-xs-5">
            <ProfilePic url={details.image}/>
          </div>
          <div className="col-lg-7 col-md-7 col-sm-7 col-xs-7">
            <h4>{details.firstName}<br/>{details.lastName}</h4>
            <span className="subtitle">{details.followers} followers</span>
          </div>
        </header>
        <nav className="row">
          <ul className="nav nav-stacked">

            <a href="#" className="no-underline" onClick={this.addActiveClass.bind(this)}><li>
                Edit user
                <span className="icon icon-user" aria-hidden="true"></span>
            </li></a>

            <a href="#" className="no-underline" onClick={this.addActiveClass.bind(this)}><li className="current-item">
                Web statistics
                <span className="icon icon-stats-bars" aria-hidden="true"></span>
            </li></a>

            <a href="#" className="no-underline" onClick={this.addActiveClass.bind(this)}><li>
                Upload settings
                <span className="icon icon-wrench" aria-hidden="true"></span>
              </li></a>

            <a href="#" className="no-underline" onClick={this.addActiveClass.bind(this)}><li>
                Events
                <span className="icon icon-location" aria-hidden="true"></span>
            </li></a>

          </ul>
        </nav>
      </fieldset>
    )
  }
}

export default SidebarMenu;
