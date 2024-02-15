var tableTemplate = document.getElementById("table-template");
var tableEntryTemplate = document.getElementById("table-entry-template");

function TableData(){
    this.tableTitle;
    this.fullArray = null;
    this.label = null;
    this.column1 = null;
    this.column2 = null;
    this.description = null;
    this.id = null
}

function createTable(tableData){
    var table = tableTemplate.cloneNode(true);
    table.id = tableData.id;

    table.querySelector(".table-header").innerHTML = tableData.tableTitle;

    for(var i = 0; i < tableData.fullArray.length; i++){
        var entry = tableEntryTemplate.cloneNode(true);
        entry.id = tableData.id + "-" + i;

        entry.querySelector(".table-label").innerHTML = tableData.fullArray[i].Name;

        var column1Elm = entry.querySelector(".column-1");
        for(var j = 0; j < tableData.column1.length; j++){
            var columnEntry = document.createElement("p");
            columnEntry.innerHTML = "<strong>" + tableData.column1[j] + ": </strong>"
            columnEntry.innerHTML += tableData.fullArray[i][tableData.column1[j]];
            column1Elm.appendChild(columnEntry);
        }

        var column2Elm = entry.querySelector(".column-2");
        for(var j = 0; j < tableData.column2.length; j++){
            var columnEntry = document.createElement("p");
            columnEntry.innerHTML = "<strong>" + tableData.column2[j] + ": </strong>"
            columnEntry.innerHTML += tableData.fullArray[i][tableData.column2[j]];
            column2Elm.appendChild(columnEntry);
        }

        entry.querySelector(".table-description").innerHTML = tableData.fullArray[i][tableData.description];

        table.appendChild(entry);
    }
    
    return table;
}