const db = require('../config/connection');
const {
  SpellEffect, 
  Talent, 
  InnateSpell, 
  Fundamentalist, 
  CriticalInjuries, 
  Equipment,
  Weapon,
  WeaponMod,
  WeaponProp
} = require('../models');
const cleanDB = require('./cleanDB');
const {singleFetch} = require('./getData');


db.once('open', async () => {
  try {
    await cleanDB('SpellEffect', 'spelleffects');
    const spellEffectsData = await singleFetch("ScholarlySpells");
    await SpellEffect.create(spellEffectsData);

    await cleanDB('Talent', 'talents');
    const talentsData = await singleFetch("Talents");
    await Talent.create(talentsData);

    await cleanDB('InnateSpell', 'innatespells');
    const innateSpellsData = await singleFetch("InnateSpells");
    for(let i = 0; i < innateSpellsData.length; i++){
      let stringArray = innateSpellsData[i].Classes.split(", ");
      innateSpellsData[i].Classes = stringArray;
    }
    await InnateSpell.create(innateSpellsData);

    await cleanDB('Fundamentalist', 'fundamentalists');
    const fundamentalistData = await singleFetch("Fundamentalist");
    await Fundamentalist.create(fundamentalistData);

    await cleanDB('CriticalInjuries', 'crits');
    const critsData = await singleFetch("CriticalInjuries");
    await CriticalInjuries.create(critsData);

    await cleanDB('Equipment', 'equipment');
    const equipmentData = await singleFetch("Equipment");
    await Equipment.create(equipmentData);

    await cleanDB('Weapon', 'weapons');
    const weaponData = await singleFetch("Weapons");
    await Weapon.create(weaponData);

    await cleanDB('WeaponMod', 'weaponmods');
    const weaponModData = await singleFetch("WeaponModifications");
    // for(let i = 0; i < weaponModData.length; i++){
    //   let stringArray = weaponData[i].Parts.split(" ");
    //   weaponModData[i].Parts = stringArray;
    // }
    await WeaponMod.create(weaponModData);

    await cleanDB('WeaponProp', 'weaponprops');
    const weaponPropData = await singleFetch("WeaponProperties");
    await WeaponProp.create(weaponPropData);

  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('job done!');
  process.exit(0);
});
