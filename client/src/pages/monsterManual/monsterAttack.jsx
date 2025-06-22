import {useState} from 'react';
import { RollData} from '../../js/rollDice';
import {skillsDict} from "../../js/skills";

export default function MonsterAttack({attack, monster, setRoll, setShowRoll, monsterData}){
    let [damageDisplay, setDamageDisplay] = useState(false);

    function getDamageAttribute(){
        if(attack.attribute == "None" && attack.halfAttribute == "None") return 0;

        let attribute = 0;
        if(attack.attribute != "None"){
            if(attack.finesse && Number(monster.agility) > Number(monster[attack.attribute.toLowerCase()])){
                attribute += Number(monster.agility);
            }
            else{
                attribute += Number(monster[attack.attribute.toLowerCase()]);
            }
        }

        if(attack.halfAttribute != "None"){
            if(attack.finesse && Number(monster.agility) > Number(monster[attack.halfAttribute.toLowerCase()])){
                attribute += Math.ceil(Number(monster.agility) / 2);
            }
            else{
                attribute += Math.ceil(Number(monster[attack.halfAttribute.toLowerCase()]) / 2);
            }
        }
        return attribute;
    }

    function getDamageAttributeDisplay(){
        if(attack.halfAttribute == "None") return attack.attribute;
        return attack.halfAttribute + "/2";
    }

    function attackRoll(){
        let skills = monster.skills;
        let skillAttribute = skillsDict[attack.skill].reduce(
            (largest, current) => monster[current.toLowerCase()] > monster[largest.toLowerCase()] ? current:largest
            , skillsDict[attack.skill][0]
        );

        let attribute = skillAttribute.toLowerCase();

        if(attack.attribute != "None"){
            attribute = attack.attribute.toLowerCase();
        }

        if(attack.finesse && monster.agility > monster[attribute]){
            attribute = "agility";
        }

        if(attack.specialAttribute && monster[attack.specialAttribute.toLowerCase()] > monster[attribute]){
            attribute = attack.specialAttribute.toLowerCase();
        }
        
        let skillRanks = 0;
        for(let i = 0; i < skills.length; i++){
            if(skills[i].name == attack.skill){
                skillRanks = monster.tier == "Swarm" && monsterData ? monsterData.hp : skills[i].value;
                break;
            }
        }

        let newRoll = new RollData();
        newRoll.monsterName = monster.name;
        newRoll.name = monster.name + " " + attack.name;
        newRoll.challenge = 1;
        newRoll.difficulty = 1;
        if(skillRanks > monster[attribute]){
            newRoll.ability = skillRanks;
            newRoll.upgradeAbility = monster[attribute];
        }
        else{
            newRoll.ability = monster[attribute];
            newRoll.upgradeAbility = skillRanks;
        }
        setRoll(newRoll);
        setShowRoll(true);
    }
    
    return (
        <div className="attack-profile">
            <div className="attack-name clickable-text" onClick={attackRoll}><strong>{attack.name}</strong></div>
            <div className="monster-line"></div>
            <div className="attack-stats">
                <div className="attack-skill"><strong>Skill: </strong>{attack.skill}</div>
                {damageDisplay ?
                (<div className="damage clickable-text" onClick={() => setDamageDisplay(false)}><strong>Damage: </strong>{attack.damage} + {getDamageAttributeDisplay()}</div>)
                :(<div className="damage clickable-text" onClick={() => setDamageDisplay(true)}><strong>Damage: </strong>{Number(attack.damage) + getDamageAttribute()}</div>)
                }
                <div className="range"><strong>Range: </strong> {attack.range}</div>
                <div className="crit"><strong>Crit: </strong>{attack.crit}</div>
            </div>
            <div className="properties"><strong>Properties: </strong>{attack.properties}</div>
        </div>
    )
}