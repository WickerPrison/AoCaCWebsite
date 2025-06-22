const {Schema, model} = require('mongoose');

const initiativeTrackerSchema = new Schema(
    {
        name:{
            type: String,
            default: ""
        },
        team:{
            type: String,
            default: ""
        },
        successes:{
            type: Number,
            default: 0
        },
        advantage:{
            type: Number,
            default: 0
        },
        conquests: {
            type: Number,
            default: 0
        }
    }
)

module.exports = initiativeTrackerSchema;