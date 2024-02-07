var monsterList = document.getElementById("monster-list");
var monsterTemplate = document.getElementById("monster-template");
var attackTemplate = document.getElementById("attack-template");
var skillTemplate = document.getElementById("skill-template");

var inputElm = document.getElementById("dice-roll");
var closeBtn = document.getElementById("close-button");
var rollBtn = document.getElementById("roll-button");
var proficiencyInput = document.getElementById("proficiency");
var abilityInput = document.getElementById("ability");
var boostInput = document.getElementById("boost");
var challengeInput = document.getElementById("challenge");
var difficultyInput = document.getElementById("difficulty");
var penaltyInput = document.getElementById("penalty");
var upgrDifficultyInput = document.getElementById("upgr-difficulty");
var upgrAbilityInput = document.getElementById("upgr-ability");
var autoSuccessInput = document.getElementById("auto-success");

var conquestOutput = document.getElementById("conquests");
var calamitiesOutput = document.getElementById("calamities");
var successesOutput = document.getElementById("successes");
var advantageOutput = document.getElementById("advantage");


var attributesList = ["Agility", "Brawn", "Cunning", "Intellect", "Presence", "Willpower"];
var monsterDict;
var attackDict;


fetch("https://docs.google.com/spreadsheets/d/1-kaFQQ1eBHRN_aLlpHn72A2dG97wl7nLB4MKmKny_tM/gviz/tq?sheet=Monsters")
.then(response => response.text())
.then(data =>{
    monsterDict = parseSheets(data);
    console.log(monsterDict);

    fetch("https://docs.google.com/spreadsheets/d/1-kaFQQ1eBHRN_aLlpHn72A2dG97wl7nLB4MKmKny_tM/gviz/tq?sheet=Attacks")
    .then(response => response.text())
    .then(data =>{
        attackDict = parseSheets(data);
        for(var i = 0; i < monsterDict.length; i++){
            createMonster(monsterDict[i]);
        }
    })
})


function createMonster(monster){
    var newMonster = monsterTemplate.cloneNode(true);
    var name = monster.Name;
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

    for(var i = 0; i < attributesList.length; i++){
        var attributeNumberElm = newMonster.querySelector("." + attributesList[i]);
        attributeNumberElm.innerText = monster[attributesList[i]];
        attributeNumberElm.attribute = attributesList[i];
        attributeNumberElm.monster = monster;
        attributeNumberElm.addEventListener("click", rollAttribute);
        var attributeLabelElm = newMonster.querySelector("." + attributesList[i] + "-label");
        attributeLabelElm.attribute = attributesList[i];
        attributeLabelElm.monster = monster;
        attributeLabelElm.addEventListener("click", rollAttribute);
    }

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

    setupSkills(monster, newMonster.querySelector(".skills"));
    
    if(monster["Talents/Abilities"] != ""){
        newMonster.querySelector(".talents-abilities").innerHTML = "<strong>Talents/Abilities:</strong> " + monster["Talents/Abilities"];
    }

    if(monster["Special Features"] != ""){
        newMonster.querySelector(".special-features").innerHTML = "<strong>Special Features:</strong> " + monster["Special Features"]
    }

    var attackArray = monster["Attacks"].split(", ");
    var attacksHolder = newMonster.querySelector(".attacks");

    if(attackArray.length == 1 && attackArray[0] == ""){
        attackArray = [];
        var attacksHeading = newMonster.querySelector(".attacks-heading");
        attacksHeading.style.display = "none";
    }

    for(var i = 0; i < attackArray.length; i++){

        var attackElm = attackTemplate.cloneNode(true);
        attackElm.id = name + "-" + attackArray[i];

        var attack = attackDict.find(function(attackObject){
          return attackObject.Name == attackArray[i];  
        })

        attackElm.querySelector(".attack-name").innerHTML = attackArray[i].bold();
        attackElm.monster = monster;
        attackElm.attack = attack;
        attackElm.addEventListener("click", attackRoll);

        attackElm.querySelector(".attack-skill").innerHTML = "<strong>Skill:</strong> " + attack.Skill;
        
        var damageElm = attackElm.querySelector(".damage");
        damageElm.attack = attack;
        damageElm.monster = monster;
        damageElm.showCalc = false;
        attackDamage(damageElm);
        damageElm.addEventListener("click", toggleDamageDisplay);
        
        attackElm.querySelector(".range").innerHTML = "<strong>Range:</strong> " + attack.Range;
        attackElm.querySelector(".crit").innerHTML = "<strong>Crit:</strong> " + attack.Crit;
        attackElm.querySelector(".properties").innerHTML = "<strong>Properties:</strong> " + attack.Properties;

        attacksHolder.appendChild(attackElm);
    }

    monsterList.appendChild(newMonster);
}

function setupSkills(monster, skillsElm){
    var skillsArray = monster.Skills.split(", ");
    var skillsObject = {};
    for(var i = 0; i < skillsArray.length; i++){
        var skill = skillsArray[i].split(" ");
        if(skill.length == 3){
            skill[0] = skill[0] + " " + skill[1];
            skill.splice(1, 1);
        }
        var skillName = String(skill[0]);
        skillsObject[skillName] = skill[1];

        var newSkillElm = skillTemplate.cloneNode(true);
        newSkillElm.id = monster.name + "-skill-" + i;
        newSkillElm.innerText = skillName + " " + skill[1];
        if(i < skillsArray.length - 1) newSkillElm.innerText += ", ";

        newSkillElm.monster = monster;
        newSkillElm.skill = skillName;
        newSkillElm.addEventListener("click", rollSkillCheck)

        skillsElm.appendChild(newSkillElm);

    }
    monster.Skills = skillsObject;
}

