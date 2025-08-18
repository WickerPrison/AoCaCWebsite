import FlexibleTextarea from '../../components/flexibleTextarea';
import './monsterBuilder.css';

const conditions = ["Bleeding", "Blinded", "Burning", 'Charmed', "Deafened", "Disoriented", "Frightened", "Paralyzed", "Poisoned", "Sickened", "Staggered"];
const damageTypes = ["Physical", "Silver", "Radiant", "Necrotic", "Cold", "Fire", "Lightning", "Poison"];

export default function ResWeakImm({damageImmunities, setDamageImmunities, customImmunities, setCustomImmunities, weakResist, setWeakResist, conditionImmunities = null, setConditionImmunities = null}){
    
    function getImmunity(name){
        if((conditionImmunities != null && conditionImmunities.includes(name)) || damageImmunities.includes(name)){
            return true;
        }
        return false;
    }

    function setImmunity(e, name, damage = false){
        e.preventDefault();
        let temp;
        if(damage){
            temp = damageImmunities.slice();
        }
        else{
            temp = conditionImmunities.slice()
        }

        let index = temp.indexOf(name);
        if(index >= 0){
            temp.splice(index, 1);
            if(damage){
                let weakResistTemp = weakResist.slice();
                let weakResistIndex = weakResist.findIndex(x => x.name == name);
                if(index >= 0){
                    weakResistTemp.splice(weakResistIndex, 1);
                    setWeakResist(weakResistTemp);
                }
            }
        }
        else{
            temp.push(name);
        }

        if(damage){
            setDamageImmunities(temp);
        }
        else{
            setConditionImmunities(temp);
        }
    }

    function getResistance(name){
        let index = weakResist.findIndex(x => x.name == name);
        if(index >= 0){
            return weakResist[index].value;
        }
        else{
            return 0;
        }
    }

    function setResistance(name, value){
        let immuneIndex = damageImmunities.indexOf(name);
        if(immuneIndex >= 0) return;

        let index = weakResist.findIndex(x => x.name == name);
        let temp = weakResist.slice();
        if(index >= 0){
            temp[index].value = value;
        }
        else{
            temp.push({name: name, value: value});
        }
        setWeakResist(temp);
    }

    return(
        <div className="stats-grid">
            {conditionImmunities != null ?
            <>
                <div>Condition Immunities:</div>
                <div className='flex-grid-entries'>
                    {conditions.map((condition, index) => {
                        return(
                            <div className="immunity" key={condition}>
                                <label>{condition}: </label>
                                <button className={`checkbox ${getImmunity(condition) ? "show-check" : ""}`} onClick={(e) => setImmunity(e, condition)}>{"✔"}</button>
                            </div>
                        )
                    })}
                </div>
                <label className='full-width-label'>Custom Immunities: </label>
                <FlexibleTextarea input={customImmunities} setOutput={setCustomImmunities} classNames={"full-width-input"}/>
            </>
        :null}

            <div>Damage Immunities:</div>
            <div className='flex-grid-entries'>
                {damageTypes.map((damageType, index) => {
                    return(
                        <div className="immunity" key={damageType}>
                            <label>{damageType}: </label>
                            <button className={`checkbox ${getImmunity(damageType) ? "show-check" : ""}`} onClick={(e) => setImmunity(e, damageType, true)}>{"✔"}</button>
                        </div>
                    )
                })}
            </div>
            <div>Weaknesses & Resistances:</div>
            <div className='flex-grid-entries'>
                {damageTypes.map((damageType, index) => {
                    return(
                        <div className="immunity" key={damageType}>
                            <label>{damageType}: </label>
                            <input type="number" value={getResistance(damageType)} onChange={e => setResistance(damageType, e.target.value)}></input>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}