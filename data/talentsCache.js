const {getData} = require('./seedUtils');
let talents = [];

const talentsCache = async () => {
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

module.exports = {talentsCache};