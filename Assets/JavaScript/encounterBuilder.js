const monsterAutocomplete = document.getElementById("monster-autocomplete");
const monsterTemplate = document.getElementById("monster-template");
const skillTemplate = document.getElementById("skill-template");
const attackTemplate = document.getElementById("attack-template");
const addMonsterBtn = document.getElementById("add-monster");
const monsterList = document.getElementById("monster-list");
const newMonsterInput = document.getElementById("new-monster-input");

const inputElm = document.getElementById("dice-roll");
const closeBtn = document.getElementById("close-button");
const rollBtn = document.getElementById("roll-button");
const proficiencyInput = document.getElementById("proficiency");
const abilityInput = document.getElementById("ability");
const boostInput = document.getElementById("boost");
const challengeInput = document.getElementById("challenge");
const difficultyInput = document.getElementById("difficulty");
const penaltyInput = document.getElementById("penalty");
const upgrDifficultyInput = document.getElementById("upgr-difficulty");
const upgrAbilityInput = document.getElementById("upgr-ability");
const autoSuccessInput = document.getElementById("auto-success");

const conquestOutput = document.getElementById("conquests");
const calamitiesOutput = document.getElementById("calamities");
const successesOutput = document.getElementById("successes");
const advantageOutput = document.getElementById("advantage");


const attributesList = ["Agility", "Brawn", "Cunning", "Intellect", "Presence", "Willpower"];
let monsterDict;
let monsterNames = [];
let attackDict;

let currentMonsters;
function Monster(){
    this.id;
    this.monsterName;
    this.hp;
    this.stamina;
}

Promise.all([
    fetch(sheetUrl + "Monsters"),
    fetch(sheetUrl + "Attacks"),
    ])
    .then(responses => Promise.all(responses.map(response => response.text())))
    .then(data => {
        monsterDict = parseSheets(data[0]);
        attackDict = parseSheets(data[1]);
        for(let i = 0; i < monsterDict.length; i++){
            let autocompleteOption = document.createElement("option");
            autocompleteOption.value = monsterDict[i].Name;
            monsterAutocomplete.appendChild(autocompleteOption);
            monsterNames.push(monsterDict[i].Name);
        }

        if(localStorage.getItem("monsterIDnum") == null){
            localStorage.setItem("monsterIDnum", 0);
        }

        currentMonsters = JSON.parse(localStorage.getItem("currentMonsters"));
        if(currentMonsters == null){
            currentMonsters = [];
        }
        else{
            for(let i = 0; i < currentMonsters.length; i++){
                newMonsterInput.value = currentMonsters[i].monsterName;
                createNewMonster(currentMonsters[i].id);
            }
        }

    });


function createMonsterFromClick(){
    let idNum = Number(localStorage.getItem("monsterIDnum"));
    localStorage.setItem("monsterIDnum", idNum + 1);
    let currentMonster = createNewMonster(idNum);
    if(currentMonster != null){
        currentMonsters.push(currentMonster);
        localStorage.setItem("currentMonsters", JSON.stringify(currentMonsters));
    }
}

