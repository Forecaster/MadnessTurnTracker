
const default_indicators = [ "action", "action" ];
const default_investigator = "Unknown Investigator";

const game = {
	BASE: "Base",
	BEYOND_THE_THRESHOLD: "Beyond the Threshold",
	STREETS_OF_ARKHAM: "Streets of Arkham",
	SANCTUM_OF_TWILLIGHT: "Sanctum of Twilight",
	HORRIFIC_JOURNEYS: "Horrific Journeys",
	PATH_OF_THE_SERPENT: "Path of the Serpent"
};

const Action = {
	INTERACT: "interact",
	MOVE: "move"
};

const investigators = [
	{ source: game.BASE, name: "Agatha Crane", title: "The Parapsychologist", ability: "After you resolve a horror check, gain 1 Clue", bonuses: { actions: 0, moves: 0 }, immunities: [] },
	{ source: game.BASE, name: "Carson Sinclair", title: "The Butler", ability: "ACTION: Another investigator within range may perform 1 action. Activate this ability only once per round.", bonuses: { actions: 0, moves: 0 }, immunities: [] },
	{ source: game.BASE, name: "Father Mateo", title: "The Priest", ability: "ACTION: Another investigator within range becomes Focused. Activate this ability only once per round.", bonuses: { actions: 0, moves: 0 }, immunities: [] },
	{ source: game.BASE, name: "Minh Thi Phan", title: "The secretary", ability: "Once per round, you or another investigator within range may reroll 1 die while resolving a test.", bonuses: { actions: 0, moves: 0 }, immunities: [] },
	{ source: game.BASE, name: "Preston Fairmont", title: "The Millionaire", ability: "Once per round, when you gain an item, you may flip 1 Horror facedown or discard 1 facedown Horror.", bonuses: { actions: 0, moves: 0 }, immunities: [] },
	{ source: game.BASE, name: "Rita Young", title: "The Athlete", ability: "You may move 1 additional space as part of a move action.", bonuses: { actions: 0, moves: 1 }, immunities: [] },
	{ source: game.BASE, name: "Wendy Adams", title: "The Urchin", ability: "You cannot become Stunned or Retrained", bonuses: { actions: 0, moves: 0 }, immunities: [ "Stunned", "Restrained" ] },
	{ source: game.BASE, name: "William Yorick", title: "The Gravedigger", ability: "Whenever a monster is defeated, gain 1 Clue", bonuses: { actions: 0, moves: 0 }, immunities: [] },
	{ source: game.HORRIFIC_JOURNEYS, name: "Agnes Baker", title: "The Waitress", ability: "You begin the game with the Storm of Spirits Spell.", bonuses: { actions: 0, moves: 0 }, immunities: [] },
	{ source: game.HORRIFIC_JOURNEYS, name: "Jim Culver", title: "The Musician", ability: "You begin the game with the Golden Trumpet Unique Item.", bonuses: { actions: 0, moves: 0 }, immunities: [] },
	{ source: game.HORRIFIC_JOURNEYS, name: "Silas Marsh", title: "The Sailor", ability: "Once per round, you may flip 1 Horror faceup to reroll one or all of your dice while resolving a test.", bonuses: { actions: 0, moves: 0 }, immunities: [] },
	{ source: game.HORRIFIC_JOURNEYS, name: "Trish Scarborough", title: "The Spy", ability: "Once per round, you may convert up to two Magnifying glasses (Focus) to Stars (Succes) while performing a Search action.", bonuses: { actions: 0, moves: 0 }, immunities: [] },
	{ source: game.SANCTUM_OF_TWILLIGHT, name: "Charlie Kane", title: "The Politician", ability: "While within range of a Person, you may convert an Focus(magnifying glass) into a Star(succes), Activate this ability only once per test.", bonuses: { actions: 0, moves: 0 }, immunities: [] },
	{ source: game.SANCTUM_OF_TWILLIGHT, name: "Lily Chen", title: "The Martial Artist", ability: "While you are attacking unarmed, if a monster would suffer 1 or more damage, it suffers 2 additional damage.", bonuses: { actions: 0, moves: 0 }, immunities: [] },
	{ source: game.STREETS_OF_ARKHAM, name: "Diana Stanley", title: "The Reformed Cultist", ability: "If you would suffer 2 or more Horror, suffer 1 fewer Horror instead.", bonuses: { actions: 0, moves: 0 }, immunities: [] },
	{ source: game.STREETS_OF_ARKHAM, name: "Finn Edwards", title: "The Bootlegger", ability: "Once per round, you may move 1 space before or after performing a Search action.", bonuses: { actions: 0, moves: 0 }, immunities: [] },
	{ source: game.STREETS_OF_ARKHAM, name: "Marie Lambeau", title: "The Entertainer", ability: "At the start of your turn, you may cast a spell without spending an action.", bonuses: { actions: 0, moves: 0 }, immunities: [] },
	{ source: game.STREETS_OF_ARKHAM, name: "Tommy Mulddon", title: "The Rookie Cop", ability: "You begin the game with the Becky Unique Item.", bonuses: { actions: 0, moves: 0 }, immunities: [] },
	// { source: game.BASE, name: "", title: "", ability: "", bonuses: { actions: 0, moves: 0 }, immunities: [] },
];

const default_effects = [ "Focused", "Righteous", "Dazed", "Restrained", "Stunned", "Stressed", "Lost in Time and Space", "Mesmerized", "Wounded", "Insane" ];
const effects = [
	{ source: game.BASE, name: "Dazed", icon: "knockout", color: "orange", text: "You cannot spend Clues to convert dice results or perform additional puzzle steps.",
		bonuses: { actions: 0, moves: 0, prevents_moving: false, limits_actions: false, limits_move_actions: false }, ends_after_turn: true },
	{ source: game.BASE, name: "Focused", icon: "mighty-force", color: "green", text: "You may discard this card to convert all Clues to Successes while resolving a test.",
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
	{ source: game.STREETS_OF_ARKHAM, name: "Righteous", icon: "embrassed-energy", color: "green", text: "Once per round, you may convert a Clue to a Success. When you suffer 1 or more Horror, discard this card.",
		bonuses: { actions: 0, moves: 0, prevents_moving: false, limits_actions: false, limits_move_actions: false }, ends_after_turn: false },
	// { source: game.BASE, name: "", icon: "", text: "",
	// 	bonuses: { actions: 0, moves: 0, prevents_moving: false, limits_actions: false, limits_move_actions: false }, ends_after_turn: false },
];