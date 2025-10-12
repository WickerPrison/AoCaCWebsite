import './monsterPartDisplay.css';
import {useState} from 'react';
import MonsterAttack from "./monsterAttack";


export default function MonsterPart({part, monster, monsterData, updateMethods}){

    function setResistances(){
        let outputString = "";
        if(part.damageImmunities){
            outputString += "<strong>Immunities:</strong> " + part.damageImmunities + " ";
        }
        if(part.resistances){
            outputString += "<strong>Resistances:</strong> " + part.resistances + " ";
        }
        if(part.weaknesses){
            outputString += "<strong>Weaknesses:</strong> " + part.weaknesses + " ";
        }
        return outputString;
    }

    return (
        <div className="monster-part-display">
            <div className="part-name">{part.name}</div>
            <div className="stat-block-section">
                <div className="stat-numbers">
                    <div className="labels">
                        <div>HP: </div>
                        <div>DR:</div>
                        <div>Def (M|R):</div>
                    </div>
                    <div className="monster-column1">
                        {false ? 
                        (<div className="hp">
                            <input className="stat-field" type="number" min={0} value={monsterData.hp} onChange={(e) => updateMonsterStat("hp", e.target.value)}/>
                            <div className="stat-max">/{monster.hp}</div>
                        </div>)
                        :<div className="hp">{part.hp}</div>}
                        <div className="damage-reduction">{part.damageReduction}</div>
                        <div className="defense">{part.meleeDefense}|{part.rangedDefense}</div>
                    </div>
                </div>
                <div className="stat-text">
                    <div className="immunities" dangerouslySetInnerHTML={{__html: setResistances()}}></div>

                    {part.specialFeatures 
                    ? (<div className="talents-abilities"><strong>Special Features: </strong>{part.specialFeatures}</div>)
                    :(null)}
                </div>
            </div>
            <div className="part-attacks">
                {part.attacks.map((attack, index) => {
                    return <MonsterAttack key={index} attack={attack} monster={monster} setRoll={updateMethods.setRoll} setShowRoll={updateMethods.setShowRoll} monsterData={monsterData}/>
                })}
            </div>
        </div>
    )
}