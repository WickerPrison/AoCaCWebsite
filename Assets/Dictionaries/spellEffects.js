var spellEffects = {
	"Delay Effect":{"Tier":"Metamagic","Duration":"Instantaneous","Difficulty":"0","Upgrades":"0","Penalty":"0","SpecialModifier":"boost","Modifier":"Add 1 Boost die","Description":"The effects of this spell occur at the beginning of your next turn, instead of Immediately. Additional instances of this Spell Effect delay the effects of this spell by an additional round but do not add any additional Boost dice beyond the first."}


,
	"Exclude Targets":{"Tier":"Metamagic","Duration":"Instantaneous","Difficulty":"0","Upgrades":"0","Penalty":"1","SpecialModifier":"","Modifier":"Add 1 Penalty die","Description":"One affected creature ignores one node of a spell effect cast together with this spell effect. Indirect effects of spells, such as damage from the attacks of summoned creatures or Penalty dice from magically created weather events, still affect a creautre targeted by this spell effect."}


,
	"Increase Area of Effect":{"Tier":"Metamagic","Duration":"Instantaneous","Difficulty":"1","Upgrades":"0","Penalty":"0","SpecialModifier":"","Modifier":"Increase Difficulty by 1","Description":"Any area of effect given in a spell effect's description that is cast together with this effect has its radius increased by 5 cm. This spell effect cannot stack with itself."}


,
	"Increase Duration":{"Tier":"Metamagic","Duration":"Instantaneous","Difficulty":"0","Upgrades":"0","Penalty":"0","SpecialModifier":"double","Modifier":"Apply the Casting Modifier a second time for each Spell Effect that was doubled ","Description":"The duration of all non-instantaneous spell effect cast together with this spell effect is doubled. This spell effect does not stack with itself."}


,
	"Overexert":{"Tier":"Metamagic","Duration":"Instantaneous","Difficulty":"0","Upgrades":"0","Penalty":"0","SpecialModifier":"success","Modifier":"Add 1 automatic Success to your roll","Description":"Take 1 Stamina."}


,
	"Recklessly Cast":{"Tier":"Metamagic","Duration":"Instantaneous","Difficulty":"0","Upgrades":"2","Penalty":"0","SpecialModifier":"","Modifier":"Upgrade check 2 times","Description":"Until the end of your next turn, upgrade the Difficulty of all skill checks by 2. This spell effect has no effect out of combat."}


,
	"Store Spell":{"Tier":"Metamagic","Duration":"10 minutes","Difficulty":"0","Upgrades":"1","Penalty":"0","SpecialModifier":"","Modifier":"Upgrade Difficulty 1 time","Description":"For each node of this spell effect, choose one other node of a non-Metamagic spell effect that you are trying to cast. The chosen nodes do not affect this spell's target, but are instead stored by the target. The next time the target hits a creature with a weapon attack, the stored nodes affect the target of the weapon attack. If you target a creature that already has spell effect nodes stored with this spell, your new nodes replace their previous ones."}


,
	"Subtle Cast ":{"Tier":"Metamagic","Duration":"Instantaneous","Difficulty":"1","Upgrades":"0","Penalty":"0","SpecialModifier":"","Modifier":"Increase Difficulty by 1","Description":"When casting a spell that includes this spell effect, you show no outward signs that you are casting a spell. However, another creature can still tell that you are casting a spell if they pass an Arcana check with a number of Challenge dice equal to your ranks in Arcana, plus one Penalty die for each node of Subtle Cast included in the spell. "}


,
	"Aid":{"Tier":"Initiate","Duration":"1 round","Difficulty":"1","Upgrades":"0","Penalty":"0","SpecialModifier":"","Modifier":"Increase Difficulty 1 time","Description":"The target may Upgrade the Ability of one check 2 times before the end of this effect's duration. Additional nodes of this effect increase the duration of this effect by 1 round each."}


,
	"Animate Object":{"Tier":"Initiate","Duration":"1 hour","Difficulty":"1","Upgrades":"1","Penalty":"0","SpecialModifier":"","Modifier":"Increase Difficulty by 1, upgrade Difficulty of check 1 time","Description":"Target a non-magical, non-Broken, non-carried or worn object of Encumbrance 0-3 to become an Animated Object. It remains under your control for the duration of the spell until it is destroyed, dismissed as an incidental, or reaches Extreme range. The object becomes Broken if it is reduced to 0 Hit Points or less. The Animated Object is immediately hostile to you if you pass the spell check and roll 1 or more Calamity, but you may spend 1 Conquest to negate this effect. Each additional node of this spell increases the duration by 1 hour. Anytime before this spell would end you may spend 1 Stamina as an Incidental to refresh the duration of this spell, additional nodes included, for all targets within Extreme range.This spell effect cannot be cast as an area-target spell."}


,
	"Candle Light":{"Tier":"Initiate","Duration":"1 hour","Difficulty":"0","Upgrades":"0","Penalty":"2","SpecialModifier":"","Modifier":"Add 2 Penalty dice","Description":"If cast on one or multiple targets, each of those targets sheds light as if they were carrying a candle with them (moving where they go). This spell effect cannot be cast as an area-target spell."}


,
	"Darkvision":{"Tier":"Initiate","Duration":"1 hour","Difficulty":"1","Upgrades":"0","Penalty":"0","SpecialModifier":"","Modifier":"Increase Difficulty by 1","Description":"The target gains Darkvision for the duration. For each additional node of this spell, increase the duration by 1 hour. You may spend 1 Stamina as an Incidental to refresh the duration of this spell effect on all targets within extreme range, extra nodes included, anytime before this spell would end."}


,
	"Damage":{"Tier":"Initiate","Duration":"Instantaneous","Difficulty":"1","Upgrades":"0","Penalty":"0","SpecialModifier":"","Modifier":"Increase Difficulty by 1","Description":"Upon acquiring, choose a non-Physical, non-Silver damage type to gain access to. When casting a spell with this mode, do 2 damage of the chosen type per spell point used. This damage ignores Defense, but does not ignore Damage Reduction or resistances."}


,
	"Detect Magic":{"Tier":"Initiate","Duration":"1 hour","Difficulty":"2","Upgrades":"0","Penalty":"0","SpecialModifier":"","Modifier":"Increase Difficulty of check by 2","Description":"You are able to see a slight magical aura around all magical items and spell-affected areas within Short range. While this spell is active, add 2 Boost dice to Arcana checks made to identify magical properties."}


,
	"Find Person / Object":{"Tier":"Initiate","Duration":"Instantaneous","Difficulty":"1","Upgrades":"0","Penalty":"2","SpecialModifier":"","Modifier":"Increase Difficulty by 1, add 2 Penalty dice","Description":"Choose a specific object or creature known to you by name or appearance. If that object is within Ballistic range of the target, the target knows the direction and range band it falls in."}


,
	"Haste":{"Tier":"Initiate","Duration":"3 rounds","Difficulty":"1","Upgrades":"0","Penalty":"0","SpecialModifier":"","Modifier":"Increase Difficulty by 1","Description":"Target has their Movement Point Max increased by 2. If another spell including Haste is cast on the same target while this effect is active, the new casting replaces the current one."}


,
	"Heal":{"Tier":"Initiate","Duration":"Instantaneous","Difficulty":"2","Upgrades":"1","Penalty":"0","SpecialModifier":"","Modifier":"Increase Difficulty by 2, upgrade Difficulty 1 time","Description":"Heal 2 Hit Points."}


,
	"Hinder":{"Tier":"Initiate","Duration":"1 round","Difficulty":"0","Upgrades":"1","Penalty":"0","SpecialModifier":"","Modifier":"Upgrade Difficulty 1 time","Description":"The target upgrades the Difficulty of all checks on their next turn 1 time."}


,
	"Send Message":{"Tier":"Initiate","Duration":"1 minute","Difficulty":"1","Upgrades":"0","Penalty":"0","SpecialModifier":"","Modifier":"Increase Difficulty by 1","Description":"Establish a telepathic link to a known intelligent creature. Either party may mentally speak to each other for the duration. The link ends if either party moves beyond Extreme range, or if either party chooses to end the link. For each additional node of this spell, increase the duration by 1 minute. You may spend 1 Stamina as an Incidental to refresh the duration of this spell effect, including increased duration, anytime before this spell would end. If mutliple creatures are targeted by this spell, they can also mentally speak to each other."}


,
	"Shockwave":{"Tier":"Initiate","Duration":"Instantaneous","Difficulty":"0","Upgrades":"1","Penalty":"1","SpecialModifier":"","Modifier":"Upgrade Difficulty 1 time, add 1 Penalty die","Description":"Deal 1 damage (ignoring Damage Reduction) and push the target 5 cm directly away from you. The target then must pass a Difficulty 3 Coordination check or gain the Prone state. Additional nodes of this effect deal an additional 1 damage and push the target an additional 5 cm. Silhouette 4 or larger creatures automatically pass the Coordination check and are not pushed back. "}


,
	"Water Breathing":{"Tier":"Initiate","Duration":"1 hour","Difficulty":"1","Upgrades":"0","Penalty":"0","SpecialModifier":"","Modifier":"Increase Difficulty by 1","Description":"The target gains the ability to breathe under water for the duration. For each additional node of this spell, increase the duration by 1 hour. You may spend 1 Stamina as an Incidental to refresh the duration of this spell effect on all targets within extreme range, extra nodes included, anytime before this spell would end."}


,
	"Water Walking":{"Tier":"Initiate","Duration":"1 hour","Difficulty":"0","Upgrades":"0","Penalty":"1","SpecialModifier":"","Modifier":"Add 1 Penalty die","Description":"The target gains the ability to walk on the surface of any body of water as if it were solid ground. You may spend 1 Stamina as an Incidental to refresh the duration of this spell effect on all targets within extreme range, extra nodes included, anytime before this spell would end."}


,
	"Animate Corpse":{"Tier":"Adept","Duration":"1 minute","Difficulty":"1","Upgrades":"2","Penalty":"0","SpecialModifier":"","Modifier":"Increase Difficulty by 1, upgrade Difficulty of check 2 times","Description":"Target corpse of a humanoid (playable race, except Construct) is reanimated as your choice of Skeleton or Zombie. Each Skeleton or Zombie is a Temporary Follower, and takes up 1 follower slot. The Animated Corpse is immediately hostile to you if you pass the spell check and roll 1 or more Calamity, but you may spend 1 Conquest to negate this effect."}


,
	"Arcane Shield":{"Tier":"Adept","Duration":"Reaction","Difficulty":"0","Upgrades":"1","Penalty":"0","SpecialModifier":"","Modifier":"Upgrade check 1 time","Description":"As a Reaction, when a creature makes a successful attack against the target, roll a Challange die and add the result to the attacker's roll. For each node of this spell effect beyond the first, roll a Penalty die and add the result to the attack roll. "}


,
	"Conjure Weapon":{"Tier":"Adept","Duration":"1 hour","Difficulty":"1","Upgrades":"0","Penalty":"0","SpecialModifier":"","Modifier":"Increase Difficulty by 1","Description":"Create any Light Weapons or Brawl weapon. The weapon is identical in stats to a physical one, but is made of pure magic instead of any other material. When summoned, choose fire damage or any other type that you can cast using the Damage spell effect. You may add additional nodes for the following benefits: 1 node = another weapon, 1 attachment to all weapons conjured (maximum 2), 2 nodes = 1 Masterwork attatchment on all weapons conjured (maximum 1)"}


,
	"Create Darkness":{"Tier":"Adept","Duration":"1 hour","Difficulty":"0","Upgrades":"0","Penalty":"2","SpecialModifier":"","Modifier":"Add 2 Penalty dice","Description":"Decrease the light level within Short range of the target by 1. This light level cannot be increased or decreased by non-magical means, but can be modified by subsequent magical means."}


,
	"Detect Creatures":{"Tier":"Adept","Duration":"Instantaneous","Difficulty":"2","Upgrades":"0","Penalty":"0","SpecialModifier":"","Modifier":"Increase Difficulty by 2","Description":"Upon success, you learn the direction and approximate distance (range band) of any creatures with the creature type of a type you choose."}


,
	"Dispel Effect":{"Tier":"Adept","Duration":"Instantaneous","Difficulty":"1","Upgrades":"0","Penalty":"0","SpecialModifier":"","Modifier":"Increase Difficulty by 1","Description":"Choose one spell effect from the Scholarly magic spell effects list with a duration greater than instantaneous. Add the Casting modifier for the chosen effect to your Scholarly Magic check to cast Dispel Effect. If the casting check is successful, this effect is removed from all targets that are currently being affected by it. If the chosen spell effect is Dread Summoning and you succeed on your spellcasting check, make another Difficulty 2 Scholarly Magic check opposed by a Scholarly magic check from the caster of the Dread Summoning effect. If you fail this check the effect is not dispelled. "}


,
	"Magical Resistance":{"Tier":"Adept","Duration":"10 minutes","Difficulty":"0","Upgrades":"1","Penalty":"1","SpecialModifier":"","Modifier":"Upgrade Difficulty of check 1 time, add 1 Penalty die","Description":"For each node of this effect, gain Resist 1 to two different non-Physical, non-Silver damage types. You can select the same damage type multiple times, and multiple nodes of this spell can stack. If another spell including Magical Resistance is cast on the same target while this effect is active, the target chooses to keep the previous casting or replace it with the current one."}


,
	"Heat / Cool Object":{"Tier":"Adept","Duration":"5 rounds","Difficulty":"1","Upgrades":"1","Penalty":"0","SpecialModifier":"","Modifier":"Increase Difficulty by 1, upgrade check 1 times","Description":"This spell must target a piece of equipment made of metal. The creature wearing or holding it takes 1 damage (ignoring Damage Reduction) at the beginning of each of their turns (Fire if item is heated, Cold if item is cooled) they choose to hold or wear it. Add 1 Penalty die to all checks made that involve the item. Any given item an only be affected by one node of this spell effect at any time."}


,
	"Inflict Condition":{"Tier":"Adept","Duration":"Various","Difficulty":"0","Upgrades":"2","Penalty":"0","SpecialModifier":"","Modifier":"Upgrade Difficulty 2 times","Description":"When you cast this spell, choose one of the following Conditions: Bleeding, Burning, Poisoned, or Sickened. Target must make a Difficulty 3 Resilience check. If they fail, they gain the Condition. The Deafened and Sickened Conditions last for 3 turns, and the others until they are resolved."}


,
	"Magical Ward":{"Tier":"Adept","Duration":"1 hour","Difficulty":"0","Upgrades":"0","Penalty":"2","SpecialModifier":"","Modifier":"Add 2 Penalty dice","Description":"Damage Reduction +2. Whenever the target of this spell takes damage from an effect that does not bypass Damage Reduction, lose 1 Stamina. This spell effect may be ended by the caster at any time on their turn, or after the one of the targets takes damage from an effect that does not bypass Damage Reduction. This spell effect does not stack with itself."}


,
	"Mend Object":{"Tier":"Adept","Duration":"Instantaneous","Difficulty":"0","Upgrades":"2","Penalty":"0","SpecialModifier":"","Modifier":"Upgrade Difficulty of check 2 times","Description":"Target object is improved in Condition by 1. If a magical item is targeted by this spell, increase the Difficulty of casting this spell by 2. Succeeding on this check but generating Calamity will reduce the Condition of the item by 1 instead."}


,
	"Open Lock":{"Tier":"Adept","Duration":"Instantaneous","Difficulty":"0","Upgrades":"1","Penalty":"0","SpecialModifier":"lock","Modifier":"Upgrade Difficulty by 1","Description":"The base Difficulty of this spell is set by the highest difficulty of targeted lock(s). If you succeed, the lock(s) opens, and if you fail, it doesn't. The lock(s) break if you roll 3 Disadvantage or a Calamity, making further attempts to open it impossible."}


,
	"Silent Steps":{"Tier":"Adept","Duration":"10 minutes","Difficulty":"2","Upgrades":"0","Penalty":"0","SpecialModifier":"","Modifier":"Increase Difficulty by 2","Description":"Increase the Difficulty by 2 of Perception checks to detect targeted characters using sound."}


,
	"Sunder Object":{"Tier":"Adept","Duration":"Instantaneous","Difficulty":"2","Upgrades":"0","Penalty":"2","SpecialModifier":"","Modifier":"Increase Difficulty by 2, add 2 Penalty dice","Description":"Target object is reduced in Condition by 1. If a magical item is targeted by this spell, increase the Difficulty of casting this spell by 2. "}


,
	"Slow Fall":{"Tier":"Adept","Duration":"10 minutes","Difficulty":"1","Upgrades":"0","Penalty":"0","SpecialModifier":"","Modifier":"Increase Difficulty by 1","Description":"The target does not take falling damage for the duration. For each additional node of this spell, increase the duration by 1 minute."}


,
	"Torch Light":{"Tier":"Adept","Duration":"1 hour","Difficulty":"1","Upgrades":"0","Penalty":"2","SpecialModifier":"","Modifier":"Increase Difficulty by 1, add 2 Penalty dice","Description":"If cast on one or multiple targets, each of those targets sheds light as if they were carrying a torch with them (moving where they go). This spell effect cannot be cast as an area-target spell."}


,
	"Stoneskin":{"Tier":"Adept","Duration":"1 hour","Difficulty":"1","Upgrades":"0","Penalty":"0","SpecialModifier":"","Modifier":"Increase Difficulty by 1","Description":"As long as you aren't wearing armor, you gain 1 temporary Damage Reduction, plus one for each node of this effect in your spell. Each time you are successfully hit, reduce this Damage Reduction by 1, regardless of the damage done. If another spell including Stoneskin is cast on the same target while this effect is active, the new casting replaces the current one if the target is willing."}


,
	"Influence Emotions":{"Tier":"Adept","Duration":"2 rounds","Difficulty":"0","Upgrades":"1","Penalty":"0","SpecialModifier":"","Modifier":"Upgrade Difficulty 1 time","Description":"The target upgrades the Ability or Difficulty (chosen at time of casting by the caster) of all Cool, Discipline, and Insight checks 2 times. For each additional node of this spell, increase the duration by 1 round."}


,
	"Remove Condition":{"Tier":"Adept","Duration":"Instantaneous","Difficulty":"0","Upgrades":"3","Penalty":"0","SpecialModifier":"","Modifier":"Upgrade Difficulty 3 times","Description":"For each node, choose one of the following Conditions: Bleeding, Blinded, Burning, Charmed, Deafened, Disoriented, Frightened, Poisoned, or Sickened. This Condition is removed from all targets."}


,
	"Comprehend Languages":{"Tier":"Magister","Duration":"1 hour","Difficulty":"2","Upgrades":"0","Penalty":"0","SpecialModifier":"languages","Modifier":"Difficulty 2 for Common languages, Difficulty 4 for Rare languages","Description":"You can read, understand, and speak one common or rare language. This does not extend to ancient, encoded, or intentionally obscure languages (including Thieves Cant)."}


,
	"Conjure Item":{"Tier":"Magister","Duration":"1 hour","Difficulty":"2","Upgrades":"0","Penalty":"0","SpecialModifier":"","Modifier":"Increase Difficulty by 2","Description":"Creature a slightly translucent magical version of any non-magical, non-weapon, non-armor item that has a Rarity of 3 or less and an Encumbrance 4 or less. It lasts for the spell's duration, until Broken, or until dismissed. "}


,
	"Control Monster":{"Tier":"Magister","Duration":"1 hour","Difficulty":"1","Upgrades":"2","Penalty":"0","SpecialModifier":"enemyType","Modifier":"Increase Difficulty by 1, upgrade check 2 times, then add 0 Penalty dice for a Minion target, 2 Penalty dice for a Rival, and 4 Penalty dice for a Nemesis. ","Description":"Target non-humanoid, non-Legendary creature of Intellect 2 or less must make a Discipline skill check against the uncancelled successes of the roll you made to cast this spell. If they fail, they are now under your control for the spell's duration or until dismissed. If the creature takes damage it will make another Discipline check, opposed by your Scholarly Magic skill check. If it succeeds, it is no longer under your control and becomes hostile. You can only have one of these creatures under your control at a time, and it does not count towards the number of creatures you can control."}


,
	"Corpse Explosion":{"Tier":"Magister","Duration":"Instantaneous","Difficulty":"1","Upgrades":"2","Penalty":"0","SpecialModifier":"","Modifier":"Increase Difficulty by 1, upgrade Difficulty 2 times","Description":"Target corpse explodes, dealing (3 + target Silhouette) Physical damage, (ignoring Damage Reduction) to all creatures within Engaged range. Each affected creature must pass a Difficulty 3 Resilience check or gain the Sickened Condition for 1 minute. "}


,
	"Counterspell":{"Tier":"Magister","Duration":"Reaction","Difficulty":"0","Upgrades":"0","Penalty":"0","SpecialModifier":"","Modifier":"- ","Description":"As a Reaction when a creature declares their intent to cast a specific spell, cast this spell opposed by the target's Scholarly Magic or Innate Magic skill but based on their Cunning, adjusting the Difficulty of your check by the range, etc. If you succeed, the targeted spell fails to have any effect, and the targeted creature does not lose Stamina for casting their spell. If your Counterspell fails, the targeted spell resolves normally. "}


,
	"Create Storm":{"Tier":"Magister","Duration":"1 hour","Difficulty":"3","Upgrades":"0","Penalty":"0","SpecialModifier":"","Modifier":"Increase Difficulty by 3","Description":"Create a Moderate Weather Effect, centered on a chosen point. This storm affects everything within Extreme Range of the target point, only works outdoors, and gives all creatures it affects Resist Fire: 2 and Weakness Lightning: 2."}


,
	"Detect Thoughts":{"Tier":"Magister","Duration":"10 minutes","Difficulty":"1","Upgrades":"0","Penalty":"0","SpecialModifier":"","Modifier":"Increase Difficulty by 1","Description":"Target humanoid must make a Discipline skill check, with a Difficulty equal to the number of nodes of this spell effect included in your spell. If they succeed, you are unable to detect any of their thoughts and they know someone was trying to read their thoughts. If they fail, you are able to understand all of what they are currently thinking, and they do not know someone is actively perceiving their thoughts. This effect ends immediately if the target moves beyond Extreme range of you."}


,
	"Disguise":{"Tier":"Magister","Duration":"1 hour","Difficulty":"1","Upgrades":"0","Penalty":"0","SpecialModifier":"","Modifier":"Increase Difficulty by 1","Description":"The target takes on the physical appearance of, and gains a vocal approximation of, another humanoid creature, chosen by the caster, of the same Silhouette as themself. Creatures within Medium range can see through the disguise if they pass a Perception check with Difficulty equal to the number of nodes of this effect cast on the target. The difficulty of this check is reduced by 2 (min 0) if the creature is touching the target. This effect can be ended early as an incidental by the caster or the target, and the target of this effect can choose to continue their disguise for another hour by spending 1 Stamina when this effect would end."}


,
	"Fly":{"Tier":"Magister","Duration":"10 Minutes","Difficulty":"1","Upgrades":"0","Penalty":"0","SpecialModifier":"","Modifier":"Increase Difficulty by 1","Description":"The target gains Flying 1 for the duration. For each additional node of this spell, increase the duration by 10 minutes. You may spend 1 Stamina as an Incidental to refresh the duration of this spell effect on all targets within extreme range, extra nodes included, anytime before this spell would end."}


,
	"Gaseous Form":{"Tier":"Magister","Duration":"2 rounds","Difficulty":"1","Upgrades":"2","Penalty":"0","SpecialModifier":"","Modifier":"Increase Difficulty by 1, upgrade Difficulty 2 times","Description":"You can squeeze through very small places (under doors, through prison bars, down chimneys, etc.), though not through solid walls. Take half damage (round up) from all sources, calculated after Damage Reduction and Resistances. You can still interract with things normally. Reduce target's Movement Point Max by 10 (to a minimum 1). For each additional node of this spell, increase the duration by 1 round."}


,
	"Ghostwalk":{"Tier":"Magister","Duration":"1 minute","Difficulty":"0","Upgrades":"1","Penalty":"1","SpecialModifier":"","Modifier":"Upgrade Difficulty 1 time, add 1 Penalty die","Description":"Take on a ghostly appearance, counting as being in Extensive Cover. Additionally, roll a d100 every time you make a skill check, a skill check is made against you (including attacks), or you would take damage from falling or Conditions; there is a 30% chance, plus 10% for each additional node of this spell effect, that the skill check fails or that you don't take damage. Either caster or target can end this effect as an Incidental."}


,
	"Paralyzing Fear":{"Tier":"Magister","Duration":"3 rounds","Difficulty":"2","Upgrades":"2","Penalty":"0","SpecialModifier":"","Modifier":"Increase Difficulty by 2, upgrade check 2 times","Description":"At the beginning of each of the affected creature's turns, it must succeed on a Difficulty 4 Discipline check or gain the Frightened Condition. If the creature already has the Frightened Condition, its Movemant Point Max are reduced to 0. If the creature has already had their Movement Point Max reduced to 0 by this spell, they gain the Paralyzed Condition. A creature cannot be affected by more than one instance of this spell effect at one time."}


,
	"Slow":{"Tier":"Magister","Duration":"3 rounds","Difficulty":"1","Upgrades":"1","Penalty":"0","SpecialModifier":"","Modifier":"Increase Difficulty by 1, upgrade check 1 time","Description":"Target has their Movement Point Max reduced by 5, to a minimum of 5."}


,
	"True Sight":{"Tier":"Magister","Duration":"1 hour","Difficulty":"1","Upgrades":"0","Penalty":"1","SpecialModifier":"","Modifier":"Increase Difficulty by 1, add 1 Penalty die","Description":"The target gains True Sight for the duration. For each additional node of this spell, increase the duration by 1 hour. You may spend 1 Stamina as an Incidental to refresh the duration of this spell effect on all targets within extreme range, extra nodes included, anytime before this spell would end."}


,
	"Summon Familiar":{"Tier":"Magister","Duration":"Permanent","Difficulty":"0","Upgrades":"2","Penalty":"0","SpecialModifier":"","Modifier":"Upgrade Difficulty 2 times","Description":"After 1 hour of uninterupted concentration, summon a familiar. This familiar is considered a pet. Use the Pets/Mounts tab to create a Pet, but you must choose the Skill archetype. You can see and hear what your familiar can see and hear at all times. - The Summoned Familiar is immediately hostile to you if you pass the spell check and roll 1 or more Calamities, but you may spend 1 Conquest to negate this effect."}


,
	"Dread Summoning":{"Tier":"Arcanist","Duration":"Permanent","Difficulty":"0","Upgrades":"2","Penalty":"0","SpecialModifier":"","Modifier":"Upgrade Difficulty 2 times","Description":"After 1 hour of uninterupted concentration, summon followers from the undead followers list. The total follower points of these followers cannot exceed the number of corpses targeted. If the spell is successful the corpses are consumed."}


,
	"Impede Movement":{"Tier":"Arcanist","Duration":"3 rounds","Difficulty":"1","Upgrades":"0","Penalty":"1","SpecialModifier":"","Modifier":"Increase Difficulty by 1, add 1 Penalty die","Description":"Target loses their free Maneuver."}


,
	"Inflict Weakness":{"Tier":"Arcanist","Duration":"5 rounds","Difficulty":"1","Upgrades":"1","Penalty":"1","SpecialModifier":"","Modifier":"Increase Difficulty by 1, Upgrade Difficulty 1 time, add 1 Penalty die","Description":"Choose a non-Physical, non-Silver damage type. Reduce the target(s) Resistance to that damage by 1. If this reduces the target(s) Resist to below 0, then they gain Weakness equal to the remaining reduction. Alternatively, the spell effect can reduce Immunity to a damage type to Resist 5 to that damage type. If this spell is used to reduce Immunity, increase the Difficulty of the casting check by 1, in addition to the regular casting modifier. If another spell including Inflict Weakness is cast on the same target while this effect is active, the new casting replaces the current one."}


,
	"Polymorph":{"Tier":"Arcanist","Duration":"1 minute","Difficulty":"0","Upgrades":"2","Penalty":"0","SpecialModifier":"","Modifier":"Upgrade Difficulty 2 times","Description":"The target must make a Discipline check with Difficulty equal to the number of nodes of this spell effect cast on the target. If they fail, roll a d100, adding 10 to the roll for each Calamity rolled on your spell check, and subtracting 10 for each Conquest rolled on your spell check - the target, including what they are wearing and carrying, is tranformed into the corresponding animal from the Polymorph Table. The target retains its Intellect score, memories, and disposition, but otherwise must use the stat block for the animal it was transformed into. If target is reduced to zero Hit Points while in animal form, it immediately reverts to its original form with whatever Hit Points it had before being transformed. "}


,
	"Resurrection":{"Tier":"Arcanist","Duration":"Permanent","Difficulty":"6","Upgrades":"6","Penalty":"0","SpecialModifier":"","Modifier":"Add 6 Challenge dice","Description":"After 1 hour of uninterupted concentration, attempt to return a deceased non-Undead Humanoid to life. The body must be relatively intact, and have been dead for no more than 7 days. If you succeed and do not roll any Calamities, the creature is brought back to life at 1 Hit Point. If you succeed but roll any number of Calamities, you gain 1 level of Exhaustion for each Calamity rolled. If you fail your check but do not roll any Calamities, the dead body turns to ash. If you fail your check but roll at least 1 Calamity, the dead body is reanimated as a Zombie that is immediately hostile to all creatures."}


,
	"Translocate":{"Tier":"Arcanist","Duration":"Instantaneous","Difficulty":"0","Upgrades":"0","Penalty":"0","SpecialModifier":"unwillingTarget","Modifier":"Upgrade Difficulty 1 time for each unwilling target","Description":"For each creature targeted by this spell, you may move it to the location of another creature targeted by this spell. No more than one creature can end up at any one location."}


,
	"Teleport":{"Tier":"Arcanist","Duration":"Instantaneous","Difficulty":"1","Upgrades":"1","Penalty":"0","SpecialModifier":"","Modifier":"Add 1 Challenge die","Description":"Each affected creature teleports to a point of their choosing that is visible to them and within the range band corresponding to the number of nodes chosen for this spell: 1 is Extended, 2 Short, 3 Medium, 4 Long, 5 Extreme, 6 Ballistic."}


}
