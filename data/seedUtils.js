const {sheetUrl} = require('../server/seeders/getData');
const fs = require('fs');

function parseSheets(data){
    data = JSON.parse(data.substring(47).slice(0, -2));
    var output = [];
    for(var i = 1; i < data.table.rows.length; i++){
        var outputEntry = {};
        for(var j = 0; j < data.table.cols.length; j++){
            if(data.table.rows[i].c[j] == null || data.table.rows[i].c[j].v == null){
                outputEntry[data.table.rows[0].c[j].v] = "";
            }
            else{
                outputEntry[data.table.rows[0].c[j].v] = data.table.rows[i].c[j].v;
            }
        }
        output[i-1] = outputEntry;
    }

    return output;
}

async function getData(tabName){
    try{
        let data = await fetch(sheetUrl + tabName);
        data = await data.text();
        return parseSheets(data);
    }
    catch(err){
        console.error(err);
    }
}

async function standardWrite(filename, varName, data){
    let output = JSON.stringify(data, null, '\t');
    output = output.replaceAll("’", "'");
    output = "export const " + varName +  " = " + output;
    fs.writeFile(filename, output, () => {});
}

module.exports = {getData, standardWrite}
