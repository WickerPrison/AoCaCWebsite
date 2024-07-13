import './monsterBuilder.css';
import { useEffect, useState, useRef } from 'react';
import CreatureTypeSelector from './creatureTypeSelector';

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
    })
    

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
                <div></div>
                <div>
                    <label>Silhouette: </label>
                    <input type="number" value={sil} onChange={e => setSil(e.target.value)} min="0"></input>
                </div>
                <CreatureTypeSelector creatureTypes={creatureTypes} setCreatureTypes={setCreatureTypes}/>
            </div>

            <h4 className="spell-name card-element">Stats and Features</h4>
            <div className="stats-grid">

                <div>
                    <label>HP: </label>
                    <input type="number"></input>
                </div>
                <div>
                    <label>Stamina: </label>
                    <input type="number"></input>
                </div>
                <div>
                    <label>DR: </label>
                    <input type="number"></input>
                </div>
                <div>
                    <label>Melee Def: </label>
                    <input type="number"></input>
                </div>
                <div>
                    <label>Ranged Def: </label>
                    <input type="number"></input>
                </div>
                <div>
                    <label>Move. Pts.: </label>
                    <input type="number"></input>
                </div>
                <div>
                    <label>Agility: </label>
                    <input type="number"></input>
                </div>
                <div>
                    <label>Brawn: </label>
                    <input type="number"></input>
                </div>
                <div>
                    <label>Cunning: </label>
                    <input type="number"></input>
                </div>
                <div>
                    <label>Intellect: </label>
                    <input type="number"></input>
                </div>
                <div>
                    <label>Presence: </label>
                    <input type="number"></input>
                </div>
                <div>
                    <label>Willpower: </label>
                    <input type="number"></input>
                </div>

                <label className='full-width-label'>Talents/Abilities: </label>
                <input className="full-width-input" type="text"></input>

                <label className='full-width-label'>Special Features: </label>
                <input className="full-width-input" type="text"></input>
            </div>
            <h4 className="spell-name card-element">Resistances, Weaknesses, and Immunities</h4>
        </form>
    )
}