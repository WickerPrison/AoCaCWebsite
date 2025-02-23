import '../monsterManual/monsterManual.css';
import './encounterBuilder.css';
import FixedHeader from "../../components/headerComponents/fixedHeader";
import PageHeading from "../../components/headerComponents/pageHeading";
import MonsterBlock from '../monsterManual/monsterBlock';
import Roll from "../../components/roll";
import { useEffect, useState, useRef } from 'react';
import { multipleFetch, singleFetch } from '../../js/getData';
import { RollData } from '../../js/rollDice';
import getUrl from '../../utils/getUrl';
import auth from '../../utils/auth';
import InitiativeTracker from './initiativeTracker';


function MonsterData(){
    this.id;
    this.monster;
    this.hp;
    this.stamina;
}

export default function EncounterBuilder(){
    let [monsters, setMonsters] = useState([]);
    let [roll, setRoll] = useState(new RollData());
    let [showRoll, setShowRoll] = useState(false);
    let [monsterDict, setMonsterDict] = useState([]);
    let [currentMonster, setCurrentMonster] = useState([]);

    let hasLoaded = useRef(false);

    useEffect(() => {
        async function getData(){
            const response = await fetch(getUrl() + '/api/monsters/encounterBuilder',{
                method: 'GET',
                headers: { 
                    'Content-Type': 'application/json',
                    'Authorization':"token " + auth.getToken()
                }
            }).catch(err => {
                console.log(err);
            })
            const data = await response.json();

            if(data.encounterData){
                let loadedMonsters = [];
                for(let i = 0; i < data.encounterData.length; i++){
                    let monster = data.monsters.find(monster => {
                        return monster._id == data.encounterData[i].monster;
                    });
                    let newMonster = new MonsterData();
                    newMonster.id = crypto.randomUUID();
                    newMonster.monster = monster;
                    newMonster.hp = data.encounterData[i].hp;
                    newMonster.stamina = data.encounterData[i].stamina;
                    loadedMonsters.push(newMonster);
                }
                setMonsters(loadedMonsters);
            }

            setMonsterDict(data.monsters);
        }
        getData();
    }, [])

    const updateMethods = {
        setRoll,
        setShowRoll,
        updateMonster(newMonster){
            const updatedMonsters = monsters.map(m => {
                if(m.id == newMonster.id){
                    m = newMonster;
                }
                return m;
            });
            setMonsters(updatedMonsters);
        },
        removeMonster(id){
            const updatedMonsters = monsters.filter(monster => {
                return monster.id !== id
            })
            setMonsters(updatedMonsters);
        }
    }

    const updateRollMethods ={
        updateRoll(newRoll){
            setRoll(newRoll);
        },
        removeRoll(){
            setShowRoll(false);
        }
    }

    async function save(){
        let saveArray = [];
        for(let i = 0; i < monsters.length; i++){
            let newObject = {
                hp: monsters[i].hp,
                stamina: monsters[i].stamina,
                monster: monsters[i].monster._id
            }
            saveArray.push(newObject);
        }
        console.log(saveArray);
        console.log(monsters);

        const response = await fetch(getUrl() + '/api/monsters/encounterBuilder', {
            method: 'PUT',
            mode: 'cors',
            headers: { 
                'Content-Type': 'application/json',
                'Authorization':"token " + auth.getToken()
            },
            body: JSON.stringify(saveArray)
        })

        if(response.ok){
            let res = await response.json();
            console.log(res);
        }
    }

    const addNewMonster = (name) => {
        let monster = monsterDict.find((monster) => {
            return monster.name == name;
        })
        if(!monster) {
            console.log("Monster not found");
            return;
        } 

        let newMonster = new MonsterData();
        newMonster.id = crypto.randomUUID();
        newMonster.monster = monster;
        newMonster.hp = monster.hp;
        newMonster.stamina = monster.stamina;
        setMonsters([...monsters, newMonster])
    }

    return (
        <main className='monster-manual encounter-builder'>
            <FixedHeader/>
            <PageHeading title="Encounter Builder"/>
            <InitiativeTracker/>
            <div id="top-buttons">
                {auth.loggedIn() ? <button id="save-button" className="small-button" onClick={save}>Save</button>: null }
                {monsters.length > 0 ? <button id="clear-all" className="small-button" onClick={() => setMonsters([])}>Clear All</button>: null }
            </div>
            
            <section id="monster-list">
                {monsters.map((monsterData, index) => {
                        return <MonsterBlock key={index} monster={monsterData.monster} updateMethods={updateMethods} monsterData={monsterData}/>
                    })}
            </section>

            <div id="new-monster" className="small-button">
                <input id="new-monster-input" list="monster-autocomplete" type="text" value={currentMonster} onChange={(e) => setCurrentMonster(e.target.value)}/>
                <datalist id="monster-autocomplete">
                    {monsterDict.map((monster) => {
                        return <option key={monster.name} value={monster.name}/>
                    })}
                </datalist>
                <h4 id="add-monster" onClick={() => addNewMonster(currentMonster)}>+ Add Monster</h4>
            </div>
            {showRoll ? <Roll roll={roll} fixedCard={true} update={updateRollMethods}/>:null}
            <footer></footer>
        </main>
    )
}