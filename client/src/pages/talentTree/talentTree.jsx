import './talentTree.css';
import FixedHeader from '../../components/headerComponents/fixedHeader.jsx';
import PageHeading from '../../components/headerComponents/pageHeading.jsx';
import {talentTrees} from '../../data/talentTrees.js';
import { useEffect, useState } from 'react';
import InnateSpells from './innateSpells.jsx';
import Loading from '../../components/loading.jsx';
import getUrl from '../../utils/getUrl';


export default function TalentTree() {
    
    let [talentList, setTalentList] = useState([]);
    const currentClass = sessionStorage.getItem('className');

    function getTalentDescription(talentName){
        if(talentName.includes("Skill Proficiency")){
            talentName = "Skill Proficiency: ___";
        }
        else if(talentName.includes("Skill Mastery")){
            talentName = "Skill Mastery: ___";
        }
        else if(talentName.includes("Mastered Spell")){
            talentName = "Mastered Spell: ___"
        }
    
        var talent = talentList.find(function(talentEntry){
            return talentEntry.Name == talentName;
        })
        console.log(talent);
        return talent.Description;
    }
    
    useEffect(() => {
        async function getData(){
            try{
                const response = await fetch(getUrl() + '/api/data/talents', {
                    method: 'GET',
                    headers: { 'Content-Type': 'application/json' }
                })
    
                const data = await response.json();
                setTalentList(data);
            }
            catch(err){
                console.log(err);
            }
        }
        getData();

        console.log(talentTrees.find(tree => tree.Name == currentClass));
    }, [])

    if(talentList.length === 0){
        return (
            <main id="talent-tree">
                <FixedHeader/>
                <PageHeading title={currentClass}/>
                <Loading/>
            </main>
        )
    }
    else{
        return (
            <main id="talent-tree">
                <FixedHeader/>
                <PageHeading title={currentClass}/>
                {talentList.length > 0}
                <h3>Talent Tree</h3>
                <div id="tree-holder">
                    <section id="tree">
                        {talentTrees.find(tree => tree.Name == currentClass).Talents.map((result, index) => {
                            return <div key={index} className="talent" data-content={getTalentDescription(result)}>{result}</div>
                        })}
                    </section>
                </div>
                <InnateSpells currentClass={currentClass}/>
                <h3>Talent Table</h3>
                <section id="talent-grid">
                    <div className="table-label">
                        <div className="table-talent">Talent</div>
                        <div className="table-description">Description</div>
                    </div>
                    {talentTrees.find(tree => tree.Name == currentClass).Talents.map((result, index) => {
                        return (
                            <div className="talent-table-entry" key={index}>
                                <div className="table-talent">{result}</div>
                                <div className="table-description">{getTalentDescription(result)}</div>
                            </div>
                        );
                    })}
                </section>
                <footer></footer>
            </main>
        );
    }
}