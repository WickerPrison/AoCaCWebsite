import {useState} from 'react';
import { RollData} from '../../js/rollDice';
import {skillsDict} from "../../js/skills";

export default function MonsterAttack({attack, monster, setRoll, setShowRoll, monsterData}){
    let [damageDisplay, setDamageDisplay] = useState(false);

    function getAttribute(){
        if(attack.attribute == "None") return 0;
        let attackAttributes = attack.attribute.split("/");
        let attribute = attackAttributes.reduce(
            (largest, current) => monster[current.toLowerCase()] > monster[largest.toLowerCase()] ? current:largest
            , attackAttributes[0]);
        return Number(monster[attribute.toLowerCase()]);
    }

    function attackRoll(){
        let skills = monster.skills;
        let skillAttribute = skillsDict[attack.skill].reduce(
            (largest, current) => monster[current.toLowerCase()] > monster[largest.toLowerCase()] ? current:largest
            , skillsDict[attack.skill][0]
        );
            

        let attribute;
        switch(attack.attribute){
            case "None":
                attribute = skillAttribute;
                break;
            case "Brawn/Agility":
                if(monster.brawn > monster.agility){
                    attribute = "brawn";
                }
                else{
                    attribute = "agility";
                }
                break;
            default:
                attribute = attack.attribute;
        }

        if(attack.specialAttribute && monster[attack.specialAttribute.toLowerCase()] > monster[attribute.toLowerCase()]){
            attribute = attack.specialAttribute;
        }

        attribute = attribute.toLowerCase();
        
        let skillRanks = 0;
        for(let i = 0; i < skills.length; i++){
            if(skills[i].name == attack.skill){
                skillRanks = monster.tier == "Swarm" && monsterData ? monsterData.hp : skills[i].value;
                break;
            }
        }

        let newRoll = new RollData();
        newRoll.name = monster.name + " " + attack.name;
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
                (<div className="damage clickable-text" onClick={() => setDamageDisplay(false)}><strong>Damage: </strong>{attack.damage} + {attack.attribute}</div>)
                :(<div className="damage clickable-text" onClick={() => setDamageDisplay(true)}><strong>Damage: </strong>{Number(attack.damage) + getAttribute()}</div>)
                }
                <div className="range"><strong>Range: </strong> {attack.range}</div>
                <div className="crit"><strong>Crit: </strong>{attack.crit}</div>
            </div>
            <div className="properties"><strong>Properties: </strong>{attack.properties}</div>
        </div>
    )
}