import { RollData } from "../../js/rollDice";

export default function CustomModsBox({spellData, setSpellData}){
    function updateCustomMods(dieType, value){
        let temp = {...spellData};
        temp.customMods[dieType] = value;
        setSpellData(temp);
    }

    function clearCustomMods(){
        let temp = {...spellData};
        temp.customMods = new RollData();
        setSpellData(temp);
    }
    
    return (
        <div className="box" id="custom-modifiers">
        <h4 className="box-header">Custom Modifiers</h4>
        <div id="pool-box">
            <div className="pool-column">
                <h4>Proficiency: <input type="number" value={spellData.customMods.proficiency} min="0" onChange={e => updateCustomMods("proficiency", e.target.value)}/></h4>
                <h4>Ability: <input type="number" value={spellData.customMods.ability} min="0" onChange={e => updateCustomMods("ability", e.target.value)}/></h4>
                <h4>Boost: <input type="number" value={spellData.customMods.boost} min="0" onChange={e => updateCustomMods("boost", e.target.value)}/></h4>
            </div>
            <div className="pool-column">
                <h4>Challenge: <input type="number" value={spellData.customMods.challenge} min="0" onChange={e => updateCustomMods("challenge", e.target.value)}/></h4>
                <h4>Difficulty: <input type="number" value={spellData.customMods.difficulty} min="0" onChange={e => updateCustomMods("difficulty", e.target.value)}/></h4>
                <h4>Penalty: <input type="number" value={spellData.customMods.penalty} min="0" onChange={e => updateCustomMods("penalty", e.target.value)}/></h4>
            </div>
            <div className="pool-column">
                <h4>Upgrade Difficulty: <input type="number" value={spellData.customMods.upgradeDifficulty} min="0" onChange={e => updateCustomMods("upgradeDifficulty", e.target.value)}/></h4>
                <h4>Upgrade Ability: <input type="number" value={spellData.customMods.upgradeAbility} min="0" onChange={e => updateCustomMods("upgradeAbility", e.target.value)}/></h4>
                <h4>Automatic Successes: <input type="number" value={spellData.customMods.autoSuccess} onChange={e => updateCustomMods("autoSuccess", e.target.value)}/></h4>
            </div>
        </div>
        <button onClick={clearCustomMods} id="clear-custom" className="box can-point">
            <h4>Clear Custom Modifiers</h4>
        </button>
    </div>
    )
}