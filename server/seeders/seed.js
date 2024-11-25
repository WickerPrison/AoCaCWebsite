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
  WeaponProp,
  Enchantment
} = require('../models');
//const talentListSeeder = require('./talentListSeeder');
const cleanDB = require('./cleanDB');
const {singleFetch} = require('./getData');


db.once('open', async () => {
  try {
    await cleanDB('SpellEffect', 'spelleffects');
    // const spellEffectsData = await singleFetch("ScholarlySpells");
    // await SpellEffect.create(spellEffectsData);

    await cleanDB('Talent', 'talents');
    // let talentsData = await singleFetch("Talents");
    // talentsData = talentListSeeder.cleanTalentsData(talentsData);
    // await Talent.create(talentsData);

    await cleanDB('InnateSpell', 'innatespells');
    // const innateSpellsData = await singleFetch("InnateSpells");
    // for(let i = 0; i < innateSpellsData.length; i++){
    //   let stringArray = innateSpellsData[i].Classes.split(", ");
    //   innateSpellsData[i].Classes = stringArray;
    // }
    // await InnateSpell.create(innateSpellsData);

    await cleanDB('Fundamentalist', 'fundamentalists');
    // const fundamentalistData = await singleFetch("Fundamentalist");
    // await Fundamentalist.create(fundamentalistData);

    await cleanDB('CriticalInjuries', 'crits');
    // const critsData = await singleFetch("CriticalInjuries");
    // await CriticalInjuries.create(critsData);

    await cleanDB('Equipment', 'equipment');
    // const equipmentData = await singleFetch("Equipment");
    // await Equipment.create(equipmentData);

    await cleanDB('Weapon', 'weapons');
    const weaponData = await singleFetch("Weapons");
    await Weapon.create(weaponData);

    await cleanDB('WeaponMod', 'weaponmods');
    const weaponModData = await singleFetch("WeaponModifications");
    await WeaponMod.create(weaponModData);

    await cleanDB('WeaponProp', 'weaponprops');
    const weaponPropData = await singleFetch("WeaponProperties");
    await WeaponProp.create(weaponPropData);

    await cleanDB('Enchantment', 'enchantments');
    const enchantmentData = await singleFetch("EnchantingEffects");
    await Enchantment.create(enchantmentData);

  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('job done!');
  process.exit(0);
});
