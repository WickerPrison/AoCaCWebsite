const {Schema, model} = require('mongoose');

const weaponModsSchema = new Schema(
    {
        Name: {
            type: String
        },
        Parts:{
            type: String
        },
        Description:{
            type: String
        }
    }
)

const WeaponMod = model('weaponmod', weaponModsSchema);

module.exports = WeaponMod;