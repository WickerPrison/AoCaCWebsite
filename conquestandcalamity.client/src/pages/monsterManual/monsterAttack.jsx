import {useState} from 'react';
import { RollData, RollStorage } from '../../js/rollDice';
import skillsDict from "../../js/skills";

export default function MonsterAttack({attack, monster, setRoll, setShowRoll}){
    let [damageDisplay, setDamageDisplay] = useState(false);

    function getAttribute(){
        if(attack.Attribute == "None") return 0;
        let attackAttributes = attack.Attribute.split("/");
        let attribute = attackAttributes.reduce(
            (largest, current) => monster[current] > monster[largest] ? current:largest
            , attackAttributes[0]);
        return Number(monster[attribute]);
    }

    function attackRoll(){
        let skills = monster.Skills.split(', ');
        let skillAttribute = skillsDict[attack.Skill].reduce(
            (largest, current) => monster[current] > monster[largest] ? current:largest
            , skillsDict[attack.Skill][0]
        );
            

        let attribute;
        switch(attack.Attribute){
            case "None":
                attribute = skillAttribute;
                break;
            case "Brawn/Agility":
                if(monster.Brawn > monster.Agility){
                    attribute = "Brawn";
                }
                else{
                    attribute = "Agility";
                }
                break;
            default:
                attribute = attack.Attribute;
        }

        console.log(attribute);
        if(attack.SpecialAttribute && monster[attack.SpecialAttribute] > monster[attribute]){
            attribute = attack.SpecialAttribute;
        }
        console.log(attribute);
        

        let skillRanks = 0;
        for(let i = 0; i < skills.length; i++){
            let skill = skills[i].split(" ");
            if(skill.length == 3){
                skill[0] = skill[0] + " " + skill[1];
                skill.splice(1, 1);
            }
            if(skill[0] == attack.Skill){
                skillRanks = skill[1];
                break;
            }
        }

        let newRoll = new RollStorage();
        newRoll.name = monster.Name + " " + attack.Name;
        newRoll.rollData = new RollData();
        if(skillRanks > monster[attribute]){
            newRoll.rollData.ability = skillRanks;
            newRoll.rollData.upgradeAbility = monster[attribute];
        }
        else{
            newRoll.rollData.ability = monster[attribute];
            newRoll.rollData.upgradeAbility = skillRanks;
        }
        setRoll(newRoll);
        setShowRoll(true);
    }
    
    return (
        <div className="attack-profile">
            <div className="attack-name clickable-text" onClick={attackRoll}><strong>{attack.Name}</strong></div>
            <div className="monster-line"></div>
            <div className="attack-stats">
                <div className="attack-skill"><strong>Skill: </strong>{attack.Skill}</div>
                {damageDisplay ?
                (<div className="damage clickable-text" onClick={() => setDamageDisplay(false)}><strong>Damage: </strong>{attack.Damage} + {attack.Attribute}</div>)
                :(<div className="damage clickable-text" onClick={() => setDamageDisplay(true)}><strong>Damage: </strong>{Number(attack.Damage) + getAttribute()}</div>)
                }
                <div className="range"><strong>Range: </strong> {attack.Range}</div>
                <div className="crit"><strong>Crit: </strong>{attack.Crit}</div>
            </div>
            <div className="properties"><strong>Properties: </strong>{attack.Properties}</div>
        </div>
    )
}