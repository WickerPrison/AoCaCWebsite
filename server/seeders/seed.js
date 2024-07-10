const db = require('../config/connection');
const { User, SpellEffect, Talent, InnateSpell, Fundamentalist } = require('../models');
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

    await cleanDB('Fundamentalist', 'fundamentalist');
    const fundamentalistData = await singleFetch("Fundamentalist");
    await Fundamentalist.create(fundamentalistData);

  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});
