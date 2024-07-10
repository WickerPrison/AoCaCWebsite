import './spellEffects.css';
import FixedHeader from '../../components/headerComponents/fixedHeader';
import PageHeading from '../../components/headerComponents/pageHeading';
import { useEffect, useState } from 'react';
import { singleFetch } from '../../js/getData';
import ScholarlySpellCard from '../../components/scholarlySpellCard';
import Loading from '../../components/loading';
import Filters from '../../components/filters';
import getUrl from '../../utils/getUrl';

const filterArray = [
    {
        category: "Tier",
        options: ["Metamagic", "Initiate", "Adept","Magister", "Arcanist"]
    }
]

const headerEntries = [
    { link: "#Metamagic", label: "Metamagic"},
    { link: "#Initiate", label: "Initiate"},
    { link: "#Adept", label: "Adept"},
    { link: "#Magister", label: "Magister"},
    { link: "#Arcanist", label: "Arcanist"}
];

export default function SpellEffects() {
    let [spellList, setSpellList] = useState([]);
    let [spellDisplay, setSpellDisplay] = useState([]);

    useEffect(() => {
        async function getData() {
            try{
                const response = await fetch(getUrl() + '/api/data/spelleffects', {
                    method: 'GET',
                    headers: { 'Content-Type': 'application/json' }
                })
    
                const data = await response.json();
                setSpellList(data);
                setSpellDisplay(data);
            }
            catch(err){
                console.log(err);
            }
        };
        getData();
    }, [])
    

    if(spellList.length <= 0){
        return(
            <main id="spell-effects">
                <FixedHeader entries={headerEntries}/>
                <PageHeading title="Spell Effect List"/>
                <Loading/>
            </main>
        )
    }
    else{
        return (
            <main id="spell-effects">
                <FixedHeader entries={headerEntries}/>
                <PageHeading title="Spell Effect List"/>
                <Filters input={spellList} setOutput={setSpellDisplay} filterArray={filterArray} title="Filter"/>
                <section id="effects-table">
                    {spellDisplay.map((spell, index) => {
                        if(index == 0){
                            return (<div key={index} id={spell.Tier}>
                                <h3 className="tier-heading">{spell.Tier}</h3>
                                <ScholarlySpellCard key={spell.Name} spell={spell}/>
                            </div>)
                        }

                        if(spell.Tier != spellDisplay[index - 1].Tier){
                            return (<div key={index} id={spell.Tier}>
                                <h3 className="tier-heading">{spell.Tier}</h3>
                                <ScholarlySpellCard key={spell.Name} spell={spell}/>
                            </div>)
                        }

                        return <ScholarlySpellCard key={spell.Name} spell={spell}/>
                    })}

                        {/* <h3 className="tier-heading" id="metamagics">Metamagics</h3>
                        {spellDisplay.filter((spell) => {return spell.Tier == "Metamagic"}).map((spell) => {
                            return <ScholarlySpellCard key={spell.Name} spell={spell}/>
                        })}
                        <h3 className="tier-heading" id="initiate">Initiate</h3>
                        {spellDisplay.filter((spell) => {return spell.Tier == "Initiate"}).map((spell) => {
                            return <ScholarlySpellCard key={spell.Name} spell={spell}/>
                        })}
                        <h3 className="tier-heading" id="adept">Adept</h3>
                        {spellDisplay.filter((spell) => {return spell.Tier == "Adept"}).map((spell) => {
                            return <ScholarlySpellCard key={spell.Name} spell={spell}/>
                        })}
                        <h3 className="tier-heading" id="magister">Magister</h3>
                        {spellDisplay.filter((spell) => {return spell.Tier == "Magister"}).map((spell) => {
                            return <ScholarlySpellCard key={spell.Name} spell={spell}/>
                        })}
                        <h3 className="tier-heading" id="arcanist">Arcanist</h3>
                        {spellDisplay.filter((spell) => {return spell.Tier == "Arcanist"}).map((spell) => {
                            return <ScholarlySpellCard key={spell.Name} spell={spell}/>
                        })} */}
                </section>
            </main>
        );

    }
  }