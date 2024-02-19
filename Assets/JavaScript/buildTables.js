const tableTemplate = document.getElementById("table-template");
const tableEntryTemplate = document.getElementById("table-entry-template");

function TableData(){
    this.tableTitle;
    this.fullArray = null;
    this.label = "Name";
    this.column1 = null;
    this.column2 = null;
    this.description = "Description";
    this.explanation = null;
    this.column2FlexBasis = "15%";
    this.id = null
}

function createTable(tableData){
    const table = tableTemplate.cloneNode(true);
    table.id = tableData.id;

    table.querySelector(".table-header").innerHTML = tableData.tableTitle;

    if(tableData.explanation != null){
        const explanation = table.querySelector(".table-explanation");
        explanation.innerHTML = tableData.explanation;
        explanation.style.display = "block";
    }

    for(let i = 0; i < tableData.fullArray.length; i++){
        let entry = tableEntryTemplate.cloneNode(true);
        entry.id = tableData.id + "-" + i;

        entry.querySelector(".table-label").innerHTML = tableData.fullArray[i].Name;

        let column1Elm = entry.querySelector(".column-1");
        for(let j = 0; j < tableData.column1.length; j++){
            let columnEntry = document.createElement("p");
            columnEntry.innerHTML = "<strong>" + tableData.column1[j] + ": </strong>"
            columnEntry.innerHTML += tableData.fullArray[i][tableData.column1[j]];
            column1Elm.appendChild(columnEntry);
        }

        let column2Elm = entry.querySelector(".column-2");
        if(tableData.column2 != null){
            for(let j = 0; j < tableData.column2.length; j++){
                let columnEntry = document.createElement("p");
                columnEntry.innerHTML = "<strong>" + tableData.column2[j] + ": </strong>"
                columnEntry.innerHTML += tableData.fullArray[i][tableData.column2[j]];
                column2Elm.style.flexBasis = tableData.column2FlexBasis;
                column2Elm.appendChild(columnEntry);
            }
        }
        else{
            column2Elm.style.flexBasis = 0;
            column2Elm.style.padding = 0;
        }

        entry.querySelector(".table-description").innerHTML = tableData.fullArray[i][tableData.description];

        table.appendChild(entry);
    }
    
    return table;
}