const {getData, standardWrite} = require('./seedUtils');

async function getArmor(){
    let data = await getData("Armor");
    standardWrite('../client/src/data/armor.js', "armor", data)
}

getArmor();

module.exports = {getArmor};