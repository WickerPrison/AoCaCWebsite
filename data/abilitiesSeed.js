const {getData, standardWrite} = require('./seedUtils');
let abilities = [];

async function abilitiesCache(){
    if(abilities.length == 0){
        abilities = await getData("Abilities");
    }
    return abilities;
}

async function getAbilities(){
    let data = await abilitiesCache();

    standardWrite('../client/src/data/abilities.js', "abilities", data)
}

getAbilities();

module.exports = {getAbilities, abilitiesCache};