function createNewMonster(idNum){
    if(!monsterNames.includes(newMonsterInput.value)) return;

    let name = newMonsterInput.value;
    const monster = structuredClone(monsterDict.find(function(monsterObject){
        return monsterObject.Name == name;
    }
    ));
    
    const newMonster = monsterTemplate.cloneNode(true);

    newMonster.id = idNum;
    
    const closeMonsterBtn = newMonster.querySelector(".close-monster");
    closeMonsterBtn.parent = newMonster;
    closeMonsterBtn.addEventListener("click", closeMonster);

    newMonster.querySelector(".box-header").innerText = name;

    const creatureTypesElm = newMonster.querySelector(".creature-types");
    creatureTypesElm.innerHTML = "<strong>Creature Types:</strong> " + monster["Creature Types"];

    const tierElm = newMonster.querySelector(".monster-tier");
    tierElm.innerHTML = "<strong>Tier:</strong> " + monster["Tier"];

    newMonster.querySelector(".hp").querySelector(".stat-max").innerText = "/" + monster["HP"];
    const hpInput = newMonster.querySelector(".hp").querySelector(".stat-field");
    hpInput.value = monster["HP"];
    hpInput.addEventListener("input", () => {
        updateMonsterStat(idNum, "hp", hpInput.value);
    });

    newMonster.querySelector(".stamina").querySelector(".stat-max").innerText = "/" + monster["Stamina"];
    const staminaInput = newMonster.querySelector(".stamina").querySelector(".stat-field");
    staminaInput.value = monster["Stamina"];
    staminaInput.addEventListener("input", () =>{
        updateMonsterStat(idNum, "stamina", staminaInput.value);
    })
    newMonster.querySelector(".damage-reduction").innerText = monster["Damage Reduction"];

    const defenseElm = newMonster.querySelector(".defense");
    defenseElm.innerText = monster["Melee Defense"] + "|" + monster["Ranged Defense"];

    newMonster.querySelector(".sil").innerText = monster["Silhouette"];
    newMonster.querySelector(".move-pts").innerText = monster["Speed"];

    for(let i = 0; i < attributesList.length; i++){
        let attributeNumberElm = newMonster.querySelector("." + attributesList[i]);
        attributeNumberElm.innerText = monster[attributesList[i]];
        attributeNumberElm.attribute = attributesList[i];
        attributeNumberElm.monster = monster;
        attributeNumberElm.addEventListener("click", rollAttribute);
        let attributeLabelElm = newMonster.querySelector("." + attributesList[i] + "-label");
        attributeLabelElm.attribute = attributesList[i];
        attributeLabelElm.monster = monster;
        attributeLabelElm.addEventListener("click", rollAttribute);
    }

    let immunitiesString = "";
    if(monster["Immunities"] != ""){
        immunitiesString += "<strong>Immunities:</strong> " + monster["Immunities"] + " ";
    }
    if(monster["Resistances"] != ""){
        immunitiesString += "<strong>Resistances:</strong> " + monster["Resistances"] + " ";
    }
    if(monster["Weaknesses"] != ""){
        immunitiesString += "<strong>Weaknesses:</strong> " + monster["Weaknesses"] + " ";
    }
    const immunitiesElm = newMonster.querySelector(".immunities");
    immunitiesElm.innerHTML = immunitiesString;

    setupSkills(monster, newMonster.querySelector(".skills"));
    
    if(monster["Talents/Abilities"] != ""){
        newMonster.querySelector(".talents-abilities").innerHTML = "<strong>Talents/Abilities:</strong> " + monster["Talents/Abilities"];
    }

    if(monster["Special Features"] != ""){
        newMonster.querySelector(".special-features").innerHTML = "<strong>Special Features:</strong> " + monster["Special Features"]
    }

    let attackArray = monster["Attacks"].split(", ");
    const attacksHolder = newMonster.querySelector(".attacks");

    if(attackArray.length == 1 && attackArray[0] == ""){
        attackArray = [];
        const attacksHeading = newMonster.querySelector(".attacks-heading");
        attacksHeading.style.display = "none";
    }

    for(let i = 0; i < attackArray.length; i++){
        let attackElm = attackTemplate.cloneNode(true);
        attackElm.id = name + "-" + attackArray[i];

        let attack = attackDict.find(function(attackObject){
            return attackObject.Name == attackArray[i];  
        })

        attackElm.querySelector(".attack-name").innerHTML = attackArray[i].bold();
        attackElm.monster = monster;
        attackElm.attack = attack;
        attackElm.addEventListener("click", attackRoll);

        attackElm.querySelector(".attack-skill").innerHTML = "<strong>Skill:</strong> " + attack.Skill;
        
        let damageElm = attackElm.querySelector(".damage");
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


    let monsterBlock = currentMonsters.find((monster) => {
        return monster.id == idNum;
    });
    if(monsterBlock != null){
        hpInput.value = monsterBlock.hp;
        staminaInput.value = monsterBlock.stamina;
        return monsterBlock;
    }

    // creates the object that will be saved to local storage
    let currentMonster = new Monster();
    currentMonster.monsterName = name;
    currentMonster.id = idNum;
    currentMonster.hp = monster["HP"];
    currentMonster.stamina = monster["Stamina"];
    return currentMonster;
}

function rollAttribute(event){
    let monster = event.currentTarget.monster;
    let attribute = event.currentTarget.attribute;
    let rollInput = new RollData();
    rollInput.ability = monster[attribute];
    inputElm.style.display = "block";
    setInput(rollInput);
}

function setupSkills(monster, skillsElm){
    let skillsArray = monster.Skills.split(", ");
    let skillsObject = {};
    for(let i = 0; i < skillsArray.length; i++){
        let skill = skillsArray[i].split(" ");
        if(skill.length == 3){
            skill[0] = skill[0] + " " + skill[1];
            skill.splice(1, 1);
        }
        let skillName = String(skill[0]);
        skillsObject[skillName] = skill[1];

        let newSkillElm = skillTemplate.cloneNode(true);
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

function rollSkillCheck(event){
    let monster = event.currentTarget.monster;
    let skill = event.currentTarget.skill;
    let attribute = window.skillsDict[skill];
    if(typeof attribute == "object"){
        if(monster[attribute[0]] > monster[attribute[1]]){
            attribute = attribute[0];
        }
        else{
            attribute = attribute[1];
        }
    }

    let rollInput = new RollData();
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
    let monster = event.currentTarget.monster;
    let attack = event.currentTarget.attack;
    let skill = attack.Skill;
    
    let attribute;
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

    let rollInput = new RollData();
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

function attackDamage(damageElm){
    if(damageElm.showCalc){
        let displayString = damageElm.attack.Damage + " + " + damageElm.attack.Attribute;
        damageElm.innerHTML = "<strong>Damage:</Strong> " + displayString;
    }
    else{
        let damageNum = Number(damageElm.attack.Damage);
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
    let rollData = new RollData();
    rollData.proficiency = proficiencyInput.value;
    rollData.ability = abilityInput.value;
    rollData.boost = boostInput.value;
    rollData.challenge = challengeInput.value;
    rollData.difficulty = difficultyInput.value;
    rollData.penalty = penaltyInput.value;
    rollData.upgradeDifficulty = upgrDifficultyInput.value;
    rollData.upgradeAbility = upgrAbilityInput.value;
    rollData.autoSuccess = autoSuccessInput.value;

    let resultsData = window.rollDice(rollData);
    conquestOutput.innerText = resultsData.conquests;
    calamitiesOutput.innerText = resultsData.calamities;
    successesOutput.innerText = resultsData.successes;
    advantageOutput.innerText = resultsData.advantage;
}

function closeMonster(event){
    for(let i = 0; i < currentMonsters.length; i++){
        if(currentMonsters[i].id == event.currentTarget.parent.id){
            currentMonsters.splice(i, 1);
            break;
        }
    }
    localStorage.setItem("currentMonsters", JSON.stringify(currentMonsters));
    event.currentTarget.parent.remove();
}

function updateMonsterStat(id, stat, number){
    let monsterBlock = currentMonsters.find((monster) => {
        return monster.id == id;
    });
    monsterBlock[stat] = number;
    console.log("test");
    localStorage.setItem("currentMonsters", JSON.stringify(currentMonsters));
}

closeBtn.addEventListener("click", function(){
    setInput(new RollData());
    inputElm.style.display = "none";
})
rollBtn.addEventListener("click", makeCheck);
addMonsterBtn.addEventListener("click", createMonsterFromClick);