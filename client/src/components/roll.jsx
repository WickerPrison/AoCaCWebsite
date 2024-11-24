import './roll.css';
import { useEffect, useState, useRef } from 'react';
import { ResultData, RollData, rollDice, upgradeRoll } from '../js/rollDice';
import ResultDie from './resultDie';
import RollerResult from './rollerResult';


export default function Roll({roll, update, fixedCard=false}){
    let [results, setResults] = useState(new ResultData());

    let styles;
    if(fixedCard){
        styles={
            fixedCard:{
                position: "fixed",
                left: "5%",
                top: "12%",
                zIndex: 5,
                boxShadow: "0 0 10px 5px black",
                width: "90%",
                maxWidth: "90%"
            }
        }
    }
    else{
        styles={fixedCard:{}};
    }

    function updateRoll(dieType, value){
        let temp = {...roll};
        temp[dieType] = value;
        update.updateRoll(temp);
    }

    function performRoll(){
        setResults(rollDice(roll));
    }

    function applyUpgrades(){
        let temp = {...roll};
        temp = upgradeRoll(temp);
        update.updateRoll(temp);
    }

    function clearRoll(){
        let temp = {...roll};
        temp = new RollData();
        update.updateRoll(temp);
    }

    return (
        <div id="dice-roller" className="box roll-box" style={styles.fixedCard}>
            <button className="remove-button" onClick={e =>update.removeRoll(roll.index)}>X</button>
            <div className="box-header">
                <input className="roll-title" type="text" value={roll.name} onChange={e => update.updateName(roll.index, e.target.value)}></input>
            </div>  
            <div className="input-box">
                <div className="input-column">
                    <h4>Proficiency: <input className="proficiency" type="number" value={roll.proficiency} min="0" onChange={e => updateRoll("proficiency", e.target.value)}/></h4>
                    <h4>Ability: <input className="ability" type="number" value={roll.ability} min="0" onChange={e => updateRoll("ability", e.target.value)}/></h4>
                    <h4>Boost: <input className="boost" type="number" value={roll.boost} min="0" onChange={e => updateRoll("boost", e.target.value)}/></h4>
                </div>
                <div className="input-column">
                    <h4>Challenge: <input className="challenge" type="number" value={roll.challenge} min="0" onChange={e => updateRoll("challenge", e.target.value)}/></h4>
                    <h4>Difficulty: <input className="difficulty" type="number" value={roll.difficulty} min="0" onChange={e => updateRoll("difficulty", e.target.value)}/></h4>
                    <h4>Penalty: <input className="penalty" type="number" value={roll.penalty} min="0" onChange={e => updateRoll("penalty", e.target.value)}/></h4>
                </div>
                <div className="input-column">
                    <h4>Upgrade Difficulty: <input className="upgrade-diff" type="number" value={roll.upgradeDifficulty} min="0" onChange={e => updateRoll("upgradeDifficulty", e.target.value)}/></h4>
                    <h4>Upgrade Ability: <input className="upgrade-abil" type="number" value={roll.upgradeAbility} min="0" onChange={e => updateRoll("upgradeAbility", e.target.value)}/></h4>
                    <h4>Automatic Successes: <input className="auto-success" type="number" value={roll.autoSuccess} onChange={e => updateRoll("autoSuccess", e.target.value)}/></h4>
                    <h4>Automatic Advantage: <input className="auto-advantage" type="number" value={roll.autoAdvantage} onChange={e => updateRoll("autoAdvantage", e.target.value)}/></h4>
                </div>
            </div>
            <div className="button-box">
                <button className="dice-button can-point clear" onClick={clearRoll}>Clear</button>
                <button className="dice-button apply-upgrades" onClick={applyUpgrades}>Apply Upgrades</button>
                <button className="dice-button roll-dice" onClick={performRoll}>Roll Dice</button>
            </div>
            <h4 className="card-banner">Results</h4>
            <div className="results-holder">
                {results.resultDice.map((output, index) => {
                    return <ResultDie squareDie={output.squareDie} dieName={output.dieName} key={index}/>
                })}
            </div>
            <h4 className="card-banner">Totals</h4>
            <div className="output-box">
                <RollerResult result={results.conquests} label="Conquests: "/>
                <RollerResult result={results.calamities} label="Calamities: "/>
                <RollerResult result={results.successes} label="Successes: "/>
                <RollerResult result={results.advantage} label="Advantage: "/>
            </div>
        </div>
    )
}