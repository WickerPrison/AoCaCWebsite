const {getData, standardWrite} = require('./seedUtils');

function getWeaponData(){
    getWeapons();
    getWeaponMods();
    getWeaponProperties();
}

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

async function getWeaponMods(){
    let data = await getData("WeaponModifications");

    let weaponMods = {
        regular: [],
        masterwork: []
    }

    for(let i = 0; i < data.length; i++){
        if(data[i].Name == ""){
            weaponMods.regular.push(data[i]);
        }
        else{
            weaponMods.masterwork.push(data[i]);
        }
    }

    standardWrite('../client/src/data/weaponMods.js', "weaponMods", weaponMods)
}

async function getWeaponProperties(){
    let data = await getData("WeaponProperties");
    standardWrite('../client/src/data/weaponProperties.js', "weaponProperties", data)
}

getWeaponData();

module.exports = {getWeaponData};