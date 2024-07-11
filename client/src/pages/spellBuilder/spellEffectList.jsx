export default function SpellEffectList({spellList, addSpellEffect}){
    return (
        <div className="box" id="spell-selection">
            <ul>
                <h3><li>Metamagic</li></h3>
                {spellList.metamagic.map((spell) => {
                return <li className="menu-option" key={spell.Name} onClick={() => addSpellEffect(spell)}>{spell.Name}</li>
            })}
            </ul>
            <ul>
                <h3><li>Initiate</li></h3>
                {spellList.initiate.map((spell) => {
                return <li className="menu-option" key={spell.Name} onClick={() => addSpellEffect(spell)}>{spell.Name}</li>
            })}
            </ul>
            <ul>
                <h3><li>Adept</li></h3>
                {spellList.adept.map((spell) => {
                return <li className="menu-option" key={spell.Name} onClick={() => addSpellEffect(spell)}>{spell.Name}</li>
            })}
            </ul>
            <ul>
                <h3><li>Magister</li></h3>
                {spellList.magister.map((spell) => {
                return <li className="menu-option" key={spell.Name} onClick={() => addSpellEffect(spell)}>{spell.Name}</li>
            })}
            </ul>
            <ul>
                <h3><li>Arcanist</li></h3>
                {spellList.arcanist.map((spell) => {
                return <li className="menu-option" key={spell.Name} onClick={() => addSpellEffect(spell)}>{spell.Name}</li>
            })}
            </ul>
        </div>
    )
}