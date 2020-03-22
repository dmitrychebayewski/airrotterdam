import React from 'react';
import MorePollutantsButton from './MorePollutantsButton';
import EmptyPlaceholder from '../../EmptyPlaceholder';

const tableW3Classes = 'w3-table w3-striped w3-white';
const moreRows = 3;
const buttonText = 'Next Pollutants';
const className = 'PollutantTable';

class PollutantTable extends React.Component {

    constructor(props) {
        super(props);
        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
    }

    getNumberOfPollutantRowsToShow() {
        return this.state ? this.state.pollutantsToShow : this.props.pollutantsToShow;
    }

    getMeasurements() {
        return this.props.measurements;
    }

    getFormulaHandler() {
        return this.state ? this.state.formulaHandler : this.props.formulaHandler;
    }

    getRowsToShow() {
        return this.getNumberOfPollutantRowsToShow() >= this.getMeasurements().length ? moreRows : this.getNumberOfPollutantRowsToShow() + moreRows;
    }

    handleClick() {
        this.setState({
            measurements: this.props.measurements,
            pollutantsToShow: this.getRowsToShow(),
            formulaHandler: this.props.formulaHandler,
            dateOfMeasurement: this.props.dateOfMeasurement
        })
    }

    renderPollutantRows(measurements) {
        return measurements.map((entry) => {
            const value = entry.value;
            const pollutantName = entry.formula;
            return <tr key={entry.formula}>
                <td><i className="fa fa-bell w3-text-red w3-large"/></td>
                <td onClick={this.getFormulaHandler()}
                    date = {this.props.dateOfMeasurement}
                    className={entry.formula}>{pollutantName}
                </td>
                <td><i>{value}</i></td>
            </tr>
        });
    }

    render() {
        if (this.getMeasurements().length) {
            const upper = this.getNumberOfPollutantRowsToShow();
            const theSlice = this.getMeasurements().slice(upper-3, upper);
            return (
                <React.Fragment>
                    <table className={className + ' ' + tableW3Classes}>
                        <tbody>
                        {this.renderPollutantRows(theSlice)}
                        </tbody>
                    </table>
                    <MorePollutantsButton onClick={this.handleClick} buttonText={buttonText}/>
                </React.Fragment>
            );
        }
        return (<React.Fragment>
            <EmptyPlaceholder/>
        </React.Fragment>);
    }
}

export default PollutantTable;
