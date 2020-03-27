import React from 'react';
import MorePollutantsButton from './MorePollutantsButton';
import EmptyPlaceholder from '../../EmptyPlaceholder';
import ComponentsInfo from "../../../../metadata/ComponentsInfo";

const tableW3Classes = 'w3-table w3-striped w3-white';
const moreRows = 3;
const buttonText = 'Next Pollutants';
const className = 'PollutantTable';


class PollutantTable extends React.Component {

    constructor(props) {
        super(props);
        // This binding is necessary to make `this` work in the callback
        this.handleMorePollutantsClick = this.handleMorePollutantsClick.bind(this);
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

    handleMorePollutantsClick() {
        this.setState({
            measurements: this.props.measurements,
            pollutantsToShow: this.getRowsToShow(),
            formulaHandler: this.props.formulaHandler,
            dateOfMeasurement: this.props.dateOfMeasurement
        })
    }

    style(value) {
        return {
            width: `${value}%`
        }
    }

    w3Colour(value) {
        return ['w3-light-grey', 'w3-pale-blue', 'w3-pale-yellow', 'w3-yellow', 'w3-pale-red', 'w3-pale-yellow', 'w3-yellow', 'w3-pale-red', 'w3-pale-yellow', 'w3-yellow', 'w3-pale-red', 'w3-purple'][value];
    }

    renderPollutantRows(measurements) {
        return measurements.map((entry) => {
            const value = entry.value;
            const pollutantName = entry.formula;
            const rating = ComponentsInfo.rating(pollutantName, value);
            const scaleFactor = ComponentsInfo.limit(pollutantName) / 100;
            return <tr key={entry.formula}>
                <td width='5%'><i className="fa fa-bell w3-text-red w3-large"/></td>
                <td width='5%'><i>{pollutantName}</i></td>
                <td onClick={this.getFormulaHandler()}
                    date={this.props.dateOfMeasurement}
                    formula={entry.formula}
                    className={entry.formula}>
                    <div formula={entry.formula} className={"w3-container w3-center " + this.w3Colour(rating)}
                         style={this.style(value / scaleFactor)}>{value}</div>
                </td>

            </tr>
        });
    }

    render() {
        if (this.getMeasurements().length) {
            const upper = this.getNumberOfPollutantRowsToShow();
            const theSlice = this.getMeasurements().slice(upper - 3, upper);
            return (
                <React.Fragment>
                    <table className={className + ' ' + tableW3Classes}>
                        <tbody>
                        {this.renderPollutantRows(theSlice)}
                        </tbody>
                    </table>
                    <MorePollutantsButton onClick={this.handleMorePollutantsClick} buttonText={buttonText}/>
                </React.Fragment>
            );
        }
        return (<React.Fragment>
            <EmptyPlaceholder/>
        </React.Fragment>);
    }
}

export default PollutantTable;
