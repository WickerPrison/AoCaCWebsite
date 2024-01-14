var className = sessionStorage.getItem('className');
var nameElement = document.getElementById("class-name");
var talents = document.getElementsByClassName("talent");
var naturalSpells = document.getElementById("natural-spells");
var naturalTitle = document.getElementById("natural-title");
var developedSpells = document.getElementById("developed-spells");
var developedTitle = document.getElementById("developed-title");
var masteredSpell = document.getElementById("mastered-spell");
var masteredTitle = document.getElementById("mastered-title");
var tableTalets = document.getElementsByClassName("table-talent");
var tableDescriptions = document.getElementsByClassName("table-description");

const TierDict ={
    "Natural": naturalSpells,
    "Developed": developedSpells,
    "Mastered": masteredSpell,
    "Law":naturalSpells,
    "Theories":developedSpells,
    "Hypothesis":masteredSpell
}

if(nameElement != null){
    
    nameElement.innerHTML = className;
}

for(var i = 0; i < 20; i++){
    var talentName = window.skillTrees[className][i];
    talents[i].innerHTML = talentName;
    var description = getTalentDescription(talentName);
    talents[i].dataset.content = description;
    tableTalets[i].innerHTML = talentName;
    tableDescriptions[i].innerHTML = description;
}

var innateClasses = ["Channeler", "Druid", "Sage", "Shapeshifter"];
if(innateClasses.includes(className)){
    var spellKeys = Object.keys(window.innateSpells);
    for(var i = 0; i < spellKeys.length; i++){
        if(window.innateSpells[spellKeys[i]].Classes.includes(className)){
            createSpellCard(spellKeys[i]);
        }
    }

    if(className == "Shapeshifter"){
        masteredSpell.style.display = "none";
        masteredTitle.style.display = "none";
    }
}
else if(className == "Fundamentalist"){
    naturalTitle.innerText = "Laws";
    developedTitle.innerText = "Theories";
    masteredTitle.innerText = "Hypothesis";

    var spellKeys = Object.keys(window.fundamentalistSpells);
    for(var i = 0; i < spellKeys.length; i++){
        var newCard = window.createFundamentalistCard(spellKeys[i]);
        TierDict[window.fundamentalistSpells[spellKeys[i]].Tier].appendChild(newCard);
    }
}
else{
    var innateElements = document.getElementsByClassName("innate");
    for(var i = 0; i < innateElements.length; i++){
        innateElements[i].style.display = "none";
    }
}

function createSpellCard(spellName){
    var cardElm = document.createElement("div");
    cardElm.classList.add("spell");
    cardElm.classList.add("box");

    var nameElm = document.createElement("h4");
    nameElm.classList.add("spell-name");
    nameElm.innerText = spellName;
    cardElm.appendChild(nameElm);

    createLine(cardElm);

    var tierElm = document.createElement("h4");
    tierElm.innerText = "Tier: " + window.innateSpells[spellName].Tier;
    cardElm.appendChild(tierElm);

    var stamElm = document.createElement("h4");
    stamElm.innerText = "Stamina Cost: " + window.innateSpells[spellName].Stamina;
    cardElm.appendChild(stamElm);

    createLine(cardElm);

    var descriptionElm = document.createElement("h4");
    descriptionElm.innerText = window.innateSpells[spellName].Description;
    cardElm.appendChild(descriptionElm);

    TierDict[window.innateSpells[spellName].Tier].appendChild(cardElm);
}

function createLine(cardElm){
    var lineElm = document.createElement("div");
    lineElm.classList.add("line");
    cardElm.appendChild(lineElm);
}

function getTalentDescription(talentName){
    if(talentName.includes("Skill Proficiency")){
        talentName = "Skill Proficiency";
    }
    else if(talentName.includes("Skill Mastery")){
        talentName = "Skill Mastery";
    }
    else if(talentName.includes("Mastered Spell")){
        talentName = "Mastered Spell"
    }

    return window.talentList[talentName];
}

