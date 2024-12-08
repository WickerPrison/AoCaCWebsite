const {getData, standardWrite} = require('./seedUtils');

async function getArmor(){
    let data = await getData("Armor");

    let armor = {
        light: [],
        medium: [],
        heavy: []
    }

    for(let i = 0; i < data.length; i++){
        switch(data[i].Tier){
            case "Light":
                armor.light.push(data[i]);
                break;
            case "Medium":
                armor.medium.push(data[i]);
                break;
            case "Heavy":
                armor.heavy.push(data[i]);
                break;
        }
    }

    standardWrite('../client/src/data/armor.js', "armor", armor)
}

getArmor();

module.exports = {getArmor};