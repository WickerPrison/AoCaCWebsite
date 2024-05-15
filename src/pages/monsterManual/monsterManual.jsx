import './monsterManual.css';
import FixedHeader from "../../components/fixedHeader";
import PageHeading from "../../components/pageHeading";
import MonsterBlock from '../../components/monsterBlock';
import Roll from "../../components/roll";
import { useEffect, useState } from 'react';
import { multipleFetch, singleFetch } from '../../js/getData';
import { RollStorage, RollData } from '../../js/rollDice';

const newRollStorage =() => {
    let newStorage = new RollStorage();
    newStorage.display = "none";
    newStorage.rollData = new RollData();
    return newStorage;
}

export default function MonsterManual(){
    let [monsters, setMonsters] = useState([]);
    let [attacks, setAttacks] = useState([]);
    let [roll, setRoll] = useState(newRollStorage());
    let [showRoll, setShowRoll] = useState(false);

    useEffect(() => {
        async function getData(){
            let data = await multipleFetch(["Monsters", "Attacks"]);
            setMonsters(data[0]);
            setAttacks(data[1]);
        }
        getData();
    }, [])

    const updateMethods = {
        updateRoll(newRoll){
            setRoll(newRoll);
        },
        removeRoll(){
            setShowRoll(false);
        }
    }

    return (
        <main className='monster-manual'>
            <FixedHeader entries={[]}/>
            <PageHeading title="Monster Manual"/>
            <section id="monster-list">
                {monsters.map((monster) => {
                    return <MonsterBlock key={monster.Name} monster={monster} allAttacks={attacks} setRoll={setRoll} setShowRoll={setShowRoll}/>
                })}
            </section>
            {showRoll ? <Roll roll={roll} fixedCard={true} update={updateMethods}/>:null}
        </main>
    )
}