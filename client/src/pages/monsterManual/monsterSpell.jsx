import {useState, useEffect} from 'react';
import { RollData} from '../../js/rollDice';
import {spellEffects} from "../../data/scholarlySpellEffects";

export default function MonsterSpell({spellName, spellData, setSpellData}){
    let [nodes, setNodes] = useState(0);
    const spellTiers = ["metamagic", "initiate", "adept", "magister", "arcanist"]
    const spell =(() => {
        for(let i = 0; i < spellTiers.length; i++){
            let findSpell = spellEffects[spellTiers[i]].find(spell => {return spell.Name == spellName});
            if(findSpell != undefined){
                return findSpell;
            }
        }
    })()

    function updateNodes(value){
        setNodes(value);
        spell.nodes = value;
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

    return (
        <div className="spell-effect">
            <input className="stat-field" type="number" min={0} value={nodes} onChange={(e) => updateNodes(e.target.value)}/>
            <div className="spell-effect-name"><strong>{spell.Name}</strong></div>
            <div className="monster-line"></div>
            <div className="spell-stats"><strong>{"Tier:              "}</strong>{spell.Tier}</div>
            <div className="spell-stats"><strong>Duration: </strong>{spell.Duration}</div>
            <div className="spell-modifier"><strong>Modifier: </strong>{spell.Modifier}</div>
            <div className="spell-description"><strong>Description: </strong>{spell.Description}</div>
        </div>
    )
}