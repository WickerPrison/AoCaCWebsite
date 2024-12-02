const db = require('../config/connection');
const {getWeapons} = require('../../data/weaponSeed');
const {Weapon} = require('../models');
const cleanDB = require('./cleanDB');


db.once('open', async () => {
  try {

    await cleanDB('Weapon', 'weapons');
    let weapons = await getWeapons();
    let formattedWeapons = [];
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
        formattedWeapons.push(newWeapon);
      }
    }
    await Weapon.create(formattedWeapons);

  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('job done!');
  process.exit(0);
});
