import './monsterManual.css';
import FixedHeader from "../../components/headerComponents/fixedHeader";
import PageHeading from "../../components/headerComponents/pageHeading";
import MonsterBlock from './monsterBlock';
import Roll from "../../components/roll";
import { useEffect, useState } from 'react';
import { RollData } from '../../js/rollDice';
import Loading from '../../components/loading';
import Filters from '../../components/filters';
import getUrl from '../../utils/getUrl';


const filterArray = [
    {
        category: "tier",
        displayName: "Tier",
        options: ["Rival", "Nemesis", "Legendary", "Swarm"]
    },
    {
        category: "creatureTypes",
        displayName: "Creature Types",
        options: ["Humanoid", "Mythic", "Undead", "Construct", "Abomination"]
    }
]

const sortOptions = [
    {
        parameter: "name", 
        displayName: "Name",
        type: String
    }, 
    {
        parameter: "hp", 
        displayName: "HP",
        type: Number
    }, 
    {
        parameter: "stamina", 
        displayName: "Stamina",
        type: Number
    }
];

const newRollStorage =() => {
    let newStorage = new RollData();
    newStorage.display = "none";
    return newStorage;
}

export default function MonsterManual(){
    let [monsters, setMonsters] = useState([]);
    let [displayedMonsters, setDisplayedMonsters] = useState([]);
    let [attacks, setAttacks] = useState([]);
    let [roll, setRoll] = useState(newRollStorage());
    let [showRoll, setShowRoll] = useState(false);

    useEffect(() => {
        async function getData(){
            let response = await fetch(getUrl() + '/api/monsters', {
                method: "GET",
                headers: { 'Content-Type': 'application/json' }
            })

            let data = await response.json();
            setMonsters(data);
            setDisplayedMonsters(data);
        }
        getData();
    }, [])

    const updateRollMethods = {
        updateRoll(newRoll){
            setRoll(newRoll);
        },
        removeRoll(){
            setShowRoll(false);
        }
    }

    if(monsters.length <= 0){
        return (
            <main className='monster-manual'>
                <FixedHeader/>
                <PageHeading title="Monster Manual"/>
                <Loading/>
            </main>
        )
    }
    else{
        return (
            <main className='monster-manual'>
                <FixedHeader/>
                <PageHeading title="Monster Manual"/>
                <Filters input={monsters} setOutput={setDisplayedMonsters} filterArray={filterArray} sortArray={sortOptions}/>
                <section id="monster-list">
                    {displayedMonsters.map((monster) => {
                        return <MonsterBlock key={monster.name} monster={monster} updateMethods={{setRoll, setShowRoll}}/>
                    })}
                </section>
                {showRoll ? <Roll roll={roll} fixedCard={true} update={updateRollMethods}/>:null}
                <footer></footer>
            </main>
        )
    }
}