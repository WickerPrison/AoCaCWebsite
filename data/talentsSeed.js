const {getData, standardWrite} = require('./seedUtils');
let talents = [];

async function talentsCache(){
    if(talents.length == 0){
        talents = await getData("Talents");
        talents = cleanTalentsData(talents);
    }
    return talents;
}

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
    let data = await talentsCache();
    standardWrite('../client/src/data/talents.js', "talents",data)
}

getTalents();

module.exports = {getTalents, talentsCache};