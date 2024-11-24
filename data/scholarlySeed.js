const {getData, standardWrite} = require('./seedUtils');

async function getSpellEffects(){
    let data = await getData("ScholarlySpells");
    let spellEffects = {
        metamagic: [],
        initiate: [],
        adept: [],
        magister: [],
        arcanist: []
    }

    for(let i = 0; i < data.length; i++){
        spellEffects[data[i].Tier.toLowerCase()].push(data[i]);
    }

    standardWrite('../client/src/data/scholarlySpellEffects.js', "spellEffects", spellEffects)
}

getSpellEffects();

module.exports = {getSpellEffects};