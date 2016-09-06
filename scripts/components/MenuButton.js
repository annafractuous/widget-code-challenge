import React from 'react';

class MenuButton extends React.Component {
    getActiveClass () {
        return (!!this.props.active ? "current-item " : "");
    }

    render () {
        return (
            <li>
            <button className={this.getActiveClass()} onClick={this.props.onClick}>
                <span className={this.props.details.icon} aria-hidden="true"></span>
                {this.props.details.text}
            </button>
            </li>
        )
    }
}

export default MenuButton;
