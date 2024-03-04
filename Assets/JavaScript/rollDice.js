function RollData(){
    this.proficiency = 0;
    this.ability = 0;
    this.boost = 0;
    this.challenge = 0;
    this.difficulty = 0;
    this.penalty = 0;
    this.upgradeDifficulty = 0;
    this.upgradeAbility = 0;
    this.autoSuccess = 0;
}

function ResultData(){
    this.conquests = 0;
    this.calamities = 0;
    this.successes = 0;
    this.advantage = 0;
    this.resultDice = [];
    this.addResultDie = function(dieName, isSquareDie = false){
        let squareDie = "";
        if(isSquareDie){
            squareDie = `class="square-die"`;
        }
        let outputString = `<img ${squareDie} src="AoCaCWebsite/Assets/Images/Dice/${dieName}.png">`;
        this.resultDice.push(outputString);
    };
}

function rollDice(rollData){
    rollData = upgradeRoll(rollData);
    var results = new ResultData();

    for(var i = 0; i < rollData.proficiency; i++){
        results = rollProficiency(results);
    }

    for(var i = 0; i < rollData.ability; i++){
        results = rollAbility(results);
    }
    
    for(var i = 0; i < rollData.boost; i++){
        results = rollBoost(results);
    }

    for(var i = 0; i < rollData.challenge; i++){
        results = rollChallenge(results);
    }

    for(var i = 0; i < rollData.difficulty; i++){
        results = rollDifficulty(results);
    }

    for(var i = 0; i < rollData.penalty; i++){
        results = rollPenalty(results);
    }

    results.successes += Number(rollData.autoSuccess);

    return results;
}

function rollProficiency(results){
    var randInt = Math.floor(Math.random() * 12) + 1;
    switch(randInt){
        case 1:
            results.addResultDie("ProficiencyBlank");
            break;
        case 2:
        case 3:
            results.successes++;
            results.addResultDie("ProficiencySuc");
            break;
        case 4:
        case 5:
            results.successes += 2;
            results.addResultDie("ProficiencyDoubleSuc");
            break;
        case 6:
            results.advantage++;
            results.addResultDie("ProficiencyAdv");
            break;
        case 7:
        case 8:
        case 9:
            results.successes++;
            results.advantage++;
            results.addResultDie("ProficiencyAdvSuc");
            break;
        case 10:
        case 11:
            results.advantage += 2;
            results.addResultDie("ProficiencyDoubleAdv");
            break;
        case 12:
            results.successes++;
            results.conquests++;
            results.addResultDie("ProficiencyConquest");
            break;
    }
    return results;
}

function rollChallenge(results){
    var randInt = Math.floor(Math.random() * 12) + 1;
    switch(randInt){
        case 1:
            results.addResultDie("ChallengeBlank");
            break;
        case 2:
        case 3:
            results.successes--;
            results.addResultDie("ChallengeFail");
            break;
        case 4:
        case 5:
            results.successes -= 2;
            results.addResultDie("ChallengeDoubleFail");
            break;
        case 6:
        case 7:
            results.advantage--;
            results.addResultDie("ChallengeDis");
            break;
        case 8:
        case 9:
            results.successes--;
            results.advantage--;
            results.addResultDie("ChallengeDisFail");
            break;
        case 10:
        case 11:
            results.advantage -= 2;
            results.addResultDie("ChallengeDoubleDis");
            break;
        case 12:
            results.successes--;
            results.calamities++;
            results.addResultDie("ChallengeCalamity");
            break;
    }
    return results;
}

function rollAbility(results){
    var randInt = Math.floor(Math.random() * 8) + 1;
    switch(randInt){
        case 1:
            results.addResultDie("AbilityBlank");
            break;
        case 2:
        case 3:
            results.successes++;
            results.addResultDie("AbilitySuc");
            break;
        case 4:
            results.successes += 2;
            results.addResultDie("AbilityDoubleSuc");
            break;
        case 5:
        case 6:
            results.advantage++;
            results.addResultDie("AbilityAdv");
            break;
        case 7:
            results.advantage++;
            results.successes++;
            results.addResultDie("AbilityAdvSuc");
            break;
        case 8:
            results.advantage += 2;
            results.addResultDie("AbilityDoubleAdv");
            break;
    }
    return results;
}

function rollDifficulty(results){
    var randInt = Math.floor(Math.random() * 8) + 1;
    switch(randInt){
        case 1:
            results.addResultDie("DifficultyBlank");
            break;
        case 2:
            results.successes--;
            results.addResultDie("DifficultyFail");
            break;
        case 3:
            results.successes -= 2;
            results.addResultDie("DifficultyDoubleFail");
            break;
        case 4:
        case 5:
        case 6:
            results.advantage--;
            results.addResultDie("DifficultyDis");
            break;
        case 7:
            results.advantage -= 2;
            results.addResultDie("DifficultyDoubleDis");
            break;
        case 8:
            results.advantage--;
            results.successes--;
            results.addResultDie("DifficultyDisFail");
            break;
    }
    return results;
}

function rollBoost(results){
    var randInt = Math.floor(Math.random() * 6) + 1;
    switch(randInt){
        case 1:
        case 2:
            results.addResultDie("BoostBlank", true);
            break;
        case 3:
            results.advantage += 2;
            results.addResultDie("BoostDoubleAdv", true);
            break;
        case 4:
            results.advantage++;
            results.addResultDie("BoostAdv", true);
            break;
        case 5:
            results.advantage++;
            results.successes++;
            results.addResultDie("BoostAdvSuc", true);
            break;
        case 6:
            results.successes++;
            results.addResultDie("BoostSuc", true);
            break;
    }
    return results;
}

function rollPenalty(results){
    var randInt = Math.floor(Math.random() * 6) + 1;
    switch(randInt){
        case 1:
        case 2:
            results.addResultDie("PenaltyBlank", true);
            break;
        case 3:
        case 4:
            results.successes--;
            results.addResultDie("PenaltyFail", true);
            break;
        case 5:
        case 6:
            results.advantage--;
            results.addResultDie("PenaltyDis", true);
            break;
    }
    return results;
}

function upgradeRoll(rollData){
    while(rollData.upgradeDifficulty > 0){
        if(rollData.difficulty > 0){
            rollData.difficulty--;
            rollData.challenge++;
        }
        else{
            rollData.difficulty++
        }
        rollData.upgradeDifficulty--;
    }

    while(rollData.upgradeAbility > 0){
        if(rollData.ability > 0){
            rollData.ability--;
            rollData.proficiency++;
        }
        else{
            rollData.ability++;
        }
        rollData.upgradeAbility--;
    }
    return rollData;
}