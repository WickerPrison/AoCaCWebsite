const {getData, standardWrite} = require('./seedUtils');

async function getAbilities(){
    let data = await getData("Abilities");

    standardWrite('../client/src/data/abilities.js', "abilities", data)
}

getAbilities();

module.exports = {getAbilities};