const wondrousItemsTable = document.getElementById("wondrous-items-table");
let wondrousItems;
const enchantingEffectsTable = document.getElementById("enchanting-effects-table");
let enchantingEffects;


Promise.all([
fetch(sheetUrl + "WondrousItems"),
fetch(sheetUrl + "EnchantingEffects")
])
.then(responses => Promise.all(responses.map(response => response.text())))
.then(data => {
    wondrousItems = parseSheets(data[0]);
    enchantingEffects = parseSheets(data[1]);

    let tableData = new TableData();
    tableData.tableTitle = "Wondrous Items";
    tableData.fullArray = wondrousItems;
    tableData.column1 = ["Material", "Base Item"];
    tableData.column2 = ["Price", "Rarity", "Encumbrance"];
    tableData.id = "wondrous-items";
    wondrousItemsTable.appendChild(createTable(tableData));

    tableData = new TableData();
    tableData.tableTitle = "Enchanting Effects";
    tableData.explanation = "The following effects are intended to be applied to a variety of different items. The magic item slots for a character are: Head, Neck, Hands (2), Torso, and Feet. Magic Weapons are wielded as normal, and Other indicates that another item that is not worn (such as a set of tools) may be enchanted with that effect. In naming specific items, the convention of using the name of the base item, followed by an “of” and the effect name is suggested. For example, a pair of gloves enchanted with the Missile Snaring enchantment effect could be called “Gloves of Missile Snaring”.";
    tableData.fullArray = enchantingEffects;
    tableData.column1 = ["Rarity", "Slots"];
    tableData.id = "enchanting-effects";
    enchantingEffectsTable.appendChild(createTable(tableData));
});