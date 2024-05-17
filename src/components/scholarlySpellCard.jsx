import {useState} from 'react';

export default function ScholarlySpellCard({spell, index, updateMethods}){

    function edgeCaseElements(){
        switch(spell.SpecialModifier){
            case "lock":
                return (
                    <h4 className="card-element">Difficulty of Lock: 
                        <input type="number" min="0" value={lockDifficulty} />
                    </h4>
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
            {/* {spell.SpecialModifier !== "" ? edgeCaseElements():null} */}
            <div className="card-line card-element"></div>
            <h4 className="card-element">{spell.Description}</h4>
        </div>
    )
}