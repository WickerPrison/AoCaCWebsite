var table = document.getElementById("effects-table");
var currentTier = "Metamagic";

createSectionHeading(currentTier + "s");
var keys = Object.keys(window.spellEffects);
for(var i = 0; i < keys.length; i++){
    if(window.spellEffects[keys[i]].Tier != currentTier){
        currentTier = window.spellEffects[keys[i]].Tier;
        createSectionHeading(currentTier + " Spell Effects");
    }
    
    spellCard(keys[i]);
}


function spellCard(spellName){
    var card = document.createElement("div");
    table.appendChild(card);
    card.classList.add("spell-card");

    var nameElement = document.createElement("div");
    createCardElement(card, nameElement);
    nameElement.classList.add("name");
    nameElement.innerText = spellName;

    var tier = document.createElement("div");
    createCardElement(card, tier);
    tier.classList.add("tier");
    tier.innerText = "Tier: " + window.spellEffects[spellName].Tier;

    var duration = document.createElement("div");
    createCardElement(card, duration);
    duration.classList.add("duration");
    duration.innerText = "Duration: " + window.spellEffects[spellName].Duration;
    
    var modifier = document.createElement("div");
    createCardElement(card, modifier);
    modifier.classList.add("modifier");
    modifier.innerText = "Difficulty Modifier: " + window.spellEffects[spellName].Modifier;

    createLine(card);

    var description = document.createElement("div");
    createCardElement(card, description);
    description.classList.add("description");
    description.innerText = window.spellEffects[spellName].Description;
}

function createCardElement(card, element){
    card.appendChild(element);
    element.classList.add("card-element");
}

function createLine(card){
    var line = document.createElement("div");
    createCardElement(card, line);
    line.classList.add("card-line");
}

function createSectionHeading(sectionTitle){
    var sectionHeading = document.createElement("h3");
    table.appendChild(sectionHeading);
    sectionHeading.classList.add("tier-heading");
    sectionHeading.id = sectionTitle;
    sectionHeading.innerText = sectionTitle;
}