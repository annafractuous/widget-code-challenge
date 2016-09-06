import React from 'react';

// Components
import ProfilePic from './ProfilePic';
import MenuButton from './MenuButton';
import LikeButton from './LikeButton';

class UserWidget extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            current: '',
            liked: true
        }
    }

    componentWillMount () {
        this.setWidgetValues();
    }

    componentWillUpdate () {
        this.setWidgetValues();
    }

    setWidgetValues () {
        var user = this.props.user,
            menuDetails = this.props.uiContent,
            values = {
                "views": user.profileViews,
                "comments": user.comments,
                "likes": user.likes
            };
        for (var buttonType in menuDetails) {
            menuDetails[buttonType].map(function(item){
                item.text = values[item.id];
            })
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

    toggleLiked (event) {
        event.preventDefault();
        !this.state.liked ? this.props.user.likes++ : this.props.user.likes-- ;
        this.setState({
            liked: !this.state.liked
        });
    }

    render () {
        var user = this.props.user,
            menuDetails = this.props.uiContent.links,
            likeDetails = this.props.uiContent.actions[0];
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
                  {menuDetails.map((item, i) => {
                      return <MenuButton current={this.checkIfActive(i)} details={item} onClick={this.toggleActive.bind(this, i)} key={i}/>
                  }, this)}
                  <LikeButton liked={!!this.state.liked} details={likeDetails} onClick={this.toggleLiked.bind(this)} />
              </ul>
            </nav>

          </fieldset>
        )
    }
}

export default UserWidget;
