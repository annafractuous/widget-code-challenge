import React from 'react';

// Components
import ProfilePic from './ProfilePic';

class UserWidget extends React.Component {
  toggleLiked(event) {
    event.preventDefault();
    var button = event.currentTarget;
    if (button.className === "liked") {
      button.className = "";
    }
    else {
      button.className = "liked";
    }
  }

  render () {
    var details = this.props.details;
    return (
      <fieldset className="user-widget">
        <header className="row">
          <img src={details.coverImage} alt="user-cover-image"/>
        </header>
        <section className="row">
          <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 image-wrapper">
            <ProfilePic url={details.image}/>
          </div>
          <div className="col-lg-8 col-md-8 col-sm-8 col-xs-8 text-wrapper">
            <h2>{details.firstName + " " + details.lastName}</h2>
            <span className="subtitle">{details.tagline}</span>
          </div>
        </section>
        <nav className="row">
          <ul className="nav nav-pills social-buttons">

            <li className="first"><a href="#" className="no-underline"><span>
              <span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span>
              {details.profileViews}
            </span></a></li>

            <li><a href="#" className="no-underline"><span>
              <span className="glyphicon glyphicon-comment" aria-hidden="true"></span>
              {details.comments}
            </span></a></li>

            <li className="liked" onClick={this.toggleLiked.bind(this)}><a href="#" className="no-underline"><span>
              <span className="glyphicon glyphicon-heart" aria-hidden="true"></span>
              {details.likes}
            </span></a></li>

          </ul>
        </nav>
      </fieldset>
    )
  }
}

export default UserWidget;
