import React from 'react';

const buttonClass = 'ModeSwitchButton w3-button w3-dark-grey';

class ToggleModeButton extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {};
    }

    render() {
        return (
            <button className={buttonClass} onClick={this.props.onClick}>{this.props.buttonText}
            </button>
        );
    }
}

export default ToggleModeButton;

