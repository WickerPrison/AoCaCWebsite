import { useEffect, useState } from 'react';
import { singleFetch } from "../../js/getData";
import InnateSpellCard from './innateSpellCard';
import FundamentalistSpellCard from './fundamentalistSpellCard';
import getUrl from '../../utils/getUrl';

const innateClasses = ["Channeler", "Druid", "Sage", "Shapeshifter"];

export default function InnateSpells({currentClass}) {
    let [spells, setSpells] = useState([]);

    useEffect(() => {
        async function getData(){
            try{
                const response = await fetch(getUrl() + '/api/data/innatespells/' + currentClass, {
                    method: 'GET',
                    headers: { 'Content-Type': 'application/json' }
                })
    
                const data = await response.json();
                setSpells(data);
            }
            catch(err){
                console.log(err);
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