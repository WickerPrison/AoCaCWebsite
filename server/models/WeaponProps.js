const {Schema, model} = require('mongoose');

const weaponPropsSchema = new Schema(
    {
        Name: {
            type: String,
            required: true,
            unique: true
        },
        Description:{
            type: String,
            required: true
        }
    }
)

const WeaponProp = model('weaponprop', weaponPropsSchema);

module.exports = WeaponProp;