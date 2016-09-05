import React from 'react';

// Components
import ProfilePic from './ProfilePic';
import MenuButton from './MenuButton';

class SidebarMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            current: 0
        }
    }

    checkIfActive (ref) {
        return !!(this.state.current === ref);
    }

    addActiveClass(i, event) {
      event.preventDefault();
      this.setState({ current: i });
    }

    render () {
        var details = this.props.user,
            menuItems = this.props.menuItems;

        return (
          <fieldset className="sidebar-widget">
            <header className="row">
              <div className="col-lg-5 col-md-5 col-sm-5 col-xs-5">
                <ProfilePic url={details.image}/>
              </div>
              <div className="col-lg-7 col-md-7 col-sm-7 col-xs-7">
                <h4>{details.firstName}</h4>
                <h4>{details.lastName}</h4>
                <span className="subtitle">{details.followers} followers</span>
              </div>
            </header>
            <nav className="row">
              <ul className="nav nav-stacked">
                {menuItems.map((item, i) => {
                    return <MenuButton current={this.checkIfActive(i)} details={item} onClick={this.addActiveClass.bind(this, i)} key={i}/>
                }, this)}
              </ul>
            </nav>
          </fieldset>
        )
  }
}

export default SidebarMenu;
