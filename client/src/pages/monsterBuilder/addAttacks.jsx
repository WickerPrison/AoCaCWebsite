import GreyOut from '../../components/greyOut';
import AttackDisplay from './attackDisplay';
import './monsterBuilder.css';
import { useEffect, useState, useRef } from 'react';
import getUrl from '../../utils/getUrl';
import {allSkills, combatSkills} from '../../js/skills';
import Filters from '../../components/filters';

const skills = allSkills.map(x => x[0]);
const combatSkillsArray = combatSkills.map(x => x[0]);
const attributes = ["None", "Agility", "Brawn", "Cunning", "Intellect", "Presence", "Willpower"];
const damageAttributes = ["None", "Agility", "Brawn", "Brawn/Agility", "Cunning", "Intellect", "Presence", "Willpower"];
const ranges = ["Engaged", "Extended", "Short", "Medium", "Long", "Extreme", "Ballistic", "Artillery"];

const filterArray = [
    {
        category: "skill",
        displayName: "Combat Skills",
        options: combatSkillsArray,
        expandedOptions: skills
    },
    {
        category: "attribute",
        displayName: "Damage Modifier",
        options: damageAttributes
    },
    {
        category: "specialAttribute",
        displayName: "Special Attribute",
        options: attributes
    },
    {
        category: "range",
        displayName: "Range",
        options: ranges
    }
];


const sortOptions = [
    {
        parameter: "name",
        displayName: "Name",
        type: String
    }, 
    {
        parameter: "damage", 
        displayName: "Damage",
        type: Number
    }, 
    {
        parameter: "crit", 
        displayName: "Crit Rating",
        type: Number
    }
];


export default function AddAttacks({attacks, setAttacks}){
    const [showMenu, setShowMenu] = useState(false);
    const [allAttacks, setAllAttacks] = useState([]);
    const [displayAttacks, setDisplayAttacks] = useState([]);

    async function getAttacks(e) {
        e.preventDefault();
        if(showMenu) return;
        try{
            const response = await fetch(getUrl() + '/api/monsters/attacks', {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' }
            })

            const data = await response.json();
 
            setAllAttacks(data);
            setDisplayAttacks(data);
            setShowMenu(true);
            window.scrollTo({top: 0, behavior: "smooth"});
        }
        catch(err){
            console.log(err);
        }
    };

    return (
        <div>
            <button className="small-button button-margin" onClick={e => getAttacks(e)}>Add/Remove Attacks</button>
            {showMenu ? <GreyOut/>: null}
            {showMenu ? 
                <div className="popup">
                    <Filters input={allAttacks} setOutput={setDisplayAttacks} filterArray={filterArray} sortArray={sortOptions}/>
                    <div className="card box attack-display">
                        <div className="box-header">Attacks</div>
                        {displayAttacks.map((attack, index) => {
                            return(
                                <div key={attack.name}>
                                    <AttackDisplay attack={attack} addedAttacks={attacks} setAddedAttacks={setAttacks}/>
                                    {index < displayAttacks.length - 1 ? <div className="line"></div>:null }
                                </div>
                            )
                        })}
                        <button className="small-button button-margin" onClick={evt => {evt.preventDefault(); setShowMenu(false);}}>Done</button>
                    </div>
                </div>
            :null}
        </div>
    )
}