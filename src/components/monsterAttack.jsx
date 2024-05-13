export default function MonsterAttack({attack}){
    return (
        <div className="attack-profile">
            <div className="attack-name clickable-text">{attack.Name}</div>
            <div className="monster-line"></div>
            <div className="attack-stats">
                <div className="attack-skill"><strong>Skill: </strong>{attack.Skill}</div>
                <div className="damage clickable-text"><strong>Damage: </strong>{attack.Damage}</div>
                <div className="range"><strong>Range: </strong> {attack.Range}</div>
                <div className="crit"><strong>Crit: </strong>{attack.Crit}</div>
            </div>
            <div className="properties"><strong>Properties: </strong>{attack.Properties}</div>
        </div>
    )
}