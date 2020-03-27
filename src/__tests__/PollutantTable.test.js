import React from 'react';
import {render} from '@testing-library/react';
import PollutantTable from "../components/app/measurements/table/PollutantTable";
import MockData from "../mock_data/MockData";

test('Pollutant Table should be present', () => {
    const {getByText} = render(<PollutantTable
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
