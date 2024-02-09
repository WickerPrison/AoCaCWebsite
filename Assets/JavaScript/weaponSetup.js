var weaponTableTemplate = document.getElementById("weapon-table-template");
var weaponTemplate = document.getElementById("weapon-template");
var tables = document.getElementById("weapon-tables");
var propertyTable = document.getElementById("properties-table");
var propertyTemplate = document.getElementById("property-template");

var weapons;
var properties;
var weaponMods;

var currentTable;


Promise.all([
fetch(sheetUrl + "Weapons"),
fetch(sheetUrl + "WeaponProperties"),
fetch(sheetUrl + "WeaponModifications")
])
.then(responses => Promise.all(responses.map(response => response.text())))
.then(data => {
    weapons = parseSheets(data[0]);
    properties = parseSheets(data[1]);
    weaponMods = parseSheets(data[2]);

    setupWeaponsTables();
    for(var i = 0; i < properties.length; i++){
        createNewProperty(properties[i]);
    }
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

    var modSlots = weaponElm.querySelector(".mod-slots");
    modSlots.innerHTML = "<strong>Mod Slots: </strong>" + weapon.Slots;


    var array = ["Skill", "Range", "Critical", "Encumbrance", "Material", "Price", "Rarity", "Properties"];

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