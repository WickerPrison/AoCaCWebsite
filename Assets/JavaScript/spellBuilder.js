const TargetingType ={
    single: "single",
    multi: "multi",
    area: "area"
}


var rangeSelector = document.getElementById("ranges");
var singleTarget = document.getElementById("single-target");
singleTarget.myTarget = TargetingType.single;
var multiTarget = document.getElementById("multi-target");
multiTarget.myTarget = TargetingType.multi;
var areaTarget = document.getElementById("area-target");
areaTarget.myTarget = TargetingType.area;
var targetNum = document.getElementById("target-num");

const TargetingDict ={
    "single":singleTarget,
    "multi":multiTarget,
    "area":areaTarget
}

var difficulty = 0;
var upgrades = 0;
var penalties = 0;

var target = TargetingType.single;

function update(){
    difficulty = 0;
    upgrades = 0;
    penalties = 0;

    // Range modifier
    difficulty += Number(rangeSelector.value);

    //targeting type modifier
    if(target === TargetingType.multi){
        difficulty += Number(targetNum.value);
    }
    else if(target === TargetingType.area){
        upgrades += 3;
    }

    console.log("Difficulty:" + difficulty + ", Upgrades:" + upgrades + ", Penalty:" + penalties);
}

function changeTargetingType(evt){
    TargetingDict[target].classList.remove("selected");
    target = evt.currentTarget.myTarget;
    evt.currentTarget.classList.add("selected");
    update();
}


singleTarget.addEventListener("click", changeTargetingType);
multiTarget.addEventListener("click", changeTargetingType);
areaTarget.addEventListener("click", changeTargetingType);