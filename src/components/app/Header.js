import React from 'react';

const headerStyle = {
    paddingTop: '22px'
};
const title = ' Air Quality';

class Header extends React.Component {
    render() {
        return (
            <header className={"Header"} style={headerStyle}>
                <h5><b><i className="fa"/>{title} {this.props.currentMeasurementPoint.location}</b></h5>
            </header>
        );
    }
}

export default Header;
