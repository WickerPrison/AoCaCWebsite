const {Schema, model} = require('mongoose');

const monsterPartsSchema = new Schema(
    {
        name:{
            type: String,
            required: true
        },
        damageReduction:{
            type: Number,
            default: 0
        },
        hp:{
            type:Number,
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
        damageImmunities:{
            type:[String],
            default: []
        },
        resistWeakArray:{
            type: [Schema.Types.Mixed],
            default: []
        },
        attacks:[{
            type: Schema.Types.ObjectId,
            ref: "attack"
        }],
        specialFeatures:{
            type: String
        },
    }
)

const Part = model('part', monsterPartsSchema);

module.exports = {Part, monsterPartsSchema};