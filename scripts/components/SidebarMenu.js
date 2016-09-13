import React from 'react';

// Components
import ProfilePic from './ProfilePic';
import MenuButton from './MenuButton';

class SidebarMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: 0
        }
    }

    checkIfActive (ref) {
        return !!(this.state.active === ref);
    }

    makeActive(i, event) {
        event.preventDefault();
        this.setState({ active: i });
    }

    render () {
        var user = this.props.user,
            menuDetails = this.props.uiContent.links;

        return (
          <fieldset className="sidebar-widget">
            <header className="row user">
              <div className="col-lg-5 col-md-5 col-sm-5 col-xs-5 avatar">
                <ProfilePic url={user.image}/>
              </div>
              <div className="col-lg-7 col-md-7 col-sm-7 col-xs-7 user-info">
                <h4 className="name">{user.firstName}</h4>
                <h4 className="name">{user.lastName}</h4>
                <p className="subtitle">{user.followers} followers</p>
              </div>
            </header>
            <nav className="row">
              <ul className="nav nav-stacked">
                {menuDetails.map((item, i) => {
                    return <MenuButton active={this.checkIfActive(i)} details={item} onClick={this.makeActive.bind(this, i)} key={i}/>
                }, this)}
              </ul>
            </nav>
          </fieldset>
        )
    }
}

export default SidebarMenu;
