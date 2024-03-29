
const default_indicators = [ "action", "action" ];
const default_investigator = "Unknown Investigator";

const game = {
	BASE: "Base",
	BEYOND_THE_THRESHOLD: "Beyond the Threshold",
	STREETS_OF_ARKHAM: "Streets of Arkham",
	SANCTUM_OF_TWILLIGHT: "Sanctum of Twilight",
	HORRIFIC_JOURNEYS: "Horrific Journeys",
	PATH_OF_THE_SERPENT: "Path of the Serpent",
	SUPPRESSED_MEMORIES: "Suppressed Memories",
	RECURRING_NIGHTMARES: "Recurring Nightmares",
	CALL_OF_THE_WILD: "Call of the Wild",
	FORBIDDEN_ALCHEMY: "Forbidden Alchemy",
};

const Action = {
	INTERACT: "interact",
	MOVE: "move"
};

const Color = {
	GREEN: "green",
	ORANGE: "orange",
	RED: "red"
};

const Icon = {
	DAZED: "knockout",
	FOCUSED: "mighty-force",
	RESTRAINED: "imprisoned",
	STUNNED: "oppression",
	WOUNDED: "arm-sling",
	INSANE: "pyromaniac",
	LOST_IN_TIME_AND_SPACE: "portal",
	MESMERIZED: "psychic-waves",
	STRESSED: "despair",
	RIGHTEOUS: "embrassed-energy",
	POISONED: "poison-bottle",
	FEARLESS: "deadly-strike"
};

