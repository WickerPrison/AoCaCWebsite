import './monsterBuilder.css';
import { useEffect, useState, useRef } from 'react';
import skillsDict from "../../js/skills";

const attributes = ["None", "Agility", "Brawn", "Cunning", "Intellect", "Presence", "Willpower"];
const damageAttributes = ["None", "Agility", "Brawn", "Brawn/Agility", "Cunning", "Intellect", "Presence", "Willpower"];
const ranges = ["Engaged", "Extended", "Short", "Medium", "Long", "Extreme", "Ballistic", "Artillery"];

export default function CreateAttack(){
    const [name, setName] = useState("");
    const [skill, setSkill] = useState("Brawl");
    const [specialAttribute, setSpecialAttribute] = useState("None");
    const [damage, setDamage] = useState(0);
    const [damageAttribute, setDamageAttribute] = useState("None");
    const [range, setRange] = useState(ranges[0]);
    const [crit, setCrit] = useState(5);
    const [accurate, setAccurate] = useState(0);
    const [properties, setProperties] = useState("");

    return (
        <form id="create-attack" className='card box'>
            <div className='box-header'>New Attack</div>
            <div className='stats-grid'>
            <label className='full-width-label'>Name: </label>
            <input className="full-width-input" type="text" value={name} onChange={e => setName(e.target.value)}></input>
            <div className="flex-grid-entries">
                <div>
                    <label>Skill: </label>
                    <select value={skill} onChange={e => setSkill(e.target.value)}>
                        {Object.keys(skillsDict).map((key) => {
                            return(
                                <option key={key} value={key}>{key}</option>
                            )
                        })}
                    </select>
                </div>
                <div>
                    <label>Special Attribute: </label>
                    <select value={specialAttribute} onChange={e => setSpecialAttribute(e.target.value)}>
                        {attributes.map((attribute) => {
                            return(
                                <option key={attribute} value={attribute}>{attribute}</option>
                            )
                        })}
                    </select>
                </div>
            </div>
            <div className="flex-grid-entries">
                <div>
                    <label>Damage: </label>
                    <input type="number" value={damage} onChange={e => setDamage(e.target.value)} min="0"></input>
                </div>
                <div>
                    <label>Damage Attribute: </label>
                    <select value={damageAttribute} onChange={e => setDamageAttribute(e.target.value)}>
                        {damageAttributes.map((attribute) => {
                            return(
                                <option key={attribute} value={attribute}>{attribute}</option>
                            )
                        })}
                    </select>
                </div>
            </div>
            <div className="flex-grid-entries">
                <div>
                    <label>Range: </label>
                    <select value={range} onChange={e => setRange(e.target.value)}>
                        {ranges.map((range) => {
                            return(
                                <option key={range} value={range}>{range}</option>
                            )
                        })}
                    </select>
                </div>
                <div>
                    <label>Crit Rating: </label>
                    <input type="number" value={crit} onChange={e => setCrit(e.target.value)} min="0"></input>
                </div>
                <div>
                    <label>Accurate: </label>
                    <input type="number" value={accurate} onChange={e => setAccurate(e.target.value)} min="0"></input>
                </div>
            </div>
            <label className='full-width-label'>Properties: </label>
            <input className="full-width-input" type="text" value={properties} onChange={e => setProperties(e.target.value)}></input>
            </div>
        </form>
    )
}