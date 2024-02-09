var weaponTableTemplate = document.getElementById("weapon-table-template");
var weaponTemplate = document.getElementById("weapon-template");
var tables = document.getElementById("weapon-tables");
var propertyTable = document.getElementById("properties-table");
var propertyTemplate = document.getElementById("property-template");

var weapons;
var currentTable;

var properties;

fetch("https://docs.google.com/spreadsheets/d/1-kaFQQ1eBHRN_aLlpHn72A2dG97wl7nLB4MKmKny_tM/gviz/tq?sheet=Weapons")
.then(response => response.text())
.then(data =>{
    weapons = parseSheets(data);
    setupWeaponsTables();

    fetch("https://docs.google.com/spreadsheets/d/1-kaFQQ1eBHRN_aLlpHn72A2dG97wl7nLB4MKmKny_tM/gviz/tq?sheet=WeaponProperties")
    .then(response=> response.text())
    .then(data => {
        properties = parseSheets(data);

        for(var i = 0; i < properties.length; i++){
            createNewProperty(properties[i]);
        }
    })
})

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