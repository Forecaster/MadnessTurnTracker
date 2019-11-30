/**
 * @property {String} source The source module the effect is from
 * @property {String} name The name of the module
 * @property {String} icon The name of the icon the effect should use
 * @property {String} color The color the effect should use
 * @property {String} text The description of the effect
 * @property {Object} bonuses The bonus stats the effec provides
 * @property {Object} ends The end conditions for the effect
 */
class Effect {
	constructor(source, name, icon, color, text) {
		this.source = source;
		this.name = name;
		this.icon = icon;
		this.color = color;
		this.text = text;
	}

	/**
	 * Set this objects bonuses
	 * @param {number} actions Effect gives bonus actions until it ends
	 * @param {number} moves Effect gives bonus movement for each movement action
	 * @param {boolean} prevents_moving Effect prevents player moving
	 * @param {boolean} limits_actions Effect limits number of actions player can take
	 * @param {boolean} limits_move_actions Effect limits number of move actions player can take
	 */
	setBonuses(actions, moves, prevents_moving, limits_actions, limits_move_actions) {
		this.bonuses = { actions: actions, moves: moves, prevents_moving: prevents_moving, limits_actions: limits_actions, limits_move_actions: limits_move_actions };
		return this;
	}

	/**
	 *
	 * @param {boolean} after_turn Effect ends at end of player turn
	 * @param {boolean} resolve Effect resolves at end of player turn but may not end
	 * @param {boolean} damage Effect ends when player takes damage
	 * @param {boolean} horror Effect ends when player takes horror
	 */
	setEnds(after_turn, resolve, damage, horror) {
		this.ends = { after_turn: after_turn, resolve: resolve, damage: damage, horror: horror };
		return this;
	}
}