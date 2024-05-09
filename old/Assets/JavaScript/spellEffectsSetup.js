var table = document.getElementById("effects-table");
var currentTier = "Metamagic";
var spellEffects;

fetch("https://docs.google.com/spreadsheets/d/1-kaFQQ1eBHRN_aLlpHn72A2dG97wl7nLB4MKmKny_tM/gviz/tq?sheet=ScholarlySpells")
.then(response => response.text())
.then(data =>{
    spellEffects = parseSheets(data);

    createSectionHeading(currentTier + "s");
    for(var i = 0; i < spellEffects.length; i++){
        if(spellEffects[i].Tier != currentTier){
            currentTier = spellEffects[i].Tier;
            createSectionHeading(currentTier + " Spell Effects");
        }
        
        spellCard(spellEffects[i]);
    }
})

function spellCard(effect){
    var card = document.createElement("div");
    table.appendChild(card);
    card.classList.add("spell-card");

    var nameElement = document.createElement("div");
    createCardElement(card, nameElement);
    nameElement.classList.add("spell-name");
    nameElement.innerText = effect.Name;

    var tier = document.createElement("div");
    createCardElement(card, tier);
    tier.classList.add("tier");
    tier.innerText = "Tier: " + effect.Tier;

    var duration = document.createElement("div");
    createCardElement(card, duration);
    duration.classList.add("duration");
    duration.innerText = "Duration: " + effect.Duration;
    
    var modifier = document.createElement("div");
    createCardElement(card, modifier);
    modifier.classList.add("modifier");
    modifier.innerText = "Difficulty Modifier: " + effect.Modifier;

    createLine(card);

    var description = document.createElement("div");
    createCardElement(card, description);
    description.classList.add("description");
    description.innerText = effect.Description;
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