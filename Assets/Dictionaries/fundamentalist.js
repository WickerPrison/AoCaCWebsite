function createFundamentalistCard(spellName){
	var cardElm = document.createElement("div");
	cardElm.classList.add("spell");
	cardElm.classList.add("box");

	var nameElm = document.createElement("h4");
	nameElm.classList.add("spell-name");
	nameElm.innerText = spellName;
	cardElm.appendChild(nameElm);

	window.createLine(cardElm);

	var tierElm = document.createElement("h4");
	console.log(spellName);
    tierElm.innerText = "Tier: " + fundamentalistSpells[spellName].Tier;
    cardElm.appendChild(tierElm);

	var stamElm = document.createElement("h4");
    stamElm.innerText = "Stamina Cost: " + fundamentalistSpells[spellName].Stamina;
    cardElm.appendChild(stamElm);

	var polarizationElm = document.createElement("h4");
	polarizationElm.innerText = "Polarization: +/- " + fundamentalistSpells[spellName].Polarization;
	cardElm.appendChild(polarizationElm);

	window.createLine(cardElm);

	var positiveLabelElm = document.createElement("h4");
	positiveLabelElm.classList.add("spell-name");
	positiveLabelElm.innerText = "Positive Version";
	cardElm.appendChild(positiveLabelElm);

	var posDescriptionElm = document.createElement("h4");
	posDescriptionElm.innerText = fundamentalistSpells[spellName].Positive;
	cardElm.appendChild(posDescriptionElm);

	window.createLine(cardElm);

	var negativeLabelElm = document.createElement("h4");
	negativeLabelElm.classList.add("spell-name");
	negativeLabelElm.innerText = "Negative Version";
	cardElm.appendChild(negativeLabelElm);

	var negDescriptionElm = document.createElement("h4");
	negDescriptionElm.innerText = fundamentalistSpells[spellName].Negative;
	cardElm.appendChild(negDescriptionElm);

	return cardElm;
}

fundamentalistSpells = {
	"Sound Manipulation":{"Tier":"Law","Stamina":"0","Polarization":"1","Positive":"As an Action, make a Difficulty 1 Innate check. If successful, choose a point within Long range and create any sound from that point. This sound can have a volume from a whisper to a shout and can last for rounds equal to uncancelled successes.","Negative":"As an Action, make a Difficulty 2 Innate check on a creatue within Medium range. If successful, sound made by the target is quieted, and all Perception checks made to hear them add 2 Penalty dice for rounds equal to uncancelled success."}


,
	"Temperature Manipulation":{"Tier":"Law","Stamina":"0","Polarization":"1","Positive":"As an Action, make a Difficulty 2 Innate check against a creature within Short range. If the check is successful, the targeted creature gains the Burning Condition.","Negative":"As an Action, make a Spell Attack. Spell Attack Profile: Skill: Innate Magic, Damage: 1, Range: Short, Crit: 3, Damage Type: Cold, Properties: Blast 0."}


,
	"Friction Manipulaiton":{"Tier":"Law","Stamina":"0","Polarization":"1","Positive":"As an Action, make a Difficulty 2 Innate check. If successful, you gain the Climber Ability for rounds equal to uncancelled Successes.","Negative":"Make a Difficulty 2 Innate Magic check. If the check is successful, select a point within Medium range. Whenever a creature attempts to take an Incidental, Maneuver, Action, or Reaction within Extended range of this point, or when they move within Extended range of this point, they must make a Difficulty 3 Coordination check. If they fail this check their attempted Incidental, Maneuver, Action, or Reaction fails and they will either fall prone or drop an item they are holding, at GM's discretion. This effect is easily visible and lasts for rounds equal to uncanceled successes."}


,
	"Kinetic Energy Manipulation":{"Tier":"Theories","Stamina":"2","Polarization":"2","Positive":"As an Action while touching an object with Encumbrance 4 or less, make a Spell Attack to launch the object at the target. Spell Attack Profile: Skill: Innate Magic, Damage: 3 + double the Encumbrance of the object, Range: Long, Crit: 5, Damage Type: Physical. If the object has Hit Points and hits the target or any other object or creature, the damage is also dealt to the object.","Negative":"As a Reaction when you would take damage, choose a Difficulty from 1 to 5 and make an Innate check with that Difficulty. If the check is successful gain Resist: Physical equal to the Difficulty of the check for this instance of damage. "}


,
	"Light Manipulation":{"Tier":"Theories","Stamina":"2","Polarization":"2","Positive":"As an Action, choose a Difficulty from 1 to 3 and make an Innate check with that Difficulty. Increase the Light Level of an area by the Difficulty of the check. The area can take any shape, but cannot contain a volume greater than 10 cm^3 per uncancelled Successes.","Negative":"As an Action, choose a Difficulty from 1 to 3 and make an Innate check with that Difficulty. Decrease the Light Level of an area by the Difficulty of the check. The area can take any shape, but cannot contain a volume greater than 10 cm^3 per uncancelled Successes."}


,
	"Gravity Manipulation ":{"Tier":"Theories","Stamina":"2","Polarization":"2","Positive":"As an Action, make a Difficulty 1 Innate check and pick a point within Medium range. All creatures of Silhouette 2 or less within Short range of this point are pulled 1 cm towards this point per uncancelled Success. If creatures collide with an object or another creature their movement is stopped, but they do not take damage. ","Negative":"As an Action, pick a creature of Silhouette 2 or less within Medium range and make a Difficulty 0 Innate check. If the target is unwilling this check is opposed by the target's Athletics or Coordination. Move the target up to 3 cm per uncancelled Success in any direction. If the target collides with an object or another creature their movement is stopped, but they do not take damage."}


,
	"Time Manipulation":{"Tier":"Hypothesis","Stamina":"4","Polarization":"3","Positive":"As an Action, make a Difficulty 2 Innate check. If successful, a number of creatures up to the number of uncancelled Successes within Short range may spend 2 Stamina on their next turn to gain an extra Action.","Negative":"As an Action, make a Difficulty 3 Innate check. If successful, all enemies within Medium range lose their free Maneuver each turn and cannot take more than one Maneuver each turn for rounds equal to uncancelled Successes. These effects persist even if the enemies move outside of Medium range."}


}
