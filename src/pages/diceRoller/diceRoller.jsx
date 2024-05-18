import './diceRoller.css';
import { useEffect, useState, useRef } from 'react';
import FixedHeader from '../../components/fixedHeader';
import PageHeading from '../../components/pageHeading';
import Roll from '../../components/roll';
import {RollStorage, RollData} from '../../js/rollDice';

export default function DiceRoller() {
    let [rolls, setRolls] = useState([]);

    let hasLoaded = useRef(false);

    useEffect(() => {
        if(!localStorage.getItem("rollIDnum")){
            localStorage.setItem("rollIDnum", 0);
        }
        
        let storageRolls = localStorage.getItem("rolls");
        if(!storageRolls){
            localStorage.setItem("rolls", []);
        }
        else{
            storageRolls = JSON.parse(storageRolls);
            setRolls(storageRolls);
        }
    }, [])

    useEffect(() => {
        if(hasLoaded.current){
            localStorage.setItem("rolls", JSON.stringify(rolls));
            if(rolls.length == 0){
                localStorage.setItem("rollIDnum", 0);
            }
        }
        else{
            hasLoaded.current = true;
        }
    },[rolls])


    function createRollFromButton(){
        let newRoll = new RollStorage();
        newRoll.id = localStorage.getItem("rollIDnum");
        localStorage.setItem("rollIDnum", Number(localStorage.getItem("rollIDnum")) + 1);
        newRoll.name = "New Roll " + localStorage.getItem("rollIDnum");
        newRoll.rollData = new RollData();
        setRolls([...rolls, newRoll]);
    }

    const updateMethods = {
        updateRoll(roll){
            const updatedRolls = rolls.map((r) => {
                if(r.id == roll.id){
                    r = roll;
                    return r;
                }
                else{
                    return r;
                }
            });
            setRolls(updatedRolls);
        },
        updateName(id, name){
            const updatedRolls = rolls.map((r) => {
                if(r.id == id){
                    r.name = name;
                    return r;
                }
                else{
                    return r;
                }
            });
           setRolls(updatedRolls);
        },
        removeRoll(id){
            const updatedRolls = rolls.filter((roll) => {
                return roll.id !== id
            })
            setRolls(updatedRolls);
        }
    }

    return (
        <main id="roller-page">
            <FixedHeader/>
            <PageHeading title="Dice Roller"/>

            {(rolls.length > 0) 
            ? <button id="clear-all" className="small-button" onClick={() => setRolls([])}>Clear All</button>
            :null}

            <section id="rolls-holder" className="box-holder">
                {rolls.map((roller) => {
                    return <Roll roll={roller} update={updateMethods} key={roller.id}/>
                })}
            </section>
            <button id="new-roll" className="small-button" onClick={createRollFromButton}>+ New Roll</button>
        </main>
    );
}
