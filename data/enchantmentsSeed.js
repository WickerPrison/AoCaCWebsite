const {getData, standardWrite} = require('./seedUtils');

async function getEnchantingEffects(){
    let data = await getData("EnchantingEffects");

    standardWrite('../client/src/data/enchantingEffects.js', "enchantingEffects", data)
}

getEnchantingEffects();

module.exports = {getEnchantingEffects};