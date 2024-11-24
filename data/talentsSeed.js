const {getData, standardWrite} = require('./seedUtils');

function cleanTalentsData (data){
    for(let i = 0; i < data.length; i++){
        let strings = data[i].XP.split("-");
        data[i].XPmin = strings[0];
        data[i].XPmax = strings[1] || "";

        data[i].Stacks = data[i].Stacks.replace("-", "");
    }
    return data;
}

async function getTalents(){
    let data = await getData("Talents");
    data = cleanTalentsData(data);
    standardWrite('../client/src/data/talents.js', "talents",data)
}

getTalents();

module.exports = {getTalents};