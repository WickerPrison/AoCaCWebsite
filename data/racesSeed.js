const {getData, standardWrite} = require('./seedUtils');

async function getRaces(){
    let data = await getData("Races");

    const races = [];
    for(let i = 0; i < data.length; i++){
        if(data[i].IsDone == 1){
            delete data[i].IsDone;
            races.push(data[i]);
        }
    }

    standardWrite('../client/src/data/races.js', "races", races)
}

getRaces();

module.exports = {getRaces};