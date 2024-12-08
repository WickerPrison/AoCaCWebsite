const {getTreeData} = require('./talentTreeSeed');
const {getTalents} = require('./talentsSeed');
const {getSpellEffects} = require('./scholarlySeed');
const {getInnateSpells} = require('./innateSpellsSeed');
const {getCriticalInjuries} = require('./criticalInjuriesSeed');
const {getEquipment} = require('./equipmentSeed');
const {getEnchantingEffects} = require('./enchantmentsSeed');
const {getWeaponData} = require('./weaponSeed');
const {getArmor} = require('./armorSeed');

getTreeData();
getTalents();
getSpellEffects();
getInnateSpells();
getCriticalInjuries();
getEquipment();
getEnchantingEffects();
getWeaponData();
getArmor();