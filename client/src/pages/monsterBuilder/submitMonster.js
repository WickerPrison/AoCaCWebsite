import auth from '../../utils/auth';
import getUrl from '../../utils/getUrl';

export default async function SubmitMonster(evt, data, resetStates, monsterId = null){
    evt.preventDefault();
     
    if(!data.name){
        alert("Unique name required");
        return;
    }

    let resistancesAndWeaknesses = formatWeakResist();
    function formatWeakResist(){
        data.weakResist.sort((A, B) => {
            let a = A.name.toLowerCase();
            let b = B.name.toLowerCase();
            return a.localeCompare(b);
        });

        let outputStrings = ["", ""];
        for(let i = 0; i < data.weakResist.length; i++){
            if(data.weakResist[i].value > 0){
                outputStrings[0] += data.weakResist[i].name + " " + data.weakResist[i].value + ", ";
            }
            else if(data.weakResist[i].value < 0){
                outputStrings[1] += data.weakResist[i].name + " " + (data.weakResist[i].value * -1) + ", ";
            }
        }
        outputStrings[0].substring(0, outputStrings[0].length - 2);
        outputStrings[1].substring(0, outputStrings[1].length - 2);
        return outputStrings;
    }

    function formatSkills(array){
        array.sort((A, B) => {
            let a = A.name.toLowerCase();
            let b = B.name.toLowerCase();
            return a.localeCompare(b);
        });
        return array;
    }

    function formatImmunities(){
        let outputString = "";

        data.conditionImmunities.sort();
        switch(data.conditionImmunities.length){
            case 0:
                break;
            case 1:
                outputString += data.conditionImmunities[0] + " Condition. ";
                break;
            case 2:
                outputString += data.conditionImmunities[0] + " and " + data.conditionImmunities[1] + " Conditions. ";
                break;
            default:
                for(let i = 0; i < data.conditionImmunities.length; i++){
                    outputString += data.conditionImmunities[i];
                    if(i < data.conditionImmunities.length - 2){
                        outputString += ", ";
                    }
                    else if(i < data.conditionImmunities.length - 1){
                        outputString += ", and ";
                    }
                    else{
                        outputString += " Conditions. "
                    }
                }
                break;
        }

        data.damageImmunities.sort();
        switch(data.damageImmunities.length){
            case 0:
                break;
            case 1:
                outputString += data.damageImmunities[0] + " Damage. "
                break;
            case 2:
                outputString += data.damageImmunities[0] + " and " + data.damageImmunities[1] + " Damage. "
                break;
            default:
                for(let i = 0; i < data.damageImmunities.length; i++){
                    outputString += data.damageImmunities[i];
                    if(i < data.damageImmunities.length - 2){
                        outputString += ", ";
                    }
                    else if(i < data.damageImmunities.length - 1){
                        outputString += ", and ";
                    }
                    else{
                        outputString += " Damage. "
                    }
                }
                break;
        }

        outputString += data.customImmunities;
        return outputString;
    }

    function formatAttackIds(){
        let outputArray = [];
        data.attacks.sort((A, B) => {
            let a = A.name.toLowerCase();
            let b = B.name.toLowerCase();
            return a.localeCompare(b);
        });

        for(let i = 0; i < data.attacks.length; i++){
            outputArray.push(data.attacks[i]._id);
        }
        return outputArray;
    }

    let output = {
        name: data.name,
        damageReduction: data.stats.dr,
        hp: data.stats.hp,
        stamina: data.stats.stamina,
        meleeDefense: data.stats.meleeDef,
        rangedDefense: data.stats.rangedDef,
        agility: data.stats.agility,
        brawn: data.stats.brawn,
        cunning: data.stats.cunning,
        intellect: data.stats.intellect,
        presence: data.stats.presence,
        willpower: data.stats.willpower,
        sil: data.sil,
        speed: data.stats.movePts,
        creatureTypes: data.creatureTypes.sort(),
        tier: data.tier,
        skills: formatSkills(data.skills),
        conditionImmunities: data.conditionImmunities.sort(),
        damageImmunities: data.damageImmunities.sort(),
        customImmunities: data.customImmunities,
        immunitiesString: formatImmunities(),
        resistWeakArray: data.weakResist,
        resistances: resistancesAndWeaknesses[0],
        weaknesses: resistancesAndWeaknesses[1],
        attacks: formatAttackIds(),
        talents: data.talents.map(talent => ({Name:talent.Name, ranks:talent.ranks})),
        abilities: data.abilities.map(ability => ability.Name),
        specialFeatures: data.specialFeatures,
        public: data.makePublic,
        username: auth.getProfile().data.username,
        official: data.official
    }

    let response;
    if(!monsterId){
            response = await fetch(getUrl() + '/api/monsters/', {
            method: 'POST',
            mode: 'cors',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(output)
        })
    }
    else{
        output._id = monsterId;
            response = await fetch(getUrl() + '/api/monsters/', {
            method: 'PUT',
            mode: 'cors',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(output)
        })
    }
    

    if(response.ok){
        const res = await response.json();
        if(res._id != null){
            console.log("success");
            resetStates();
        }
        else if(res.code == 11000){
            alert("This monster name has been taken")
        }
    }
}