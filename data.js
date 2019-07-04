
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
	RECURRING_NIGHTMARES: "Recurring Nightmares"
};

const Action = {
	INTERACT: "interact",
	MOVE: "move"
};

const investigators = [
	{ source: game.BASE, name: "Agatha Crane", title: "The Parapsychologist",
		ability: "After you resolve a horror check, gain 1 Clue", bonuses: { actions: 0, moves: 0 }, immunities: [] },
	{ source: game.BASE, name: "Carson Sinclair", title: "The Butler",
		ability: "<txt_action /> Another investigator within range may perform 1 action. Activate this ability only once per round.", bonuses: { actions: 0, moves: 0 }, immunities: [] },
	{ source: game.BASE, name: "Father Mateo", title: "The Priest",
		ability: "<txt_action /> Another investigator within range becomes Focused. Activate this ability only once per round.", bonuses: { actions: 0, moves: 0 }, immunities: [] },
	{ source: game.BASE, name: "Minh Thi Phan", title: "The secretary",
		ability: "Once per round, you or another investigator within range may re-roll 1 die while resolving a test.", bonuses: { actions: 0, moves: 0 }, immunities: [] },
	{ source: game.BASE, name: "Preston Fairmont", title: "The Millionaire",
		ability: "Once per round, when you gain an item, you may flip 1 Horror facedown or discard 1 facedown Horror.", bonuses: { actions: 0, moves: 0 }, immunities: [] },
	{ source: game.BASE, name: "Rita Young", title: "The Athlete",
		ability: "You may move 1 additional space as part of a move action.", bonuses: { actions: 0, moves: 1 }, immunities: [] },
	{ source: game.BASE, name: "Wendy Adams", title: "The Urchin",
		ability: "You cannot become Stunned or Retrained", bonuses: { actions: 0, moves: 0 }, immunities: [ "Stunned", "Restrained" ] },
	{ source: game.BASE, name: "William Yorick", title: "The Gravedigger",
		ability: "Whenever a monster is defeated, gain 1 Clue", bonuses: { actions: 0, moves: 0 }, immunities: [] },
	{ source: game.HORRIFIC_JOURNEYS, name: "Agnes Baker", title: "The Waitress",
		ability: "You begin the game with the Storm of Spirits Spell.", bonuses: { actions: 0, moves: 0 }, immunities: [] },
	{ source: game.HORRIFIC_JOURNEYS, name: "Jim Culver", title: "The Musician",
		ability: "You begin the game with the Golden Trumpet Unique Item.", bonuses: { actions: 0, moves: 0 }, immunities: [] },
	{ source: game.HORRIFIC_JOURNEYS, name: "Silas Marsh", title: "The Sailor",
		ability: "Once per round, you may flip 1 Horror faceup to re-roll one or all of your dice while resolving a test.", bonuses: { actions: 0, moves: 0 }, immunities: [] },
	{ source: game.HORRIFIC_JOURNEYS, name: "Trish Scarborough", title: "The Spy",
		ability: "Once per round, you may convert up to two <cluepl /> to <successpl /> while performing a Search action.", bonuses: { actions: 0, moves: 0 }, immunities: [] },
	{ source: game.SANCTUM_OF_TWILLIGHT, name: "Charlie Kane", title: "The Politician",
		ability: "While within range of a Person, you may convert <cluepf /> <clue /> into <successpf /> <success />, Activate this ability only once per test.", bonuses: { actions: 0, moves: 0 }, immunities: [] },
	{ source: game.SANCTUM_OF_TWILLIGHT, name: "Lily Chen", title: "The Martial Artist",
		ability: "While you are attacking unarmed, if a monster would suffer 1 or more damage, it suffers 2 additional damage.", bonuses: { actions: 0, moves: 0 }, immunities: [] },
	{ source: game.STREETS_OF_ARKHAM, name: "Diana Stanley", title: "The Reformed Cultist",
		ability: "If you would suffer 2 or more Horror, suffer 1 fewer Horror instead.", bonuses: { actions: 0, moves: 0 }, immunities: [] },
	{ source: game.STREETS_OF_ARKHAM, name: "Finn Edwards", title: "The Bootlegger",
		ability: "Once per round, you may move 1 space before or after performing a Search action.", bonuses: { actions: 0, moves: 0 }, immunities: [] },
	{ source: game.STREETS_OF_ARKHAM, name: "Marie Lambeau", title: "The Entertainer",
		ability: "At the start of your turn, you may cast a spell without spending an action.", bonuses: { actions: 0, moves: 0 }, immunities: [] },
	{ source: game.STREETS_OF_ARKHAM, name: "Tommy Mulddon", title: "The Rookie Cop",
		ability: "You begin the game with the Becky Unique Item.", bonuses: { actions: 0, moves: 0 }, immunities: [] },
	{ source: game.SUPPRESSED_MEMORIES, name: "Amanda Sharpe", title: "The Student",
		ability: "You may perform two additional puzzle steps while attempting a puzzle", bonuses: { actions: 0, moves: 0 }, immunities: [] },
	{ source: game.SUPPRESSED_MEMORIES, name: "Carolyn Fern", title: "The Psychologist",
		ability: "<txt_action /> You or another investigator within range flip 1 Horror facedown or discard 1 facedown Horror.", bonuses: { actions: 0, moves: 0 }, immunities: [] },
	{ source: game.SUPPRESSED_MEMORIES, name: "Darrell Simmons", title: "The photographer",
		ability: "Once per round, if you would gain a Clue, you may become focused instead.", bonuses: { actions: 0, moves: 0 }, immunities: [] },
	{ source: game.SUPPRESSED_MEMORIES, name: "Dexter Drake", title: "The magician",
		ability: "Once per round, when you gain a Spell, become Focused.", bonuses: { actions: 0, moves: 0 }, immunities: [] },
	{ source: game.SUPPRESSED_MEMORIES, name: "Mandy Thompson", title: "The Researcher",
		ability: "Once per round, when you gain a Clue, gain 1 additional Clue.", bonuses: { actions: 0, moves: 0 }, immunities: [] },
	{ source: game.SUPPRESSED_MEMORIES, name: "Monterey Jack", title: "The Archarologist",
		ability: "Other investigators in you space do not need to evade monsters.", bonuses: { actions: 0, moves: 0 }, immunities: [] },
	{ source: game.SUPPRESSED_MEMORIES, name: "Vincent Lee", title: "The Doctor",
		ability: "<txt_action /> You or another investigator within range flip 1 Damage facedown or discard 1 facedown Damage.", bonuses: { actions: 0, moves: 0 }, immunities: [] },
	{ source: game.RECURRING_NIGHTMARES, name: "Aschan Pete", title: "The Drifter",
		ability: "You begin the game with the Duke Unique Item.", bonuses: { actions: 0, moves: 0 }, immunities: [] },
	{ source: game.RECURRING_NIGHTMARES, name: "Gloria Goldberg", title: "The Author",
		ability: "At the start of your turn, if you have no Clues, gain 1 Clue.", bonuses: { actions: 0, moves: 0 }, immunities: [] },
	{ source: game.RECURRING_NIGHTMARES, name: "Harvey Walters", title: "The Professor",
		ability: "<txt_action /> Another investigator within range gains 1 Clue. Activate this ability only once per round.", bonuses: { actions: 0, moves: 0 }, immunities: [] },
	{ source: game.RECURRING_NIGHTMARES, name: "Jenny Barnes", title: "The Dilettante",
		ability: "<txt_action /> If you have no Clues, gain 2 Clues and discard 1 Horror.", bonuses: { actions: 0, moves: 0 }, immunities: [] },
	{ source: game.RECURRING_NIGHTMARES, name: "Joe Diamond", title: "The Private Eye",
		ability: "If you spend a Clue to convert <cluepf /> <clue /> to <successpf /> <success />, you may convert up to two <cluepl /> to <successpf /> <success /> instead.", bonuses: { actions: 0, moves: 0 }, immunities: [] },
	{ source: game.RECURRING_NIGHTMARES, name: "Kate Winthrop", title: "The Scientist",
		ability: "You begin the game with the Flux Stabilizer Unique Item.", bonuses: { actions: 0, moves: 0 }, immunities: [] },
	{ source: game.RECURRING_NIGHTMARES, name: "Michael McGlen", title: "The Gangster",
		ability: "Whenever a monster is defeated, become Focused.", bonuses: { actions: 0, moves: 0 }, immunities: [] },
	{ source: game.RECURRING_NIGHTMARES, name: "Sister Mary", title: "The Nun",
		ability: "Once per round, another investigator within range may convert <cluepf /> <clue /> into <successpf /> <success /> while resolving a test.", bonuses: { actions: 0, moves: 0 }, immunities: [] },
	{ source: game.BEYOND_THE_THRESHOLD, name: "Akachi Onyele", title: "The Shaman",
		ability: "Effect cannot cause you to discard Clues unless you choose to.", bonuses: { actions: 0, moves: 0 }, immunities: [] },
	{ source: game.BEYOND_THE_THRESHOLD, name: "Wilson Richards", title: "The handyman",
		ability: "After you resolve a horror check, become focused.", bonuses: { actions: 0, moves: 0 }, immunities: [] },
	// { source: game.BASE, name: "", title: "", ability: "", bonuses: { actions: 0, moves: 0 }, immunities: [] },
];

