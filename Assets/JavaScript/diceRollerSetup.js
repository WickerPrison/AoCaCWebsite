const clearAllButton = document.getElementById("clear-all");
clearAllButton.style.display = "none";
const newRollButton = document.getElementById("new-roll");
const rollTemplate = document.getElementById("roll-template");
const rollsHolder = document.getElementById("rolls-holder");

var rolls = [];

function RollStorage(){
    this.id = 0;
    this.name = "";
    this.rollData = null;
}

if(localStorage.getItem("rollIDnum") == null){
    localStorage.setItem("rollIDnum", 0);
}

let storageRolls = localStorage.getItem("rolls");
if(storageRolls == null || storageRolls.length == 0){
    storageRolls = [];
}
else{
    storageRolls = JSON.parse(storageRolls);
    for(let i = 0; i < storageRolls.length; i++){
        let elm = createNewRoll();
        elm.id = storageRolls[i].id;
        elm.querySelector(".roll-title").value = storageRolls[i].name;
        for(const property in elm.input){
            elm.input[property].value = storageRolls[i].rollData[property];
        }
    }
}

function createRollFromButton(){
    let elm = createNewRoll();
    let rollStorage = new RollStorage();
    rollStorage.id = elm.id;
    rollStorage.name = elm.querySelector(".roll-title").value;
    rollStorage.rollData = elm.data;
    storageRolls.push(rollStorage);
    localStorage.setItem("rolls", JSON.stringify(storageRolls));
}

function createNewRoll(){
    var newRollElm = rollTemplate.cloneNode(true);
    newRollElm.id = localStorage.getItem("rollIDnum");
    localStorage.setItem("rollIDnum", Number(localStorage.getItem("rollIDnum")) + 1);
    rolls.push(newRollElm);
    newRollElm.classList.add("roll-box");
    rollsHolder.appendChild(newRollElm);

    var title = newRollElm.querySelector(".roll-title");
    title.value = "New Roll " + localStorage.getItem("rollIDnum");

    var newRollData = new RollData();
    newRollElm.data = newRollData;

    var input = {
        proficiency: newRollElm.querySelector(".proficiency"),
        ability: newRollElm.querySelector(".ability"),
        boost: newRollElm.querySelector(".boost"),
        challenge: newRollElm.querySelector(".challenge"),
        difficulty: newRollElm.querySelector(".difficulty"),
        penalty: newRollElm.querySelector(".penalty"),
        upgradeDifficulty: newRollElm.querySelector(".upgrade-diff"),
        upgradeAbility: newRollElm.querySelector(".upgrade-abil"),
        autoSuccess: newRollElm.querySelector(".auto-success")
    };
    newRollElm.input = input;

    var output = {
        conquests: newRollElm.querySelector(".conquests"),
        calamities: newRollElm.querySelector(".calamities"),
        successes: newRollElm.querySelector(".successes"),
        advantage: newRollElm.querySelector(".advantage")
    }
    newRollElm.output = output;

    var clearBtn = newRollElm.querySelector(".clear");
    clearBtn.parent = newRollElm;
    clearBtn.addEventListener("click", clearInput);

    var applyBtn = newRollElm.querySelector(".apply-upgrades");
    applyBtn.parent = newRollElm;
    applyBtn.addEventListener("click", applyUpgrades);

    var rollBtn = newRollElm.querySelector(".roll-dice");
    rollBtn.parent = newRollElm;
    rollBtn.addEventListener("click", callDiceRoll);
    
    var removeBtn = newRollElm.querySelector(".remove-button");
    removeBtn.parent = newRollElm;
    removeBtn.addEventListener("click", removeRoll);

    let allInputs = newRollElm.querySelectorAll("input");
    for(let i = 0; i < allInputs.length; i++){
        allInputs[i].addEventListener("input", () => {
            updateStorage(newRollElm);
        });
    }

    clearAllButton.style.display = "block";

    return newRollElm;
}

function updateStorage(rollElm){
    let storage = storageRolls.find((roll) => {
        return roll.id == rollElm.id;
    });
    storage.name = rollElm.querySelector(".roll-title").value;
    for(const property in rollElm.input){
        storage.rollData[property] = rollElm.input[property].value;
    }
    localStorage.setItem("rolls", JSON.stringify(storageRolls));
}

function callDiceRoll(evt){
    var input = evt.currentTarget.parent.input;
    var output = evt.currentTarget.parent.output;
    var rollData = evt.currentTarget.parent.data;

    for(const property in input){
        rollData[property] = input[property].value;
    }

    var results = rollDice(rollData);

    for(const property in output){
        output[property].innerText = results[property];
    }
}

function clearInput(evt){
    var input = evt.currentTarget.parent.input;

    for(const property in input){
        input[property].value = 0;
    }
}

function applyUpgrades(evt){
    var input = evt.currentTarget.parent.input;

    while(input.upgradeDifficulty.value > 0){
        if(input.difficulty.value > 0){
            input.difficulty.value--;
            input.challenge.value++;
        }
        else{
            input.difficulty.value++;
        }
        input.upgradeDifficulty.value--;
    }

    while(input.upgradeAbility.value > 0){
        if(input.ability.value > 0){
            input.ability.value--;
            input.proficiency.value++;
        }
        else{
            input.ability.value++;
        }
        input.upgradeAbility.value--;
    }
}

function removeAllRolls(){
    for(let i = 0; i < rolls.length; i++){
        rolls[i].remove();
    }
    rolls = [];
    storageRolls = [];
    localStorage.setItem("rolls", storageRolls);
    localStorage.setItem("rollIDnum", 0);
    clearAllButton.style.display = "none";
}

function removeRoll(evt){
    let oldRoll = evt.currentTarget.parent;
    for(let i = 0; i < storageRolls.length; i++){
        if(storageRolls[i].id == evt.currentTarget.parent.id){
            storageRolls.splice(i, 1);
        }
    }
    localStorage.setItem("rolls", JSON.stringify(storageRolls));
    if(storageRolls.length == 0){
        clearAllButton.style.display = "none";
        localStorage.setItem("rollIDnum", 0);
    } 
    rolls.splice(rolls.indexOf(oldRoll), 1);
    oldRoll.remove();
}

clearAllButton.addEventListener("click", removeAllRolls)
newRollButton.addEventListener("click", createRollFromButton);