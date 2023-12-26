var test = new File;

var listString = test("./talentList.csv");
console.log(listString);


var talentList ={
    "Action Surge":"Once per day at the end of your turn you may immediately take another turn. This does not change the turn order.",

    "Aggressive Negotiations":"Whenever you deal damage to a creature that you have succeeded on a Negotiation check against within the last 24 hours, you may choose one of the following benefits: +2 Damage, inflict the Frightened condition for 1 round, or the target loses their Free Maneuver on their next turn. This talent can also be triggered when you deal damage to a creature that you have affected with the De-Escalation Technique talent within the past 24 hours.",

    "Alcoholic":"When you are Drunk or Hungover, add 1 Boost die to all checks. The Drunk condition lasts for twice as long.",

    "Alert":"Each turn you may take a second Reaction. This Reaction costs 1 Stamina.",

    "Animal Synergy":"While you are within Artillery Range of your Pet you may communicate telepathically with them and see and hear what your pet can see and hear at all times. Additionally, you ignore the Upgraded Difficulty for attacking a creature within Engaged Range of, or Grappled with, your Pet. Your pet may use your ranks in Animal Handling in place of its relevant skill ranks when making an attack.",

    "Animal Tamer":"You may acquire a Pet by spending a day befriending and training an animal. Use the Create a Pet section to customize your Pet. If you choose to let your pet go or it dies you can domesticate a different one, but you cannot have more than one Pet at a time.",

    "Animal Tamer (Improved)":"Your Pet gains an additional 2 Basic Pet Features.",

    "Arcane Potency":"You may add 1 extra spell effect to your spells above what your Intellect allows.",

    "Arcane Predation":"You may use Cunning instead of Intellect when making Arcana checks.",

    "Arcane Scholar":"When you make any Knowledge or Scholarly check, you may reroll any one die. This ability may be used a number of times per day equal to your ranks in Arcana and can be used multiple times on the same check.",

    "Arcanologist":"As an Incidental choose an Abomination, Lycanthrope, Mythic, or Undead creature that is within Medium Range and eyesight of you. Make a Difficulty 2 Lore check to learn one of the following pieces of information: Melee and Ranged Defenses, Damage Reduction, any single attribute, all Resistances, all Immunities, all Weaknesses, maximum and current HP, all other creature types it has, or their ranks in any one skill. You may Increase the Difficulty of the check any number of times and learn that many additional pieces of information from the list.",

    "Armor Master":"Increase Damage Reduction by 1 while wearing armor. This increase does not stack with the Reinforced Masterwork Modification for armor.",

    "Assassination":"Whenever you deal damage with an attack to a creature that has not yet taken a turn during this combat, gain Vicious +3 to your attack. Once per day, if your target has not taken a turn yet this combat, add damage to your attack equal to your ranks in Stealth.",

    "Bardic Inspiration":"All allies within Short Range that can see and hear you gain an automatic Advantage on all skill checks.",

    "Barrage":"Add 1 damage to attacks at Long Range or further.",

    "Battle Plan":"As an Action, spend two Stamina and all friendly creatures (including yourself) within Long Range Boost all Combat, Engineering, and Magic skill checks 2 times and Upgrade the Ability of all Discipline checks 2 times. This effect lasts for a number of rounds equal to your ranks in Leadership.",

    "Big Game Hunter":"Upgrade the Ability of all checks 2 times against Animals of Silhouette 2 or larger.",

    "Blackmail":"Once per day per rank of Blackmail, as an Action you may make a Coercion check, opposed by a target NPC's Discipline check. If you succeed, you convince that NPC to perform one task, which may be more than what you could convince them to perform using a normal Coercion check. You cannot force them to do something that the GM determines is unreasonable.",

    "Blood of the Master":"Your Hit Point Maximum is permanently reduced by 5. The Hit Point Maximum of Undead creatures you control as Followers is permanently increased by 5.",

    "Bodyguard":"As a Reaction, when an enemy targets an ally that is within Engaged Range of you with an attack, you may force that enemy to target you with the attack instead.",

    "Brace":"When using the Aim Maneuver, also ignore up to 2 Penalty dice due to Environmental Effects per rank of this talent.",

    "Challenging Shout":"As an Action, choose one target within Medium Range and make a Coercion check opposed by the target's Discipline. If you succeed, for a number of rounds equal to your ranks in Coercion, the target must Upgrade the Difficulty of all skill checks 2 times that target any creatures other than you or themself. A target of this talent, regardless of whether they were affected or not, cannot be targeted by this talent again until after they take a Long Rest.",

    "Challenging Shout (Improved)":"Challenging Shout can be made as a Maneuver, and can target a second creature. Make Coercion and Discipline rolls separately for each target. Enemies affected by Challenging Shout also gain the Disoriented condition for a number of rounds equal to your ranks in Coercion.",

    "Cleave":"When attacking with a Brawl, Light Weapon, or Heavy Weapon, you may choose up to 2 targets in range, combine the Challenge, Difficulty, and Penalty dice for attacking all the targets, then upgrade the Difficulty of the check 1 time. If you succeed on the attack, you do full damage (base + Successes) to each target. The attacks are treated as separate, so Soak is deducted separately for each creature hit, and weapon Qualities can be activated on either target individually. You may use this ability once per turn. If you choose to use this talent while Two Weapon Fighting, the increased Difficulty for Two Weapon Fighting is only applied once.",

    "Combat Conditioning":"Once per turn you may spend 1 Stamina to take an extra Maneuver. This Maneuver cannot exceed the normal limit of 2 Maneuvers per turn.",

    "Confidence":"Upgrade the Ability of your Discipline checks 2 times to resist the Frightened condition and its ongoing effect, and when opposing Coercion checks. Upgrade the Ability of all Cool checks 1 time.",

    "Consume the Enslaved":"As a Reaction when one or more of your Undead Followers takes damage, you may choose to unsummon those Followers. For each Permanent Follower slot worth of summons you unsummon, gain 4 temporary Hit Points. For each Temporary Follower slot worth of summons you unsummon, gain 2 temporary Hit Points. These temporary Hit Points expire after 1 hour if unused.",

    "Coordinated Assault":"Once per round you may spend a Maneuver to give a number of allies (excluding you) within Short Range of you and up to your ranks in Leadership 1 Boost die on Combat and Engineering checks they make until the beginning of your next turn. The range of this Maneuver increases by one band per additional rank of this talent.",

    "Crack Shot":"Your attacks cannot be Obstructed.",

    "Creative Killer":"Gain one automatic Success on Brawl or Ranged checks using Improvised Melee or Improvised Ranged weapons.",

    "Crippling Blow":"When you make a Combat check, you may Increase the Difficulty 2 times; if you damage the target, one of the target's limbs (selected randomly) is crippled until the end of their next Long Rest. Upgrade the Difficulty of all checks that require the use of that limb by 2. If the crippled limb is a leg, the target also loses 5 cm of movement speed, to a minimum of 3.",

    "Dance of Blades":"When holding a Light Weapon in each hand, you increase your Movement Points by 5 and add one Boost die to all Light Weapons checks you make.",

    "De-escalation Technique":"On your first turn of combat, as a Maneuver, you may make a Negotiation check against one target within Medium Range opposed by their Discipline. If you succeed, inflict the Staggered condition on the target for one round, and inflict Disorient 1 on all allies of the target within Short Range of the target.",

    "Deadeye":"When you score a Critical Hit on a target, roll on the Crit Table twice and choose one of the results to inflict.",

    "Deadly Accuracy":"When you score a Critical Hit on a target, add damage to the attack equal to ranks in this talent.",

    "Death's Friend":"Whenever you take damage that would reduce your Hit Points to less than 1, you remain at 1 Hit Point and take 2 levels of Exhaustion instead.",

    "Deceptive Strike":"As a Maneuver, you may spend 1 Stamina to make a Deception check opposed by the Insight check of an enemy within Short Range. If you succeed, upgrade your next Brawl or Light Weapons check within 1 round against this target 3 times.",

    "Dedication":"Permanently increase any one attribute by 1, to a max of 6.",

    "Defensive Dueling":"As a Reaction after an enemy within Extended Range of you makes a Brawl, Heavy Weapons, or Light Weapons attack roll against you, you may add 3 Disadvantage to the result of their attack roll. You can only use this talent once per attack against you.",

    "Deft Defense":"Once per round, as a Maneuver, spend Stamina up to ranks in this talent to Increase the Difficulty of incoming attacks a number of times equal to the Stamina spent, until the beginning of your next turn.",

    "Disarming":"Your Brawl, Heavy Weapons, and Light Weapons attacks have the Disarm property. If the attack already had the Disarm property, reduce the Advantage or Disadvantage needed to trigger Disarm by 1.",

    "Discredit":"As an Action, make a Difficulty 3 Deception check against a target within Medium Range. If you succeed, the target must add 1 Challenge die - plus an additional Challenge die for each 3 Advantage or Conquest you spend on your roll - to all Speech checks for the next 10 minutes. A target of this talent, regardless of whether they were affected or not, cannot be targeted by this talent again until after they take a Long Rest. The targeted creature will dislike the user, and might even turn hostile.",

    "Disease Immunity":"Gain Immunity: Disease.",

    "Distraction":"As an Action, choose a number of targets up to your ranks in Performance that are within Short range; make a Performance check opposed individually by the Discipline of each target. For each target that fails, they add two Penalty dice on Perception and Vigilance checks until the end of your next turn. Each round, for up to a minute, you may use a Maneuver to continue this effect for an additional turn affecting the same targets that failed as long as they are within Long range and can see or hear you. A target of this talent, regardless of whether they were affected or not, cannot be targeted by this talent again until after they take a Long Rest.",

    "Distraction (Improved)":"Continuing the effects of Distraction can now be done using an Incidental. Enemies affected by Distraction also must Upgrade the Difficulty of all skill checks 2 times that target any creatures other than you or themself.",

    "Dodge":"As a Reaction, when being targeted with an attack, spend any number of Stamina and then Increase the Difficulty of that attack by the same number.",

    "Durable":"Subtract 10 from the d100 roll for Critical Injuries inflicted on you, to a minimum result of 1.",

    "Elemental Attunement":"Upon acquiring this talent, choose an Elemental damage type. Deal an additional 2 damage on all attacks or spells you make that deal damage of that type.",

    "Encouraging Words":"After an ally within Short range fails a check, you may suffer 1 Stamina to give that ally 2 Boost dice to their next check within the next minute.",

    "Entertainer's Dexterity":"When you make a Performance check, or any check using the Agility attribute, you may reroll any one die. This ability may be used a number of times per day equal to your ranks in Coordination and can be used multiple times on the same roll.",

    "Epiphany":"Upon acquiring, choose 3 skills, excluding all Combat skills. When making a skill check using one of these skills, you may use your Intellect Characteristic in place of your ranks in that skill. This does not allow you to use trained-only skills you do not actually have ranks in.",

    "Equilibrium":"When your Polarization is 0 Upgrade the Ability of all Innate checks 2 times.",

    "Executioner":"When attacking an enemy that is Blinded, Paralyzed, Prone, or Staggered, you gain 2 automatic Successes and Vicious +2.",

    "Exotic Mount":"You may acquire an Exotic Mount by spending a day befriending and training an animal. Use the Create an Exotic Mount section to customize your Exotic Mount. If you choose to let your Exotic Mount go or it dies you can domesticate a different one, but you cannot have more than one Exotic Mount at a time.",

    "Exotic Pet":"Your Pet gains 1 Exotic Pet Feature and may replace 1 of its Basic Pet Features with an Exotic Pet Feature.",

    "Expert Tracker":"Add 2 Boost dice to Survival and Streetwise checks to find or follow tracks. You may follow tracks at a Normal Pace while traveling, instead of at a Slow Pace.",

    "Expertise":"Choose up to 3 non-Combat skills that are Vocational skills for you. They can now be trained to a maximum rank of 6 instead of 5.",

    "Extradimensional Storage":"You gain a personal pocket dimension that is only accessible to you. The pocket dimension can hold up to 6 Encumbrance worth of items. As a Maneuver, you may withdraw one item, deposit one item, or trade one item on your person with one in the pocket dimension. Items retrieved from the pocket dimension may appear anywhere on your person or inside a container you are holding. Gaining this talent a second time gives you a second 6-Encumbrance pocket dimension.",

    "Extrasensory Perception":"As an Incidental, you may spend 1 Stamina to learn the current direction and approximate distance (range band) of any Abominations, Lycanthropes, Mythics, or Undead creatures within Long range of you.",

    "Faunologist":"As an Incidental, choose an Animal creature that is within Medium range and line of sight. Make a Difficulty 2 Nature check to learn one of the following pieces of information: Melee and Ranged Defense, Damage Reduction, any single Attribute, all Resistances, all Immunities, all Weaknesses, maximum and current HP, all other creature types it has, or their ranks in any one skill. You may increase the Difficulty of the check any number of times and learn that many additional pieces of information from the list.",

    "Fearsome Reputation":"Whenever a creature starts their turn, or moves to, within Engaged range of you they must immediately make a Discipline check with Difficulty equal to 1 + half your ranks in Coercion, rounded up. If they fail, they gain the Frightened Condition for 2 rounds.",

    "Feral Strength":"You deal +1 damage on all Brawl, Heavy Weapons, and Light Weapons attacks if you or your target are at less than Maximum Hit Points.",

    "Field Commander":"As an Action during combat, choose any number of creatures within Medium range of you, including yourself; make a Leadership check with Difficulty equal to the number of chosen creatures. If you succeed, each chosen creature may perform 1 Maneuver as a Reaction.",
    
    "Field Commander - Improved":"When you make a Leadership check for the Field Commander talent, for each Conquest or 4 Advantage spent, you may give one of the chosen creatures an Action rather than a Maneuver.",

    "Focused Strike: Agility":"Once per day, after making a successful attack using your Agility Characteristic, you may add your Agility value to the damage. Multiple instances of Focused Strike cannot be used on the same attack.",

    "Focused Strike: Allies":"Once per day, after making a successful attack while within Short range of an ally, you may add your Presence or Willpower value to the damage. Multiple instances of Focused Strike cannot be used on the same attack.",

    "Focused Strike: Brawn":"Once per day, after making a successful attack using your Brawn Characteristic, you may add your Brawn value to the damage. Multiple instances of Focused Strike cannot be used on the same attack.",

    "Focused Strike: Cunning":"Once per day, after making a successful attack, you may add your Cunning value to the damage. Multiple instances of Focused Strike cannot be used on the same attack.",

    "Focused Strike: Dueling":"Once per day, after making a successful attack when you are within Extended range of exactly one enemy and no other creatures, you may add your Agility or Brawn value to the damage. Multiple instances of Focused Strike cannot be used on the same attack.",

    "Focused Strike: Presence":"Once per day, after making a successful attack, you may add your Presence value to the damage. Multiple instances of Focused Strike cannot be used on the same attack.",

    "Focused Strike: Willpower":"Once per day, after making a successful attack, you may add your Willpower value to the damage. Multiple instances of Focused Strike cannot be used on the same attack.",

    "Foot in the Door":"When you succeed on a Deception check against a target, that target Upgrades the Difficulty of all checks 1 time for 10 minutes. This effect does not stack with itself.",

    "Forager":"Add 1 Boost die to Survival checks to find food, water, shelter, Cloth/Hide, Raw Ingredients, or Wood. You may forage for food while traveling at a Normal Pace, instead of at a Slow Pace.",

    "Frenzied Attack":"When making a Brawl, Heavy Weapons, or Light Weapons attack, you may spend 1 Stamina to add one automatic Success to your check. Enemies add one Boost die to all attacks against you until the beginning of your next turn. Additional ranks of this talent increase the number of automatic Successes and Boost dice by 1.",

    "Genteel":"When making a Charm, Coercion, Insight, or Negotiation check you may make a Society check instead.",

    "Gravity Modulation":"You no longer take Fall Damage.",

    "Greased Palms":"Add 3 automatic Successes on Insight checks to determine how another creature may react to a bribery attempt and approximately how much money would be neccessary to influence them. If a subsequent skill check is required to convince the creature to accept the bribe, gain 2 Boost dice on the check.",

    "Grit":"Increase your Maximum Stamina by 1.",

    "Group Awareness":"Allies within Short range of your character add 2 Boost dice to Perception and Vigilance checks.",

    "Hard Headed":"As a Reaction, when you would gain the Disoriented or Staggered Condition, you may make a Difficulty 3 Discipline or Resilience check. If you succeed, you do not gain that Condition.",

    "Heroic Fortitude":"Once per day when you would receive a Critical Injury, you may choose to not gain that Critical Injury and add 2 Boost dice to all skill checks using Agility and Brawn for 1 minute.",

    "Hidden Storage":"You may make an addition to any item that has a Carrying Capacity of at least 1. The normal Carrying Capacity of that item is reduced by 1, instead allowing the item to hold 1 Encumbrance in a hidden compartment. Detecting this hidden compartment requires making a Perception check against a number of Challenge dice equal to your ranks in Skulduggery. You can modify a number of items equal to your ranks in this talent, but each item may only be modified a maximum number of times equal to its base Encumbrance carrying capacity. Modifying an item in this way requires an hour, and you may spend 10 minutes to remove a modification to allow you to modify a different item.",

    "Historical Illumination":"Each day you have a dice pool of a number of d10 equal to your ranks in Lore. As a Maneuver you can roll one of these dice and gain a benefit based on the result: if you roll 1-3 gain a Boost die on your next skill check within a minute; if you roll 4-5 lose one level of Exhaustion or a Critical Injury of your choice or one Condition or regain 2 Hit Points or 2 Stamina; if you roll 6-7 one allied creature within Medium range of you gains 5 temporary HP (expires in 1 hour; can stack with other temporary HP from this Talent); if you roll 8-10 one allied creature within Medium range of you gains 2 Boost dice on their next check within a minute.",

    "Hold Your Liquor":"For each Calamity you roll while in the Drunk or Hungover Condition, add 1 Conquest to the result of the roll.",

    "Homeopathy":"As an Action, you may expend 1 Encumbrance of Raw Ingredients to replicate the effects of any Medical Item of Rarity 3 or lower on a creature within Engaged range of you.",

    "Horsemanship":"Ignore the Increased Difficulty on skill checks from the Riding State.",

    "Hunter":"Add 1 Boost die to all opposed skill checks against Animals and Beasts and attacks against them. Your attacks against these creatures gain Vicious +1.",

    "Hypothetical Spell":"Gain the ability to cast the Time Manipulation spell.",

    "Imbue Element":"When you make a successful Brawl, Heavy Weapons, or Light Weapons attack, you may spend 2 Advantage to add 1 damage of any Elemental Damage type to the attack. This talent may be used multiple times on the same attack. You do not need a free hand to use this talent.",

    "In the Know":"Add 1 Boost die to skill checks to get information from people.",

    "Indignance":"Whenever a creature within Long range targets you with an attack, spell, or opposed roll and fails their check, you may spend 1 Stamina to make a Cool check, opposed by the target's Discipline. If they fail, they gain the Frightened Condition for 3 rounds. Upgrade the Ability of your Combat checks 2 times against creatures with the Frightened Condition.",

    "Indistinguishable":"When in a crowd (10+ other people within Short range of you) creatures must pass a Difficulty 3 Perception check to notice you. The Difficulty of this check increases by 1 per additional rank of this talent.",

    "Indomitable Rage":"Once per day as an Incidental, enter a rage that lasts for 5 rounds. For the duration, ignore all negative effects of the Exhausted Condition and gain +1 Damage Reduction and +1 damage on all Brawl, Heavy Weapons, and Light Weapons attacks. At the beginning of each of your subsequent turns, if you have been attacked or made a Brawl, Heavy Weapons, or Light Weapons attack since the beginning of your last turn, add 1 damage to your first attack this round. This additional damage stacks for consecutive rounds, but resets to +1 if the conditions are not met.",

    "Insightful Ancestors":"As a Reaction to an ally failing any check while within Medium range of you, you may spend 2 Stamina and allow that person to completely reroll that check, keeping the new result. They gain Boost dice equal to your ranks in Leadership on this reroll.",

    "Inspiring Rhetoric":"Once per day as a Maneuver, make a Difficulty 0 Leadership check. For each Success you roll, 1 creature of your choice within Long range regains 1 Stamina. No creature may regain more than 2 Stamina from Successes rolled on this check.",

    "Inspiring Rhetoric (Improved)":"When you make a Leadership check as part of the Inspiring Rhetoric talent, for each 2 Advantage you spend, allow 1 creature within Long range to regain 1 Stamina. This may be used any number of times per creature.",

    "Inspiring Rhetoric (Supreme)":"For rounds equal to your ranks in Leadership, all creatures that regained Stamina from Inspiring Rhetoric or Inspiring Rhetoric (Improved) spend 1 fewer Stamina, to a minimum of 1, whenever they voluntarily spend Stamina.",

    "Intense Focus":"Activate this talent as an Incidental. For the next hour, Upgrade the Ability of all non-Combat, non-Magic skill checks 2 times. Suffer one level of Exhaustion when this effect ends. The bonus from this talent does not stack with itself.",

    "It's Not That Bad":"As a Reaction, when you or an ally within Medium range would suffer a Critical Injury, you may make a Medicine check with a Difficulty equal to the Severity of the Critical Injury that was rolled. If you succeed, that creature does not gain the Critical Injury nor suffer any of its effects. This talent may only be used on each creature once per day, regardless of the result of the attempt.",

    "Jack of All Trades":"Whenever you make a non-Combat, non-Magic skill check, you may upgrade your check 1 time if you have 3 or less ranks in that skill.",

    "Knockdown":"Your Brawl, Heavy Weapons, and Light Weapons attacks have the Knockdown property. When you activate the Knockdown property, deal 1 additional damage.",

    "Knowing is Half the Battle":"Whenever you successfully attack a creature that you have gained information about through Arcanologist or Faunologist within the last 24 hours, deal an extra 2 damage.",

    "Lawful Manipulation":"Gain the ability to cast two of the Laws from the Fundamentalist spell list.",

    "Lay of the Land":"When making an Animal Handling, initiative, Medicine, or Stealth check, you may make a Nature check instead.",

    "Lethal Blows":"Your Combat skill checks gain Vicious +1.",

    "Light Modulation":"Treat all Light Levels as Normal Light. You are immune to the Blinded Condition.",

    "Living Encyclopedia":"For each Conquest you roll on any Knowledge skill check, gain an additional Success.",

    "Magical Acceleration":"When making a Combat skill check, you may spend 1 Stamina and decrease the Difficulty of the check by 1, to a minimum of 1.",

    "Magical Duelist":"When you are the target of the Counterspell spell effect, you may use your Intellect instead of your Cunning when making the opposed Scholarly check to resist the Counterspell.",

    "Magical Performer":"When casting the Disguise or Subtle Cast spell effects, gain a Boost die for each node of the effect. When under the effects of the Disguise spell effect or a disguise kit, increase the Difficulty of all checks to see through the disguise by 1.",

    "Martial Arcana":"You can cast spells through your weapon, adding spell effects to your weapon attack. As an Action, make a check using the Attribute associated with the weapon (Agility or Brawn) and your Scholarly skill. The base Difficulty of the check (including Defense of the target) is based off of the weapon attack, the range is dictated by your weapon, and then you add the Casting Modifiers. Modifications to your dice pool that affect your weapon or apply to casting Scholar spells will apply to this talent. If you succeed, you deal the base damage of your weapon attack (do not add damage for uncanceled Successes) and can activate Criticals and other weapon properties as normal. You also resolve the effects of the spell as normal, which are applied after the weapon damage and properties. Damage Reduction is not applied twice if the Damage spell effect is chosen.",

    "Mass Modulation":"Increase your carrying capacity by 4 Encumbrance.",

    "Mastered Spell":"Gain the ability to cast the Mastered spell unique to your Class.",

    "Medical Kit Expert":"When using a Medical Kit to make a Medicine check to restore Hit Points, add one automatic Success per rank of this talent.",

    "Medicinal Stimulants":"Once per day, after one uninterrupted minute of working on a creature within Engaged range, make a Difficulty 2 Medicine check. If you succeed, the creature loses 4 Stamina and temporarily increase one Attribute of the creature until they take a Long Rest, treating that Attribute as 1 higher (to a maximum of 8). A creature can only have this attempted on them once per day, regardless of the source.",

    "Medicinal Stimulants (Improved)":"When making a Medicine check as part of the Medicinal Stimulants talent, each Conquest can increase an additional Attribute (or the same one multiple times) by 1; these additional Conquests can also be used to increase the Attribute of a different target that has also been within Engaged range for 1 minute. Additionally, you may make this check as a Difficulty 4 check and the recipient loses no Stamina.",

    "Metamagic Master":"When casting a spell containing Metamagic Tier spell effects, gain 1 Boost die for each node of any Metamagic Tier spell effect.",

    "Metamagician":"Choose 4 spell effects from the Metamagic Tier list and gain the ability to use them when casting Scholarly spells.",

    "Natural Archer":"You may spend 2 Stamina to reroll any one Cool or Ranged check. You may only use this ability once per check.",

    "Natural Beast":"You may spend 2 Stamina to reroll any one Brawl or Innate check. You may only use this ability once per check.",

    "Natural Channeler":"You may spend 2 Stamina to reroll any one Innate or Resilience check. You may only use this ability once per check.",

    "Natural Medic":"You may spend 2 Stamina to reroll any one Cool or Medicine check. You may only use this ability once per check.",

    "Natural Performer":"You may spend 2 Stamina to reroll any one Charm or Performance check. You may only use this ability once per check.",

    "Natural Ranger":"You may spend 2 Stamina to reroll any one Perception or Survival check. You may only use this ability once per check.",

    "Natural Rogue":"You may spend 2 Stamina to reroll any one Skulduggery or Stealth check. You may only use this ability once per check.",

    "Natural Soldier":"You may spend 2 Stamina to reroll any one Athletics or Light Weapons check. You may only use this ability once per check.",

    "Natural Trainer":"You may spend 2 Stamina to reroll any one Animal Handling or Nature check. You may only use this ability once per check.",

    "Natural Wiseman":"You may spend 2 Stamina to reroll any one Innate or Leadership check. You may only use this ability once per check.",

    "Nobody's Fool":"Upgrade the Ability 1 time of opposed speech checks against enemy Charm, Coercion, Deception, Negotiation checks.",

    "Numbed Senses":"As an Incidental, spend 2 Stamina and make a Difficulty 2 Resilience check. If you succeed, you lose either the Disoriented, Staggered, or Sickened Condition.",

    "On the Hunt":"Once per day as an Incidental, choose a target within Long range. For 8 rounds, you and your Pet increase your Movement Points by 5, and add 2 Boost dice to Combat checks against this target. Additionally, whenever you inflict a Critical Injury on this target, after rolling on the Critical Injury table you may replace the result with Crippled. You may change your target to another creature within Long range as an Incidental.",

    "One with the Magicks":"Gain 1 Natural Tier and 1 Developed Tier Innate spell from any Innate class spell list other than Fundamentalist. These spells do not need to be from the same class spell list.",

    "Outdoorsman":"Remove 1 Penalty die from checks due to Environmental Effects. You and your party may travel overland through Difficult Terrain at a Normal Pace, instead of at a Slow Pace."

    
}