import React from 'react';
import Header from './Header';
import PollutantsContainer from './measurements/PollutantsContainer';
import MockData from "../../mock_data/MockData";
import ErrorBoundary from "./error_boundaries/ErrorBoundary";

class App extends React.Component {
    render() {
        return (
            <div>
                <Header currentMeasurementPoint={MockData.getDefaultMeasurementStation()}/>
                <ErrorBoundary text ='Measurements are not available. Refresh the page later'>
                <PollutantsContainer/>
                </ErrorBoundary>
            </div>
        )
    };
}

export default App;
