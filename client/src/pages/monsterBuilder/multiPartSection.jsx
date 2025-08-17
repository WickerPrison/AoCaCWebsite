import GreyOut from '../../components/greyOut';
import './monsterBuilder.css';
import { useEffect, useState, useRef } from 'react';
import getUrl from '../../utils/getUrl';
import TooltipText from '../../components/tooltips/tooltipText';
import MonsterPart from './monsterPart';

function Part(){
    this.name = "",
    this.hp = 0,
    this.dr = 0,
    this.mDef = 0,
    this.rDef = 0,
    this.specialFeatures = "",
    this.damageImmunities = [],
    this.weaknessResistances = [],
    this.attacks = [],
    this.id = crypto.randomUUID();
}

export default function MultiPartSection({multiPart, setMultiPart, parts, setParts}){

    function toggleMultiPart(evt){
        evt.preventDefault(); 
        setMultiPart(!multiPart);
    }

    function addNewPart(evt){
        evt.preventDefault();
        let newPart = new Part();
        let temp = parts.slice();
        temp.push(newPart);
        setParts(temp);
        console.log(parts);
    }

    if(!multiPart){
        return (
            <div>
                <div className='spacer'></div>
                <label>Multi Part: </label>
                <button className={`checkbox ${multiPart ? "show-check" : ""}`} onClick={evt => toggleMultiPart(evt)}>{"✔"}</button>
                <div className='spacer'></div>
            </div>
        )
    }
    else{
        return (
            <div>
                <div className='spacer'></div>
                <label>Multi Part: </label>
                <button className={`checkbox ${multiPart ? "show-check" : ""}`} onClick={evt => toggleMultiPart(evt)}>{"✔"}</button>
                <div className='spacer'></div>

                {parts.map((part, index) => {
                    return <MonsterPart key={index} parts={parts} setParts={setParts} thisPart={part}></MonsterPart>
                })}

                <button className="small-button button-margin" onClick={evt => addNewPart(evt)}>Add Part</button>
            </div>
        )
    }
}