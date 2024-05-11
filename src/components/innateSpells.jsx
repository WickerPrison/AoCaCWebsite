import { useEffect, useState } from 'react';
import { singleFetch } from "../js/getData";
import InnateSpellCard from './innateSpellCard';
import FundamentalistSpellCard from './fundamentalistSpellCard';

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
                <section id="developed-spells" className='box-holder innate'>
                    {spells.filter((spell) => {return spell.Tier == "Developed"}).map((result, index) => {
                        return <InnateSpellCard key={index} spell={result}/>
                    })}
                </section>
                {isShapeshifter ? (<div></div>):(
                    <>
                        <h3>Mastered Spell</h3>
                        <section id="mastered-spell" className='box-holder innate'>
                            {spells.filter((spell) => {return spell.Tier == "Mastered"}).map((result, index) => {
                                return <InnateSpellCard key={index} spell={result}/>
                            })}
                        </section>
                    </>
                )}
            </div>
        );
    }

    const fundamentalistClass = (currentClass) =>{
        return (
            <div>
                <h3>Laws</h3>
                <section id="natural-spells" className='box-holder innate'>
                    {spells.filter((spell) => {return spell.Tier == "Law"}).map((result, index) => {
                        return <FundamentalistSpellCard key={index} spell={result}/>
                    })}
                </section>
                <h3>Theories</h3>
                <section id="developed-spells" className='box-holder innate'>
                    {spells.filter((spell) => {return spell.Tier == "Theories"}).map((result, index) => {
                        return <FundamentalistSpellCard key={index} spell={result}/>
                    })}
                </section>
                <h3>Hypothesis</h3>
                <section id="mastered-spell" className='box-holder innate'>
                    {spells.filter((spell) => {return spell.Tier == "Hypothesis"}).map((result, index) => {
                        return <FundamentalistSpellCard key={index} spell={result}/>
                    })}
                </section>
      

            </div>
        );
    }
    
    if(innateClasses.includes(currentClass)){
        return innateClass(currentClass);
    }
    else if(currentClass == "Fundamentalist"){
        return fundamentalistClass();
    }
    else return null;
}