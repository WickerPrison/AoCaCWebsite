const {Schema, model} = require('mongoose');

const equipmentSchema = new Schema(
    {
        Name: {
            type: String,
            unique: true,
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

const GeneralEquipment = model('equipment', equipmentSchema, 'equipment');

module.exports = GeneralEquipment;