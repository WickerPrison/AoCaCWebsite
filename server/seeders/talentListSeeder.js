module.exports = {
    cleanTalentsData: function (data){
        for(let i = 0; i < data.length; i++){
            let strings = data[i].XP.split("-");
            data[i].XPmin = strings[0];
            data[i].XPmax = strings[1] || "";

            data[i].Stacks = data[i].Stacks.replace("-", "");
        }
        return data;
    }
}