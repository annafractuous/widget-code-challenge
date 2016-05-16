import React from 'react';

class ProfilePic extends React.Component {
  render () {
    return (
      <img src={this.props.url} alt="avatar-image" className="img-circle img-padded"/>
    )
  }
}

export default ProfilePic;
