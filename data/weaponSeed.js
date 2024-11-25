const {getData, standardWrite} = require('./seedUtils');

async function getWeapons(){
    let data = await getData("Weapons");

    let weapons = {
        brawl: [],
        light: [],
        heavy: [],
        ranged: []
    }

    for(let i = 0; i < data.length; i++){
        switch(data[i].Skill){
            case "Brawl":
                weapons.brawl.push(data[i]);
                break;
            case "Light Weapons":
                weapons.light.push(data[i]);
                break;
            case "Heavy Weapons":
                weapons.heavy.push(data[i]);
                break;
            case "Ranged":
                weapons.ranged.push(data[i]);
                break;
        }
    }

    standardWrite('../client/src/data/weapons.js', "weapons", weapons)
}

getWeapons();

module.exports = {getWeapons};