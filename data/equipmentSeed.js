const {getData, standardWrite} = require('./seedUtils');

async function getEquipment(){
    let data = await getData("Equipment");
    let equipment = {
        general: [],
        bomb: [],
        medicinal: [],
        potion: [],
        misc: [],
        wondrous: []
    }

    for(let i = 0; i < data.length; i++){
        equipment[data[i].Category.toLowerCase()].push(data[i]);
    }

    standardWrite('../client/src/data/equipment.js', "equipment", equipment)
}

getEquipment();

module.exports = {getEquipment};