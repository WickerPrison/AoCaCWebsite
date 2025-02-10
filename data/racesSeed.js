const {getData, standardWrite} = require('./seedUtils');
const {getAbilityTags, getTalentTags} = require('./getTags');

async function getRaces(){
    let data = await getData("Races");

    const races = [];
    for(let i = 0; i < data.length; i++){
        if(data[i].IsDone == 1){
            delete data[i].IsDone;
            if(data[i].Stats != ""){
                data[i].Abilities = data[i].Stats + ". " + data[i].Abilities;
            }
            delete data[i].Stats;

            data[i].tags = await getAbilityTags(data[i].Abilities);
            data[i].tags = await getTalentTags(data[i].Abilities, data[i].tags);

            races.push(data[i]);
        }
    }

    standardWrite('../client/src/data/races.js', "races", races)
}

getRaces();

module.exports = {getRaces};