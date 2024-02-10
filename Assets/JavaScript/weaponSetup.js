var weaponTableTemplate = document.getElementById("weapon-table-template");
var weaponTemplate = document.getElementById("weapon-template");
var tables = document.getElementById("weapon-tables");
var propertyTable = document.getElementById("properties-table");
var propertyTemplate = document.getElementById("property-template");
var main = document.querySelector("main");
var modTable = document.getElementById("modifications-table");
var modTemplate = document.getElementById("mod-part-template");

var weapons;
var properties;
var weaponMods = [];
var masterworks = [];

var currentTable;

main.style.display = "none";

Promise.all([
fetch(sheetUrl + "Weapons"),
fetch(sheetUrl + "WeaponProperties"),
fetch(sheetUrl + "WeaponModifications")
])
.then(responses => Promise.all(responses.map(response => response.text())))
.then(data => {
    main.style.display = "block"
    weapons = parseSheets(data[0]);
    properties = parseSheets(data[1]);
    var modData = parseSheets(data[2]);
    for(var i = 0; i < modData.length; i++){
        if(modData[i].Name == ""){
            weaponMods.push(modData[i]);
        }
        else{
            masterworks.push(modData[i]);
        }
    }

    setupWeaponsTables();
    for(var i = 0; i < properties.length; i++){
        createNewProperty(properties[i]);
    }
    setUpMods();
});

function setupWeaponsTables(){
    var currentSkill;
    for(var i = 0; i < weapons.length; i++){
        if(weapons[i].Skill != currentSkill){
            currentSkill = weapons[i].Skill;
            createNewTable(weapons[i].Skill);
        }

        createNewWeapon(weapons[i]);
    }
}

function createNewTable(skill){
    currentTable = weaponTableTemplate.cloneNode(true);
    currentTable.id = skill + " Table";
    currentTable.querySelector(".table-header").innerText = skill;
    tables.appendChild(currentTable);
}

function createNewWeapon(weapon){
    var weaponElm = weaponTemplate.cloneNode(true);
    weaponElm.id = weapon.Name;

    var name = weaponElm.querySelector(".weapon-name");
    name.innerText = weapon.Name;

    var damage = weaponElm.querySelector(".damage");
    damage.innerHTML = "<strong>Damage: </strong>" + weapon.Damage;
    if(weapon.Attribute != "None"){
        if(weapon.Attribute == "Brawn/Agility"){
            damage.innerHTML += " + Brawn";
        }
        else{
            damage.innerHTML += " + " + weapon.Attribute
        }
    }

    var array = ["Skill", "Range", "Critical", "Parts", "Encumbrance", "Material", "Price", "Rarity", "Properties"];

    for(var i = 0; i < array.length; i++){
        var entry = weaponElm.querySelector("." + array[i]);
        entry.innerHTML = "<strong>" + array[i] + ": " + "</strong>" + weapon[array[i]];
    }

    currentTable.appendChild(weaponElm);
}

function createNewProperty(property){
    var propertyElm = propertyTemplate.cloneNode(true);
    propertyElm.id = property.Name;

    propertyElm.querySelector(".property-name").innerText = property.Name;

    propertyElm.querySelector(".property-description").innerText = property.Description;

    propertyTable.appendChild(propertyElm);
}

function setUpMods(){
    var allParts = ["Blade", "Boss", "Dart", "Frame", "Grip", "Head", "Point"];

    for(var i = 0; i < allParts.length; i++){
        var modPartElm = modTemplate.cloneNode(true);
        modPartElm.id = allParts[i];

        modPartElm.querySelector(".part-label").innerText = allParts[i];

        modTable.appendChild(modPartElm);
    }

    for(var i = 0; i < weaponMods.length; i++){

        var parts = weaponMods[i].Parts.split(" ");
        for(var j = 0; j < parts.length; j++){
            var modDescription = document.createElement("div");
            modDescription.classList.add("mod-desc");

            console.log(weaponMods[i].Description);

            modDescription.innerText = weaponMods[i].Description;
    
            document.getElementById(parts[j]).querySelector(".mod-descriptions").appendChild(modDescription);
        }
    }
}