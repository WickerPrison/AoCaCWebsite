import { useEffect, useState } from "react";
import MonsterAttack from "./monsterAttack";
import { RollData } from "../../js/rollDice";
import {skillsDict} from "../../js/skills";
import OfficialIcon from "../../components/officialIcon";
import { abilities } from "../../data/abilities";
import { talents } from "../../data/talents";
import TooltipText from "../../components/tooltips/tooltipText";

export default function MonsterBlock({monster, updateMethods, monsterData, showEdit = null}){
    const attributes = ["Agility", "Brawn", "Cunning", "Intellect", "Presence", "Willpower"];
    
    const rollAttribute = (attributeValue, attributeName) => {
        let newRoll = new RollData();
        newRoll.ability = attributeValue;
        newRoll.name = monster.name + " " + attributeName;
        updateMethods.setRoll(newRoll);
        updateMethods.setShowRoll(true);
    }

    function rollSkillCheck(skillName, skillRanks){
        let attribute = skillsDict[skillName].reduce(
            (largest, current) => monster[current.toLowerCase()] > monster[largest.toLowerCase()] ? current:largest
            , skillsDict[skillName][0]);
        attribute = attribute.toLowerCase();
        let newRoll = new RollData();
        newRoll.name = monster.name + " " + skillName;
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
    
    function setupCreatureTypes(){
        let outputString = "";
        for (let i = 0; i < monster.creatureTypes.length; i++){
            outputString += monster.creatureTypes[i];
            if(i < monster.creatureTypes.length - 1){
                outputString += ", ";
            }
        }
        return outputString;
    }

    const setupTalentsAbilities = () => {
        let totalLength = monster.talents.length + monster.abilities.length;
        if(totalLength == 0) return null;
        let output = [];
        let description;
        let linkObject;
        let i;
        for(i = 0; i < monster.talents.length; i++){
            description = talents.find(talent => talent.Name == monster.talents[i].Name).Description;
            linkObject = {text: "Talent List", link: "/TalentList"};
            let displayName = monster.talents[i].Name;
            if(monster.talents[i].ranks > 1){
                displayName += ` (${monster.talents[i].ranks} ranks)`;
            }
            output.push(<TooltipText key={i + monster.talents[i].Name} displayText={displayName} tooltipText={description} link={linkObject}></TooltipText>);
            if(i < totalLength - 1){
                output.push(", ");
            }
        }
        for(let j = 0; j < monster.abilities.length; j++){
            description = abilities.find(ability => ability.Name == monster.abilities[j]).Description;
            linkObject = {text: "Abilities Table", link: "/Abilities"};
            output.push(<TooltipText key={j + monster.abilities[j]} displayText={monster.abilities[j]} tooltipText={description} link={linkObject}></TooltipText>);
            if(i + j < totalLength - 1){
                output.push(", ");
            }
        }
        return <div className="talents-abilities"><strong>Talents/Abilities: </strong>{output}</div>
    }

    function setupSkill(skill, index){
        if(monster.tier == "Swarm") return swarmSkill(skill, index);

        let skillString = skill.name + " " + skill.value;
        if(index < monster.skills.length - 1){
            skillString += ", "
        }
        return (<div key={index} className="clickable-text" onClick={() => rollSkillCheck(skill.name, skill.value)}>{skillString}</div>);
    }

    function swarmSkill(skill, index){
        let skillString = skill.name + " ";
        monsterData ? skillString += monsterData.hp: skillString += monster.hp;

        if(index < monster.skills.length - 1){
            skillString += ", "
        }
        return (<div key={index} className="clickable-text" onClick={() => rollSkillCheck(skill.name, monsterData ? monsterData.hp : monster.hp)}>{skillString}</div>)
    }

    function setResistances(){
        let outputString = "";
        if(monster.immunitiesString){
            outputString += "<strong>Immunities:</strong> " + monster.immunitiesString + " ";
        }
        if(monster.resistances){
            outputString += "<strong>Resistances:</strong> " + monster.resistances + " ";
        }
        if(monster.weaknesses){
            outputString += "<strong>Weaknesses:</strong> " + monster.weaknesses + " ";
        }
        return outputString;
    }

    function updateMonsterStat(stat, value){
        monsterData[stat] = value;
        updateMethods.updateMonster(monsterData);
    }

    return (
        <section className="box monster-card">
            {monster.official 
            ? <div className="box-header"><OfficialIcon/> {monster.name}</div>
            : <div className="box-header">{monster.name}</div>
            }
            
            {monsterData ? <div className="close-monster" onClick={() => updateMethods.removeMonster(monsterData.id)}>X</div> :null}
            {showEdit ? <button className="small-button edit-button" onClick={showEdit}>Edit</button> :null}
            <div className="monster-row">
                <div className="creature-types">Creature Types: {setupCreatureTypes()}</div>
                <div className="monster-tier">Tier: {monster.tier}</div>
                <div className="username">Made By: {monster.username}</div>
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
                            <input className="stat-field" type="number" min={0} value={monsterData.hp} onChange={(e) => updateMonsterStat("hp", e.target.value)}/>
                            <div className="stat-max">/{monster.hp}</div>
                        </div>)
                        :<div className="hp">{monster.hp}</div>}
                        {monsterData ?
                        (<div className="stamina">
                                <input className="stat-field" type="number" min={0} value={monsterData.stamina} onChange={(e) => updateMonsterStat("stamina", e.target.value)}/>
                            <div className="stat-max">/{monster.stamina}</div>
                        </div>)
                        :<div className="stamina">{monster.stamina}</div>}
                        <div className="damage-reduction">{monster.damageReduction}</div>
                        <div className="defense">{monster.meleeDefense}|{monster.rangedDefense}</div>
                        <div className="sil">{monster.sil}</div>
                        <div className="move-pts">{monster.speed}</div>
                    </div>
                    <div className="labels">
                        {attributes.map((attribute) => {
                            let classes = attribute + "-label clickable-text";
                            return <div key={attribute} className={classes} onClick={() => rollAttribute(monster[attribute.toLowerCase()], attribute)}>{attribute}: </div>
                        })}
                    </div>
                    <div className="monster-column2">
                        {attributes.map((attribute) => {
                            let classes = attribute + " clickable-text";
                            return <div key={attribute} className={classes}>{monster[attribute.toLowerCase()]}</div>
                        })}
                    </div>
                </div>
                <div className="phone-line"></div>
                <div className="stat-text">
                    <div className="immunities" dangerouslySetInnerHTML={{__html: setResistances()}}></div>

                    {monster.skills.length > 0 
                    ?<div className="skills"><strong>Skills: </strong>
                        {monster.skills.map((skill, index) => {
                            return setupSkill(skill, index);
                        })}
                    </div>
                    :null}

                    {setupTalentsAbilities()}

                    {monster.specialFeatures 
                    ? (<div className="talents-abilities"><strong>Special Features: </strong>{monster.specialFeatures}</div>)
                    :(null)}
                </div>
            </div>
            {monster.attacks.length > 0 
            ?(<>
                <div className="attacks-heading">Attacks</div>
                <div className="attacks">
                    {monster.attacks.map((attack, index) => {
                        return <MonsterAttack key={index} attack={attack} monster={monster} setRoll={updateMethods.setRoll} setShowRoll={updateMethods.setShowRoll} monsterData={monsterData}/>
                    })}
                </div>
            </>)
            :null}

        </section>
    )
}