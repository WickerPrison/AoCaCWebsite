export default function RangeSelector({spellData, Ranges, updateSpellData}){
    return (
        <section className="box-holder">
        <p>Choose a range band up to Extreme Range. Only creatures within your chosen range band can be selected as a target of the spell. Targeting yourself or anything in Extended Range is a Difficulty 0 base check, and the Difficulty of the skill check increases by 1 for each range band past Extended up to Extreme (Difficulty 4).</p>
        <div className="box small-button">
            <label id="range-dropdown" >Range Band: </label>
            <select name="ranges" id="ranges" value={spellData.range} onChange={(e) => {updateSpellData("range", e.target.value)}}>
                <option value={Ranges.ENGAGED}>Engaged (5cm)</option>
                <option value={Ranges.EXTENDED}>Extended (8cm)</option>
                <option value={Ranges.SHORT}>Short (15cm)</option>
                <option value={Ranges.MEDIUM}>Medium (30cm)</option>
                <option value={Ranges.LONG}>Long (70cm)</option>
                <option value={Ranges.EXTREME}>Extreme (120cm)</option>
            </select>
        </div>
    </section>
    )
}