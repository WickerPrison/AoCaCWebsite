import { useEffect, useState } from 'react';
import { ResultData, RollData, rollDice, upgradeRoll } from '../js/rollDice';
import ResultDie from './resultDie';

export default function Roll({roll, update}){
    let [proficiency, setProficiency] = useState(0);
    let [ability, setAbility] = useState(0);
    let [boost, setBoost] = useState(0);
    let [challenge, setChallenge] = useState(0);
    let [difficulty, setDifficulty] = useState(0);
    let [penalty, setPenalty] = useState(0);
    let [upgradeAbility, setUpgradeAbility] = useState(0);
    let [upgradeDifficulty, setUpgradeDifficulty] = useState(0);
    let [autoSuccess, setAutoSuccess] = useState(0);

    let [results, setResults] = useState(new ResultData());

    function getRollData(){
        let rollData = new RollData();
        rollData.proficiency = proficiency;
        rollData.ability = ability;
        rollData.boost = boost;
        rollData.challenge = challenge;
        rollData.difficulty = difficulty;
        rollData.penalty = penalty;
        rollData.upgradeAbility = upgradeAbility;
        rollData.upgradeDifficulty = upgradeDifficulty;
        rollData.autoSuccess = autoSuccess;
        return rollData;
    }

    useEffect(() => {
        update.updateRolls(roll.id, getRollData());
    },[proficiency, ability, boost, challenge, difficulty, penalty, upgradeAbility, upgradeDifficulty, autoSuccess])

    function performRoll(){
        let rollData = getRollData();
        setResults(rollDice(rollData));
    }

    function applyUpgrades(){
        let newRoll = getRollData();
        newRoll = upgradeRoll(newRoll);
        update.updateRolls(roll.id, newRoll);
    }

    return (
        <div className="box roll-box">
            <button className="remove-button" onClick={e =>update.removeRoll(roll.id)}>X</button>
            <div className="box-header">
                <input className="roll-title" type="text" value={roll.name} onChange={e => update.updateName(roll.id, e.target.value)}></input>
            </div>  
            <div className="input-box">
                <div className="input-column">
                    <h4>Proficiency: <input className="proficiency" type="number" value={roll.rollData.proficiency} min="0" onChange={e => setProficiency(e.target.value)}/></h4>
                    <h4>Ability: <input className="ability" type="number" value={roll.rollData.ability} min="0" onChange={e => setAbility(e.target.value)}/></h4>
                    <h4>Boost: <input className="boost" type="number" value={roll.rollData.boost} min="0" onChange={e => setBoost(e.target.value)}/></h4>
                </div>
                <div className="input-column">
                    <h4>Challenge: <input className="challenge" type="number" value={roll.rollData.challenge} min="0" onChange={e => setChallenge(e.target.value)}/></h4>
                    <h4>Difficulty: <input className="difficulty" type="number" value={roll.rollData.difficulty} min="0" onChange={e => setDifficulty(e.target.value)}/></h4>
                    <h4>Penalty: <input className="penalty" type="number" value={roll.rollData.penalty} min="0" onChange={e => setPenalty(e.target.value)}/></h4>
                </div>
                <div className="input-column">
                    <h4>Upgrade Difficulty: <input className="upgrade-diff" type="number" value={roll.rollData.upgradeDifficulty} min="0" onChange={e => setUpgradeDifficulty(e.target.value)}/></h4>
                    <h4>Upgrade Ability: <input className="upgrade-abil" type="number" value={roll.rollData.upgradeAbility} min="0" onChange={e => setUpgradeAbility(e.target.value)}/></h4>
                    <h4>Automatic Successes: <input className="auto-success" type="number" value={roll.rollData.autoSuccess} onChange={e => setAutoSuccess(e.target.value)}/></h4>
                </div>
            </div>
            <div className="button-box">
                <button className="dice-button can-point clear">Clear</button>
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
                <div className = "output-element">
                    <h4>Conquests: </h4>
                    <div className="dice-holder">
                        <img src="/SVG/d12.svg"/>
                        <h4 className="conquests">{results.conquests}</h4>
                    </div>
                </div>
                <div className = "output-element">
                    <h4>Calamities: </h4>
                    <div className="dice-holder">
                        <img src="/SVG/d12.svg"/>
                        <h4 className="calamities">{results.calamities}</h4>
                    </div>
                </div>
                <div className = "output-element">
                    <h4>Successes: </h4>
                    <div className="dice-holder">
                        <img src="/SVG/d12.svg"/>
                        <h4 className="successes">{results.successes}</h4>
                    </div>
                </div>
                <div className ="output-element">
                    <h4>Advantage: </h4>
                    <div className="dice-holder">
                        <img src="/SVG/d12.svg"/>
                        <h4 className="advantage">{results.advantage}</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}