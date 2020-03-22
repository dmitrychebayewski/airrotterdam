import React from 'react';
import Header from './Header';
import PollutantsContainer from './measurements/PollutantsContainer';
import MockData from "../../mock_data/MockData";

class App extends React.Component {
    render() {
        return (
            <div>
                <Header currentMeasurementPoint={MockData.getDefaultMeasurementStation()}/>
                <PollutantsContainer/>
            </div>
        )
    };
}

export default App;
