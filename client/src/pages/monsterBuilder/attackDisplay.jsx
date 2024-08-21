import './monsterBuilder.css';
import './attackDisplay.css';
import { useEffect, useState, useRef } from 'react';
import OfficialIcon from '../../components/officialIcon';

export default function AttackDisplay({attack, addedAttacks, setAddedAttacks, showToggle=true, editButton=false, setEdit}){

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

    function toggleEditButton(evt){
        evt.preventDefault();
        setEdit(attack);
    }

    return (
        <div className="attack-holder">
            {showToggle? <button className={`checkbox ${isAdded() ? "show-check" : ""}`} onClick={evt => toggleAttack(evt)}>{"✔"}</button>: null}
            <div className="attack-name">
                {attack.official 
                ? <div><OfficialIcon/>{attack.name}</div>
                :<div>{attack.name}</div>}
            </div>
            <div className="attack-stats-1">
                <div>Skill: {attack.skill}</div>
                <div>Damage: {attack.damage} {attack.attribute != "None" ? `+ ${attack.attribute}`:null}</div>
                {attack.specialAttribute != "None" ? <div>Spec. Attr.: {attack.specialAttribute}</div>: null}
            </div>
            <div className="attack-stats-2">
                <div>Range: {attack.range}</div>
                <div>Crit: {attack.crit}</div>
            </div>
            {editButton? <button className="edit-button small-button" onClick={evt => toggleEditButton(evt)}>Edit</button>:null}
            <div className="properties">{attack.properties}</div>
        </div>
    )
}