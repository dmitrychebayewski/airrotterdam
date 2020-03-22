import React from 'react';

const className = 'EmptyPlaceholder';

class EmptyPlaceholder extends React.Component {

    height() {
        return {
            height: '100px'
        }
    }

    render() {
        return (
            <div className={className} style={this.height()}>Empty, no measurements (yet)
            </div>
        );
    }
}

export default EmptyPlaceholder;
