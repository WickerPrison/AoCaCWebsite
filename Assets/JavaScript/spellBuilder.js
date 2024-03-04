const TargetingType ={
    single: "single",
    multi: "multi",
    area: "area"
}

function SpellEffect(){
    this.element;
    this.name;
    this.nodeInput;
    this.nodes;
    this.specialInput;
    this.special;
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
var clearEffects = document.getElementById("clear-effects");

var clearCustom = document.getElementById("clear-custom");
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

var rollDiceBtn = document.getElementById("roll-dice");
const resultsHolder = document.getElementById("results-holder");
var conquestsDisplay = document.getElementById("conquests");
var calamityDisplay = document.getElementById("calamities");
var successDisplay = document.getElementById("successes");
var advantageDisplay = document.getElementById("advantage");

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

var spellEffects;

fetch("https://docs.google.com/spreadsheets/d/1-kaFQQ1eBHRN_aLlpHn72A2dG97wl7nLB4MKmKny_tM/gviz/tq?sheet=ScholarlySpells")
.then(response => response.text())
.then(data =>{
    spellEffects = parseSheets(data);
    setupEffectMenu();
})


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
        applyNodes(currentEffects[i].effect, i);
    }

    if(double){
        for(var i = 0; i < currentEffects.length; i++){
            if(currentEffects[i].Duration != "Instantaneous"){
                applyNodes(currentEffects[i].effect, i);
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

function spellCheck(){
    var data = new RollData();
    data.proficiency = proficiencies;
    data.ability = abilities;
    data.boost = boosts;
    data.challenge = challenges;
    data.difficulty = difficulty;
    data.penalty = penalties;
    data.autoSuccess = autoSuccess;

    var results = rollDice(data);

    conquestsDisplay.innerText = results.conquests;
    calamityDisplay.innerText = results.calamities;
    successDisplay.innerText = results.successes;
    advantageDisplay.innerText = results.advantage;

    resultsHolder.innerHTML = "";
    for(let i = 0; i < results.resultDice.length; i++){
        resultsHolder.innerHTML += results.resultDice[i];
    }
}

function clearCustomModifiers(){
    upgradesInpt.value = 0;
    upgradgeAbilityInpt.value =0;
    challengeInpt.value = 0;
    difficultyInpt.value = 0;
    penaltyInpt.value = 0;
    proficiencyInpt.value = 0;
    abilityInpt.value = 0;
    boosInpt.value = 0;
    autoSucInpt.value = 0;
}

function applyNodes(effect, i){
    for(var j = 0; j < currentEffects[i].nodes; j++){
        difficulty += Number(effect.Difficulty);
        upgrades += Number(effect.Upgrades);
        penalties += Number(effect.Penalty);
        if(effect.SpecialModifier != ""){
            specialModifier(effect.SpecialModifier, i);
        }
    }
}

function specialModifier(modifierName, i){
    switch(modifierName){
        case "boost":
            boosts++;
            break;
        case "double":
            double = true;
            break;
        case "success":
            autoSuccess++;
            break;
        case "lock":
            difficulty += Number(currentEffects[i].special);
            break;
        case "unwillingTarget":
            upgrades += Number(currentEffects[i].special);
            break;
        case "languages":
            difficulty += Number(currentEffects[i].special);
            break;
        case "enemyType":
            penalties += Number(currentEffects[i].special);
            break;
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

function clearAllEffects(){
    
}

function selectMenuOption(evt){
    createNewEffect(evt.currentTarget.effect);
    addEffect.style.display = "block";
    effectMenu.style.display = "none";
}

function createNewEffect(effect){
    var currentEffect = new SpellEffect;

    var effectElm = document.createElement("div");
    effectElm.classList.add("spell-card");
    spellEffectsBox.insertBefore(effectElm, addEffect);

    var nameElm = document.createElement("h4");
    nameElm.classList.add("spell-name");
    nameElm.classList.add("card-element");
    nameElm.innerText = effect.Name;
    effectElm.appendChild(nameElm);

    var buttonElm = document.createElement("button");
    buttonElm.classList.add("remove-effect");
    buttonElm.innerText = "X";
    effectElm.appendChild(buttonElm);

    var nodesElm = document.createElement("h4");
    nodesElm.innerText = "Number of Nodes: ";
    nodesElm.classList.add("card-element");
    effectElm.appendChild(nodesElm);
    
    var inputElm = document.createElement("input");
    inputElm.classList.add("can-point");
    inputElm.type = "number";
    inputElm.value = "1";
    inputElm.min = "1";
    inputElm.oninput = "validity.valid||(value='');";
    nodesElm.appendChild(inputElm);
    
    var tierElm = document.createElement("h4");
    tierElm.innerText = "Tier: " + effect.Tier;
    tierElm.classList.add("card-element");
    effectElm.appendChild(tierElm);

    var durationElm = document.createElement("h4");
    durationElm.innerText = "Duration: " + effect.Duration;
    durationElm.classList.add("card-element");
    effectElm.appendChild(durationElm);

    var modElm = document.createElement("h4");
    modElm.innerText = "Difficulty Modifier: " + effect.Modifier;
    modElm.classList.add("card-element");
    effectElm.appendChild(modElm);

    edgeCaseElements(effect, effectElm, currentEffect);

    createLine(effectElm);

    var descriptionElm = document.createElement("h4");
    descriptionElm.innerText = effect.Description;
    descriptionElm.classList.add("description");
    descriptionElm.classList.add("card-element");
    effectElm.appendChild(descriptionElm);

    currentEffect.element = effectElm;
    currentEffect.effect = effect;
    currentEffect.nodeInput = inputElm;
    currentEffect.nodes = inputElm.value;

    currentEffects.push(currentEffect);
    buttonElm.effect = currentEffect;
    buttonElm.addEventListener("click", destroyEffectEvent);
    inputElm.addEventListener("change", changeNodes);
}

function destroyEffectEvent(evt){
    var effect = evt.currentTarget.effect;
    destroyEffect(effect);
}

function destroyAllEffects(){
    for(var i = currentEffects.length - 1; i >= 0; i--){
        destroyEffect(currentEffects[i]);
    }
}

function destroyEffect(effect){
    while(effect.element.firstChild){
        while(effect.element.firstChild.firstChild){
            effect.element.firstChild.removeChild(effect.element.firstChild.firstChild);
        }
        effect.element.removeChild(effect.element.firstChild);
    }
    effect.element.remove();
    var index = currentEffects.indexOf(effect);
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
    lineElm.classList.add("card-line");
    effectElm.appendChild(lineElm);
}

function edgeCaseElements(effect, effectElm, currentEffect){
    if(effect.SpecialModifier == "") return;

    switch(effect.SpecialModifier){
        case "lock":
            var labelText = "Difficulty of Lock: ";
            createEdgeCaseLabel(effectElm, currentEffect, labelText);
            break;
        case "unwillingTarget":
            var labelText = "Unwilling Targets: ";
            var edgeCase = createEdgeCaseLabel(effectElm, currentEffect, labelText);
            edgeCase.value = 0;
            currentEffect.special = edgeCase.value;
            break;
        case "languages":
            var labelText = "Language Rarity: ";
            var dropdown = createEdgeCaseDropdown(effectElm, currentEffect, labelText);
            createEdgeCaseOption(dropdown, "Common", 2);
            dropdown.value = 2;
            currentEffect.special = dropdown.value;
            createEdgeCaseOption(dropdown, "Rare", 4);
            break;
        case "enemyType":
            var labelText = "Enemy Type: ";
            var dropdown = createEdgeCaseDropdown(effectElm, currentEffect, labelText);
            createEdgeCaseOption(dropdown, "Minion", 0);
            dropdown.value = 0;
            currentEffect.special = 0;
            createEdgeCaseOption(dropdown, "Rival", 2);
            createEdgeCaseOption(dropdown, "Nemesis", 4);
            break;
    }
}

function createEdgeCaseLabel(effectElm, currentEffect, innerString){
    var edgeElmLabel = document.createElement("h4");
    edgeElmLabel.classList.add("card-element");
    edgeElmLabel.innerText = innerString;
    effectElm.appendChild(edgeElmLabel);

    var edgeElm = document.createElement("input");
    edgeElm.classList.add("can-point");
    edgeElm.type = "number";
    edgeElm.value = "1";
    edgeElm.min = "0";
    edgeElm.oninput = "validity.valid||(value='');";
    edgeElmLabel.appendChild(edgeElm);

    currentEffect.specialInput = edgeElm;
    currentEffect.special = edgeElm.value;
    edgeElm.addEventListener("change", changeSpecial);
    return edgeElm;
}

function createEdgeCaseDropdown(effectElm, currentEffect, innerString){
    var edgeCaseLabel = document.createElement("label");
    edgeCaseLabel.classList.add("card-element");
    edgeCaseLabel.for = "options";
    edgeCaseLabel.innerText = innerString;
    effectElm.appendChild(edgeCaseLabel);

    var dropdown = document.createElement("select");
    dropdown.name = "options";
    effectElm.appendChild(dropdown);
    currentEffect.specialInput = dropdown;
    currentEffect.special = dropdown.value;
    dropdown.addEventListener("change", changeSpecial);
    return dropdown;
}

function createEdgeCaseOption(selectElm, innerString, value){
    var option = document.createElement("option");
    option.value = value;
    option.innerText = innerString;
    selectElm.appendChild(option);
}

function changeSpecial(evt){
    var myInput = evt.currentTarget;
    for(var i = 0; i < currentEffects.length; i++){
        if(currentEffects[i].specialInput === myInput){
            currentEffects[i].special = myInput.value;
        }
    }
}

function setupEffectMenu(){
    var currentTier = "Metamagic";
    var currentChild = 0;
    for(var i = 0; i < spellEffects.length; i++){
        var currentEffect = spellEffects[i];
        var option = document.createElement("li");
        option.effect = currentEffect;
        option.innerText = currentEffect.Name;
        if(currentEffect.Tier != currentTier){
            currentTier = currentEffect.Tier;
            currentChild++;
        }
        else if(i >0){
            var listSpacer = document.createElement("li");
            listSpacer.classList.add("list-spacer");
            listSpacer.innerText = "|";
            effectMenu.children[currentChild].appendChild(listSpacer);
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
clearEffects.addEventListener("click", destroyAllEffects);
clearCustom.addEventListener("click", clearCustomModifiers);
assembleBtn.addEventListener("click", assembleDicePool);
rollDiceBtn.addEventListener("click", spellCheck);