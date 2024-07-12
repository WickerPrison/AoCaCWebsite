const {Schema, model} = require('mongoose');

const rollSchema = new Schema(
    {
        name:{
            type: String,
            required: true
        },
        ability:{
            type: Number,
            default: 0
        },
        autoSuccess:{
            type: Number,
            default: 0
        },
        boost:{
            type: Number,
            default: 0
        },
        challenge:{
            type: Number,
            default: 0
        },
        difficulty:{
            type: Number,
            default: 0
        },
        penalty:{
            type: Number,
            default: 0
        },
        proficiency:{
            type: Number,
            default: 0
        },
        upgradeAbility:{
            type: Number,
            default: 0
        },
        upgradeDifficulty:{
            type: Number,
            default: 0
        }
    }
)

module.exports = rollSchema;