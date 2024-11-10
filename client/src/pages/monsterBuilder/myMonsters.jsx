import './monsterBuilder.css';
import '../monsterManual/monsterManual.css';
import { useState, useEffect } from 'react';
import MonsterBlock from '../monsterManual/monsterBlock';
import auth from '../../utils/auth';
import getUrl from '../../utils/getUrl';
import Filters from '../../components/filters';
import CreateMonster from './createMonster';

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

export default function MyMonsters(){
    const [updateMonster, setUpdateMonster] = useState(null);
    const [monsterList, setMonsterList] = useState([]);
    const [displayMonsters, setDisplayMonsters] = useState([]);

    async function getData(){
        try{
            const response = await fetch(getUrl() + '/api/monsters/myMonsters/' + auth.getProfile().data.username, {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' }
            })

            const data = await response.json();
            setMonsterList(data);
            setDisplayMonsters(data);
        }
        catch(err){
            console.log(err);
        }
    };
    
    useEffect(() => {
        getData();
    },[])

    function editMonster(monster){
        setUpdateMonster(monster);
    }

    if(updateMonster){
        return (
            <CreateMonster editMonster={updateMonster} resetStateFunction={() => {setUpdateMonster(null); getData()}}/>
        )
    }
    else{
        return (
            <main className="monster-manual" id="my-monsters">
                <Filters input={monsterList} setOutput={setDisplayMonsters} filterArray={filterArray} sortArray={sortOptions}/>
                <section id="my-monster-list">
                    {displayMonsters.map((monster) => {
                        return <MonsterBlock key={monster.name} monster={monster} showEdit={() => editMonster(monster)} updateMethods={{setRoll: () => {}, setShowRoll: () => {}}}/>
                    })}
                </section>
            </main>
        )
    }
}