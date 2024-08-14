const {Schema, model} = require('mongoose');

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
        }
    }
)

module.exports = monsterDataSchema;