import React from 'react';

class LikeButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            liked: true
        }
    }

    toggleLiked(event) {
        event.preventDefault();
        this.setState({
            liked: !this.state.liked
        });
     }

    getLikedClass () {
        return (!!this.state.liked ? "liked " : "");
    }

    getIconClass (icon) {
        return "icon " + icon;
    }

    render () {
        return (
            <a href="#" className="no-underline" onClick={this.toggleLiked.bind(this)}>
            <li className={this.getLikedClass()}>
                <span className={this.getIconClass(this.props.details.icon)} aria-hidden="true"></span>
                {this.props.details.text}
            </li>
            </a>
        )
    }
}

export default LikeButton;
