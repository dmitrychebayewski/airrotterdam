import React from 'react';

const className = 'ErrorPlaceholder';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false,
            errorInfo: null,
            error: null
        };
    }

    componentDidCatch(error, errorInfo) {
        // You can also log the error to an error reporting service
        this.setState({
            hasError: true,
            errorInfo: errorInfo,
            error: error
        })
    }

    render() {
        if (this.state.hasError) {
            return <div className={className}>{this.props.text}
            </div>
        }
        return this.props.children;
    }
}

export default ErrorBoundary