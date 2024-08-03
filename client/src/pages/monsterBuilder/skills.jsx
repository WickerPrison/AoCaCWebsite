import { useCallback, useEffect } from "react";
import "./monsterBuilder.css";
import {combatSkills,
    generalSkills,
    fabricationSkills,
    knowledgeSkills,
    magicSkills, 
    speechSkills,
    stealthSkills} from "../../js/skills";

export default function Skills({skills, setSkills}){

    function setSkill(skillName, value){
        let temp = skills.slice();
        const index = skills.findIndex(x => x.name == skillName);
        if(index >= 0 ){
            if(value == 0){
                temp.splice(index, 1);
            }
            else{
                temp[index].value = value;
            }
        }
        else if(value > 0){
            temp.push({
                name: skillName,
                value: value
            });
        }
        console.log(temp);
        setSkills(temp);
    }

    function getSkillValue(skillName){
        const index = skills.findIndex(x => x.name == skillName);
        if(index >= 0){
            return skills[index].value;
        }
        else return 0;
    }
    
    return(
        <div className="stats-grid">
            <div>Combat Skills: </div>
            <div className="flex-grid-entries">
                {combatSkills.map((skill, index) => {
                    return(
                        <div className="skill" key={skill[0]}>
                            <label>{skill[0] + " (" + skill[1] + "): " }</label>
                            <input type="number" value={getSkillValue(skill[0])} onChange={e => setSkill(skill[0], e.target.value)} min="0"></input>
                        </div>
                    )
                })}
            </div>
            <div className="line"></div>
            <div>General Skills: </div>
            <div className="flex-grid-entries">
                {generalSkills.map((skill, index) => {
                    return(
                        <div className="skill" key={skill[0]}>
                            <label>{skill[0] + " (" + skill[1] + "): " }</label>
                            <input type="number" value={getSkillValue(skill[0])} onChange={e => setSkill(skill[0], e.target.value)} min="0"></input>
                        </div>
                    )
                })}
            </div>
            <div className="line"></div>
            <div>Fabrication Skills: </div>
            <div className="flex-grid-entries">
                {fabricationSkills.map((skill, index) => {
                    return(
                        <div className="skill" key={skill[0]}>
                            <label>{skill[0] + " (" + skill[1] + "): " }</label>
                            <input type="number" value={getSkillValue(skill[0])} onChange={e => setSkill(skill[0], e.target.value)} min="0"></input>
                        </div>
                    )
                })}
            </div>
            <div className="line"></div>
            <div>Knowledge Skills: </div>
            <div className="flex-grid-entries">
                {knowledgeSkills.map((skill, index) => {
                    return(
                        <div className="skill" key={skill[0]}>
                            <label>{skill[0] + " (" + skill[1] + "): " }</label>
                            <input type="number" value={getSkillValue(skill[0])} onChange={e => setSkill(skill[0], e.target.value)} min="0"></input>
                        </div>
                    )
                })}
            </div>
            <div className="line"></div>
            <div>Magic Skills: </div>
            <div className="flex-grid-entries">
                {magicSkills.map((skill, index) => {
                    return(
                        <div className="skill" key={skill[0]}>
                            <label>{skill[0] + " (" + skill[1] + "): " }</label>
                            <input type="number" value={getSkillValue(skill[0])} onChange={e => setSkill(skill[0], e.target.value)} min="0"></input>
                        </div>
                    )
                })}
            </div>
            <div className="line"></div>
            <div>Speech Skills: </div>
            <div className="flex-grid-entries">
                {speechSkills.map((skill, index) => {
                    return(
                        <div className="skill" key={skill[0]}>
                            <label>{skill[0] + " (" + skill[1] + "): " }</label>
                            <input type="number" value={getSkillValue(skill[0])} onChange={e => setSkill(skill[0], e.target.value)} min="0"></input>
                        </div>
                    )
                })}
            </div>
            <div className="line"></div>
            <div>Stealth Skills: </div>
            <div className="flex-grid-entries">
                {stealthSkills.map((skill, index) => {
                    return(
                        <div className="skill" key={skill[0]}>
                            <label>{skill[0] + " (" + skill[1] + "): " }</label>
                            <input type="number" value={getSkillValue(skill[0])} onChange={e => setSkill(skill[0], e.target.value)} min="0"></input>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}