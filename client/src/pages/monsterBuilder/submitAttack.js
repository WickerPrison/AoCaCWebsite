import auth from '../../utils/auth';
import getUrl from '../../utils/getUrl';

export default async function SubmitAttack(evt, method, name, skill, specialAttribute, damage, damageAttribute, range, crit, accurate, finesse, halfAttribute, properties, makePublic, official, callback, _id=""){
    evt.preventDefault();

    if(!name){
        alert("Unique name required");
        return;
    }

    let output = {
        name: name,
        skill: skill,
        specialAttribute: specialAttribute,
        damage: damage,
        attribute: damageAttribute,
        range: range,
        crit: crit,
        accurate: accurate,
        finesse: finesse,
        halfAttribute: halfAttribute,
        properties: properties,
        public: makePublic,
        official: official,
        username: auth.getProfile().data.username
    }

    if(_id != ""){
        output._id = _id;
    }

    const response = await fetch(getUrl() + '/api/monsters/attack', {
        method: method,
        mode: 'cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(output)
    })

    if(response.ok){
        const res = await response.json();
        console.log(res);
        if(res._id != null){
            console.log("success");
            callback();
        }
        else if(res == "Attack name taken"){
            alert("Error. This attack name is already in use.")
        }
    }
}