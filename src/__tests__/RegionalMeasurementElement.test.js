import React from 'react';
import {render} from '@testing-library/react';
import RegionalMeasurementElement from "../components/app/regional/RegionalMeasurementElement";

test('Regional measurement element should be correctly rendered', () => {
    const {getByText} = render(<RegionalMeasurementElement
        dateOfMeasurement={new Date()}
        currentFormula='FN'
        name='Rotterdam'
        region='RD'
        value={0.8}/>);
    expect(getByText(/Rotterdam/)).toBeInTheDocument();
});
