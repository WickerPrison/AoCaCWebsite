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
var innateSpells;

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
    setupInnateSpells();
})


function setupInnateSpells(){
    var innateClasses = ["Channeler", "Druid", "Sage", "Shapeshifter"];
    if(innateClasses.includes(className)){
        fetch("https://docs.google.com/spreadsheets/d/1-kaFQQ1eBHRN_aLlpHn72A2dG97wl7nLB4MKmKny_tM/gviz/tq?sheet=InnateSpells")
        .then(response => response.text())
        .then(data =>{
            innateSpells = parseSheets(data);
            for(var i = 0; i < innateSpells.length; i++){
                if(innateSpells[i].Classes.includes(className)){
                    createSpellCard(innateSpells[i]);
                }
            }
        
            if(className == "Shapeshifter"){
                masteredSpell.style.display = "none";
                masteredTitle.style.display = "none";
            }
        })
    }
    else if(className == "Fundamentalist"){
        naturalTitle.innerText = "Laws";
        developedTitle.innerText = "Theories";
        masteredTitle.innerText = "Hypothesis";

        fetch("https://docs.google.com/spreadsheets/d/1-kaFQQ1eBHRN_aLlpHn72A2dG97wl7nLB4MKmKny_tM/gviz/tq?sheet=Fundamentalist")
        .then(response => response.text())
        .then(data =>{
            innateSpells = parseSheets(data);
            for(var i = 0; i < innateSpells.length; i++){
                var newCard = createFundamentalistCard(innateSpells[i]);
                TierDict[innateSpells[i].Tier].appendChild(newCard);
            }
        })
    }
    else{
        var innateElements = document.getElementsByClassName("innate");
        for(var i = 0; i < innateElements.length; i++){
            innateElements[i].style.display = "none";
        }
    }
}


function createSpellCard(spell){
    var cardElm = document.createElement("div");
    cardElm.classList.add("spell-card");
    // cardElm.classList.add("box");

    var nameElm = document.createElement("h4");
    nameElm.classList.add("spell-name");
    nameElm.classList.add("card-element");
    nameElm.innerText = spell.Name;
    cardElm.appendChild(nameElm);

    var tierElm = document.createElement("h4");
    tierElm.innerText = "Tier: " + spell.Tier;
    tierElm.classList.add("card-element");
    cardElm.appendChild(tierElm);

    var stamElm = document.createElement("h4");
    stamElm.innerText = "Stamina Cost: " + spell.Stamina;
    stamElm.classList.add("card-element");
    cardElm.appendChild(stamElm);

    createLine(cardElm);

    var descriptionElm = document.createElement("h4");
    descriptionElm.innerText = spell.Description;
    descriptionElm.classList.add("card-element");
    cardElm.appendChild(descriptionElm);

    TierDict[spell.Tier].appendChild(cardElm);
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

function createFundamentalistCard(spell){
	var cardElm = document.createElement("div");
	cardElm.classList.add("spell-card");

	var nameElm = document.createElement("h4");
	nameElm.classList.add("spell-name");
	nameElm.classList.add("card-element");
	nameElm.innerText = spell.Name;
	cardElm.appendChild(nameElm);

	var tierElm = document.createElement("h4");
    tierElm.innerText = "Tier: " + spell.Tier;
	tierElm.classList.add("card-element");
    cardElm.appendChild(tierElm);

	var stamElm = document.createElement("h4");
    stamElm.innerText = "Stamina Cost: " + spell.Stamina;
	stamElm.classList.add("card-element");
    cardElm.appendChild(stamElm);

	var polarizationElm = document.createElement("h4");
	polarizationElm.innerText = "Polarization: +/- " + spell.Polarization;
	polarizationElm.classList.add("card-element");
	cardElm.appendChild(polarizationElm);

	var positiveLabelElm = document.createElement("h4");
	positiveLabelElm.classList.add("spell-name");
	positiveLabelElm.classList.add("card-element");
	positiveLabelElm.innerText = "Positive Version";
	cardElm.appendChild(positiveLabelElm);

	var posDescriptionElm = document.createElement("h4");
	posDescriptionElm.innerText = spell.Positive;
	posDescriptionElm.classList.add("card-element");
	cardElm.appendChild(posDescriptionElm);

	var negativeLabelElm = document.createElement("h4");
	negativeLabelElm.classList.add("spell-name");
	negativeLabelElm.classList.add("card-element");
	negativeLabelElm.innerText = "Negative Version";
	cardElm.appendChild(negativeLabelElm);

	var negDescriptionElm = document.createElement("h4");
	negDescriptionElm.innerText = spell.Negative;
	negDescriptionElm.classList.add("card-element");
	cardElm.appendChild(negDescriptionElm);

	return cardElm;
}