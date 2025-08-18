import GreyOut from '../../components/greyOut';
import './monsterBuilder.css';
import './monsterPart.css';
import { useEffect, useState, useRef } from 'react';
import getUrl from '../../utils/getUrl';
import TooltipText from '../../components/tooltips/tooltipText';
import FlexibleTextarea from '../../components/flexibleTextarea';
import ResWeakImm from './resWeakImm';
import AddAttacks from './addAttacks';
import AttackDisplay from './attackDisplay';

export default function MonsterPart({parts, setParts, thisPart}){

    function updatePart(field, value){
        let temp = parts.slice();
        let index = temp.findIndex(part => part.id == thisPart.id);
        temp[index][field] = value;
        setParts(temp);
    }

    return(
        <div className="monster-part">
            <div className="part-stats">
                <div className="part-name">
                    <label>Name: </label>
                    <input className="full-width-input" type="text" value={thisPart.name} onChange={e => updatePart("name", e.target.value)}></input>
                </div>
                <div className="stat">
                    <label>HP: </label>
                    <input type="number" value={thisPart.hp} onChange={e => updatePart("hp", e.target.value)} min="0"></input>
                </div>
                <div className="stat">
                    <label>DR: </label>
                    <input type="number" value={thisPart.dr} onChange={e => updatePart("dr", e.target.value)} min="0"></input>
                </div>
                <div className="stat">
                    <label>Melee Def:  </label>
                    <input type="number" value={thisPart.mDef} onChange={e => updatePart("mDef", e.target.value)} min="0"></input>
                </div>
                <div className="stat">
                    <label>Ranged Def:  </label>
                    <input type="number" value={thisPart.rDef} onChange={e => updatePart("rDef", e.target.value)} min="0"></input>
                </div>
                <label className='special-features-label'>Special Features: </label>
                <FlexibleTextarea classNames={"full-width-input"} input={thisPart.specialFeatures} setOutput={output => updatePart("specialFeatures", output)}/>
            </div>
            <ResWeakImm 
                conditionImmunities={thisPart.conditionImmunities} 
                setConditionImmunities={output => updatePart("conditionImmunities", output)} 
                damageImmunities={thisPart.damageImmunities} 
                setDamageImmunities={output => updatePart("damageImmunities", output)} 
                customImmunities={thisPart.customImmunities} 
                setCustomImmunities={output => updatePart("customImmunities", output)} 
                weakResist={thisPart.weaknessResistances} 
                setWeakResist={output => updatePart("weaknessResistances", output)}
            />
            {thisPart.attacks.map((attack, index) => {
                return(
                    <div key={attack.name}>
                        <AttackDisplay attack={attack} addedAttacks={thisPart.attacks} setAddedAttacks={output => updatePart("attacks", output)} showToggle={false}/>
                        {index < thisPart.attacks.length - 1 ? <div className="line"></div>:null }
                    </div>
                )
            })}
            <AddAttacks attacks={thisPart.attacks} setAttacks={output => updatePart("attacks", output)}/>
            
        </div>
    )
}