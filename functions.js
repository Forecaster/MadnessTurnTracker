
function player_add() {
	let id = players.length + 1;
	let template = document.getElementById("player_template");

	let elem = document.createElement("div");
	elem.innerHTML = template.innerHTML;
	elem.className = template.className;
	elem.id = "player_" + id;


	$(elem).find('#player-name').text('Player ' + id);

	let container = document.getElementById("cont_player_active");
	container.appendChild(elem);

	player_add_indicators(elem, default_indicators);

	players.push({ id: id, element: elem, active: true });
}

function player_add_indicators(player_row, indicators, clear = true) {
	let indicator_container = $(player_row).find('#player-indicators')[0];

	if (clear)
		indicator_container.innerHTML = "";

	for (let i = 0; i < indicators.length; i++) {
		let ind = document.createElement("span");
		ind.className = indicators[i];
		console.log(indicator_container);
		indicator_container.appendChild(ind);
	}
}

function reset_all_players() {
	for (let i = 0; i < players.length; i++) {
		player_add_indicators(players[i].element, default_indicators);
	}
	info("Reset " + players.length + " player" + (players.length !== 1 ? "s" : "") + "!");
}

function reset_player(event) {
	let player = $(event.target).parents('.player')[0];

	player_add_indicators(player, default_indicators);
	info("Restored " + player_get_name(player) + "!");
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
}

function action(event) {
	let player = $(event.target).parents('.player')[0];

	let actions = $(player).find('.action:not(.spent)');
	console.log(typeof actions);
	console.log(actions);

	if (actions.length > 0) {
		actions[actions.length - 1].classList.add("spent");
		info(player_get_name(player) + " used action!");
	}
	else
		warn(player_get_name(player) + " has no actions left.");
}

function move(event) {
	let player = $(event.target).parents('.player')[0];

	let moves = $(player).find('.move:not(.spent)');
	console.log(typeof moves);
	console.log(moves);

	if (moves.length > 0) {
		moves[moves.length - 1].classList.add("spent");
		info(player_get_name(player) + " moved!");
	}
	else {
		let actions = $(player).find('.action:not(.spent)');
		console.log(typeof actions);
		console.log(actions);

		if (actions.length > 0) {
			let target_action = actions[actions.length - 1];

			let move1 = document.createElement("span");
			move1.className = "move";
			let move2 = document.createElement("span");
			move2.className = "move spent";

			target_action.parentElement.insertBefore(move1, target_action);
			target_action.parentElement.insertBefore(move2, target_action);
			target_action.parentElement.removeChild(target_action);
			info(player_get_name(player) + " used action to move!");
		} else {
			warn(player_get_name(player) + " has no actions left.");
		}
	}
}

function info(text) {
	msg(text, "info");
}

function warn(text) {
	msg(text, "warn");
}

function error(text) {
	msg(text, "error");
}

function msg(text, type) {
	let container = document.getElementById("message_box");

	let msg = document.createElement("div");
	msg.className = "message " + type;
	msg.innerText = text;

	container.insertBefore(msg, container.firstChild);
	setTimeout(function() { msg.style.opacity = ".25"; }, 100);
}

function player_get_name(player_row) {
	return $(player_row).find('#player-name').text();
}