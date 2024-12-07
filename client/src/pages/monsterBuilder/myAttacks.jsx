import './monsterBuilder.css';
import { useEffect, useState, useRef } from 'react';
import auth from '../../utils/auth';
import getUrl from '../../utils/getUrl';
import AttackDisplay from './attackDisplay';
import EditAttack from './editAttack';
import SubmitAttack from './submitAttack';

export default function MyAttacks(){
    const [myAttacks, setMyAttacks] = useState([]);
    const [editAttack, setEditAttack] = useState("");
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

    function switchEditTarget(attack){
        setEditAttack(attack._id);
        setName(attack.name);
        setSkill(attack.skill);
        setSpecialAttribute(attack.specialAttribute);
        setDamage(attack.damage);
        setDamageAttribute(attack.attribute);
        setRange(attack.range);
        setCrit(attack.crit);
        setAccurate(attack.accurate);
        setFinesse(attack.finesse);
        setHalfAttribute(attack.halfAttribute);
        setProperties(attack.properties);
        setMakePublic(attack.public);
        setOfficial(attack.official);
    }

    async function getData() {
        try{
            const response = await fetch(getUrl() + '/api/monsters/attacks/' + auth.getProfile().data.username, {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' }
            })

            const data = await response.json();
            setMyAttacks(data);
        }
        catch(err){
            console.log(err);
        }
    };

    useEffect(() => {
        getData();
    },[])
    
    function updateAttack(evt){
        SubmitAttack(evt, "PUT", name, skill, specialAttribute, damage, damageAttribute, range, crit, accurate, finesse, halfAttribute, properties, makePublic, official, () => {}, editAttack);
        setEditAttack("");
        getData();
    }

    async function deleteAttack(evt){
        if(confirm("Are you sure you want to delete this attack?") === true){
            try{
                const response = await fetch(getUrl() + '/api/monsters/attack/' + editAttack, {
                    method: 'DELETE',
                    headers: { 'Content-Type': 'application/json' }
                });
                
                setEditAttack("");
            }
            catch(err){
                console.log(err);
            }
        }
    }

    return (
        <div id="my-attacks" className="card box">
            <div className="box-header">My Attacks</div>
            {myAttacks.map((attack, index) => {
                return(
                    <div key={attack.name}>
                        {editAttack == attack._id
                        ?<div>
                            <EditAttack getStates={getStates}/>
                            <div>
                                <button className="button-margin small-button" style={{marginTop: 0}} onClick={() => setEditAttack("")}>Cancel</button>
                                <button className="button-margin small-button" style={{marginTop: 0}} onClick={evt => deleteAttack(evt)}>Delete</button>
                                <button className="button-margin small-button" style={{marginTop: 0}} onClick={evt => updateAttack(evt)}>Update</button>
                            </div>
                        </div> 
                        :<AttackDisplay attack={attack} showToggle={false} editButton={true} setEdit={switchEditTarget}/>}
                        {index < myAttacks.length - 1 ? <div className="line"></div>:null }
                    </div>
                )
            })}
        </div>
    )
}