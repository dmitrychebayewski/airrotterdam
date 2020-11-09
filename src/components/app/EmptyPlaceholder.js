import React from 'react';

const className = 'EmptyPlaceholder';

const imagePath = process.env.PUBLIC_URL + '/assets/';

class EmptyPlaceholder extends React.Component {

    height() {
        return {
            height: '100px'
        }
    }

    image() {
        return {
                'display': 'block',
                'margin-left': 'auto',
                'margin-right': 'auto',
                 'width': '200px'
        }
    }

    render() {
        return (
            <div className={className} style={this.height()}>
                <img src={`${imagePath}loading01.gif`} style={this.image()} alt="Empty, no measurements (yet)"></img>
            </div>
        );
    }
}

export default EmptyPlaceholder;
