import './diceRoller.css';
import { useEffect, useState, useRef } from 'react';
import FixedHeader from '../../components/headerComponents/fixedHeader';
import PageHeading from '../../components/headerComponents/pageHeading';
import Roll from '../../components/roll';
import {RollData} from '../../js/rollDice';
import auth from '../../utils/auth';
import getUrl from '../../utils/getUrl';

export default function DiceRoller() {
    let [rolls, setRolls] = useState([]);

    let hasLoaded = useRef(false);

    useEffect(() => {
        async function getData(){
            const response = await fetch(getUrl() + '/api/rolls',{
                method: 'GET',
                headers: { 
                    'Content-Type': 'application/json',
                    'Authorization':"token " + auth.getToken()
                }
            }).catch(err => {
                console.log(err);
            })
            const data = await response.json();
            for(let i = 0; i < data.length; i++){
                data[i].index = i;
            }
            setRolls(data);
        }

        if(auth.loggedIn()){
            getData(); 
        }
    }, [])

    async function saveRolls(){
        const response = await fetch(getUrl() + '/api/rolls', {
            method: 'PUT',
            mode: 'cors',
            headers: { 
                'Content-Type': 'application/json',
                'Authorization':"token " + auth.getToken()
            },
            body: JSON.stringify({
                rolls: rolls
            })
        })

        if(response.ok){
            let res = await response.json();
            console.log(res);
        }
    }

    function createRollFromButton(){
        let newRoll = new RollData()
        newRoll.name = "New Roll";
        newRoll.index = rolls.length;
        setRolls([...rolls, newRoll]);
    }

    const updateMethods = {
        updateRoll(roll){
            const updatedRolls = rolls.map((r) => {
                if(r.index == roll.index){
                    r = roll;
                    return r;
                }
                else{
                    return r;
                }
            });
            setRolls(updatedRolls);
        },
        updateName(index, name){
            const updatedRolls = rolls.map((r) => {
                if(r.index == index){
                    r.name = name;
                    return r;
                }
                else{
                    return r;
                }
            });
           setRolls(updatedRolls);
        },
        removeRoll(index){
            const updatedRolls = rolls.filter((roll) => {
                return roll.index !== index;
            })
            for(let i = 0; i < updatedRolls.length; i++){
                updatedRolls[i].index = i;
            }
            setRolls(updatedRolls);
        }
    }

    return (
        <main id="roller-page">
            <FixedHeader/>
            <PageHeading title="Dice Roller"/>

            {auth.loggedIn()
            ? <button id="save" className="small-button" onClick={saveRolls}>Save Rolls</button>
            :null}

            {(rolls.length > 0) 
            ? <button id="clear-all" className="small-button" onClick={() => setRolls([])}>Clear All</button>
            :null}

            <section id="rolls-holder" className="box-holder">
                {rolls.map((roller, index) => {
                    return <Roll roll={roller} update={updateMethods} key={index}/>
                })}
            </section>
            <button id="new-roll" className="small-button" onClick={createRollFromButton}>+ New Roll</button>
        </main>
    );
}
