const {Schema, model} = require('mongoose');
const {attackSchema} = require('./Attacks');

const monsterSchema = new Schema(
    {
        name:{
            type: String,
            required: true,
            unique: true
        },
        damageReduction:{
            type: Number,
            default: 0
        },
        hp:{
            type:Number,
            required: true
        },
        stamina:{
            type: Number,
            required: true
        },
        meleeDefense:{
            type: Number,
            required: true,
            default: 0
        },
        rangedDefense:{
            type: Number,
            required: true,
            default: 0
        },
        agility:{
            type: Number,
            required: true
        },
        brawn:{
            type: Number,
            required: true
        },
        cunning:{
            type: Number,
            required: true
        },
        intellect:{
            type: Number,
            required: true
        },
        presence:{
            type: Number,
            required: true
        },
        willpower:{
            type: Number,
            required: true
        },
        sil:{
            type: Number,
            required: true,
            default: 1
        },
        speed:{
            type: Number,
            required: true,
            default: 15
        },
        creatureTypes:{
            type: [String],
            required: true
        },
        tier:{
            type: String,
            required: true
        },
        skills:{
            type: [String],
            default: []
        },
        conditionImmunities:{
            type: [String]
        },
        damageImmunities:{
            type:[String]
        },
        customImmunities:{
            type: String
        },
        immunitiesString:{
            type: String
        },
        resistWeakArray:{
            type: [Schema.Types.Mixed]
        },
        resistances:{
            type: String
        },
        weaknesses:{
            type:String
        },
        attacks:{
            type: [attackSchema]
        },
        talentsAbilities:{
            type: String
        },
        specialFeatures:{
            type: String
        },
        public:{
            type: Boolean,
            default: true
        },
        username:{
            type: String
        }
    }
)

const Monster = model('monster', monsterSchema);

module.exports = Monster;