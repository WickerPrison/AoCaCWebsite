var newRollButton = document.getElementById("new-roll");
var rollTemplate = document.getElementById("roll-template");
var rollsHolder = document.getElementById("rolls-holder");

var rolls = [];
var rollCounter = 0;

function createNewRoll(){
    var newRollElm = rollTemplate.cloneNode(true);
    newRollElm.id = "roll" + rollCounter;
    rollCounter++;
    rolls.push(newRollElm);
    newRollElm.classList.add("roll-box");
    rollsHolder.appendChild(newRollElm);

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
}

function callDiceRoll(evt){
    var input = evt.currentTarget.parent.input;
    var output = evt.currentTarget.parent.output;
    var rollData = evt.currentTarget.parent.data;

    for(const property in input){
        rollData[property] = input[property].value;
    }

    var results = window.rollDice(rollData);

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

function removeRoll(evt){
    var oldRoll = evt.currentTarget.parent;
    rolls.splice(rolls.indexOf(oldRoll), 1);
    oldRoll.remove();
}

newRollButton.addEventListener("click", createNewRoll);