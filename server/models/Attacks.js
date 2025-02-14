const {Schema, model} = require('mongoose');

const attackSchema = new Schema(
    {
        name:{
            type: String,
            required: true,
            unique: true
        },
        skill:{
            type: String,
            required: true
        },
        specialAttribute:{
            type: String,
            required: true
        },
        damage:{
            type: Number,
            required: true
        },
        attribute:{
            type: String,
            required: true
        },
        range:{
            type: String,
            required: true
        },
        crit:{
            type: Number,
            required: true
        },
        accurate:{
            type: Number,
            default: 0
        },
        halfAttribute:{
            type: String,
            default: "None"
        },
        finesse:{
            type:Boolean,
            default: false
        },
        properties:{
            type: String
        },
        isWeapon:{
            type: Boolean,
            default: false
        },
        public:{
            type: Boolean,
            default: true
        },
        official:{
            type: Boolean
        },
        username:{
            type: String
        }
    }
)

const Attack = model('attack', attackSchema);

module.exports = {Attack, attackSchema};