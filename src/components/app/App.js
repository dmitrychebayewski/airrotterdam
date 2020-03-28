import React from 'react';
import Header from './Header';
import PollutantsContainer from './measurements/PollutantsContainer';
import ErrorBoundary from "./error_boundaries/ErrorBoundary";
import {ROTTERDAM_ZUIDPLEIN} from "../../metadata/Geolocations";

class App extends React.Component {
    render() {
        return (
            <div>
                <Header currentMeasurementPoint={ROTTERDAM_ZUIDPLEIN.where}/>
                <ErrorBoundary text='Measurements are not available. Refresh the page later'>
                    <PollutantsContainer/>
                </ErrorBoundary>
            </div>
        )
    };
}

export default App;
