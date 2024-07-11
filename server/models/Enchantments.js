const {Schema, model} = require('mongoose');

const enchantmentSchema = new Schema(
    {
        Name: {
            type: String,
            unique: true,
            required: true
        },
        Rarity:{
            type: String,
            required: true
        },
        Slots:{
            type: String,
            required: true
        },
        Description:{
            type: String
        }
    }
)

const Enchantment = model('enchantment', enchantmentSchema);

module.exports = Enchantment;