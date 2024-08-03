import './monsterBuilder.css';
import { useEffect, useState, useRef } from 'react';
import CreatureTypeSelector from './creatureTypeSelector';
import Stats from './stats';
import Skills from './skills';
import ResWeakImm from './resWeakImm';
import AddAttacks from './addAttacks';
import AttackDisplay from './attackDisplay';
import SubmitMonster from './submitMonster';
import FlexibleTextarea from '../../components/flexibleTextarea';
import auth from '../../utils/auth';

const Tiers={
    MINION: "Minion",
    RIVAL: "Rival",
    NEMESIS: "Nemesis",
    LEGENDARY: "Legendary",
    SWARM: "Swarm"
}

const defaultStats = {
    hp: 1,
    stamina: 1,
    dr: 0,
    meleeDef: 0,
    rangedDef: 0,
    movePts: 15,
    agility: 2, 
    brawn: 2,
    cunning: 2,
    intellect: 2,
    presence: 2,
    willpower: 2
}

export default function CreateMonster({editMonster, resetStateFunction = null}){
    const [name, setName] = useState("");
    const [tier, setTier] = useState(Tiers.MINION);
    const [sil, setSil] = useState(1);
    const [makePublic, setMakePublic] = useState(true);
    const [creatureTypes, setCreatureTypes] = useState(["Humanoid"]);
    const [stats, setStats] = useState(defaultStats);
    const [talents, setTalents] = useState("");
    const [specialFeatures, setSpecialFeatures] = useState("");
    const [skills, setSkills] = useState([]);
    const [conditionImmunities, setConditionImmunities] = useState([]);
    const [damageImmunities, setDamageImmunities] = useState([]);
    const [customImmunities, setCustomImmunities] = useState("");
    const [weakResist, setWeakResist] = useState([]);
    const [attacks, setAttacks] = useState([]);
    const [official, setOfficial] = useState(false);
    
    function getStates(){
        const data = {
            name, tier, sil, makePublic, creatureTypes, stats, talents, specialFeatures, skills, conditionImmunities, damageImmunities, customImmunities, weakResist, attacks, official
        }
        return data;
    }

    function resetStates(){
        setName("");
        setTier(Tiers.MINION);
        setSil(1);
        setMakePublic(true);
        setCreatureTypes(["Humanoid"]);
        setStats(defaultStats);
        setTalents("");
        setSpecialFeatures("");
        setSkills([]);
        setConditionImmunities([]);
        setDamageImmunities([]);
        setCustomImmunities("");
        setWeakResist([]);
        setAttacks([]);
        setOfficial(false);
        window.scrollTo({top: 0, behavior: "smooth"});
        if(resetStateFunction) resetStateFunction();
    }

    useEffect(() => {
        if(editMonster){
            setName(editMonster.name);
            setTier(editMonster.tier);
            setSil(editMonster.sil);
            setMakePublic(editMonster.public);
            setCreatureTypes(editMonster.creatureTypes);
            setStats({
                hp: editMonster.hp,
                stamina: editMonster.stamina,
                dr: editMonster.damageReduction,
                meleeDef: editMonster.meleeDefense,
                rangedDef: editMonster.rangedDefense,
                movePts: editMonster.speed,
                agility: editMonster.agility,
                brawn: editMonster.brawn,
                cunning: editMonster.cunning,
                intellect: editMonster.intellect,
                presence: editMonster.presence,
                willpower: editMonster.willpower
            });
            setTalents(editMonster.talentsAbilities);
            setSpecialFeatures(editMonster.specialFeatures);
            setSkills(editMonster.skills);
            setConditionImmunities(editMonster.conditionImmunities);
            setDamageImmunities(editMonster.damageImmunities);
            if(editMonster.customImmunities){
                setCustomImmunities(editMonster.customImmunities);
            }
            setWeakResist(editMonster.resistWeakArray);
            setAttacks(editMonster.attacks);
            setOfficial(editMonster.official);
        }
    },[])

    function togglePublic(evt){
        evt.preventDefault(); 
        if(official){
            setMakePublic(true);
            return;
        }
        setMakePublic(!makePublic);
    }

    function toggleOfficial(evt){
        evt.preventDefault();
        setOfficial(!official);
        if(!official){
            setMakePublic(true); 
        }
    }

    return (
        <form id="create-monster" className="card box">
            <div className="box-header">Basic Info</div>
            <div className="stats-grid">
                <label className='full-width-label'>Name: </label>
                <input className="full-width-input" type="text" value={name} onChange={e => setName(e.target.value)}></input>
                <CreatureTypeSelector creatureTypes={creatureTypes} setCreatureTypes={setCreatureTypes}/>
                <div></div>
                <div>
                    <label>Tier: </label>
                    <select value={tier} onChange={e => setTier(e.target.value)}>
                        <option value={Tiers.MINION}>{Tiers.MINION}</option>
                        <option value={Tiers.RIVAL}>{Tiers.RIVAL}</option>
                        <option value={Tiers.NEMESIS}>{Tiers.NEMESIS}</option>
                        <option value={Tiers.LEGENDARY}>{Tiers.LEGENDARY}</option>
                        <option value={Tiers.SWARM}>{Tiers.SWARM}</option>

                    </select>
                </div>
                <div>
                    <label>Silhouette: </label>
                    <input type="number" value={sil} onChange={e => setSil(e.target.value)} min="0"></input>
                </div>
            </div>

            <h4 className="spell-name card-element">Stats and Features</h4>
            <div className="stats-grid">
                <Stats stats={stats} setStats={setStats}/>

                <label className='full-width-label'>Talents/Abilities: </label>
                <FlexibleTextarea className="fulll-width-input" input={talents} setOutput={setTalents} classNames={"full-width-input"}/>
                
                <label className='full-width-label'>Special Features: </label>
                <FlexibleTextarea className="fulll-width-input" input={specialFeatures} setOutput={setSpecialFeatures} classNames={"full-width-input"}/>
            </div>
            <h4 className="spell-name card-element">Skill Ranks</h4>
            <Skills skills={skills} setSkills={setSkills}/>
            <h4 className="spell-name card-element">Resistances, Weaknesses, and Immunities</h4>
            <ResWeakImm conditionImmunities={conditionImmunities} setConditionImmunities={setConditionImmunities} damageImmunities={damageImmunities} setDamageImmunities={setDamageImmunities} customImmunities={customImmunities} setCustomImmunities={setCustomImmunities} weakResist={weakResist} setWeakResist={setWeakResist}/>
            <h4 className="spell-name card-element">Attacks</h4>
            {attacks.map((attack, index) => {
                return(
                    <div key={attack.name}>
                        <AttackDisplay attack={attack} addedAttacks={attacks} setAddedAttacks={setAttacks} showToggle={false}/>
                        {index < attacks.length - 1 ? <div className="line"></div>:null }
                    </div>
                )
            })}
            <AddAttacks attacks={attacks} setAttacks={setAttacks}/>
            <h4 className="spell-name card-element">Finalize</h4>
            <div className="make-public">
                <label>Make Public: </label>
                <button className={`checkbox ${makePublic ? "show-check" : ""}`} onClick={evt => togglePublic(evt)}>{"✔"}</button>
            </div>
            {auth.getProfile().data.isAdmin
            ?   <div className="make-public">
                    <label>Make Official: </label>
                    <button className={`checkbox ${official ? "show-check" : ""}`} onClick={(evt) => toggleOfficial(evt)}>{"✔"}</button>
                </div>
            : null}

            <button className="small-button button-margin" onClick={evt => SubmitMonster(evt, getStates(), resetStates, editMonster ? editMonster: null)}>Submit</button>
        </form>
    )
}