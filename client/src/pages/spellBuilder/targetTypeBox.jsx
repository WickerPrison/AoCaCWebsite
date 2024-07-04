const title={
    "SINGLE": "Single Target",
    "MULTI": "Multi-Target",
    "AREA": "Area Target"
}

const text={
    "SINGLE": "Choose a single target. Does not affect the Difficulty of the spell check.",
    "MULTI": "Choose 2 or more targets within your chosen range band. Increase the Difficulty of the spell check 1 time for each target chosen.",
    "AREA": "Choose a point within your chosen range band, all creatures within Engaged Range of this point are targeted by the spell. Upgrade the Difficulty of the spell check 3 times."
}

export default function TargetTypeBox({spellData, updateSpellData, myType}){
    return(
        <div className={`box ${spellData.targetType == myType ? "selected":null}`} onClick={() => updateSpellData("targetType", myType)}>
        <h4>{title[myType]}</h4>
        {myType == "MULTI" ? (
            <h4>Number of Targets: <input className="can-point" type="number" value={spellData.targetNum} min="2" onChange={e => updateSpellData("targetNum", e.target.value)}/></h4>
        ):null}
        <p>{text[myType]}</p>
    </div>
    )
}