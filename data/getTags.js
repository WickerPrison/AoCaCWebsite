const {abilitiesCache} = require('./abilitiesSeed');
const {talentsCache} = require('./talentsSeed');

async function getAbilityTags(textString, tags = []){
    let abilities = await abilitiesCache();
    for(let i = 0; i < abilities.length; i++){
        if(textString.includes(abilities[i].Name)){
            tags.push({type: "Abilities", name: abilities[i].Name})
        }
    }
    return tags;
}

async function getTalentTags(textString, tags=[]){
    let talents = await talentsCache();
    for(let i = 0; i < talents.length; i++){
        if(textString.includes(talents[i].Name)){
            tags.push({type: "Talents", name: talents[i].Name})
        }
    }
    return tags;
}

module.exports = {getAbilityTags, getTalentTags}
