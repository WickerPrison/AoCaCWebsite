const {getData, standardWrite} = require('./seedUtils');

async function getCriticalInjuries(){
    let data = await getData("CriticalInjuries");
    standardWrite('../client/src/data/criticalInjuries.js', "criticalInjuries", data)
}

getCriticalInjuries();

module.exports = {getCriticalInjuries};