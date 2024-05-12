import './diceRoller.css';
import { useEffect, useState } from 'react';
import FixedHeader from '../../components/fixedHeader';
import PageHeading from '../../components/pageHeading';
import Roll from '../../components/roll';

function RollStorage(){
    this.id = 0;
    this.name = "";
    this.rollData = null;
}

export default function DiceRoller() {
    let [rolls, setRolls] = useState([]);

    useEffect(() => {
        setup();
    })


    return (
        <main id="dice-roller">
            <FixedHeader entries={[]}/>
            <PageHeading title="Dice Roller"/>

            {(rolls.length > 0) 
            ? <button id="clear-all" className="small-button">Clear All</button>
            :null}

            <section id="rolls-holder" className="box-holder">
                <Roll/>
            </section>
            <button id="new-roll" className="small-button">+ New Roll</button>
        </main>
    );
  }

const setup = () => {
    // if(localStorage.getItem("rollIDnum") == null){
    //     localStorage.setItem("rollIDnum", 0);
    // }
    
    // let storageRolls = localStorage.getItem("rolls");
    // if(storageRolls == null || storageRolls.length == 0){
    //     storageRolls = [];
    // }
    // else{
    //     storageRolls = JSON.parse(storageRolls);
    //     for(let i = 0; i < storageRolls.length; i++){
    //         let elm = createNewRoll();
    //         elm.id = storageRolls[i].id;
    //         elm.querySelector(".roll-title").value = storageRolls[i].name;
    //         for(const property in elm.input){
    //             elm.input[property].value = storageRolls[i].rollData[property];
    //         }
    //     }
    // }
}