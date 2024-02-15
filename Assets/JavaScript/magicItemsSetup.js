var wondrousItemsTable = document.getElementById("wondrous-items-table");
var wondrousItems;


Promise.all([
fetch(sheetUrl + "WondrousItems")
])
.then(responses => Promise.all(responses.map(response => response.text())))
.then(data => {
    wondrousItems = parseSheets(data[0]);

    var tableData = new TableData();
    tableData.tableTitle = "Wondrous Items";
    tableData.fullArray = wondrousItems;
    tableData.label = "Name";
    tableData.column1 = ["Material", "Base Item"];
    tableData.column2 = ["Price", "Rarity", "Encumbrance"];
    tableData.description = "Description";
    tableData.id = "wondrous-items";
    wondrousItemsTable.appendChild(createTable(tableData));
});