import React from 'react';

class LikeButton extends React.Component {
    getLikedClass () {
        return (!!this.props.liked ? "liked " : "");
    }

    render () {
        return (
            <li>
            <button className={this.getLikedClass()} onClick={this.props.onClick}>
                <span className={this.props.details.icon} aria-hidden="true"></span>
                {this.props.details.text}
            </button>
            </li>
        )
    }
}

export default LikeButton;
