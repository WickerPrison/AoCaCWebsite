const {standardWrite} = require('./seedUtils');
const {talentsCache} = require('./talentsCache');
const {getAbilityTags, getTalentTags} = require('./getTags');


async function getTalents(){
    talents = await talentsCache();
    for(let i = 0; i < talents.length; i++){
        talents[i].tags = await getAbilityTags(talents[i].Description);
        talents[i].tags = await getTalentTags(talents[i].Description, talents[i].tags);
    }
    standardWrite('../client/src/data/talents.js', "talents", talents)
}

getTalents();

module.exports = {getTalents};