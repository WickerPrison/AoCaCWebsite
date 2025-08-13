import {useState, useEffect} from 'react';
import { RollData} from '../../js/rollDice';
import {spellEffects} from "../../data/scholarlySpellEffects";

export default function MonsterSpell({spellName, spellData, setSpellData}){
    let [nodes, setNodes] = useState(0);
    let [special, setSpecial] = useState(0);
    let [showFull, setShowFull] = useState(false);
    const spellTiers = ["metamagic", "initiate", "adept", "magister", "arcanist"]
    const spell =(() => {
        for(let i = 0; i < spellTiers.length; i++){
            let findSpell = spellEffects[spellTiers[i]].find(spell => {return spell.Name == spellName});
            if(findSpell != undefined){
                return findSpell;
            }
        }
    })()

    useEffect(() => {
        updateSpecial(getDefaultSpecial(spell));
    },[])

    function updateNodes(value){
        setNodes(value);
        spell.nodes = value;
        updateSpellEffects();
    }

    function updateSpecial(value){
        setSpecial(value);
        spell.special = value;
        updateSpellEffects();
    }

    function updateSpellEffects(){
        let index = spellData.currentEffects.findIndex(effect => {
            return effect.Name == spellName;
        })

        let temp = spellData.currentEffects.slice();
        if(index === -1){
            if(spell.nodes > 0){
                temp.push(spell);
            }
        }
        else{
            if(spell.nodes > 0){
                temp[index] = spell
            }
            else {
                temp.splice(index, 1);
            }
        }
        let tempData = {...spellData};
        tempData.currentEffects = temp;
        setSpellData(tempData);
    }

    function toggleShowFull(){
        setShowFull(!showFull);
    }

    function getDefaultSpecial(spellEffect){
        switch(spellEffect.SpecialModifier){
            case "":
                return null;
            case "lock":
                return 0;
            case "languages":
                return 2;
            case "enemyType":
                return 0;
            case "unwillingTarget":
                return 0;
            default:
                return null
        }
    }

    function edgeCaseElements(){
        switch(spell.SpecialModifier){
            case "lock":
                return (
                    <div className="effect-edge-case">Difficulty of Lock: <input 
                    type="number" 
                    min="0" 
                    value={special} 
                    onChange={ e => updateSpecial(e.target.value)}/></div>
                )
            case "languages":
                return (
                    <div className="effect-edge-case">
                        <label>Language Rarity: </label>
                        <select value={special} onChange={ e => updateSpecial(e.target.value)}>  
                            <option value={2}>Common</option>
                            <option value={4}>Rare</option>
                        </select>
                    </div>
                )
            case "enemyType":
                return (
                    <div className="effect-edge-case">
                        <label >Enemy Type: </label>
                        <select value={special} onChange={ e => updateSpecial(e.target.value)}>  
                            <option value={0}>Minion</option>
                            <option value={2}>Rival</option>
                            <option value={4}>Nemesis</option>
                        </select>
                    </div>
                )
            case "unwillingTarget":
                return (
                    <div className="effect-edge-case">Unwilling Targets: <input 
                    type="number" 
                    min="0" 
                    value={special} 
                    onChange={ e => updateSpecial(e.target.value)}/></div>
                )
        }
    }

    return (
        <div className="spell-effect">
            <input className="stat-field" type="number" min={0} value={nodes} onChange={(e) => updateNodes(e.target.value)}/>
            <div className="spell-effect-name clickable-text" onClick={toggleShowFull}><strong>{spell.Name}</strong></div>
            {spellData.SpecialModifier == "" ? null : edgeCaseElements()}
            <div className="monster-line"></div>
            {showFull ? 
            <div className='spell-effect'>
                <div className="spell-stats"><strong>{"Tier:              "}</strong>{spell.Tier}</div>
                <div className="spell-stats"><strong>Duration: </strong>{spell.Duration}</div>
                <div className="spell-modifier"><strong>Modifier: </strong>{spell.Modifier}</div>
                <div className="spell-description"><strong>Description: </strong>{spell.Description}</div>
            </div>
            :null}

        </div>
    )
}