
function player_add(player_name = "", indicators = default_indicators, investigator = "") {
	let id = $('#cont_player_active').find('.player').length + 1;
	let template = document.getElementById("player_template");

	let elem = document.createElement("div");
	elem.innerHTML = template.innerHTML;
	elem.className = template.className;
	elem.id = "player_" + id;

	if (player_name === "")
		player_name = 'Player ' + id;

	$(elem).find('#player-name').text(player_name);

	investigator = get_investigator_by_name(investigator);
	if (investigator !== null)
		investigator = investigator.name;
	else
		investigator = default_investigator;

	let investigator_id = -1;
	for (let i = 0; i < investigators.length; i++) {
		let inv = investigators[i];
		if (inv.name === investigator)
			investigator_id = i;
	}

	$(elem).find('#player-investigator').text(investigator);

	let container = document.getElementById("cont_player_active");
	container.appendChild(elem);

	player_add_indicators(elem, indicators);

	player_add_effects(elem);
	return elem;
}

function player_add_indicators(player_row, indicators = default_indicators, clear = true) {
	let indicator_container = $(player_row).find('#player-indicators')[0];
	let actions = 0;
	let actions_max = Number.MAX_VALUE;
	let moves = 0;
	let moves_max = Number.MAX_VALUE;

	if (clear)
		indicator_container.innerHTML = "";

	let investigator = get_investigator_by_name($(player_row).find('#player-investigator').text());
	if (investigator !== null) {
		for (let i = 0; i < investigator.bonuses.actions; i++)
			indicators.push("action");
	}

	$(player_row).find('#player-effects').each(function() {
		if (this.classList.contains("active")) {
			let effect = get_effect_by_name(this.innerText);
			actions_max = Math.min(actions_max, effect.bonuses.limits_actions);
			moves_max = Math.min(moves_max, effect.bonuses.limits_move_actions);
		}
	});

	for (let i = 0; i < indicators.length; i++) {
		if (indicators[i] === "action" && actions >= actions_max) { /* Skip */ }
		else if (indicators[i] === "move" && moves >= moves_max) { /* Skip */ }
		else {
			if (indicators[i] === "action")
				actions++;
			else if (indicators[i] === "move")
				moves++;
			let ind = document.createElement("span");
			ind.className = indicators[i];
			indicator_container.appendChild(ind);
		}
	}
}

function reset_all_players() {
	let count = 0;
	$('#cont_player_active').find('.player').each(function() {
		reset_player(this);
		count++;
		// player_add_indicators(players[i].element, default_indicators);
	});
	info("Reset " + count + " player" + (count !== 1 ? "s" : "") + "! New turn started!");
	save();
}

function reset_player_btn(event) {
	let player = $(event.target).parents('.player')[0];
	reset_player(player);
}

function reset_player(player) {
	let effects = $(player).find('#player-effects .active');
	for (let i = 0; i < effects.length; i++) {
		let effect = get_effect_by_name(effects[i].getAttribute("data-effect-name"));
		if (effect !== null) {
			if (effect.ends_after_turn)
				effects[i].classList.remove("active");
		}
	}

	player_add_indicators(player, default_indicators);
	info("Restored " + player_get_display_name(player) + "!");
	save();
}

function player_name_update(target) {
	let name = target.innerText;

	let input = document.createElement("input");
	input.class = "form-control";
	input.value = name;
	input.onclick = function(event) { event.stopImmediatePropagation(); };
	input.onkeypress = function(event) { if (event.key === "Enter") { player_name_restore(event.target) } };
	input.onblur = function(event) { player_name_restore(event.target) };

	target.innerHTML = "";
	target.appendChild(input);
	input.focus();
}

function player_name_restore(target) {
	target.parentElement.innerText = target.value;
	save();
}

function player_investigator_update(target) {
	let investigator = target.innerText;

	let input = document.createElement("select");
	input.class = "form-control";
	input.onclick = function(event) { event.stopImmediatePropagation(); };
	input.onkeypress = function(event) { if (event.key === "Enter") { player_investigator_restore(event.target) } };
	input.onchange = function(event) { player_investigator_restore(event.target) };

	for (let i = 0; i < investigators.length; i++) {
		let selected = "";
		if (investigators[i].name === investigator)
			selected = "selected='selected'";
		input.innerHTML += "<option " + selected + " value='" + i + "'>" + investigators[i].name + "</option>";
	}

	target.innerHTML = "";
	target.appendChild(input);
	input.click();
}

function player_investigator_restore(target) {
	let player = target.parentElement.parentElement.parentElement;
	target.parentElement.setAttribute("data-investigator-id", target.selectedOptions[0].value);
	target.parentElement.innerText = target.selectedOptions[0].innerText;
	player_add_effects(player);
	player_add_indicators(player);
	save();
}

function action(event) {
	let player = $(event.target).parents('.player')[0];
	let name = player_get_display_name(player);

	let actions = $(player).find('.action:not(.spent):not(.disabled)');

	if (actions.length > 0) {
		actions[actions.length - 1].classList.add("spent");
		info(name + " used action!");
	}
	else
		warn(name + " have no actions left.");
	save();
}

