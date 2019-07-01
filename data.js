
const default_indicators = ["action", "action"];
const default_effects = ["Dazed", "Focused", "Insane", "Restrained", "Stunned", "Wounded"];
const default_investigator = "Unknown Investigator";

const Action = {
	INTERACT: "interact",
	MOVE: "move"
};

const investigators = [
	{ name: "Agatha Crane", title: "The Parapsychologist", ability: "After you resolve a horror check, gain 1 Clue", bonuses: { actions: 0, moves: 0 }, immunities: [] },
	{ name: "Carson Sinclair", title: "The Butler", ability: "ACTION: Another investigator within range may perform 1 action. Activate this ability only once per round.", bonuses: { actions: 0, moves: 0 }, immunities: [] },
	{ name: "Father Mateo", title: "The Priest", ability: "ACTION: Another investigator within range becomes Focused. Activate this ability only once per round.", bonuses: { actions: 0, moves: 0 }, immunities: [] },
	{ name: "Minh Thi Phan", title: "The secretary", ability: "Once per round, you or another investigator within range may reroll 1 die while resolving a test.", bonuses: { actions: 0, moves: 0 }, immunities: [] },
	{ name: "Preston Fairmont", title: "The Millionaire", ability: "Once per round, when you gain an item, you may flip 1 Horror facedown or discard 1 facedown Horror.", bonuses: { actions: 0, moves: 0 }, immunities: [] },
	{ name: "Rita Young", title: "The Athlete", ability: "You may move 1 additional space as part of a move action.", bonuses: { actions: 0, moves: 1 }, immunities: [] },
	{ name: "Wendy Adams", title: "The Urchin", ability: "You cannot become Stunned or Retrained", bonuses: { actions: 0, moves: 0 }, immunities: [ "Stunned", "Restrained" ] },
	{ name: "William Yorick", title: "The Gravedigger", ability: "Whenever a monster is defeated, gain 1 Clue", bonuses: { actions: 0, moves: 0 }, immunities: [] },
	// { name: "", title: "", ability: "", bonuses: { actions: 0, moves: 0 }, immunities: [] },
];

const effects = [
	{ name: "Dazed", icon: "knockout", text: "You cannot spend Clues to convert dice results or perform additional puzzle steps.",
		bonuses: { actions: 0, moves: 0, prevents_moving: false, limits_actions: false, limits_move_actions: false }, ends_after_turn: true },
	{ name: "Focused", icon: "mighty-force", text: "You may discard this card to convert all Clues to Successes while resolving a test.",
		bonuses: { actions: 0, moves: 0, prevents_moving: false, limits_actions: false, limits_move_actions: false }, ends_after_turn: false },
	{ name: "Restrained", icon: "imprisoned", text: "You cannot move voluntarily.",
		bonuses: { actions: 0, moves: 0, prevents_moving: true, limits_actions: false, limits_move_actions: false }, ends_after_turn: true },
	{ name: "Stunned", icon: "oppression", text: "You cannot perform more than a single action during your turn.",
		bonuses: { actions: 0, moves: 0, prevents_moving: false, limits_actions: true, limits_move_actions: false }, ends_after_turn: true },
	{ name: "Wounded", icon: "arm-sling", text: "You cannot perform the move action more than once each round.",
		bonuses: { actions: 0, moves: 0, prevents_moving: false, limits_actions: false, limits_move_actions: true }, ends_after_turn: false },
	{ name: "Insane", icon: "pyromaniac", text: "When you have suffered horror equal to your sanity you are eliminated.",
		bonuses: { actions: 0, moves: 0, prevents_moving: false, limits_actions: false, limits_move_actions: false }, ends_after_turn: false },
	// { name: "", text: "", icon: "", bonuses: { actions: 0, moves: 0, prevents_moving: false, limits_actions: 0, limits_move_actions: 0 }, ends_after_turn: false },
];