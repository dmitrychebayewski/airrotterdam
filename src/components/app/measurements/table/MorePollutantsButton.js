import React from 'react';

const buttonClass = 'Button w3-button w3-dark-grey';
const arrowClass = 'fa fa-arrow-right';

class MorePollutantsButton extends React.Component {

    render() {
        return (
            <button className={buttonClass} onClick={this.props.onClick}>{this.props.buttonText} <i
                className={arrowClass}/>
            </button>
        );
    }
}

export default MorePollutantsButton;