function attackDamage(damageElm){
    if(damageElm.showCalc){
        var displayString = damageElm.attack.Damage + " + " + damageElm.attack.Attribute;
        damageElm.innerHTML = "<strong>Damage:</Strong> " + displayString;
    }
    else{
        var damageNum = Number(damageElm.attack.Damage);
        switch (damageElm.attack.Attribute){
            case "None":
                break;
            case "Brawn/Agility":
                if(damageElm.monster.Brawn > damageElm.monster.Agility){
                    damageNum += Number(damageElm.monster.Brawn);
                }
                else{
                    damageNum += Number(damageElm.monster.Agility);
                }
                break;
            default:
                damageNum += Number(damageElm.monster[damageElm.attack.Attribute]);
                break;
        }

        damageElm.innerHTML = "<strong>Damage:</Strong> " + damageNum;
    }
}

function toggleDamageDisplay(event){
    event.stopPropagation();
    event.currentTarget.showCalc = !event.currentTarget.showCalc;
    attackDamage(event.currentTarget);
}

function rollAttribute(event){
    var monster = event.currentTarget.monster;
    var attribute = event.currentTarget.attribute;
    var rollInput = new RollData();
    rollInput.ability = monster[attribute];
    inputElm.style.display = "block";
    setInput(rollInput);
}

function rollSkillCheck(event){
    var monster = event.currentTarget.monster;
    var skill = event.currentTarget.skill;
    var attribute = window.skillsDict[skill];
    if(typeof attribute == "object"){
        if(monster[attribute[0]] > monster[attribute[1]]){
            attribute = attribute[0];
        }
        else{
            attribute = attribute[1];
        }
    }

    var rollInput = new RollData();
    if(monster[attribute] > monster.Skills[skill]){
        rollInput.ability = monster[attribute];
        rollInput.upgradeAbility = monster.Skills[skill];
    }
    else{
        rollInput.ability = monster.Skills[skill];
        rollInput.upgradeAbility = monster[attribute];
    }
    inputElm.style.display = "block";
    setInput(rollInput);
}

function attackRoll(event){
    var monster = event.currentTarget.monster;
    var attack = event.currentTarget.attack;
    var skill = attack.Skill;
    
    var attribute;
    switch (attack.Attribute){
        case "None":
            attribute = window.skillsDict[skill];
            if(typeof attribute == "object"){
                if(monster[attribute[0]] > monster[attribute[1]]){
                    attribute = attribute[0];
                }
                else{
                    attribute = attribute[1];
                }
            }
            break;
        case "Brawn/Agility":
            if(monster.Brawn > monster.Agility){
                attribute = "Brawn";
            }
            else{
                attribute = "Agility";
            }
            break;
        default:
            attribute = attack.Attribute;
            break;
    }

    var rollInput = new RollData();
    if(monster.Skills[skill] == null){
        rollInput.ability = monster[attribute];
    }
    else if(monster[attribute] > monster.Skills[skill]){
        rollInput.ability = monster[attribute];
        rollInput.upgradeAbility = monster.Skills[skill];
    }
    else{
        rollInput.ability = monster.Skills[skill];
        rollInput.upgradeAbility = monster[attribute];
    }
    rollInput.boost = attack.Accurate;
    rollInput.difficulty = 2;
    inputElm.style.display = "block";
    setInput(rollInput);
}

function setInput(rollInput){
    proficiencyInput.value = rollInput.proficiency;
    abilityInput.value = rollInput.ability;
    boostInput.value = rollInput.boost;
    challengeInput.value = rollInput.challenge;
    difficultyInput.value = rollInput.difficulty;
    penaltyInput.value = rollInput.penalty;
    upgrDifficultyInput.value = rollInput.upgradeDifficulty;
    upgrAbilityInput.value = rollInput.upgradeAbility;
    autoSuccessInput.value = rollInput.autoSuccess;
}

function makeCheck(){
    var rollData = new RollData();
    rollData.proficiency = proficiencyInput.value;
    rollData.ability = abilityInput.value;
    rollData.boost = boostInput.value;
    rollData.challenge = challengeInput.value;
    rollData.difficulty = difficultyInput.value;
    rollData.penalty = penaltyInput.value;
    rollData.upgradeDifficulty = upgrDifficultyInput.value;
    rollData.upgradeAbility = upgrAbilityInput.value;
    rollData.autoSuccess = autoSuccessInput.value;

    var resultsData = window.rollDice(rollData);
    conquestOutput.innerText = resultsData.conquests;
    calamitiesOutput.innerText = resultsData.calamities;
    successesOutput.innerText = resultsData.successes;
    advantageOutput.innerText = resultsData.advantage;
}

closeBtn.addEventListener("click", function(){
    setInput(new RollData());
    inputElm.style.display = "none";
})
rollBtn.addEventListener("click", makeCheck);