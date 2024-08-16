const skillsDict = {
    "Brawl": ["Brawn"],
    "Heavy Weapons": ["Brawn"],
    "Light Weapons" : ["Brawn"],
    "Ranged": ["Agility"],
    "Animal Handling" : ["Agility"],
    "Athletics":["Brawn"],
    "Cool":["Presence"],
    "Coordination":["Agility"],
    "Discipline": ["Willpower"],
    "Medicine":["Intellect","Cunning"],
    "Perception":["Cunning"],
    "Performance":["Presence"],
    "Resilience":["Brawn"],
    "Sailing":["Cunning"],
    "Survival":["Cunning"],
    "Vigilance":["Willpower"],
    "Alchemy":["Intellect"],
    "Crafting":["Intellect"],
    "Enchanting":["Intellect"],
    "Engineering":["Intellect"],
    "Arcana":["Intellect"],
    "Linguistics":["Intellect"],
    "Lore":["Intellect"],
    "Nature":["Intellect", "Cunning"],
    "Society":["Intellect"],
    "Innate":["Willpower"],
    "Scholarly":["Intellect"],
    "Charm":["Presence"],
    "Coercion":["Brawn", "Willpower"],
    "Deception":["Cunning"],
    "Insight": ["Cunning"],
    "Leadership":["Presence"],
    "Negotiation":["Presence"],
    "Skulduggery":["Cunning"],
    "Stealth":["Agility"],
    "Streetwise":["Cunning"]
}

const combatSkills = [
    ["Brawl", "Br"],
    ["Heavy Weapons", "Br"],
    ["Light Weapons", "Br"],
    ["Ranged", "Ag"]
];

const generalSkills=[
    ["Animal Handling", "Ag"],
    ["Athletics", "Br"],
    ["Cool", "Pr"],
    ["Coordination", "Ag"],
    ["Discipline", "Wi"],
    ["Medicine", "Cu/In"],
    ["Perception", "Cu"],
    ["Resilience", "Br"],
    ["Sailing", "Cu"],
    ["Survival", "Cu"],
    ["Vigilance", "Wi"]
];

const fabricationSkills=[
    ["Alchemy", "In"],
    ["Crafting", "In"],
    ["Enchanting", "In"],
    ["Engineering", "In"]
];

const knowledgeSkills=[
    ["Arcana", "In"],
    ["Linguistics", "In"],
    ["Lore", "In"],
    ["Nature", "Cu/In"],
    ["Society", "In"]
];

const magicSkills=[
    ["Innate", "Wi"],
    ["Scholarly", "In"]
];

const speechSkills=[
    ["Charm", "Pr"],
    ["Coercion", "Br/Wi"],
    ["Deception", "Cu"],
    ["Insight", "Cu"],
    ["Leadership", "Pr"],
    ["Negotiation", "Pr"],
    ["Performance", "Pr"]
];

const stealthSkills=[
    ["Skulduggery", "Cu"],
    ["Stealth", "Ag"],
    ["Streetwise", "Cu"]
];

const allSkills=[...combatSkills, ...generalSkills, ...fabricationSkills, ...knowledgeSkills, ...magicSkills, ...speechSkills, ...stealthSkills];

export {
    skillsDict, 
    combatSkills,
    generalSkills,
    fabricationSkills,
    knowledgeSkills,
    magicSkills, 
    speechSkills,
    stealthSkills,
    allSkills
};