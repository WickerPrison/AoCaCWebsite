import { useEffect, useState } from "react";
import MonsterAttack from "./monsterAttack";
import { RollData } from "../../js/rollDice";
import skillsDict from "../../js/skills";

export default function MonsterBlock({monster, allAttacks, updateMethods, monsterData}){
    const attributes = ["Agility", "Brawn", "Cunning", "Intellect", "Presence", "Willpower"];
    let [attacks, setAttacks] = useState([]);

    useEffect(() => {
        let attacksStrings = monster.Attacks.split(', ');
        setAttacks(allAttacks.filter((attack) => {
            return attacksStrings.includes(attack.Name);
        }))
    }, [])
    
    const rollAttribute = (attributeValue, attributeName) => {
        let newRoll = new RollData();
        newRoll.ability = attributeValue;
        newRoll.name = monster.Name + " " + attributeName;
        updateMethods.setRoll(newRoll);
        updateMethods.setShowRoll(true);
    }

    function rollSkillCheck(skillName, skillRanks){
        let attribute = skillsDict[skillName].reduce(
            (largest, current) => monster[current] > monster[largest] ? current:largest
            , skillsDict[skillName][0]);
        let newRoll = new RollData();
        newRoll.name = monster.Name + " " + skillName;
        if(skillRanks > monster[attribute]){
            newRoll.ability = skillRanks;
            newRoll.upgradeAbility = monster[attribute];
        }
        else{
            newRoll.ability = monster[attribute];
            newRoll.upgradeAbility = skillRanks;
        }
        updateMethods.setRoll(newRoll);
        updateMethods.setShowRoll(true);
    }
    
    function setupSkill(skill, index){
        if(monster.Tier == "Swarm") return swarmSkill(skill, index);
        skill = skill.split(" ");
        if(skill.length == 3){
            skill[0] = skill[0] + " " + skill[1];
            skill.splice(1, 1);
        }
        let skillString = skill[0] + " " + skill[1];
        if(index < monster.Skills.split(", ").length - 1){
            skillString += ", "
        }
        return (<div key={index} className="clickable-text" onClick={() => rollSkillCheck(skill[0], skill[1])}>{skillString}</div>);
    }

    function swarmSkill(skill, index){
        let skillString = skill + " ";
        monsterData ? skillString += monsterData.hp: skillString += monster.HP;

        if(index < monster.Skills.split(", ").length - 1){
            skillString += ", "
        }
        return (<div key={index} className="clickable-text" onClick={() => rollSkillCheck(skill, monsterData ? monsterData.hp : monster.HP)}>{skillString}</div>)
    }

    function setResistances(){
        let outputString = "";
        if(monster.Immunities){
            outputString += "<strong>Immunities:</strong> " + monster.Immunities + " ";
        }
        if(monster.Resistances){
            outputString += "<strong>Resistances:</strong> " + monster.Resistances + " ";
        }
        if(monster.Weaknesses){
            outputString += "<strong>Weaknesses:</strong> " + monster.Weaknesses + " ";
        }
        return outputString;
    }

    function updateMonsterStat(stat, value){
        monsterData[stat] = value;
        updateMethods.updateMonster(monsterData);
    }

    return (
        <section className="box monster-card">
            <div className="box-header">{monster.Name}</div>
            {monsterData ? <div className="close-monster" onClick={() => updateMethods.removeMonster(monsterData.id)}>X</div> :null}
            <div className="monster-row">
                <div className="creature-types">Creature Types: {monster["Creature Types"]}</div>
                <div className="monster-tier">Tier: {monster.Tier}</div>
            </div>
            <div className="monster-line"></div>
            <div className="stat-block-section">
                <div className="stat-numbers">
                    <div className="labels">
                        <div>HP: </div>
                        <div>Stamina:</div>
                        <div>DR:</div>
                        <div>Def (M|R):</div>
                        <div>Silhouette:</div>
                        <div>Move. Pts.:</div>
                    </div>
                    <div className="monster-column1">
                        {monsterData ? 
                        (<div className="hp">
                            <input className="stat-field" type="number" value={monsterData.hp} onChange={(e) => updateMonsterStat("hp", e.target.value)}/>
                            <div className="stat-max">/{monster.HP}</div>
                        </div>)
                        :<div className="hp">{monster.HP}</div>}
                        {monsterData ?
                        (<div className="stamina">
                                <input className="stat-field" type="number" value={monsterData.stamina} onChange={(e) => updateMonsterStat("stamina", e.target.value)}/>
                            <div className="stat-max">/{monster.Stamina}</div>
                        </div>)
                        :<div className="stamina">{monster.Stamina}</div>}
                        <div className="damage-reduction">{monster["Damage Reduction"]}</div>
                        <div className="defense">{monster["Melee Defense"]}|{monster["Ranged Defense"]}</div>
                        <div className="sil">{monster.Silhouette}</div>
                        <div className="move-pts">{monster.Speed}</div>
                    </div>
                    <div className="labels">

                        {attributes.map((attribute) => {
                            let classes = attribute + "-label clickable-text";
                            return <div key={attribute} className={classes} onClick={() => rollAttribute(monster[attribute], attribute)}>{attribute}: </div>
                        })}
                    </div>
                    <div className="monster-column2">
                        {attributes.map((attribute) => {
                            let classes = attribute + " clickable-text";
                            return <div key={attribute} className={classes}>{monster[attribute]}</div>
                        })}
                    </div>
                </div>
                <div className="phone-line"></div>
                <div className="stat-text">
                    <div className="immunities" dangerouslySetInnerHTML={{__html: setResistances()}}></div>

                    {monster.Skills.length > 0 
                    ?<div className="skills"><strong>Skills: </strong>
                        {monster.Skills.split(", ").map((skill, index) => {
                            return setupSkill(skill, index);
                        })}
                    </div>
                    :null}

                    {monster["Talents/Abilities"].length > 0 
                    ? (<div className="talents-abilities"><strong>Talents/Abilities: </strong>{monster["Talents/Abilities"]}</div>)
                    :(null)}

                    {monster["Special Features"].length > 0 
                    ? (<div className="talents-abilities"><strong>Special Features: </strong>{monster["Special Features"]}</div>)
                    :(null)}
                </div>
            </div>
            {attacks.length > 0 
            ?(<>
                <div className="attacks-heading">Attacks</div>
                <div className="attacks">
                    {attacks.map((attack, index) => {
                        return <MonsterAttack key={index} attack={attack} monster={monster} setRoll={updateMethods.setRoll} setShowRoll={updateMethods.setShowRoll}/>
                    })}
                </div>
            </>)
            :null}

        </section>
    )
}