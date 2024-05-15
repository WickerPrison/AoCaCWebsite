import { useEffect, useState } from "react";
import MonsterAttack from "./monsterAttack";
import { RollStorage, RollData } from "../js/rollDice";

export default function MonsterBlock({monster, allAttacks, setRoll, setShowRoll}){
    const attributes = ["Agility", "Brawn", "Cunning", "Intellect", "Presence", "Willpower"];
    let [attacks, setAttacks] = useState([]);

    useEffect(() => {
        let attacksStrings = monster.Attacks.split(', ');
        setAttacks(allAttacks.filter((attack) => {
            return attacksStrings.includes(attack.Name);
        }))
    }, [])
    
    const rollAttribute = (attributeValue, attributeName) => {
        let newRoll = new RollStorage();
        newRoll.rollData = new RollData();
        newRoll.rollData.ability = attributeValue;
        newRoll.name = monster.Name + " " + attributeName;
        setRoll(newRoll);
        setShowRoll(true);
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

    return (
        <section className="box monster-card">
                    <div className="box-header">{monster.Name}</div>
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
                <div className="monster-column">
                    <div className="hp">{monster.HP}</div>
                    <div className="stamina">{monster.Stamina}</div>
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
                <div className="monster-column">
                    {attributes.map((attribute) => {
                        let classes = attribute + " clickable-text";
                        return <div key={attribute} className={classes}>{monster[attribute]}</div>
                    })}
                </div>
            </div>
            <div className="phone-line"></div>
            <div className="stat-text">
                <div className="immunities" dangerouslySetInnerHTML={{__html: setResistances()}}></div>
                <div className="skills"><strong>Skills: </strong>{monster.Skills}</div>
                {monster["Talents/Abilities"].length > 0 ? 
                (<div className="talents-abilities"><strong>Talents/Abilities: </strong>{monster["Talents/Abilities"]}</div>)
                :(null)}
                {monster["Special Features"].length > 0 ? 
                (<div className="talents-abilities"><strong>Special Features: </strong>{monster["Special Features"]}</div>)
                :(null)}
                <div className="special-features"></div>
            </div>

            </div>
            <div className="attacks-heading">Attacks</div>
            <div className="attacks">
                {attacks.map((attack, index) => {
                    return <MonsterAttack key={index} attack={attack} monster={monster}/>
                })}
            </div>
        </section>
    )
}