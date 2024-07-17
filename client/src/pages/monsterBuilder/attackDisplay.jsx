import './monsterBuilder.css';
import './attackDisplay.css';
import { useEffect, useState, useRef } from 'react';

export default function AttackDisplay({attack, addedAttacks, setAddedAttacks, showToggle=true}){

    function isAdded(){
        return addedAttacks.findIndex(x => x.name == attack.name) >= 0
    }

    function toggleAttack(evt){
        evt.preventDefault();
        let index = addedAttacks.findIndex(x => x.name == attack.name);
        let temp = addedAttacks.slice();
        if(index >= 0){
            temp.splice(index, 1);
        }
        else{
            temp.push(attack);
        }
        setAddedAttacks(temp);
    }

    return (
        <div className="attack-holder">
            {showToggle? <button className={`checkbox ${isAdded() ? "show-check" : ""}`} onClick={evt => toggleAttack(evt)}>{"✔"}</button>: null}
            <div className="attack-name">
                <div>{attack.name}</div>
            </div>
            <div className="attack-stats-1">
                <div>Skill: {attack.skill}</div>
                <div>Damage: {attack.damage} {attack.attribute != "None" ? `+ ${attack.attribute}`:null}</div>
                {attack.spcialAttribute != null ? <div>Spec. Attr.: {attack.spcialAttribute}</div>: null}
            </div>
            <div className="attack-stats-2">
                <div>Range: {attack.range}</div>
                <div>Crit: {attack.crit}</div>
            </div>
            <div>{attack.properties}</div>
        </div>
    )
}