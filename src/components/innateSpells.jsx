import { useEffect, useState } from 'react';
import { singleFetch } from "../js/getData";
import InnateSpellCard from './innateSpellCard';

const innateClasses = ["Channeler", "Druid", "Sage", "Shapeshifter"];

export default function InnateSpells({currentClass}) {
    let [spells, setSpells] = useState([]);

    useEffect(() => {
        async function getData(){
            if(innateClasses.includes(currentClass)){
                let allSpells = await singleFetch("InnateSpells");
                setSpells(allSpells.filter((spell) =>{
                    return spell.Classes.includes(currentClass);
                }));
            }
            else if(currentClass == "Fundamentalist"){
                setSpells(await singleFetch("Fundamentalist"));
            }
        }
        getData();
    }, [])

    const innateClass = (currentClass) =>{
        const isShapeshifter = currentClass === "Shapeshifter";
        return (
            <div>
                <h3>Natural Spells</h3>
                <section id="natural-spells" className='box-holder innate'>
                    {spells.filter((spell) => {return spell.Tier == "Natural"}).map((result, index) => {
                        return <InnateSpellCard key={index} spell={result}/>
                    })}
                </section>
                <h3>Developed Spells</h3>
                {isShapeshifter ? (<div></div>):(
                    <h3>Mastered Spell</h3>
                )}
            </div>
        );
    }
    
    if(currentClass){
        return innateClass(currentClass);
    }
    else if(currentClass == "Fundamentalist"){
        return (
            <div></div>
        );
    }
    else return null;
}