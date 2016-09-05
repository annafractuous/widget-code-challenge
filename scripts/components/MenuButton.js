import React from 'react';

class MenuButton extends React.Component {
    getActiveClass () {
        return (!!this.props.current ? "current-item " : "");
    }

    getIconClass (icon) {
        return "icon " + icon;
    }

    render () {
        return (
            <a href="#" className="no-underline" onClick={this.props.onClick}>
            <li className={this.getActiveClass()}>
                <span className={this.getIconClass(this.props.details.icon)} aria-hidden="true"></span>
                {this.props.details.text}
            </li>
            </a>
        )
    }
}

export default MenuButton;
