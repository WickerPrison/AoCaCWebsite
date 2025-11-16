const {Schema, model} = require('mongoose');

const monsterPartDataSchema = new Schema(
    {
        hp:{
            type: Number
        },
        id:{
            type: String
        }
    }
)


module.exports = monsterPartDataSchema;