const investigators = [
	{ source: game.BASE, name: "Agatha Crane", title: "The Parapsychologist",
		ability: "After you resolve a horror check, gain 1 Clue.", bonuses: { actions: 0, moves: 0 }, immunities: [], stats: { health: 5, sanity: 9, strength: 2, agility: 3, observation: 4, lore: 5, influence: 3, will: 4 } },
	{ source: game.BASE, name: "Carson Sinclair", title: "The Butler",
		ability: "<txt_action /> Another investigator within range may perform 1 action. Activate this ability only once per round.", bonuses: { actions: 0, moves: 0 }, immunities: [], stats: { health: 8, sanity: 6, strength: 3, agility: 2, observation: 5, lore: 4, influence: 4, will: 3} },
	{ source: game.BASE, name: "Father Mateo", title: "The Priest",
		ability: "<txt_action /> Another investigator within range becomes Focused. Activate this ability only once per round.", bonuses: { actions: 0, moves: 0 }, immunities: [], stats: { health: 6, sanity: 8, strength: 3, agility: 3, observation: 2, lore: 4, influence: 4, will: 5 } },
	{ source: game.BASE, name: "Minh Thi Phan", title: "The secretary",
		ability: "Once per round, you or another investigator within range may re-roll 1 die while resolving a test.", bonuses: { actions: 0, moves: 0 }, immunities: [], stats: { health: 7, sanity: 7, strength: 3, agility: 4, observation: 4, lore: 3, influence: 4, will: 3 } },
	{ source: game.BASE, name: "Preston Fairmont", title: "The Millionaire",
		ability: "Once per round, when you gain an item, you may flip 1 Horror facedown or discard 1 facedown Horror.", bonuses: { actions: 0, moves: 0 }, immunities: [], stats: { health: 8, sanity: 6, strength: 4, agility: 4, observation: 3, lore: 2, influence: 5, will: 3 } },
	{ source: game.BASE, name: "Rita Young", title: "The Athlete",
		ability: "You may move 1 additional space as part of a move action.", bonuses: { actions: 0, moves: 1 }, immunities: [], stats: { health: 9, sanity: 5, strength: 5, agility: 4, observation: 3, lore: 3, influence: 2, will: 4 } },
	{ source: game.BASE, name: "Wendy Adams", title: "The Urchin",
		ability: "You cannot become Stunned or Retrained.", bonuses: { actions: 0, moves: 0 }, immunities: [ "Stunned", "Restrained" ], stats: { health: 6, sanity: 8, strength: 3, agility: 5, observation: 4, lore: 3, influence: 3, will: 3 } },
	{ source: game.BASE, name: "William Yorick", title: "The Gravedigger",
		ability: "Whenever a monster is defeated, gain 1 Clue.", bonuses: { actions: 0, moves: 0 }, immunities: [], stats: { health: 7, sanity: 7, strength: 4, agility: 3, observation: 4, lore: 3, influence: 3, will: 4 } },
	{ source: game.HORRIFIC_JOURNEYS, name: "Agnes Baker", title: "The Waitress",
		ability: "You begin the game with the Storm of Spirits Spell.", bonuses: { actions: 0, moves: 0 }, immunities: [], stats: { health: 7, sanity: 7, strength: 2, agility: 3, observation: 4, lore: 5, influence: 4, will: 3 } },
	{ source: game.HORRIFIC_JOURNEYS, name: "Jim Culver", title: "The Musician",
		ability: "You begin the game with the Golden Trumpet Unique Item.", bonuses: { actions: 0, moves: 0 }, immunities: [], stats: { health: 6, sanity: 8, strength: 3, agility: 3, observation: 3, lore: 4, influence: 4, will: 4 } },
	{ source: game.HORRIFIC_JOURNEYS, name: "Silas Marsh", title: "The Sailor",
		ability: "Once per round, you may flip 1 Horror faceup to re-roll one or all of your dice while resolving a test.", bonuses: { actions: 0, moves: 0 }, immunities: [], stats: { health: 9, sanity: 5, strength: 4, agility: 5, observation: 4, lore: 2, influence: 3, will: 3 } },
	{ source: game.HORRIFIC_JOURNEYS, name: "Trish Scarborough", title: "The Spy",
		ability: "Once per round, you may convert up to two <cluepl /> to <successpl /> while performing a Search action.", bonuses: { actions: 0, moves: 0 }, immunities: [], stats: { health: 8, sanity: 6, strength: 4, agility: 4, observation: 5, lore: 2, influence: 3, will: 3 } },
	{ source: game.SANCTUM_OF_TWILLIGHT, name: "Charlie Kane", title: "The Politician",
		ability: "While within range of a Person, you may convert <cluepf /> <clue /> into <successpf /> <success />, Activate this ability only once per test.", bonuses: { actions: 0, moves: 0 }, immunities: [], stats: { health: 5, sanity: 9, strength: 3, agility: 2, observation: 4, lore: 3, influence: 5, will: 4 } },
	{ source: game.SANCTUM_OF_TWILLIGHT, name: "Lily Chen", title: "The Martial Artist",
		ability: "While you are attacking unarmed, if a monster would suffer 1 or more damage, it suffers 2 additional damage.", bonuses: { actions: 0, moves: 0 }, immunities: [], stats: { health: 7, sanity: 7, strength: 4, agility: 4, observation: 3, lore: 3, influence: 3, will: 4 } },
	{ source: game.STREETS_OF_ARKHAM, name: "Diana Stanley", title: "The Reformed Cultist",
		ability: "If you would suffer 2 or more Horror, suffer 1 fewer Horror instead.", bonuses: { actions: 0, moves: 0 }, immunities: [], stats: { health: 8, sanity: 6, strength: 3, agility: 4, observation: 4, lore: 5, influence: 3, will: 2 } },
	{ source: game.STREETS_OF_ARKHAM, name: "Finn Edwards", title: "The Bootlegger",
		ability: "Once per round, you may move 1 space before or after performing a Search action.", bonuses: { actions: 0, moves: 0 }, immunities: [], stats: { health: 8, sanity: 6, strength: 3, agility: 3, observation: 4, lore: 3, influence: 4, will: 4 } },
	{ source: game.STREETS_OF_ARKHAM, name: "Marie Lambeau", title: "The Entertainer",
		ability: "At the start of your turn, you may cast a spell without spending an action.", bonuses: { actions: 0, moves: 0 }, immunities: [], stats: { health: 6, sanity: 8, strength: 3, agility: 4, observation: 2, lore: 4, influence: 5, will: 3 } },
	{ source: game.STREETS_OF_ARKHAM, name: "Tommy Mulddon", title: "The Rookie Cop",
		ability: "You begin the game with the Becky Unique Item.", bonuses: { actions: 0, moves: 0 }, immunities: [], stats: { health: 7, sanity: 7, strength: 4, agility: 4, observation: 4, lore: 2, influence: 4, will: 3 } },
	{ source: game.SUPPRESSED_MEMORIES, name: "Amanda Sharpe", title: "The Student",
		ability: "You may perform two additional puzzle steps while attempting a puzzle.", bonuses: { actions: 0, moves: 0 }, immunities: [], stats: { health: 7, sanity: 7, strength: 3, agility: 3, observation: 4, lore: 4, influence: 3, will: 4 } },
	{ source: game.SUPPRESSED_MEMORIES, name: "Carolyn Fern", title: "The Psychologist",
		ability: "<txt_action /> You or another investigator within range flip 1 Horror facedown or discard 1 facedown Horror.", bonuses: { actions: 0, moves: 0 }, immunities: [], stats: { health: 6, sanity: 8, strength: 3, agility: 2, observation: 4, lore: 3, influence: 4, will: 5 } },
	{ source: game.SUPPRESSED_MEMORIES, name: "Darrell Simmons", title: "The photographer",
		ability: "Once per round, if you would gain a Clue, you may become Focused instead.", bonuses: { actions: 0, moves: 0 }, immunities: [], stats: { health: 8, sanity: 6, strength: 3, agility: 4, observation: 5, lore: 3, influence: 3, will: 3 } },
	{ source: game.SUPPRESSED_MEMORIES, name: "Dexter Drake", title: "The magician",
		ability: "Once per round, when you gain a Spell, become Focused.", bonuses: { actions: 0, moves: 0 }, immunities: [], stats: { health: 6, sanity: 8, strength: 3, agility: 3, observation: 3, lore: 5, influence: 4, will: 3 } },
	{ source: game.SUPPRESSED_MEMORIES, name: "Mandy Thompson", title: "The Researcher",
		ability: "Once per round, when you gain a Clue, gain 1 additional Clue.", bonuses: { actions: 0, moves: 0 }, immunities: [], stats: { health: 6, sanity: 8, strength: 2, agility: 3, observation: 5, lore: 4, influence: 4, will: 3 } },
	{ source: game.SUPPRESSED_MEMORIES, name: "Monterey Jack", title: "The Archarologist",
		ability: "Other investigators in you space do not need to evade monsters.", bonuses: { actions: 0, moves: 0 }, immunities: [], stats: { health: 8, sanity: 6, strength: 5, agility: 3, observation: 4, lore: 3, influence: 3, will: 3 } },
	{ source: game.SUPPRESSED_MEMORIES, name: "Vincent Lee", title: "The Doctor",
		ability: "<txt_action /> You or another investigator within range flip 1 Damage facedown or discard 1 facedown Damage.", bonuses: { actions: 0, moves: 0 }, immunities: [], stats: { health: 8, sanity: 6, strength: 4, agility: 2, observation: 4, lore: 3, influence: 4, will: 4 } },
	{ source: game.RECURRING_NIGHTMARES, name: "Ashcan Pete", title: "The Drifter",
		ability: "You begin the game with the Duke Unique Item.", bonuses: { actions: 0, moves: 0 }, immunities: [], stats: { health: 7, sanity: 7, strength: 4, agility: 4, observation: 4, lore: 3, influence: 2, will: 4 } },
	{ source: game.RECURRING_NIGHTMARES, name: "Gloria Goldberg", title: "The Author",
		ability: "At the start of your turn, if you have no Clues, gain 1 Clue.", bonuses: { actions: 0, moves: 0 }, immunities: [], stats: { health: 7, sanity: 7, strength: 2, agility: 3, observation: 4, lore: 4, influence: 4, will: 4 } },
	{ source: game.RECURRING_NIGHTMARES, name: "Harvey Walters", title: "The Professor",
		ability: "<txt_action /> Another investigator within range gains 1 Clue. Activate this ability only once per round.", bonuses: { actions: 0, moves: 0 }, immunities: [], stats: { health: 5, sanity: 9, strength: 3, agility: 2, observation: 4, lore: 4, influence: 4, will: 4 } },
	{ source: game.RECURRING_NIGHTMARES, name: "Jenny Barnes", title: "The Dilettante",
		ability: "<txt_action /> If you have no Clues, gain 2 Clues and discard 1 Horror.", bonuses: { actions: 0, moves: 0 }, immunities: [], stats: { health: 8, sanity: 6, strength: 3, agility: 4, observation: 3, lore: 3, influence: 5, will: 3 } },
	{ source: game.RECURRING_NIGHTMARES, name: "Joe Diamond", title: "The Private Eye",
		ability: "If you spend a Clue to convert <cluepf /> <clue /> to <successpf /> <success />, you may convert up to two <cluepl /> to <successpf /> <success /> instead.", bonuses: { actions: 0, moves: 0 }, immunities: [], stats: { health: 8, sanity: 6, strength: 4, agility: 5, observation: 3, lore: 3, influence: 3, will: 3 } },
	{ source: game.RECURRING_NIGHTMARES, name: "Kate Winthrop", title: "The Scientist",
		ability: "You begin the game with the Flux Stabilizer Unique Item.", bonuses: { actions: 0, moves: 0 }, immunities: [], stats: { health: 6, sanity: 8, strength: 3, agility: 3, observation: 5, lore: 4, influence: 3, will: 3 } },
	{ source: game.RECURRING_NIGHTMARES, name: "Michael McGlen", title: "The Gangster",
		ability: "Whenever a monster is defeated, become Focused.", bonuses: { actions: 0, moves: 0 }, immunities: [], stats: { health: 9, sanity: 5, strength: 5, agility: 3, observation: 4, lore: 2, influence: 3, will: 4 } },
	{ source: game.RECURRING_NIGHTMARES, name: "Sister Mary", title: "The Nun",
		ability: "Once per round, another investigator within range may convert <cluepf /> <clue /> into <successpf /> <success /> while resolving a test.", bonuses: { actions: 0, moves: 0 }, immunities: [], stats: { health: 6, sanity: 8, strength: 3, agility: 3, observation: 3, lore: 4, influence: 3, will: 5 } },
	{ source: game.BEYOND_THE_THRESHOLD, name: "Akachi Onyele", title: "The Shaman",
		ability: "Effects cannot cause you to discard Clues unless you choose to.", bonuses: { actions: 0, moves: 0 }, immunities: [], stats: { health: 6, sanity: 8, strength: 3, agility: 2, observation: 4, lore: 4, influence: 3, will: 5 } },
	{ source: game.BEYOND_THE_THRESHOLD, name: "Wilson Richards", title: "The handyman",
		ability: "After you resolve a Horror check, become Focused.", bonuses: { actions: 0, moves: 0 }, immunities: [], stats: { health: 8, sanity: 6, strength: 5, agility: 4, observation: 3, lore: 2, influence: 4, will: 3 } },
	{ source: game.BEYOND_THE_THRESHOLD, name: "Bob Jenkins", title: "The Salesman",
		ability: "Once per round, when you spend an action to interact with a Person, you may flip 1 Horror facedown or discard 1 facedown Horror.", bonuses: { actions: 0, moves: 0 }, immunities: [], stats: { health: 7, sanity: 7, strength: 3, agility: 3, observation: 4, lore: 2, influence: 5, will: 4 } },
	 { source: game.PATH_OF_THE_SERPENT, name: "Daniela Reyes", title: "The Mechanic",
		 ability: "When a puzzle is solved, you may either gain 2 Clues or discard 1 Horror.", bonuses: { actions: 0, moves: 0 }, immunities: [], stats: { health: 8, sanity: 6, strength: 5, agility: 4, observation: 3, lore: 3, influence: 3, will: 3 } },
	{ source: game.PATH_OF_THE_SERPENT, name: "Leo Anderson", title: "The Expedition Leader",
		ability: "Once per round, when you perform a move action, another investigator may move 1 space.", bonuses: { actions: 0, moves: 0 }, immunities: [], stats: { health: 7, sanity: 7, strength: 4, agility: 4, observation: 4, lore: 2, influence: 3, will: 4 } },
	{ source: game.PATH_OF_THE_SERPENT, name: "Ursula Downs", title: "The Explorer",
		ability: "Once per round, you may move 1 space before or after performing an explore action or resolving the effects of a Sight token.", bonuses: { actions: 0, moves: 0 }, immunities: [], stats: { health: 7, sanity: 7, strength: 3, agility: 4, observation: 4, lore: 4, influence: 3, will: 3 } },
	{ source: game.PATH_OF_THE_SERPENT, name: "Norman Withers", title: "The Astronomer",
		ability: "Action: If you are in an outdoor space, gain 2 Clues or discard 1 Horror. Activate this ability only once per round.", bonuses: { actions: 0, moves: 0 }, immunities: [], stats: { health: 6, sanity: 8, strength: 3, agility: 3, observation: 4, lore: 4, influence: 2, will: 5 } },
	// { source: game.BASE, name: "", title: "", ability: "", bonuses: { actions: 0, moves: 0 }, immunities: [], stats: { health: 5, sanity: 5, strength: 3, agility: 3, observation: 3, lore: 3, influence: 3, will: 3 } },
];

