export default function SpellEffectList({spellList, addSpellEffect}){
    return (
        <div className="box" id="spell-selection">
            <ul>
                <h3><li>Metamagic</li></h3>
                {spellList.filter((spell) => {return spell.Tier == "Metamagic"}).map((spell) => {
                return <li className="menu-option" key={spell.Name} onClick={() => addSpellEffect(spell)}>{spell.Name}</li>
            })}
            </ul>
            <ul>
                <h3><li>Initiate</li></h3>
                {spellList.filter((spell) => {return spell.Tier == "Initiate"}).map((spell) => {
                return <li className="menu-option" key={spell.Name} onClick={() => addSpellEffect(spell)}>{spell.Name}</li>
            })}
            </ul>
            <ul>
                <h3><li>Adept</li></h3>
                {spellList.filter((spell) => {return spell.Tier == "Adept"}).map((spell) => {
                return <li className="menu-option" key={spell.Name} onClick={() => addSpellEffect(spell)}>{spell.Name}</li>
            })}
            </ul>
            <ul>
                <h3><li>Magister</li></h3>
                {spellList.filter((spell) => {return spell.Tier == "Magister"}).map((spell) => {
                return <li className="menu-option" key={spell.Name} onClick={() => addSpellEffect(spell)}>{spell.Name}</li>
            })}
            </ul>
            <ul>
                <h3><li>Arcanist</li></h3>
                {spellList.filter((spell) => {return spell.Tier == "Arcanist"}).map((spell) => {
                return <li className="menu-option" key={spell.Name} onClick={() => addSpellEffect(spell)}>{spell.Name}</li>
            })}
            </ul>
        </div>
    )
}