import {useState, useEffect} from 'react';

export default function ScholarlySpellCard({spell, index, updateMethods}){

    useEffect(() =>{
        if(!updateMethods) return;
        switch(spell.SpecialModifier){
            case "lock":
                updateMethods.updateEffect(index, "special", 1);
                break;
            case "languages":
                updateMethods.updateEffect(index, "special", 2);
                break;
            default:
                break;
        }
    }, [])

    function edgeCaseElements(){
        if(!updateMethods) return;
        switch(spell.SpecialModifier){
            case "lock":
                return (
                    <h4 className="card-element">Difficulty of Lock: <input 
                    type="number" 
                    min="0" 
                    value={spell.special} 
                    onChange={ e => updateMethods.updateEffect(index, "special", e.target.value)}/></h4>
                )
            case "languages":
                return (
                    <>
                    <label className="card-element">Language Rarity: </label>
                    <select value={spell.special} onChange={ e => updateMethods.updateEffect(index, "special", e.target.value)}>  
                        <option value={2}>Common</option>
                        <option value={4}>Rare</option>
                    </select>
                    </>
                )
            case "enemyType":
                return (
                    <>
                    <label className="card-element">Enemy Type: </label>
                    <select value={spell.special} onChange={ e => updateMethods.updateEffect(index, "special", e.target.value)}>  
                        <option value={0}>Minion</option>
                        <option value={2}>Rival</option>
                        <option value={4}>Nemesis</option>
                    </select>
                    </>
                )
            case "unwillingTarget":
                return (
                    <h4 className="card-element">Unwilling Targets: <input 
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