import './monsterBuilder.css';
import { useEffect, useState, useRef } from 'react';
import SubmitAttack from './submitAttack';
import EditAttack from './editAttack';

export default function CreateAttack(){
    const [name, setName] = useState("");
    const [skill, setSkill] = useState("Brawl");
    const [specialAttribute, setSpecialAttribute] = useState("None");
    const [damage, setDamage] = useState(0);
    const [damageAttribute, setDamageAttribute] = useState("None");
    const [range, setRange] = useState("Engaged");
    const [crit, setCrit] = useState(5);
    const [accurate, setAccurate] = useState(0);
    const [finesse, setFinesse] = useState(false);
    const [halfAttribute, setHalfAttribute] = useState("None");
    const [properties, setProperties] = useState("");
    const [makePublic, setMakePublic] = useState(true);
    const [official, setOfficial] = useState(false);

    function getStates(){
        return {
            name, skill, specialAttribute, damage, damageAttribute, range, crit, accurate, finesse, halfAttribute, properties, makePublic, official,
            setName, setSkill, setSpecialAttribute, setDamage, setDamageAttribute, setRange, setCrit, setAccurate, setFinesse, setHalfAttribute, setProperties, setMakePublic, setOfficial
        }
    }


    function resetStates(){
        setName("");
        setSkill("Brawl");
        setSpecialAttribute("None");
        setDamage(0);
        setDamageAttribute("None");
        setRange("Engaged");
        setCrit(5);
        setAccurate(0);
        setFinesse(false);
        setHalfAttribute("None");
        setProperties("");
        setMakePublic(true);
    }

    return (
        <form id="create-attack" className='card box'>
            <div className='box-header'>New Attack</div>
            <EditAttack getStates={getStates}/>
            <button className='small-button button-margin' onClick={e => SubmitAttack(e, "POST", name, skill, specialAttribute, damage, damageAttribute, range, crit, accurate, finesse, halfAttribute, properties, makePublic, official, resetStates)}>Submit</button>
        </form>
    )
}