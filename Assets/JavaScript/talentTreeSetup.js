var className = sessionStorage.getItem('className');
var nameElement = document.getElementById("class-name");
var talents = document.getElementsByClassName("talent");
var tableTalets = document.getElementsByClassName("table-talent");
var tableDescriptions = document.getElementsByClassName("table-description");

if(nameElement != null){
    
    nameElement.innerHTML = className;
}

for(var i = 0; i < 20; i++){
    var talentName = window.skillTrees[className][i];
    talents[i].innerHTML = talentName;
    var description = getTalentDescription(talentName);
    talents[i].dataset.content = description;
    tableTalets[i].innerHTML = talentName;
    tableDescriptions[i].innerHTML = description;
}

function getTalentDescription(talentName){
    if(talentName.includes("Skill Proficiency")){
        talentName = "Skill Proficiency";
    }
    else if(talentName.includes("Skill Mastery")){
        talentName = "Skill Mastery";
    }
    else if(talentName.includes("Mastered Spell")){
        talentName = "Mastered Spell"
    }

    return window.talentList[talentName];
}