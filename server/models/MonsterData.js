const {Schema, model} = require('mongoose');
const monsterPartDataSchema = require('./MonsterPartData');

const monsterDataSchema = new Schema(
    {
        monster:{
            type: Schema.Types.ObjectId,
            ref: "monster"
        },
        hp:{
            type: Number
        },
        stamina:{
            type: Number
        },
        partsData:{
            type: [monsterPartDataSchema]
        },
        id:{
            type: String
        }
    }
)

module.exports = monsterDataSchema;