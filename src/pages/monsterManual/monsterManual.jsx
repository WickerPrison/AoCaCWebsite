import './monsterManual.css';
import FixedHeader from "../../components/fixedHeader";
import PageHeading from "../../components/pageHeading";
import MonsterBlock from './monsterBlock';
import Roll from "../../components/roll";
import { useEffect, useState } from 'react';
import { multipleFetch, singleFetch } from '../../js/getData';
import { RollStorage, RollData } from '../../js/rollDice';
import Loading from '../../components/loading';
import Filters from '../../components/filters';


const filterArray = [
    {
        category: "Tier",
        options: ["Rival", "Nemesis", "Legendary","Swarm"]
    },
    {
        category: "Creature Types",
        options: ["Humanoid", "Mythic", "Undead", "Construct", "Abomination"]
    }
]

const sortOptions = [{parameter: "Name", type: String}, {parameter: "HP", type: Number}, {parameter: "Stamina", type: Number}];

const newRollStorage =() => {
    let newStorage = new RollStorage();
    newStorage.display = "none";
    newStorage.rollData = new RollData();
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
            let data = await multipleFetch(["Monsters", "Attacks"]);
            setMonsters(data[0]);
            setDisplayedMonsters(data[0]);
            setAttacks(data[1]);
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
                        return <MonsterBlock key={monster.Name} monster={monster} allAttacks={attacks} updateMethods={{setRoll, setShowRoll}}/>
                    })}
                </section>
                {showRoll ? <Roll roll={roll} fixedCard={true} update={updateRollMethods}/>:null}
            </main>
        )
    }
}