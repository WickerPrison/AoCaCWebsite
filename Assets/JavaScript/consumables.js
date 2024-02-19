const bombsTable = document.getElementById("bombs-table");
const medicalTable = document.getElementById("medical-items-table");
const potionsTable = document.getElementById("potions-table");
const miscTable = document.getElementById("misc-table");
let consumables;
let bombs;
let medicalItems;
let potions;
let misc;


Promise.all([
fetch(sheetUrl + "Consumables"),
])
.then(responses => Promise.all(responses.map(response => response.text())))
.then(data => {
    consumables = parseSheets(data[0]);
    bombs = consumables.filter(item => item.Category == "Bomb");
    medicalItems = consumables.filter(item => item.Category == "Medicinal");
    potions = consumables.filter(item => item.Category == "Potion");
    misc = consumables.filter(item => item.Category == "Misc");

    let tableData = new TableData();
    tableData.tableTitle = "Bombs";
    tableData.fullArray = bombs;
    tableData.column1 = ["Material", "Encumbrance"];
    tableData.column2 = ["Price", "Rarity"];
    tableData.id = "bombs";
    tableData.column2FlexBasis = "10%";
    bombsTable.appendChild(createTable(tableData));

    tableData.tableTitle = "Medical Items";
    tableData.fullArray = medicalItems;
    tableData.id = "medicinal";
    medicalTable.appendChild(createTable(tableData));

    tableData.tableTitle = "Potions";
    tableData.fullArray = potions;
    tableData.id = "potion";
    potionsTable.appendChild(createTable(tableData));

    tableData.tableTitle = "Miscellaneous Consumables";
    tableData.fullArray = misc;
    tableData.id = "miscellaneous";
    miscTable.appendChild(createTable(tableData));
});