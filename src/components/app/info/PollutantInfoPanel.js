import React from 'react';
import ComponentsInfo from '../../../metadata/ComponentsInfo';

const className = 'PollutantInfoPanel w3-container';

class PollutantInfoPanel extends React.Component {

    getPollutantDescription(formula) {
        const serializedObject = ComponentsInfo.get(formula).description.en;
        const document = JSON.parse(serializedObject);
        let outerNode = document.document.nodes[0];
        if(outerNode) {
            let innerNode = outerNode.nodes[0];
            if(innerNode) {
                return innerNode.text;
            }
        }
    }

    render() {
        return (
            <div className={className}>
                {this.getPollutantDescription(this.props.currentFormula)}
            </div>
        );
    }
}

export default PollutantInfoPanel;
