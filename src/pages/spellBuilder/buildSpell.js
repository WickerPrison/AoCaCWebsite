import { RollData } from "../../js/rollDice";

const Ranges ={
    ENGAGED: "ENGAGED",
    EXTENDED: "EXTENDED",
    SHORT: "SHORT",
    MEDIUM: "MEDIUM", 
    LONG: "LONG",
    EXTREME: "EXTREME"
}

const RangeValues={
    "ENGAGED": 0,
    "EXTENDED": 0,
    "SHORT": 1,
    "MEDIUM": 2, 
    "LONG": 3,
    "EXTREME": 4
}

const TargetTypes = {
    SINGLE: "SINGLE",
    MULTI: "MULTI",
    AREA: "AREA"
}

const modTypes = ["proficiency", "ability", "boost", "challenge", "difficulty", "penalty", "upgradeDifficulty", "upgradeAbility", "autoSuccess"]

function assembleDicePool(spellData){
    let pool = new RollData();
    // ranges
    pool.difficulty += Number(RangeValues[spellData.range]);

    // targeting types
    if(spellData.targetType == TargetTypes.MULTI){
        pool.difficulty += Number(spellData.targetNum);
    }
    else if(spellData.targetType == TargetTypes.AREA){
        pool.upgradeDifficulty += 3;
    }

    // modifiers from spell effects
    for(let i = 0; i < spellData.currentEffects.length; i++){
        pool.difficulty += Number(spellData.currentEffects[i].Difficulty) * spellData.currentEffects[i].nodes;
        pool.upgradeDifficulty += Number(spellData.currentEffects[i].Upgrades) * spellData.currentEffects[i].nodes;
        pool.penalty += Number(spellData.currentEffects[i].Penalty) * spellData.currentEffects[i].nodes;
    }
    
    // add custom modifiers
    for(let i = 0; i < modTypes.length; i++){
        pool[modTypes[i]] += Number(spellData.customMods[modTypes[i]]);
    }

    // apply upgrades
    for(var i = 0; i < pool.upgradeAbility;i++){
        if(pool.ability > 0){
            pool.ability--;
            pool.proficiency++;
        }
        else{
            pool.ability++;
        }
    }

    for(var i = 0; i < pool.upgradeDifficulty;i++){
        if(pool.difficulty > 0){
            pool.difficulty--;
            pool.challenge++;
        }
        else{
            pool.difficulty++;
        }
    }
    
    return pool;
}

export {assembleDicePool, Ranges, TargetTypes}