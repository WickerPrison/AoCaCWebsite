const {getTreeData} = require('./talentTreeSeed');
const {getTalents} = require('./talentsSeed');
const {getSpellEffects} = require('./scholarlySeed');
const {getInnateSpells} = require('./innateSpellsSeeder');

getTreeData();
getTalents();
getSpellEffects();
getInnateSpells();