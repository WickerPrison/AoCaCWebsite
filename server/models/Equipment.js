const {Schema, model} = require('mongoose');

const equipmentSchema = new Schema(
    {
        Name: {
            type: String,
            unique: true,
            required: true
        },
        Category: {
            type: String,
            required: true
        },
        Material:{
            type: String
        },
        Encumbrance:{
            type: Number
        },
        Price:{
            type: String
        },
        Rarity:{
            type: Number,
            required: true
        },
        Description:{
            type: String
        }
    }
)

const Equipment = model('equipment', equipmentSchema, 'equipment');

module.exports = Equipment;