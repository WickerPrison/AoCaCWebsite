const db = require('../config/connection');
const {getWeapons} = require('../../data/weaponSeed');
const {Attack} = require('../models');
const cleanDB = require('./cleanDB');


db.once('open', async () => {
  try {
    let weapons = await getWeapons();
    let weaponTypes = ["brawl", "light", "heavy", "ranged"];
    for(let i = 0; i < weaponTypes.length; i++){
      for(let j = 0; j < weapons[weaponTypes[i]].length; j++){
        let newWeapon = {};
        for(const [key, value] of Object.entries(weapons[weaponTypes[i]][j])){
          newWeapon[key.charAt(0).toLowerCase() + key.slice(1)] = value;
        }

        newWeapon.crit = weapons[weaponTypes[i]][j].Critical;
        newWeapon.specialAttribute = "None";
        newWeapon.public = true;
        newWeapon.official = true;
        newWeapon.isWeapon = true;
        await Attack.findOneAndUpdate({name: newWeapon.name}, newWeapon, {upsert: true});
      }
    }

  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('job done!');
  process.exit(0);
});
