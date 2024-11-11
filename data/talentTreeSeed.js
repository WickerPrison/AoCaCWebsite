const {sheetUrl} = require('../server/seeders/getData');
const fs = require('fs');

parseTalentTrees = (data) => {
    data = JSON.parse(data.substring(47).slice(0, -2));
    let output = [];
    for(let i = 0; i < data.table.rows.length; i += 7){
        output.push(formatClass(i, data));
    }
    fs.writeFile("talentTrees.json", JSON.stringify(output, null, '\t'), () => {});
}

formatClass = (startRow, data) => {
    let tree = {};
    tree.Name = data.table.rows[startRow].c[0].v;
    tree.ClassSkills = data.table.rows[startRow].c[1].v;
    tree.Field = data.table.rows[startRow + 1].c[0].v;
    tree.FieldSkills = data.table.rows[startRow + 1].c[1].v;
    tree.Talents = [];
    for(let i = 0; i < 5; i++){
        for(let j = 0; j < 4; j++){
            tree.Talents.push(data.table.rows[startRow + 2 + i].c[j].v);
        }
    }
    return tree;
}

getTreeData = async () => {
    try{
        let data = await fetch(sheetUrl + "TalentTrees");
        data = await data.text();
        return parseTalentTrees(data);
    }
    catch(err){
        console.error(err);
    }
}

getTreeData();