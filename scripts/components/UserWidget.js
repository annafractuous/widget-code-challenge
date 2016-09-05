import React from 'react';

// Components
import ProfilePic from './ProfilePic';
import MenuButton from './MenuButton';
import LikeButton from './LikeButton';

class UserWidget extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            current: ''
        }
    }

    checkIfActive (ref) {
        return !!(this.state.current === ref);
    }

    toggleActive (i, event) {
        event.preventDefault();
        this.setState({
            current: (this.state.current === i ? '' : i)
        });
    }

    render () {
        // next question: where to best declare & how to best update these user details to pass to the widget
        var user = this.props.user;
        var buttonDeets = [
            { text: user.profileViews,
              icon: 'icon-eye' },
            { text: user.comments,
              icon: 'icon-bubble' }
        ];
        var likeDeets = {
            text: user.likes,
            icon: 'icon-heart'
        };
        return (
          <fieldset className="user-widget">

            <header className="row">
              <img src={user.coverImage} alt="user-cover-image"/>
            </header>

            <section className="row">
              <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 image-wrapper">
                <ProfilePic url={user.image}/>
              </div>
              <div className="col-lg-8 col-md-8 col-sm-8 col-xs-8 text-wrapper">
                <h2>{user.firstName + " " + user.lastName}</h2>
                <span className="subtitle">{user.tagline}</span>
              </div>
            </section>

            <nav className="row">
              <ul className="nav nav-pills social-buttons">
                  {buttonDeets.map((item, i) => {
                      return <MenuButton current={this.checkIfActive(i)} details={item} onClick={this.toggleActive.bind(this, i)} key={i}/>
                  }, this)}
                  <LikeButton details={likeDeets} />
              </ul>
            </nav>

          </fieldset>
        )
    }
}

export default UserWidget;
