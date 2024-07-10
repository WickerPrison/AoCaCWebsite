const {Schema, model} = require('mongoose');

const fundamentalistSchema = new Schema(
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
        Stamina:{
            type: Number,
            required: true
        },
        Polarization:{
            type: Number,
            required: true
        },
        Positive:{
            type: String,
            required: true
        },
        Negative:{
            type: String,
            required: true
        }
    }
)

const Fundamentalist = model('fundamentalist', fundamentalistSchema);

module.exports = Fundamentalist;