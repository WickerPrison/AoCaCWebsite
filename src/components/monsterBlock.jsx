import { useEffect, useState } from "react";
import MonsterAttack from "./monsterAttack"

export default function MonsterBlock({monster, allAttacks}){
    let [attacks, setAttacks] = useState([]);

    useEffect(() => {
        let attacksStrings = monster.Attacks.split(', ');
        setAttacks(allAttacks.filter((attack) => {
            return attacksStrings.includes(attack.Name);
        }))
    }, [])
    
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
                    <div className="Agility-label clickable-text">Agility: </div>
                    <div className="Brawn-label clickable-text">Brawn:</div>
                    <div className="Cunning-label clickable-text">Cunning:</div>
                    <div className="Intellect-label clickable-text">Intellect: </div>
                    <div className="Presence-label clickable-text">Presence:</div>
                    <div className="Willpower-label clickable-text">Willpower:</div>
                </div>
                <div className="monster-column">
                    <div className="Agility clickable-text">{monster.Agility}</div>
                    <div className="Brawn clickable-text">{monster.Brawn}</div>
                    <div className="Cunning clickable-text">{monster.Cunning}</div>
                    <div className="Intellect clickable-text">{monster.Intellect}</div>
                    <div className="Presence clickable-text">{monster.Presence}</div>
                    <div className="Willpower clickable-text">{monster.Willpower}</div>
                </div>
            </div>
            <div className="phone-line"></div>
            <div className="stat-text">
                <div className="immunities"></div>
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