import './monsterBuilder.css';
import { useEffect, useState, useRef } from 'react';
import CreatureTypeSelector from './creatureTypeSelector';
import Stats from './stats';
import Skills from './skills';
import ResWeakImm from './resWeakImm';

const Tiers={
    MINION: "Minion",
    RIVAL: "Rival",
    NEMESIS: "Nemesis",
    LEGENDARY: "Legendary",
    SWARM: "Swarm"
}

export default function CreateMonster(){
    const [name, setName] = useState("");
    const [tier, setTier] = useState(Tiers.MINION);
    const [sil, setSil] = useState(1);
    const [makePublic, setMakePublic] = useState(true);
    const [creatureTypes, setCreatureTypes] = useState(["Humanoid"]);
    const [stats, setStats] = useState({
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
    });
    const [talents, setTalents] = useState("");
    const [specialFeatures, setSpecialFeatures] = useState("");
    const [skills, setSkills] = useState([]);
    const [immunities, setImmunities] = useState([]);
    const [customImmunities, setCustomImmunities] = useState("");
    const [weakResist, setWeakResist] = useState([]);
    

    return (
        <form id="create-monster" className="card box">
            <div className="box-header">Basic Info</div>
            <div className="stats-grid">
                <label className='full-width-label'>Name: </label>
                <input className="full-width-input" type="text" value={name} onChange={e => setName(e.target.value)}></input>
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
                <div>
                    <label>Make Public: </label>
                    <button className={`checkbox ${makePublic ? "show-check" : ""}`} onClick={(e) => {e.preventDefault(); setMakePublic(!makePublic)}}>{"✔"}</button>
                </div>
                <CreatureTypeSelector creatureTypes={creatureTypes} setCreatureTypes={setCreatureTypes}/>
            </div>

            <h4 className="spell-name card-element">Stats and Features</h4>
            <div className="stats-grid">
                <Stats stats={stats} setStats={setStats}/>

                <label className='full-width-label'>Talents/Abilities: </label>
                <div contentEditable={true} className="full-width-input large-text-input" value={talents} onInput={e => setTalents(e.target.textContent)}></div>

                <label className='full-width-label'>Special Features: </label>
                <div contentEditable={true} className="full-width-input large-text-input" value={specialFeatures} onInput={e => setSpecialFeatures(e.target.textContent)}></div>
            </div>
            <h4 className="spell-name card-element">Skill Ranks</h4>
            <Skills skills={skills} setSkills={setSkills}/>
            <h4 className="spell-name card-element">Resistances, Weaknesses, and Immunities</h4>
            <ResWeakImm immunities={immunities} setImmunities={setImmunities} customImmunities={customImmunities} setCustomImmunities={setCustomImmunities} weakResist={weakResist} setWeakResist={setWeakResist}/>
            <h4 className="spell-name card-element">Attacks</h4>
        </form>
    )
}