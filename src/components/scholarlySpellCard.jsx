import {useState, useEffect} from 'react';

export default function ScholarlySpellCard({spell, index, updateMethods}){

    useEffect(() =>{
        switch(spell.SpecialModifier){
            case "lock":
                updateMethods.updateEffect(index, "special", 1);
                break;
            default:
                break;
        }
    }, [])

    function edgeCaseElements(){
        switch(spell.SpecialModifier){
            case "lock":
                return (
                    <h4 className="card-element">Difficulty of Lock: <input 
                    type="number" 
                    min="0" 
                    value={spell.special} 
                    onChange={ e => updateMethods.updateEffect(index, "special", e.target.value)}/></h4>
                )
        }
    }
    
    return (
        <div className="spell-card">
            <h4 className="spell-name card-element">{spell.Name}</h4>
            {updateMethods ? (
                <button className="remove-effect" onClick={() => updateMethods.removeEffect(index)}>x</button>
            ):null}
            {spell.nodes ? (
                <h4 className="card-element">Number of Nodes: <input className="node-num" type="number" value={spell.nodes} min="1" onChange={e => {updateMethods.updateEffect(index, "nodes", e.target.value)}}/></h4>
            ):null}
            <h4 className="card-element">Tier: {spell.Tier}</h4>
            <h4 className="card-element">Duration: {spell.Duration}</h4>
            <h4 className="card-element">Difficulty Modifier: {spell.Modifier}</h4>
            {spell.SpecialModifier !== "" ? edgeCaseElements():null}
            <div className="card-line card-element"></div>
            <h4 className="card-element">{spell.Description}</h4>
        </div>
    )
}