const default_effects = [ "Focused", "Righteous", "Dazed", "Restrained", "Stunned", "Stressed", "Lost in Time and Space", "Mesmerized", "Wounded", "Insane" ];
const effects = [
	{ source: game.BASE, name: "Dazed", icon: "knockout", color: "orange", text: "You cannot spend Clues to convert dice results or perform additional puzzle steps.",
		bonuses: { actions: 0, moves: 0, prevents_moving: false, limits_actions: false, limits_move_actions: false }, ends_after_turn: true },
	{ source: game.BASE, name: "Focused", icon: "mighty-force", color: "green", text: "You may discard this card to convert all Investigation Results to Successes while resolving a test.",
		bonuses: { actions: 0, moves: 0, prevents_moving: false, limits_actions: false, limits_move_actions: false }, ends_after_turn: false },
	{ source: game.BASE, name: "Restrained", icon: "imprisoned", color: "orange", text: "You cannot move voluntarily.",
		bonuses: { actions: 0, moves: 0, prevents_moving: true, limits_actions: false, limits_move_actions: false }, ends_after_turn: true },
	{ source: game.BASE, name: "Stunned", icon: "oppression", color: "orange", text: "You cannot perform more than a single action during your turn.",
		bonuses: { actions: 0, moves: 0, prevents_moving: false, limits_actions: true, limits_move_actions: false }, ends_after_turn: true },
	{ source: game.BASE, name: "Wounded", icon: "arm-sling", color: "red", text: "You cannot perform the move action more than once each round.",
		bonuses: { actions: 0, moves: 0, prevents_moving: false, limits_actions: false, limits_move_actions: true }, ends_after_turn: false },
	{ source: game.BASE, name: "Insane", icon: "pyromaniac", color: "red", text: "When you have suffered horror equal to your sanity you are eliminated.",
		bonuses: { actions: 0, moves: 0, prevents_moving: false, limits_actions: false, limits_move_actions: false }, ends_after_turn: false },
	{ source: game.HORRIFIC_JOURNEYS, name: "Lost in Time and Space", icon: "portal", color: "red", text: "Remove your figure from the board. You are unaffected by other game effects and cannot perform other action.",
		bonuses: { actions: 0, moves: 0, prevents_moving: false, limits_actions: false, limits_move_actions: false }, ends_after_turn: false },
	{ source: game.BEYOND_THE_THRESHOLD, name: "Mesmerized", icon: "psychic-waves", color: "red", text: "At the end of your turn, an alien will takes control.",
		bonuses: { actions: 0, moves: 0, prevents_moving: false, limits_actions: false, limits_move_actions: false }, ends_after_turn: false },
	{ source: game.SANCTUM_OF_TWILLIGHT, name: "Stressed", icon: "despair", color: "orange", text: "After re-rolling and converting dice results while resolving a test, you must remove 1 Success from your dice pool.",
		bonuses: { actions: 0, moves: 0, prevents_moving: false, limits_actions: false, limits_move_actions: false }, ends_after_turn: true },
	{ source: game.STREETS_OF_ARKHAM, name: "Righteous", icon: "embrassed-energy", color: "green", text: "Once per round, you may convert an Investigation Result to a Success. When you suffer 1 or more Horror, discard this card.",
		bonuses: { actions: 0, moves: 0, prevents_moving: false, limits_actions: false, limits_move_actions: false }, ends_after_turn: false },
	// { source: game.BASE, name: "", icon: "", text: "",
	// 	bonuses: { actions: 0, moves: 0, prevents_moving: false, limits_actions: false, limits_move_actions: false }, ends_after_turn: false },
];