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
    creatureTypesElm.innerText = "Creature Types: " + monster["Creature Types"];

    var tierElm = newMonster.querySelector(".monster-tier");
    tierElm.innerText = "Tier: " + monster["Tier"];

    newMonster.querySelector(".hp").innerText = "HP: " + monster["HP"];
    newMonster.querySelector(".stamina").innerText = "Stamina: " + monster["Stamina"];
    newMonster.querySelector(".damage-reduction").innerText = "DR: " + monster["Damage Reduction"];

    var defenseElm = newMonster.querySelector(".defense");
    defenseElm.innerText = "Def (M|R): " + monster["Melee Defense"] + "|" + monster["Ranged Defense"];

    newMonster.querySelector(".sil").innerText = "Silhouette: " + monster["Silhouette"];
    newMonster.querySelector(".move-pts").innerText = "Move. Pts.: " + monster["Speed"];
    newMonster.querySelector(".agility").innerText = "Agility: " + monster["Agility"];
    newMonster.querySelector(".brawn").innerText = "Brawn: " + monster["Brawn"];
    newMonster.querySelector(".cunning").innerText = "Cunning: " + monster["Cunning"];
    newMonster.querySelector(".intellect").innerText = "Intellect: " + monster["Intellect"];
    newMonster.querySelector(".presence").innerText = "Presence: " + monster["Presence"];
    newMonster.querySelector(".willpower").innerText = "Willpower: " + monster["Willpower"];

    newMonster.querySelector(".immunities").innerText = "Immunities: " + monster["Immunities"];
    newMonster.querySelector(".resistances").innerText = "Resistances: " + monster["Resistances"];
    newMonster.querySelector(".weaknesses").innerText = "Weaknesses: " + monster["Weaknesses"];

    newMonster.querySelector(".skills").innerText = "Skills: " + monster["Skills"];
    
    newMonster.querySelector(".talents-abilities").innerText = "Talents/Abilities: " + monster["Talents/Abilities"];
    newMonster.querySelector(".special-features").innerText = "Special Features: " + monster["Special Features"]

    var attackArray = monster["Attacks"].split(", ");
    var attackDict = window.attacks;

    var attacksHolder = newMonster.querySelector(".attacks");

    for(var i = 0; i < attackArray.length; i++){
        var attackElm = attackTemplate.cloneNode(true);
        attackElm.id = name + "-" + attackArray[i];

        var attack = attackDict[attackArray[i]];

        attackElm.querySelector(".attack-name").innerText = attackArray[i];
        attackElm.querySelector(".attack-skill").innerText = "Skill: " + attack.Skill;
        attackElm.querySelector(".damage").innerText = "Damage: " + attack.Damage;
        attackElm.querySelector(".range").innerText = "Range: " + attack.Range;
        attackElm.querySelector(".crit").innerText = "Crit: " + attack.Crit;
        attackElm.querySelector(".properties").innerText = "Properties: " + attack.Properties;

        attacksHolder.appendChild(attackElm);
    }

    monsterList.appendChild(newMonster);
}