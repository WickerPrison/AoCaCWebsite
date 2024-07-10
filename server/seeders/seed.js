const db = require('../config/connection');
const { User, SpellEffect, Talent } = require('../models');
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

  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});
