const generalEquipmentTable = document.getElementById("general-equipment-table");
let generalEquipment;


Promise.all([
fetch(sheetUrl + "GeneralEquipment"),
])
.then(responses => Promise.all(responses.map(response => response.text())))
.then(data => {
    generalEquipment = parseSheets(data[0]);

    let tableData = new TableData();
    tableData.tableTitle = "General Equipment";
    tableData.fullArray = generalEquipment;
    tableData.column1 = ["Material", "Encumbrance"];
    tableData.column2 = ["Price", "Rarity"];
    tableData.id = "general-equipment";
    tableData.column2FlexBasis = "10%";
    generalEquipmentTable.appendChild(createTable(tableData));

});