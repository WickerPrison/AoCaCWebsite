var monsterList = document.getElementById("monster-list");
var monsterTemplate = document.getElementById("monster-template");
var attackTemplate = document.getElementById("attack-template");

var monsterDict = window.monsters;
var monsterKeys = Object.keys(window.monsters);

for(var i = 0; i < monsterKeys.length; i++){
    createMonster( monsterKeys[i], monsterDict[monsterKeys[i]]);
}


function createMonster(name, monster){
    var newMonster = monsterTemplate.cloneNode(true);
    newMonster.id = "monster " + name;

    newMonster.querySelector(".box-header").innerText = name;

    var creatureTypesElm = newMonster.querySelector(".creature-types");
    creatureTypesElm.innerHTML = "<strong>Creature Types:</strong> " + monster["Creature Types"];

    var tierElm = newMonster.querySelector(".monster-tier");
    tierElm.innerHTML = "<strong>Tier:</strong> " + monster["Tier"];

    newMonster.querySelector(".hp").innerText = monster["HP"];
    newMonster.querySelector(".stamina").innerText = monster["Stamina"];
    newMonster.querySelector(".damage-reduction").innerText = monster["Damage Reduction"];

    var defenseElm = newMonster.querySelector(".defense");
    defenseElm.innerText = monster["Melee Defense"] + "|" + monster["Ranged Defense"];

    newMonster.querySelector(".sil").innerText = monster["Silhouette"];
    newMonster.querySelector(".move-pts").innerText = monster["Speed"];
    newMonster.querySelector(".agility").innerText = monster["Agility"];
    newMonster.querySelector(".brawn").innerText = monster["Brawn"];
    newMonster.querySelector(".cunning").innerText = monster["Cunning"];
    newMonster.querySelector(".intellect").innerText = monster["Intellect"];
    newMonster.querySelector(".presence").innerText = monster["Presence"];
    newMonster.querySelector(".willpower").innerText = monster["Willpower"];

    var immunitiesString = "";
    if(monster["Immunities"] != ""){
        immunitiesString += "<strong>Immunities:</strong> " + monster["Immunities"] + " ";
    }
    if(monster["Resistances"] != ""){
        immunitiesString += "<strong>Resistances:</strong> " + monster["Resistances"] + " ";
    }
    if(monster["Weaknesses"] != ""){
        immunitiesString += "<strong>Weaknesses:</strong> " + monster["Weaknesses"] + " ";
    }
    var immunitiesElm = newMonster.querySelector(".immunities");
    immunitiesElm.innerHTML = immunitiesString;

    newMonster.querySelector(".skills").innerHTML = "<strong>Skills:</strong> " + monster["Skills"];
    
    if(monster["Talents/Abilities"] != ""){
        newMonster.querySelector(".talents-abilities").innerHTML = "<strong>Talents/Abilities:</strong> " + monster["Talents/Abilities"];
    }

    if(monster["Special Features"] != ""){
        newMonster.querySelector(".special-features").innerHTML = "<strong>Special Features:</strong> " + monster["Special Features"]
    }

    var attackArray = monster["Attacks"].split(", ");
    var attackDict = window.attacks;

    var attacksHolder = newMonster.querySelector(".attacks");

    for(var i = 0; i < attackArray.length; i++){
        var attackElm = attackTemplate.cloneNode(true);
        attackElm.id = name + "-" + attackArray[i];

        var attack = attackDict[attackArray[i]];

        attackElm.querySelector(".attack-name").innerHTML = attackArray[i].bold();
        attackElm.querySelector(".attack-skill").innerHTML = "<strong>Skill:</strong> " + attack.Skill;
        attackElm.querySelector(".damage").innerHTML = "<strong>Damage:</strong> " + attack.Damage;
        attackElm.querySelector(".range").innerHTML = "<strong>Range:</strong> " + attack.Range;
        attackElm.querySelector(".crit").innerHTML = "<strong>Crit:</strong> " + attack.Crit;
        attackElm.querySelector(".properties").innerHTML = "<strong>Properties:</strong> " + attack.Properties;

        attacksHolder.appendChild(attackElm);
    }

    monsterList.appendChild(newMonster);
}