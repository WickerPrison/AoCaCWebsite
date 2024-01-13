const TargetingType ={
    single: "single",
    multi: "multi",
    area: "area"
}

function SpellEffect(){
    this.name;
    this.nodeInput;
    this.nodes;
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

var assembleBtn = document.getElementById("assemble-pool");

var challengeInpt = document.getElementById("challenge");
var difficultyInpt = document.getElementById("difficulty");
var penaltyInpt = document.getElementById("penalty");
var proficiencyInpt = document.getElementById("proficiency");
var abilityInpt = document.getElementById("ability");
var boosInpt = document.getElementById("boost");
var upgradesInpt = document.getElementById("upgrade-diff");
var upgradgeAbilityInpt = document.getElementById("upgrade-abil");
var autoSucInpt = document.getElementById("auto-success");

var challengeOut = document.getElementById("challenge-out");
var difficultyOut = document.getElementById("difficulty-out");
var penaltyOut = document.getElementById("penalty-out");
var proficiencyOut = document.getElementById("proficiency-out");
var abilityOut = document.getElementById("ability-out");
var boostOut = document.getElementById("boost-out");
var autoSucOut = document.getElementById("auto-success-out");

const TargetingDict ={
    "single":singleTarget,
    "multi":multiTarget,
    "area":areaTarget
}

var upgrades = 0;
var upgradeAbilities = 0;
var challenges = 0;
var difficulty = 0;
var penalties = 0;
var proficiencies = 0;
var abilities = 0;
var boosts = 0;
var autoSuccess = 0;

var double = false;

var target = TargetingType.single;

var currentEffects = [];

setupEffectMenu();

function assembleDicePool(){
    upgrades = 0;
    upgradeAbilities = 0;
    challenges = 0;
    difficulty = 0;
    penalties = 0;
    proficiencies = 0;
    abilities = 0;
    boosts = 0;
    autoSuccess = 0;

    // Range modifier
    difficulty += Number(rangeSelector.value);

    //targeting type modifier
    if(target === TargetingType.multi){
        difficulty += Number(targetNum.value);
    }
    else if(target === TargetingType.area){
        upgrades += 3;
    }

    //modifiers from spell effects
    double = false;
    for(var i = 0; i < currentEffects.length; i++){
        var name = currentEffects[i].name;
        applyNodes(name, i);
    }

    if(double){
        for(var i = 0; i < currentEffects.length; i++){
            var name = currentEffects[i].name;
            if(window.spellEffects[name].Duration != "Instantaneous"){
                applyNodes(name, i);
            }
        }
    }

    //custom modifiers
    upgrades += Number(upgradesInpt.value);
    upgradeAbilities += Number(upgradgeAbilityInpt.value);
    challenges += Number(challengeInpt.value);
    difficulty +=Number( difficultyInpt.value);
    penalties += Number(penaltyInpt.value);
    proficiencies += Number(proficiencyInpt.value);
    abilities += Number(abilityInpt.value);
    boosts +=Number( boosInpt.value);
    autoSuccess += Number(autoSucInpt.value);

    //handle upgrades
    for(var i = 0; i < upgrades;i++){
        if(difficulty > 0){
            difficulty--;
            challenges++;
        }
        else{
            difficulty++;
        }
    }

    for(var i = 0; i < upgradeAbilities; i++){
        if(abilities > 0){
            abilities--;
            proficiencies++
        }
        else{
            abilities++;
        }
    }

    //update ui
    challengeOut.innerText = "Challenge: " + challenges;
    difficultyOut.innerText = "Difficulty: " + difficulty;
    penaltyOut.innerText = "Penalty: " + penalties;
    proficiencyOut.innerText = "Proficiency: " + proficiencies;
    abilityOut.innerText = "Ability: " + abilities;
    boostOut.innerText = "Boost: " + boosts;
    autoSucOut.innerText = "Automatic Successes: " + autoSuccess;
}

function applyNodes(name, i){
    for(var j = 0; j < currentEffects[i].nodes; j++){
        difficulty += Number(window.spellEffects[name].Difficulty);
        upgrades += Number(window.spellEffects[name].Upgrades);
        penalties += Number(window.spellEffects[name].Penalty);
        if(window.spellEffects[name].SpecialModifier != ""){
            specialModifier(window.spellEffects[name].SpecialModifier);
        }
    }
}

function specialModifier(modifierName){
    switch(modifierName){
        case "boost":
            boosts++;
            break;
        case "double":
            double = true;
            break;
        case "success":
            autoSuccess++;
    }
}

function changeTargetingType(evt){
    TargetingDict[target].classList.remove("selected");
    target = evt.currentTarget.myTarget;
    evt.currentTarget.classList.add("selected");
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
    inputElm.classList.add("can-point");
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
    descriptionElm.classList.add("description");
    effectElm.appendChild(descriptionElm);

    var currentEffect = new SpellEffect;
    currentEffect.name = effectName;
    currentEffect.nodeInput = inputElm;
    currentEffect.nodes = inputElm.value;

    currentEffects.push(currentEffect);
    buttonElm.effect = currentEffect;
    buttonElm.addEventListener("click", destroyEffect);
    inputElm.addEventListener("change", changeNodes);
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
    var index = currentEffects.indexOf(evt.currentTarget.effect);
    currentEffects.splice(index, 1);
}

function changeNodes(evt){
    var myInput = evt.currentTarget;
    for(var i = 0; i < currentEffects.length; i++){
        if(currentEffects[i].nodeInput === myInput){
            currentEffects[i].nodes = myInput.value;
        }
    }
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
assembleBtn.addEventListener("click", assembleDicePool);