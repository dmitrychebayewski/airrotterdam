import React from 'react';

const buttonClass = 'ModeSwitchButton w3-button w3-dark-grey';

class ModeSwitchButton extends React.Component {

    render() {
        return (
            <button className={buttonClass} onClick={this.props.onClick}>{this.props.buttonText}
            </button>
        );
    }
}

export default ModeSwitchButton;

