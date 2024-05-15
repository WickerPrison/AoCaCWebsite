import '../monsterManual/monsterManual.css';
import '../encounterBuilder/encounterBuilder.css';
import FixedHeader from "../../components/fixedHeader";
import PageHeading from "../../components/pageHeading";
import MonsterBlock from '../monsterManual/monsterBlock';
import Roll from "../../components/roll";
import { useEffect, useState, useRef } from 'react';
import { multipleFetch, singleFetch } from '../../js/getData';
import { RollStorage, RollData } from '../../js/rollDice';

const newRollStorage =() => {
    let newStorage = new RollStorage();
    newStorage.display = "none";
    newStorage.rollData = new RollData();
    return newStorage;
}

function MonsterData(){
    this.id;
    this.monsterName;
    this.hp;
    this.stamina;
}

export default function EncounterBuilder(){
    let [monsters, setMonsters] = useState([]);
    let [roll, setRoll] = useState(newRollStorage());
    let [showRoll, setShowRoll] = useState(false);
    let [monsterDict, setMonsterDict] = useState([]);
    let [attackDict, setAttackDict] = useState([]);

    let hasLoaded = useRef(false);

    let currentMonster;

    useEffect(() => {
        if(!localStorage.getItem("monsterId")){
            localStorage.setItem("monsterId", 0);
        }

        async function getData(){
            let data = await multipleFetch(["Monsters", "Attacks"]);
            setMonsterDict(data[0]);
            setAttackDict(data[1]);

            let storageMonsters = localStorage.getItem("monsters");
            if(!storageMonsters || storageMonsters.length == 0){
                localStorage.setItem("monsters", []);
            }
            else{
                storageMonsters = JSON.parse(storageMonsters);
                setMonsters(storageMonsters);
            }
        }
        getData();
    }, [])

    useEffect(() => {
        if(hasLoaded.current){
            localStorage.setItem("monsters", JSON.stringify(monsters))
            if(monsters.length == 0){
                localStorage.setItem("monsterId", 0);
            }
        }
        else{
            hasLoaded.current = true;
        }
    }, [monsters])

    const updateMethods = {
        setRoll,
        setShowRoll,
        setMonsters

    }

    const updateRollMethods ={
        updateRoll(newRoll){
            setRoll(newRoll);
        },
        removeRoll(){
            setShowRoll(false);
        }
    }

    const addNewMonster = (name) => {
        let monster = monsterDict.find((monster) => {
            return monster.Name == name;
        })
        if(!monster) {
            console.log("Monster not found");
            return;
        } 

        let newMonster = new MonsterData();
        newMonster.id = localStorage.getItem("monsterId");
        localStorage.setItem("monsterId", Number(localStorage.getItem("monsterId")) + 1);
        newMonster.monsterName = monster.Name;
        newMonster.hp = monster.HP;
        newMonster.stamina = monster.Stamina;
        setMonsters([...monsters, newMonster])
    }

    const getMonster = (name) => {
        return monsterDict.find((monster) => {
            return monster.Name == name;
        })
    }

    return (
        <main className='monster-manual encounter-builder'>
            <FixedHeader entries={[]}/>
            <PageHeading title="Encounter Builder"/>
            {monsters.length > 0 ? <button id="clear-all" className="small-button">Clear All</button>: null }
            
            <section id="monster-list">
                {monsters.map((monsterData) => {
                        return <MonsterBlock key={monsterData.id} monster={getMonster(monsterData.monsterName)} allAttacks={attackDict} updateMethods={updateMethods} monsterData={monsterData}/>
                    })}
            </section>

            <div id="new-monster" className="small-button">
                <input id="new-monster-input" list="monster-autocomplete" type="text" onChange={(e) => currentMonster = e.target.value}/>
                <datalist id="monster-autocomplete">
                    {monsterDict.map((monster) => {
                        return <option key={monster.Name} value={monster.Name}/>
                    })}
                </datalist>
                <h4 id="add-monster" onClick={() => addNewMonster(currentMonster)}>+ Add Monster</h4>
            </div>
            {showRoll ? <Roll roll={roll} fixedCard={true} update={updateRollMethods}/>:null}
            <footer></footer>
        </main>
    )
}