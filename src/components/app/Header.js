import React from 'react';

const margin = {
    margin: '15px'
};
const title = 'Air Quality';

class Header extends React.Component {
    render() {
        return (
            <h5><b><i className="fa" style={margin}/>{title}</b></h5>
        );
    }
}

export default Header;
