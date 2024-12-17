import reactStringReplace from 'react-string-replace';
import TooltipText from '../tooltips/tooltipText';
import {abilities} from '../../data/abilities';
import {talents} from '../../data/talents';

export default function TableEntry({tableData, content, options = {}}){
    function setUpDescription(){
        if(!content.tags || content.tags.length  == 0) return content[tableData.description]
        let output = content[tableData.description];

        for(let i = 0; i < content.tags.length; i++){
            let description;
            let linkObject;
            switch(content.tags[i].type){
                case "Abilities":
                    description = abilities.find(ability => ability.Name == content.tags[i].name).Description;
                    linkObject = {text: "Abilities Table", link: "/Abilities"};
                    break;
                case "Talents":
                    description = talents.find(talent => talent.Name == content.tags[i].name).Description;
                    linkObject = {text: "Talent List", link: "/TalentList"};
                    break;
            }
            output = reactStringReplace(output, content.tags[i].name, (match, i) => (
                <TooltipText key={match + i} displayText={match} tooltipText={description} link={linkObject}></TooltipText>
            ));
        }

        return output
    }
    
    return (
        <div className="table-entry">
            <div className="table-label" style={options.nameBasis ? {flexBasis: options.nameBasis}:null}>{content.Name}</div>
            {tableData.column1 ? (
            <div className="column column-1">
                {tableData.column1.map((property, index) => {
                    return <p key={index}><strong>{property}: </strong>{content[property]}</p>
                })}
            </div>
            ):null}
            {tableData.column2 ?(
            <div className="column column-2" style={options.column2Basis ? {flexBasis: options.column2Basis}: null}>
                {tableData.column2.map((property, index) => {
                    return <p key={index}><strong>{property}: </strong>{content[property]}</p>
                })}
            </div>
            ): null}
            <div className="table-description">{tableData.description ? setUpDescription() : content.Description}</div>
        </div>
    )
}