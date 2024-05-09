var sheetUrl = "https://docs.google.com/spreadsheets/d/1-kaFQQ1eBHRN_aLlpHn72A2dG97wl7nLB4MKmKny_tM/gviz/tq?sheet="

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