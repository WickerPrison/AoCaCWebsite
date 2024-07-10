const {Schema, model} = require('mongoose');

const criticalInjuriesSchema = new Schema(
    {
        Name: {
            type: String,
            unique: true,
            required: true
        },
        d100min:{
            type: Number,
            required: true,
        },
        d100max:{
            type: Number
        },
        Severity:{
            type: Number
        },
        Effect:{
            type: String,
            required: true
        }
    }
)

const CriticalInjuries = model('crits', criticalInjuriesSchema);

module.exports = CriticalInjuries;