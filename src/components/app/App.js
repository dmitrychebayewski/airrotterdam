import React from 'react';
import PollutantsContainer from './measurements/PollutantsContainer';
import ErrorBoundary from "./error_boundaries/ErrorBoundary";
import {withCookies} from 'react-cookie';

class App extends React.Component {
    render() {
        return (
            <div>
                <ErrorBoundary text='Measurements are not available. Refresh the page later'>
                    <PollutantsContainer cookies={this.props.cookies}/>
                </ErrorBoundary>
            </div>
        )
    };
}

export default withCookies(App);
