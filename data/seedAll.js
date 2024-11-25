const {getTreeData} = require('./talentTreeSeed');
const {getTalents} = require('./talentsSeed');
const {getSpellEffects} = require('./scholarlySeed');
const {getInnateSpells} = require('./innateSpellsSeed');
const {getCriticalInjuries} = require('./criticalInjuriesSeed');
const {getEquipment} = require('./equipmentSeed');

getTreeData();
getTalents();
getSpellEffects();
getInnateSpells();
getCriticalInjuries();
getEquipment();