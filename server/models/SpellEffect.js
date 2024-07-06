const {Schema, model} = require('mongoose');

const spellEffectSchema = new Schema(
    {
        Name: {
            type: String,
            unique: true,
            required: true
        },
        Tier:{
            type: String,
            required: true,
        },
        Duration:{
            type: String,
            required: true,
        },
        Difficulty:{
            type: Number,
            required: true
        },
        Upgrades:{
            type: Number,
            required: true
        },
        Penalty:{
            type: Number,
            required: true
        },
        SpecialModifier:{
            type: String,
        },
        Modifier:{
            type: String,
            required: true
        },
        Description:{
            type: String,
            required: true
        }
    }
)

const SpellEffect = model('spelleffects', spellEffectSchema);

module.exports = SpellEffect;