import React from 'react';
import ApplicationMode, {TOP_POLLUTANTS} from "../ApplicationMode";

const buttonClass = 'ModeSwitchButton w3-button w3-dark-grey';
const arrowClass = 'fa fa-exclamation-triangle';
const eyeClass = 'fa fa-eye';

class ToggleModeButton extends React.Component {
    render() {
        let arrow;
        const dispatch = ApplicationMode.dispatch(this.props.applicationMode);
        if (dispatch === TOP_POLLUTANTS)
            arrow = arrowClass; else arrow = eyeClass;
        return (
            <button className={buttonClass} onClick={this.props.onClick}><i
                className={arrow}/> {dispatch.title}
            </button>
        );
    }
}

export default ToggleModeButton;

