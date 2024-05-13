import {useState} from 'react';

export default function MonsterAttack({attack, monster}){
    let [damageDisplay, setDamageDisplay] = useState(false);

    const calculateDamage = () => {
        var damageNum = Number(attack.Damage);
        switch (attack.Attribute){
            case "None":
                break;
            case "Brawn/Agility":
                if(monster.Brawn > monster.Agility){
                    damageNum += Number(monster.Brawn);
                }
                else{
                    damageNum += Number(monster.Agility);
                }
                break;
            default:
                damageNum += Number(monster[attack.Attribute]);
                break;
        }
        return damageNum;
    }
    
    return (
        <div className="attack-profile">
            <div className="attack-name clickable-text"><strong>{attack.Name}</strong></div>
            <div className="monster-line"></div>
            <div className="attack-stats">
                <div className="attack-skill"><strong>Skill: </strong>{attack.Skill}</div>
                {damageDisplay ?
                (<div className="damage clickable-text" onClick={() => setDamageDisplay(false)}><strong>Damage: </strong>{attack.Damage} + {attack.Attribute}</div>)
                :(<div className="damage clickable-text" onClick={() => setDamageDisplay(true)}><strong>Damage: </strong>{calculateDamage()}</div>)
                }
                <div className="range"><strong>Range: </strong> {attack.Range}</div>
                <div className="crit"><strong>Crit: </strong>{attack.Crit}</div>
            </div>
            <div className="properties"><strong>Properties: </strong>{attack.Properties}</div>
        </div>
    )
}