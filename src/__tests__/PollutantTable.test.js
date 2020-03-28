import React from 'react';
import {render} from '@testing-library/react';
import OnTheSpotMonitorTable from "../components/app/measurements/on_the_spot/OnTheSpotMonitorTable";
import MockData from "../mock_data/MockData";

test('Pollutant Table should be present', () => {
    const {getByText} = render(<OnTheSpotMonitorTable
        pollutants={MockData.getDefaultPollutants()}
        pollutantsToShow={3}
        dateOfMeasurement={new Date()}
        formulaHandler={() => {
        }}
        measurements={MockData.getInitMeasurements()}
    />);
    expect(getByText(/FN/)).toBeInTheDocument();
    expect(getByText(/Next Pollutants/)).toBeInTheDocument();
});
