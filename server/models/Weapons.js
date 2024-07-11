const {Schema, model} = require('mongoose');

const weaponSchema = new Schema(
    {
        Name: {
            type: String,
            unique: true,
            required: true
        },
        Skill: {
            type: String,
            required: true
        },
        Damage: {
            type: Number,
            required: true
        },
        Attribute:{
            type: String,
            required: true
        },
        Range:{
            type: String,
            required: true
        },
        Critical:{
            type: Number
        },
        Parts:{
            type: String
        },
        Material:{
            type: String
        },
        Encumbrance:{
            type: String
        },
        Price:{
            type: String
        },
        Rarity:{
            type: String,
            required: true
        },
        Properties:{
            type: String
        }
    }
)

const Weapon = model('weapon', weaponSchema);

module.exports = Weapon;