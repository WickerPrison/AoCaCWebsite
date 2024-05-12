export default function Roll(){
    return (
        <div className="box roll-box">
            <button className="remove-button">X</button>
            <div className="box-header">
                <input className="roll-title" type="text" defaultValue="New Roll"></input>
            </div>  
            <div className="input-box">
                <div className="input-column">
                    <h4>Proficiency: <input className="proficiency" type="number" defaultValue="0" min="0" onInput={() => {validity.valid||(value='')}}/></h4>
                    <h4>Ability: <input className="ability" type="number" defaultValue="0" min="0" onInput={() => {validity.valid||(value='')}}/></h4>
                    <h4>Boost: <input className="boost" type="number" defaultValue="0" min="0" onInput={() => {validity.valid||(value='')}}/></h4>
                </div>
                <div className="input-column">
                    <h4>Challenge: <input className="challenge" type="number" defaultValue="0" min="0" onInput={() => {validity.valid||(value='')}}/></h4>
                    <h4>Difficulty: <input className="difficulty" type="number" defaultValue="0" min="0" onInput={() => {validity.valid||(value='')}}/></h4>
                    <h4>Penalty: <input className="penalty" type="number" defaultValue="0" min="0" onInput={() => {validity.valid||(value='')}}/></h4>
                </div>
                <div className="input-column">
                    <h4>Upgrade Difficulty: <input className="upgrade-diff" type="number" defaultValue="0" min="0" onInput={() => {validity.valid||(value='')}}/></h4>
                    <h4>Upgrade Ability: <input className="upgrade-abil" type="number" defaultValue="0" min="0" onInput={() => {validity.valid||(value='')}}/></h4>
                    <h4>Automatic Successes: <input className="auto-success" type="number" defaultValue="0"/></h4>
                </div>
            </div>
            <div className="button-box">
                <button className="dice-button can-point clear">Clear</button>
                <button className="dice-button apply-upgrades">Apply Upgrades</button>
                <button className="dice-button roll-dice">Roll Dice</button>
            </div>
            <h4 className="card-banner">Results</h4>
            <div className="results-holder">

            </div>
            <h4 className="card-banner">Totals</h4>
            <div className="output-box">
                <div className = "output-element">
                    <h4>Conquests: </h4>
                    <div className="dice-holder">
                        <img src="/public/SVG/d12.svg"/>
                        <h4 className="conquests">0</h4>
                    </div>
                </div>
                <div className = "output-element">
                    <h4>Calamities: </h4>
                    <div className="dice-holder">
                        <img src="/public/SVG/d12.svg"/>
                        <h4 className="calamities">0</h4>
                    </div>
                </div>
                <div className = "output-element">
                    <h4>Successes: </h4>
                    <div className="dice-holder">
                        <img src="/public/SVG/d12.svg"/>
                        <h4 className="successes">0</h4>
                    </div>
                </div>
                <div className ="output-element">
                    <h4>Advantage: </h4>
                    <div className="dice-holder">
                        <img src="/public/SVG/d12.svg"/>
                        <h4 className="advantage">0</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}