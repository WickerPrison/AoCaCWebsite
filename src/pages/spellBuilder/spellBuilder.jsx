import './spellBuilder.css';
import StaticHeader from "../../components/staticHeader";
import PageHeading from "../../components/pageHeading";
import {useState, useEffect} from 'react';

const Ranges ={
    ENGAGED: "ENGAGED",
    EXTENDED: "EXTENDED",
    SHORT: "SHORT",
    MEDIUM: "MEDIUM", 
    LONG: "LONG",
    EXTREME: "EXTREME"
}

const TargetTypes = {
    SINGLE: "SINGLE",
    MULTI: "MULTI",
    AREA: "AREA"
}

function SpellData(){
    this.range = Ranges.ENGAGED;
    this.targetType = TargetTypes.SINGLE;
    this.targetNum = 2;
}

export default function SpellBuilder(){
    let [spellData, setSpellData] = useState(new SpellData);

    function updateSpellData(property, value){
        let temp = {...spellData};
        temp[property] = value;
        console.log(temp);
        setSpellData(temp);
    }

    return (
        <main id="spell-builder">
            <StaticHeader/>
            <PageHeading title="Spell Builder"/>
            <p>Each time you cast a scholarly spell, you must make a Scholarly Magic skill check. The Difficulty of this skill check will depend on various factors. When you cast a scholarly spell, follow the steps listed below to determine the Difficulty of the Scholarly Magic skill check.</p>
            <h3 className="heading-band">Step 1. Choose the Maximum Range Band</h3>
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

            <h3 className="heading-band">Step 2. Choose a Targeting Type</h3>
            <section className="box-holder" id="targeting-box">
                <div className={`box ${spellData.targetType == TargetTypes.SINGLE ? "selected":null}`} onClick={() => updateSpellData("targetType", TargetTypes.SINGLE)}>
                    <h4>Single Target</h4>
                    <p>Choose a single target. Does not affect the Difficulty of the spell check.</p>
                </div>
                <div className={`box ${spellData.targetType == TargetTypes.MULTI ? "selected":null}`} onClick={() => updateSpellData("targetType", TargetTypes.MULTI)}>
                    <h4>Multi-Target</h4>
                    <h4>Number of Targets: <input className="can-point" type="number" value={spellData.targetNum} min="2" onChange={e => updateSpellData("targetNum", e.target.value)}/></h4>
                    <p>Choose 2 or more targets within your chosen range band. Increase the Difficulty of the spell check 1 time for each target chosen.</p>
                </div>
                <div className={`box ${spellData.targetType == TargetTypes.AREA ? "selected":null}`} onClick={() => updateSpellData("targetType", TargetTypes.AREA)}>
                    <h4>Area Target</h4>
                    <p>Choose a point within your chosen range band, all creatures within Engaged Range of this point are targeted by the spell. Upgrade the Difficulty of the spell check 3 times.</p>
                </div>
            </section>

            <h3 className="heading-band">Step 3. Choose Spell Effects</h3>
            <section className="box-holder" id="spell-effects-box">
                <p>Choose which Spell Effects to include in the spell. You may add the same Spell Effect multiple times. Each instance of a Spell Effect is referred to as a node. The total number of nodes included in a spell must be equal to or less than your Intellect.  For each node added to the spell, modify the skill check roll by the Casting Modifier</p>
                <button id="add-effect" className="box small-button">+ Add Spell Effect</button>
                <div className="box" id="spell-selection">
                    <ul>
                        <h3><li>Metamagic</li></h3>
                    </ul>
                    <ul>
                        <h3><li>Initiate</li></h3>
                    </ul>
                    <ul>
                        <h3><li>Adept</li></h3>
                    </ul>
                    <ul>
                        <h3><li>Magister</li></h3>
                    </ul>
                    <ul>
                        <h3><li>Arcanist</li></h3>
                    </ul>
                </div>
                <button id="clear-effects" className="box small-button">Clear All Effects</button>
            </section>

            {/* <h3 className="heading-band">Step 4. Assemble the Dice Pool</h3>
            <section className="box-holder">
                <p>Assemble all the dice for your Scholarly Magic skill check, including your Intellect and Magic Scholarly skill ranks, dice from Steps 1-3, and from other factors (environment, gear, talents, etc.).</p>
                <div className="box" id="custom-modifiers">
                    <h4 className="box-header">Custom Modifiers</h4>
                    <div id="pool-box">
                        <div className="pool-column">
                            <h4>Proficiency: <input id="proficiency" type="number" value="0" min="0" oninput="validity.valid||(value='');"/></h4>
                            <h4>Ability: <input id="ability" type="number" value="0" min="0" oninput="validity.valid||(value='');"/></h4>
                            <h4>Boost: <input id="boost" type="number" value="0" min="0" oninput="validity.valid||(value='');"/></h4>
                        </div>
                        <div className="pool-column">
                            <h4>Challenge: <input id="challenge" type="number" value="0" min="0" oninput="validity.valid||(value='');"/></h4>
                            <h4>Difficulty: <input id="difficulty" type="number" value="0" min="0" oninput="validity.valid||(value='');"/></h4>
                            <h4>Penalty: <input id="penalty" type="number" value="0" min="0" oninput="validity.valid||(value='');"/></h4>
                        </div>
                        <div className="pool-column">
                            <h4>Upgrade Difficulty: <input id="upgrade-diff" type="number" value="0" min="0" oninput="validity.valid||(value='');"/></h4>
                            <h4>Upgrade Ability: <input id="upgrade-abil" type="number" value="0" min="0" oninput="validity.valid||(value='');"/></h4>
                            <h4>Automatic Successes: <input id="auto-success" type="number" value="0"/></h4>
                        </div>
                    </div>
                    <button id="clear-custom" className="box can-point">
                        <h4>Clear Custom Modifiers</h4>
                    </button>
                </div>
                <button id="assemble-pool" className="box small-button">Assemble Dice Pool</button>
                <div className="box" id="output">
                    <h4 className="box-header">Final Dice Pool</h4>
                    <div id="pool-box">
                        <div className="pool-column">
                            <h4 id="proficiency-out">Proficiency: 0</h4>
                            <h4 id="ability-out">Ability: 0</h4>
                            <h4 id="boost-out">Boost: 0</h4>
                        </div>
                        <div className="pool-column">
                            <h4 id="challenge-out">Challenge: 0</h4>
                            <h4 id="difficulty-out">Difficulty: 0</h4>
                            <h4 id="penalty-out">Penalty: 0</h4>
                        </div>
                        <h4 id="auto-success-out">Automatic Successes: 0</h4>
                    </div>
                </div>
            </section> */}

            {/* <h3 className="heading-band">Step 5. Spend Stamina</h3>
            <section className="box-holder">
                <p>Casting a scholarly spell costs 1 Stamina.</p>
            </section> */}

            {/* <h3 className="heading-band">Step 6. Make Scholarly Magic Skill Check</h3>
            <section className="box-holder">
                <p>Make the skill check. If you fail the check you still lose the Stamina and your Action, but the effects of the spell do not occur. If you succeed, proceed to Step 7.</p>
                <button id="roll-dice" className="box small-button">Roll Dice</button>
                <div className="box" id="roll-results">
                    <h4 className="box-header">Results</h4>
                    <div id="results-holder">

                    </div>
                    <h4 className="box-header">Total</h4>
                    <div className="output-box">
                        <div className = "output-element">
                            <h4>Conquests: </h4>
                            <div className="dice-holder">
                                <img src="./Assets/SVG/d12.svg"/>
                                <h4 id="conquests">0</h4>
                            </div>
                        </div>
                        <div className = "output-element">
                            <h4>Calamities: </h4>
                            <div className="dice-holder">
                                <img src="./Assets/SVG/d12.svg"/>
                                <h4 id="calamities">0</h4>
                            </div>
                        </div>
                        <div className = "output-element">
                            <h4>Successes: </h4>
                            <div className="dice-holder">
                                <img src="./Assets/SVG/d12.svg"/>
                                <h4 id="successes">0</h4>
                            </div>
                        </div>
                        <div className = "output-element">
                            <h4>Advantage: </h4>
                            <div className="dice-holder">
                                <img src="./Assets/SVG/d12.svg"/>
                                <h4 id="advantage">0</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <h3 className="heading-band">Step 7. Resolve Spell Roll and Effects of Spell</h3>
            <section className="box-holder">
                <p>Each spell effect will affect each valid target in the area of the spell. The caster decides the order that the spell effects resolve when interacting with targets, but the effect order must be the same for all targets affected.</p>
            </section> */}
        </main>
    )
}