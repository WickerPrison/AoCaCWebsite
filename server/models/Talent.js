const {Schema, model} = require('mongoose');

const talentSchema = new Schema(
    {
        Name: {
            type: String,
            unique: true,
            required: true
        },
        XPmin:{
            type: Number,
            required: true,
        },
        XPmax:{
            type: Number
        },
        Stacks:{
            type: Number
        },
        Description:{
            type: String,
            required: true
        }
    }
)

const Talent = model('talents', talentSchema);

module.exports = Talent;