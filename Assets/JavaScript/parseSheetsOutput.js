function parseSheets(data){
    data = JSON.parse(data.substring(47).slice(0, -2));
    var output = [];
    for(var i = 0; i < data.table.rows.length; i++){
        var outputEntry = {};
        for(var j = 0; j < data.table.cols.length; j++){
            if(data.table.rows[i].c[j] == null){
                outputEntry[data.table.cols[j].label] = "";
            }
            else{
                outputEntry[data.table.cols[j].label] = data.table.rows[i].c[j].v;
            }
        }
        output[i] = outputEntry;
    }

    return output;
}