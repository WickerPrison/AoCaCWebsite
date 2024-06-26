import './talentTree.css';
import FixedHeader from '../../components/fixedHeader.jsx';
import PageHeading from '../../components/pageHeading.jsx';
import skillTrees from './talentTrees.js';
import {singleFetch} from '../../js/getData.js';
import { useEffect, useState } from 'react';
import InnateSpells from './innateSpells.jsx';
import Loading from '../../components/loading.jsx';


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
        return talent.Description;
    }
    
    useEffect(() => {
        async function getData(){
            setTalentList(await singleFetch("Talents"));
        }
        getData();
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
                        {skillTrees[currentClass].map((result, index) => {
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
                    {skillTrees[currentClass].map((result, index) => {
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