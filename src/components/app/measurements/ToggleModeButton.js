import React from 'react';

const buttonClass = 'ModeSwitchButton w3-button w3-dark-grey';
const buttonTextPrefix = 'Switch to ';

class ToggleModeButton extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {};
    }

    render() {
        return (
            <button className={buttonClass} onClick={this.props.onClick}>{buttonTextPrefix + this.props.buttonText}
            </button>
        );
    }
}

export default ToggleModeButton;

