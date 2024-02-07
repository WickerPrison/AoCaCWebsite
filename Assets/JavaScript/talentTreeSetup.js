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

var talentList;

fetch("https://docs.google.com/spreadsheets/d/1-kaFQQ1eBHRN_aLlpHn72A2dG97wl7nLB4MKmKny_tM/gviz/tq?sheet=Talents")
.then(response => response.text())
.then(data =>{
    talentList = parseSheets(data);
    for(var i = 0; i < 20; i++){
        var talentName = skillTrees[className][i];
        talents[i].innerHTML = talentName;
        var description = getTalentDescription(talentName);
        talents[i].dataset.content = description;
        tableTalets[i+1].innerHTML = talentName;
        tableDescriptions[i+1].innerHTML = description;
    }
})



var innateClasses = ["Channeler", "Druid", "Sage", "Shapeshifter"];
if(innateClasses.includes(className)){
    var spellKeys = Object.keys(innateSpells);
    for(var i = 0; i < spellKeys.length; i++){
        if(innateSpells[spellKeys[i]].Classes.includes(className)){
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

    var spellKeys = Object.keys(fundamentalistSpells);
    for(var i = 0; i < spellKeys.length; i++){
        var newCard = createFundamentalistCard(spellKeys[i]);
        TierDict[fundamentalistSpells[spellKeys[i]].Tier].appendChild(newCard);
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
    cardElm.classList.add("spell-card");
    // cardElm.classList.add("box");

    var nameElm = document.createElement("h4");
    nameElm.classList.add("spell-name");
    nameElm.classList.add("card-element");
    nameElm.innerText = spellName;
    cardElm.appendChild(nameElm);

    var tierElm = document.createElement("h4");
    tierElm.innerText = "Tier: " + innateSpells[spellName].Tier;
    tierElm.classList.add("card-element");
    cardElm.appendChild(tierElm);

    var stamElm = document.createElement("h4");
    stamElm.innerText = "Stamina Cost: " + innateSpells[spellName].Stamina;
    stamElm.classList.add("card-element");
    cardElm.appendChild(stamElm);

    createLine(cardElm);

    var descriptionElm = document.createElement("h4");
    descriptionElm.innerText = innateSpells[spellName].Description;
    descriptionElm.classList.add("card-element");
    cardElm.appendChild(descriptionElm);

    TierDict[innateSpells[spellName].Tier].appendChild(cardElm);
}

function createLine(cardElm){
    var lineElm = document.createElement("div");
    lineElm.classList.add("card-line");
    lineElm.classList.add("card-element");
    cardElm.appendChild(lineElm);
}

function getTalentDescription(talentName){
    if(talentName.includes("Skill Proficiency")){
        talentName = "Skill Proficiency: ___";
    }
    else if(talentName.includes("Skill Mastery")){
        talentName = "Skill Mastery: ___";
    }
    else if(talentName.includes("Mastered Spell")){
        talentName = "Mastered Spell: ___"
    }

    var talent = talentList.find(function(talentEntry){
        return talentEntry.Name == talentName;
    })
    return talent.Description;
}