function move(event) {
	let player = $(event.target).parents('.player')[0];
	let name = player_get_display_name(player);
	let investigator_name = $(player).find('#player-investigator').text();
	if (!event.target.classList.contains("disabled")) {

		let moves = $(player).find('.move:not(.spent):not(.disabled)');

		if (moves.length > 0) {
			moves[moves.length - 1].classList.add("spent");
			info(player_get_name(player) + " moved!");
		} else {
			let preventing_effects = player_effects_preventing_action(player, Action.MOVE);
			console.debug(preventing_effects);
			if (preventing_effects.length > 0) {
				warn(player_get_display_name(player) + " can't perform move action due to the following condition" + (preventing_effects.length === 1 ? "" : "s") + ": " + preventing_effects.join(", "));
				return;
			}
			let actions = $(player).find('.action:not(.spent):not(.disabled)');

			if (actions.length > 0) {
				let target_action = actions[actions.length - 1];

				let move1 = document.createElement("span");
				move1.className = "move";
				target_action.parentElement.insertBefore(move1, target_action);

				let investigator = get_investigator_by_name(investigator_name);
				if (investigator !== null) {
					for (let i = 0; i < investigator.bonuses.moves; i++) {
						let move = document.createElement("span");
						move.className = "move";
						target_action.parentElement.insertBefore(move, target_action);
					}
				}

				let id = $(player).find('#player-investigator').attr("data-investigator-id");
				if (id !== -1 && typeof investigators[id] !== "undefined") {
				}

				let move2 = document.createElement("span");
				move2.className = "move spent";
				target_action.parentElement.insertBefore(move2, target_action);

				target_action.parentElement.removeChild(target_action);
				info(name + " used action to move!");
				save();
			} else {
				warn(name + " have no actions left.");
			}
		}
	} else {
		warn(name + " cannot move.");
	}
	save();
}

function player_get_name(player_row) {
	return $(player_row).find('#player-name').text();
}

function player_toggle_effect(target) {
	if (target.tagName !== "span") {
		target = $(target).parents('span')[0];
	}
	let player = find_player_row(target);
	let name = player_get_display_name(player);
	let effect = target.getAttribute("data-effect-name");
	let eff = get_effect_by_name(effect);
	if (target.classList.contains("active")) {
		target.classList.remove("active");
		info(name + " is no longer " + effect);
	}	else {
		if (target.classList.contains("disabled")) {
			info(name + " is immune to being " + effect);
		} else {
			target.classList.add("active");
			color_msg(name + " is " + effect, eff.color);
		}
	}
	update_effects_on_player(player);
	save();
}

function player_add_effects(player_row, effects = default_effects, clear_effects = true) {
	let effect_container = $(player_row).find('#player-effects')[0];
	if (clear_effects)
		effect_container.innerHTML = "";
	let investigator = $(player_row).find('#player-investigator').text();
	investigator = get_investigator_by_name(investigator);
	let immunities = [];
	if (investigator !== null)
		immunities = investigator.immunities;
	for (let i = 0; i < effects.length; i++) {
		let effect = get_effect_by_name(effects[i]);
		if (effect !== null) {
			let wrap = document.createElement("span");
			wrap.onclick = function() { player_toggle_effect(event.target) };
			wrap.className = "icon" + (immunities.indexOf(effect.name) !== -1 ? " disabled" : "");
			wrap.title = effect.name + "\n" + effect.text + (effect.ends_after_turn ? "\nEnds after current turn." : "");
			wrap.style.setProperty("--active", effect.color);
			wrap.setAttribute("data-effect-name", effect.name);
			effect_container.appendChild(wrap);
			$.get('icons/' + effect.icon + '.svg')
				.success(function (payload) {
					let svg = payload.firstChild;
					wrap.appendChild(svg);
			})
				.fail(function(payload) {
					console.warn("Failed to load effect icon '" + effect.icon + "' for '" + effect.name + "'! Check that icon svg is valid!");
					console.debug(payload);
			});
		}
	}
}

function get_effects(player_row, active = true) {
	let effects = [];
	let search = '#player-effects > span.active';
	if (!active)
		search = '#player-effects > span';
	$(player_row).find(search).each(function() {
		effects.push(get_effect_by_name(this.getAttribute("data-effect-name")));
	});
	return effects;
}

function update_effects_on_player(player_row) {
	let limited_move_actions = false;
	let limited_actions = false;
	let cannot_move = false;

	let effects = get_effects(player_row);

	for (let i = 0; i < effects.length; i++) {
		let effect = effects[i];
		if (effect.bonuses.prevents_moving)
			cannot_move = true;
		if (effect.bonuses.limits_actions)
			limited_actions = true;
		if (effect.bonuses.limits_move_actions)
			limited_move_actions = true;
	}

	if (limited_actions) {
		let indicators = $(player_row).find('#player-indicators > span.action.spent');
		$(player_row).find('#player-indicators > span.action:not(.spent)').each(function() { indicators.push(this) });
		for(let i = 1; i < indicators.length; i++) {
			indicators[i].classList.add("disabled");
		}
	} else {
		$(player_row).find('#player-indicators > span.action').each(function() {
			this.classList.remove("disabled");
		})
	}
}

function player_get_display_name(player_row) {
	let investigator = $(player_row).find('#player-investigator').text();
	if (investigator !== default_investigator)
		return investigator;
	return $(player_row).find('#player-name').text();
}

function player_effects_preventing_action(player_row, action) {
	let preventing_effects = [];
	let effects = get_effects(player_row);
	for (let i = 0; i < effects.length; i++) {
		let effect = effects[i];
		if (action === Action.INTERACT) {
			// No checks needed here right now.
		} else if (action === Action.MOVE) {
			if (effect.bonuses.prevents_moving) {
				preventing_effects.push(effect.name);
			} else if (effect.bonuses.limits_move_actions) {
				if ($(player_row).find('#player-indicators > span.move').length > 0) {
					preventing_effects.push(effect.name);
				}
			}
		}
	}
	return preventing_effects;
}