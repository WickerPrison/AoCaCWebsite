const {getData, standardWrite} = require('./seedUtils');

async function getInnateSpells(){
    let data = await getData("InnateSpells");
    standardWrite('../client/src/data/innateSpells.js', "innateSpells", data)

    data = await getData("Fundamentalist");
    standardWrite('../client/src/data/fundamentalist.js', 'fundamentalistSpells', data);
}

getInnateSpells();

module.exports = {getInnateSpells};