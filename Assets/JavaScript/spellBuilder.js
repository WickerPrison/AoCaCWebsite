var rangeSelector = document.getElementById("ranges");
// document.getElementById("range-dropdown").onchange = update();

var difficulty = 0;
var upgrades = 0;
var penalties = 0;

function update(){
    difficulty = 0;
    upgrades = 0;
    penalties = 0;

    difficulty += Number(rangeSelector.value);

}