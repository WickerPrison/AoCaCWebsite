const db = require('../config/connection');
const { User, SpellEffect } = require('../models');
const cleanDB = require('./cleanDB');
const {singleFetch} = require('./getData');


db.once('open', async () => {
  try {
    await cleanDB('SpellEffect', 'spelleffects');

    const spellEffectsData = await singleFetch("ScholarlySpells");
    await SpellEffect.create(spellEffectsData);

  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});
