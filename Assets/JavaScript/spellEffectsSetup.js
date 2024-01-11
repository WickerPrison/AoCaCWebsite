var table = document.getElementById("effects-table");

var keys = Object.keys(window.spellEffects);
for(var i = 0; i < keys.length; i++){


    spellCard(keys[i]);




    // var spellName = document.createElement("div");
    // setupTableElement(spellName, "name");
    // spellName.innerText = keys[i];

    // var dictionaryRef = window.spellEffects[keys[i]];

    // var tier = document.createElement("div");
    // setupTableElement(tier, "tier");
    // tier.innerText = dictionaryRef.Tier;

    // var duration = document.createElement("div");
    // setupTableElement(duration, "duration");
    // duration.innerText = dictionaryRef.Duration;

    // var modifier = document.createElement("div");
    // setupTableElement(modifier, "modifier");
    // modifier.innerText = dictionaryRef.Modifier;

    // var description = document.createElement("div");
    // setupTableElement(description, "description");
    // description.innerText = dictionaryRef.Description;
}

// function setupTableElement(element, className){
//     table.appendChild(element);
//     element.classList.add("grid-item");
//     element.classList.add(className);
// }

function spellCard(spellName){
    var card = document.createElement("div");
    table.appendChild(card);
    card.classList.add("spell-card");

    var nameElement = document.createElement("div");
    createCardElement(card, nameElement);
    nameElement.classList.add("name");
    nameElement.innerText = spellName;

    createLine(card);

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