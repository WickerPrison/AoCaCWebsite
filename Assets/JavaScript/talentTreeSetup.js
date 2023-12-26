var className = sessionStorage.getItem('className');
var nameElement = document.getElementById("class-name");
var talents = document.getElementsByClassName("talent");


if(nameElement != null){
    
    nameElement.innerHTML = className;
}

for(var i = 0; i < 20; i++){
    var talentName = window.skillTrees[className][i];
    talents[i].innerHTML = talentName;
    talents[i].dataset.content = getTalentDescription(talentName);
}

function getTalentDescription(talentName){
    if(talentName.includes("Skill Proficiency")){
        talentName = "Skill Proficiency";
    }
    else if(talentName.includes("Skill Mastery")){
        talentName = "Skill Mastery";
    }

    return window.talentList[talentName];
}