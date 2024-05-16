import './spellEffects.css';
import FixedHeader from '../../components/fixedHeader';
import PageHeading from '../../components/pageHeading';
import { useEffect, useState } from 'react';
import { singleFetch } from '../../js/getData';
import ScholarlySpellCard from '../../components/scholarlySpellCard';

const headerEntries = [
    { link: "#metamagics", label: "Metamagic"},
    { link: "#initiate", label: "Initiate"},
    { link: "#adept", label: "Adept"},
    { link: "#magister", label: "Magister"},
    { link: "#arcanist", label: "Arcanist"}
];

export default function SpellEffects() {
    let [spellList, setSpellList] = useState([]);

    useEffect(() => {
        async function getData(){
            setSpellList(await singleFetch("ScholarlySpells"));
        }
        getData();
    }, [])
    
    return (
        <main id="spell-effects">
            <FixedHeader entries={headerEntries}/>
            <PageHeading title="Spell Effect List"/>
            {spellList.length > 0 ? (
                <section id="effects-table">
                    <h3 className="tier-heading" id="metamagics">Metamagics</h3>
                    {spellList.filter((spell) => {return spell.Tier == "Metamagic"}).map((spell) => {
                        return <ScholarlySpellCard key={spell.Name} spell={spell}/>
                    })}
                    <h3 className="tier-heading" id="initiate">Initiate</h3>
                    {spellList.filter((spell) => {return spell.Tier == "Initiate"}).map((spell) => {
                        return <ScholarlySpellCard key={spell.Name} spell={spell}/>
                    })}
                    <h3 className="tier-heading" id="adept">Adept</h3>
                    {spellList.filter((spell) => {return spell.Tier == "Adept"}).map((spell) => {
                        return <ScholarlySpellCard key={spell.Name} spell={spell}/>
                    })}
                    <h3 className="tier-heading" id="magister">Magister</h3>
                    {spellList.filter((spell) => {return spell.Tier == "Magister"}).map((spell) => {
                        return <ScholarlySpellCard key={spell.Name} spell={spell}/>
                    })}
                    <h3 className="tier-heading" id="arcanist">Arcanist</h3>
                    {spellList.filter((spell) => {return spell.Tier == "Arcanist"}).map((spell) => {
                        return <ScholarlySpellCard key={spell.Name} spell={spell}/>
                    })}
                </section>
            ):null}
        </main>
    );
  }