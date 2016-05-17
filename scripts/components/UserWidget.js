import React from 'react';

// Components
import ProfilePic from './ProfilePic';

class UserWidget extends React.Component {
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
      </fieldset>
    )
  }
}

export default UserWidget;
