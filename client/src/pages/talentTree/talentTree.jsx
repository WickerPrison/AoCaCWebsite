import './talentTree.css';
import FixedHeader from '../../components/headerComponents/fixedHeader.jsx';
import PageHeading from '../../components/headerComponents/pageHeading.jsx';
import {talents} from '../../data/talents';
import {talentTrees} from '../../data/talentTrees.js';
import { useEffect, useState } from 'react';
import InnateSpells from './innateSpells.jsx';
import Loading from '../../components/loading.jsx';


export default function TalentTree() {
    
    let [talentList, setTalentList] = useState(talents);
    const currentClass = sessionStorage.getItem('className');
    const tree = talentTrees.find(tree => tree.Name == currentClass);

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
                <h3>Talent Tree</h3>
                <div id="tree-holder">
                    <section id="tree">
                        {tree.Talents.map((result, index) => {
                            return <div key={index} className="talent" data-content={getTalentDescription(result)}>{result}</div>
                        })}
                    </section>
                </div>
                <h3>Class Skills</h3>
                <h4 className='class-skills-description'>When you choose a class at character creation, you gain all the class skills for both the class and the field chosen. You also gain one free rank in four of the field's listed skills, as well as one free rank in two of the class's listed skills.</h4>
                <div className="class-skills-holder">
                    <h4 className='class-skills'>{tree.Name}: </h4>
                    <h4 className='class-skills'>{tree.ClassSkills}</h4>
                </div>

                <div className="class-skills-holder">
                    <h4 className='class-skills'>{tree.Field} Field: </h4>
                    <h4 className='class-skills'>{tree.FieldSkills}</h4>
                </div>
                <InnateSpells currentClass={currentClass}/>
                <h3>Talent Table</h3>
                <section id="talent-grid">
                    <div className="table-label">
                        <div className="table-talent">Talent</div>
                        <div className="table-description">Description</div>
                    </div>
                    {tree.Talents.map((result, index) => {
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