const default_effects = [ "Focused", "Righteous", "Fearless", "Dazed", "Restrained", "Stunned", "Stressed", "Mesmerized", "Poisoned", "Lost in Time and Space", "Wounded", "Insane" ];
const effects = [
	new Effect(game.BASE, "Dazed", Icon.DAZED, Color.ORANGE, "You cannot spend Clues to convert dice results or perform additional puzzle steps. At the end of your turn, discard this card.")
		.setBonuses(0, 0, false, false, false)
		.setEnds(true, false, false, false),
	new Effect(game.BASE, "Focused", Icon.FOCUSED, Color.GREEN, "You may discard this card to convert all Investigation Results to Successes while resolving a test.")
		.setBonuses(0, 0,false,false, false)
		.setEnds(false,false, false, false),
	new Effect(game.BASE, "Restrained", Icon.RESTRAINED, Color.ORANGE, "You cannot move voluntarily. At the end of your turn discard this card.")
		.setBonuses(0,0,true,false, false)
		.setEnds(true,false, false, false ),
	new Effect(game.BASE, "Stunned", Icon.STUNNED, Color.ORANGE, "You cannot perform more than a single action during your turn. At the end of your turn discard this card.")
		.setBonuses(0, 0, false, true, false)
		.setEnds(true, false, false, false),
	new Effect(game.BASE, "Wounded", Icon.WOUNDED, Color.RED, "You cannot perform the move action more than once each round. When you have suffered Damage equal to your health you are eliminated.")
		.setBonuses(0, 0, false, false, true)
		.setEnds(false, false, false, false),
	new Effect(game.BASE, "Insane", Icon.INSANE, Color.RED,"Look at the back of this card but do not reveal it to the other investigators. When you have suffered horror equal to your sanity you are eliminated.")
		.setBonuses(0, 0, false, false, false )
		.setEnds(false, false, false, false),
	new Effect(game.HORRIFIC_JOURNEYS, "Lost in Time and Space", Icon.LOST_IN_TIME_AND_SPACE, Color.RED,"Remove your figure from the board. You are unaffected by other game effects and cannot perform other action.")
		.setBonuses(0, 0, false, false, false )
		.setEnds(false, true, false, false),
	new Effect(game.BEYOND_THE_THRESHOLD, "Mesmerized", Icon.MESMERIZED, Color.ORANGE,"At the end of your turn, an alien will takes control.")
		.setBonuses(0, 0, false, false, false )
		.setEnds(false, true, false, false),
	new Effect(game.SANCTUM_OF_TWILLIGHT, "Stressed", Icon.STRESSED, Color.ORANGE,"After re-rolling and converting dice results while resolving a test, you must remove 1 Success from your dice pool.")
		.setBonuses(0, 0, false, false, false )
		.setEnds(false, true, false, false),
	new Effect(game.STREETS_OF_ARKHAM, "Righteous", Icon.RIGHTEOUS, Color.GREEN,"Once per round, you may convert an Investigation Result to a Success. When you suffer 1 or more Horror, discard this card.")
		.setBonuses(0, 0, false, false, false )
		.setEnds(false, false, false, true),
	new Effect(game.PATH_OF_THE_SERPENT, "Poisoned", Icon.POISONED, Color.RED,"At the end of your turn, suffer 1 facedown Damage. Then flip this card.")
		.setBonuses(0, 0, false, false, false )
		.setEnds(false, true, false, false),
	new Effect(game.PATH_OF_THE_SERPENT, "Fearless", Icon.FEARLESS, Color.GREEN,"Effects cannot cause you to suffer Horror unless you choose to. At the end of your turn discard this card.")
		.setBonuses(0, 0, false, false, false )
		.setEnds(true, false, false, false),
];