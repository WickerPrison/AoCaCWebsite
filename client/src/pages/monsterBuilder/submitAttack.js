import auth from '../../utils/auth';
import getUrl from '../../utils/getUrl';

export default async function SubmitAttack(evt, method, name, skill, specialAttribute, damage, damageAttribute, range, crit, accurate, properties, makePublic, resetStates, _id=""){
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
        properties: properties,
        public: makePublic,
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
            resetStates();
        }
        else if(res.code == 11000){
            alert("This attack name has been taken")
        }
    }
}