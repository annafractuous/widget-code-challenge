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

    render () {
        return (
            <li>
            <button className={this.getLikedClass()} onClick={this.toggleLiked.bind(this)}>
                <span className={this.props.details.icon} aria-hidden="true"></span>
                {this.props.details.text}
            </button>
            </li>
        )
    }
}

export default LikeButton;
