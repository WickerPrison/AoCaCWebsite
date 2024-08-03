import './monsterBuilder.css';
import {skillsDict} from "../../js/skills";
import auth from '../../utils/auth';

const attributes = ["None", "Agility", "Brawn", "Cunning", "Intellect", "Presence", "Willpower"];
const damageAttributes = ["None", "Agility", "Brawn", "Brawn/Agility", "Cunning", "Intellect", "Presence", "Willpower"];
const ranges = ["Engaged", "Extended", "Short", "Medium", "Long", "Extreme", "Ballistic", "Artillery"];

export default function EditAttack({getStates}){
    const data = getStates();
    
    function togglePublic(evt){
        evt.preventDefault(); 
        if(data.official){
            data.setMakePublic(true);
            return;
        }
        data.setMakePublic(!data.makePublic);
    }

    function toggleOfficial(evt){
        evt.preventDefault();
        data.setOfficial(!data.official);
        if(!data.official){
            data.setMakePublic(true); 
        }
    }

    return(
        <div id="edit-attack" className='stats-grid'>
            <label className='full-width-label'>Name: </label>
            <input className="full-width-input" type="text" value={data.name} onChange={e => data.setName(e.target.value)}></input>
            <div className="flex-grid-entries">
                <div>
                    <label>Skill: </label>
                    <select value={data.skill} onChange={e => data.setSkill(e.target.value)}>
                        {Object.keys(skillsDict).map((key) => {
                            return(
                                <option key={key} value={key}>{key}</option>
                            )
                        })}
                    </select>
                </div>
                <div>
                    <label>Special Attribute: </label>
                    <select value={data.specialAttribute} onChange={e => data.setSpecialAttribute(e.target.value)}>
                        {attributes.map((attribute) => {
                            return(
                                <option key={attribute} value={attribute}>{attribute}</option>
                            )
                        })}
                    </select>
                </div>
            </div>
            <div className="flex-grid-entries">
                <div>
                    <label>Damage: </label>
                    <input type="number" value={data.damage} onChange={e => data.setDamage(e.target.value)} min="0"></input>
                </div>
                <div>
                    <label>Damage Attribute: </label>
                    <select value={data.damageAttribute} onChange={e => data.setDamageAttribute(e.target.value)}>
                        {damageAttributes.map((attribute) => {
                            return(
                                <option key={attribute} value={attribute}>{attribute}</option>
                            )
                        })}
                    </select>
                </div>
            </div>
            <div className="flex-grid-entries">
                <div>
                    <label>Range: </label>
                    <select value={data.range} onChange={e => data.setRange(e.target.value)}>
                        {ranges.map((range) => {
                            return(
                                <option key={range} value={range}>{range}</option>
                            )
                        })}
                    </select>
                </div>
                <div>
                    <label>Crit Rating: </label>
                    <input type="number" value={data.crit} onChange={e => data.setCrit(e.target.value)} min="0"></input>
                </div>
                <div>
                    <label>Accurate: </label>
                    <input type="number" value={data.accurate} onChange={e => data.setAccurate(e.target.value)} min="0"></input>
                </div>
            </div>
            <label className='full-width-label'>Properties: </label>
            <input className="full-width-input" type="text" value={data.properties} onChange={e => data.setProperties(e.target.value)}></input>
            <div className="make-public">
                <label>Make Public: </label>
                <button className={`checkbox ${data.makePublic ? "show-check" : ""}`} onClick={evt => togglePublic(evt)}>{"✔"}</button>
            </div>
            {auth.getProfile().data.isAdmin
            ?<div className="make-public">
                <label>Make Official: </label>
                <button className={`checkbox ${data.official ? "show-check" : ""}`} onClick={evt => toggleOfficial(evt)}>{"✔"}</button>
            </div>
            : null}
        </div>
    )
}