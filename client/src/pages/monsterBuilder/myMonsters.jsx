import './monsterBuilder.css';
import '../monsterManual/monsterManual.css';
import { useState, useEffect } from 'react';
import MonsterBlock from '../monsterManual/monsterBlock';
import auth from '../../utils/auth';
import getUrl from '../../utils/getUrl';

export default function MyMonsters(){
    const [monsterList, setMonsterList] = useState([]);

    async function getData(){
        try{
            const response = await fetch(getUrl() + '/api/monsters/' + auth.getProfile().data.username, {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' }
            })

            const data = await response.json();
            setMonsterList(data);
        }
        catch(err){
            console.log(err);
        }
    };
    
    useEffect(() => {
        console.log(monsterList);
        getData();
    })

    return (
        <main className="monster-manual my-monsters">
            <section id="my-monster-list">
                {monsterList.map((monster) => {
                    return <MonsterBlock key={monster.name}/>
                })}
            </section>
        </main>
    )
}