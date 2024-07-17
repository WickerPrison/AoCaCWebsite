import GreyOut from '../../components/greyOut';
import AttackDisplay from './attackDisplay';
import './monsterBuilder.css';
import { useEffect, useState, useRef } from 'react';
import getUrl from '../../utils/getUrl';

export default function AddAttacks({attacks, setAttacks}){
    const [showMenu, setShowMenu] = useState(false);
    const [allAttacks, setAllAttacks] = useState([]);

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
            setShowMenu(true);
        }
        catch(err){
            console.log(err);
        }
    };

    return (
        <div>
            <button className="small-button button-margin" onClick={e => getAttacks(e)}>Edit Attacks</button>
            {showMenu ? <GreyOut/>: null}
            {showMenu ? 
                <div className="card box popup">
                    <div className="box-header">Attacks</div>
                    {allAttacks.map((attack, index) => {
                        return(
                            <div key={attack.name}>
                                <AttackDisplay attack={attack} addedAttacks={attacks} setAddedAttacks={setAttacks}/>
                                {index < allAttacks.length - 1 ? <div className="line"></div>:null }
                            </div>
                        )
                    })}
                    <button className="small-button button-margin" onClick={evt => {evt.preventDefault(); setShowMenu(false);}}>Done</button>
                </div>
            :null}
        </div>
    )
}