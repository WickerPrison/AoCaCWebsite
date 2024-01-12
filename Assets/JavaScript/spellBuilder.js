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
var addEffect = document.getElementById("add-effect");
var effectMenu = document.getElementById("spell-selection");
var spellEffectsBox = document.getElementById("spell-effects-box");

const TargetingDict ={
    "single":singleTarget,
    "multi":multiTarget,
    "area":areaTarget
}

var difficulty = 0;
var upgrades = 0;
var penalties = 0;

var target = TargetingType.single;

setupEffectMenu();

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

function addEffectMenu(){
    addEffect.style.display = "none";
    effectMenu.style.display = "flex";
}

function selectMenuOption(evt){
    createNewEffect(evt.currentTarget.name);
    addEffect.style.display = "block";
    effectMenu.style.display = "none";
}

function createNewEffect(effectName){
    var effectDict = window.spellEffects[effectName];

    var effectElm = document.createElement("div");
    effectElm.classList.add("spell-effect");
    effectElm.classList.add("box");
    spellEffectsBox.insertBefore(effectElm, addEffect);

    var nameElm = document.createElement("h4");
    nameElm.classList.add("effect-name");
    nameElm.innerText = effectName;
    effectElm.appendChild(nameElm);

    var buttonElm = document.createElement("button");
    buttonElm.classList.add("remove-effect");
    buttonElm.innerText = "X";
    buttonElm.rootElm = effectElm;
    effectElm.appendChild(buttonElm);
    
    createLine(effectElm);

    var nodesElm = document.createElement("h4");
    nodesElm.innerText = "Number of Nodes: ";
    effectElm.appendChild(nodesElm);
    
    var inputElm = document.createElement("input");
    inputElm.classList.add("node-num");
    inputElm.type = "number";
    inputElm.value = "1";
    inputElm.min = "1";
    inputElm.oninput = "validity.valid||(value='');";
    nodesElm.appendChild(inputElm);
    
    var tierElm = document.createElement("h4");
    tierElm.innerText = "Tier: " + effectDict.Tier;
    effectElm.appendChild(tierElm);

    var durationElm = document.createElement("h4");
    durationElm.innerText = "Duration: " + effectDict.Duration;
    effectElm.appendChild(durationElm);

    var modElm = document.createElement("h4");
    modElm.innerText = "Difficulty Modifier: " + effectDict.Modifier;
    effectElm.appendChild(modElm);
    
    createLine(effectElm);

    var descriptionElm = document.createElement("h4");
    descriptionElm.innerText = effectDict.Description;
    effectElm.appendChild(descriptionElm);

    buttonElm.addEventListener("click", destroyEffect);
}

function destroyEffect(evt){
    var effectElm = evt.currentTarget.rootElm;
    while(effectElm.firstChild){
        while(effectElm.firstChild.firstChild){
            effectElm.firstChild.removeChild(effectElm.firstChild.firstChild);
        }
        effectElm.removeChild(effectElm.firstChild);
    }
    effectElm.remove();
}

function createLine(effectElm){
    var lineElm = document.createElement("div");
    lineElm.classList.add("line");
    effectElm.appendChild(lineElm);
}

function setupEffectMenu(){
    var currentTier = "Metamagic";
    var currentChild = 0;
    var keys = Object.keys(window.spellEffects);
    for(var i = 0; i < keys.length; i++){
        var currentEffect = window.spellEffects[keys[i]];
        var option = document.createElement("li");
        option.name = keys[i];
        option.innerText = option.name;
        if(currentEffect.Tier != currentTier){
            currentTier = currentEffect.Tier;
            currentChild++;
        }
        effectMenu.children[currentChild].appendChild(option);
        option.classList.add("menu-option");
        option.addEventListener("click", selectMenuOption);
    }
}

singleTarget.addEventListener("click", changeTargetingType);
multiTarget.addEventListener("click", changeTargetingType);
areaTarget.addEventListener("click", changeTargetingType);
addEffect.addEventListener("click", addEffectMenu);