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

const singleFetch = async (sheet) => {
    try{
        let data = await fetch(sheetUrl + sheet);
        data = await data.text();
        return parseSheets(data);
    }
    catch(err){
        console.error(err);
    }
}

const multipleFetch = async (sheets) => {
    try{
        let data = await Promise.all(sheets.map((sheet) => {
            return fetch(sheetUrl + sheet)
        }))
    
        for(let i = 0; i < sheets.length; i++){
            data[i] = await data[i].text();
            data[i] = parseSheets(data[i]);
        }
    
        return data;
    }
    catch(err){
        console.error(err);
    }
}

export {parseSheets, singleFetch, multipleFetch};