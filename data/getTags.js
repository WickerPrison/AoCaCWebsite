const {abilitiesCache} = require('./abilitiesSeed');

async function getAbilityTags(textString){
    let abilities = await abilitiesCache();
    let tags = [];
    for(let i = 0; i < abilities.length; i++){
        if(textString.includes(abilities[i].Name)){
            tags.push({type: "Abilities", name: abilities[i].Name})
        }
    }
    return tags;
}

module.exports = {getAbilityTags}
