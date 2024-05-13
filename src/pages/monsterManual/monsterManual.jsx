import './monsterManual.css';
import FixedHeader from "../../components/fixedHeader";
import PageHeading from "../../components/pageHeading";
import MonsterBlock from '../../components/monsterBlock';
import { useEffect, useState } from 'react';
import { multipleFetch, singleFetch } from '../../js/getData';

export default function MonsterManual(){
    let [monsters, setMonsters] = useState([]);
    let [attacks, setAttacks] = useState([]);

    useEffect(() => {
        async function getData(){
            let data = await multipleFetch(["Monsters", "Attacks"]);
            setMonsters(data[0]);
            setAttacks(data[1]);
        }
        getData();
    }, [])
    
    return (
        <main className='monster-manual'>
            <FixedHeader entries={[]}/>
            <PageHeading title="Monster Manual"/>
            <section id="monster-list">
                {monsters.map((monster) => {
                    return <MonsterBlock key={monster.Name} monster={monster} allAttacks={attacks}/>
                })}
            </section>
        </main>
    )
}