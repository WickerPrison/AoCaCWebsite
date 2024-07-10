const {Schema, model} = require('mongoose');

const innateSpellSchema = new Schema(
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
        Classes:{
            type: [String]
        },
        Stamina:{
            type: Number,
            required: true
        },
        Description:{
            type: String,
            required: true
        }
    }
)

const InnateSpell = model('innatespells', innateSpellSchema);

module.exports = InnateSpell;