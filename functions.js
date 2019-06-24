
function player_add(player_name = "", indicators = default_indicators) {
	let id = players.length + 1;
	let template = document.getElementById("player_template");

	let elem = document.createElement("div");
	elem.innerHTML = template.innerHTML;
	elem.className = template.className;
	elem.id = "player_" + id;

	if (player_name === "")
		player_name = 'Player ' + id;

	$(elem).find('#player-name').text(player_name);

	let container = document.getElementById("cont_player_active");
	container.appendChild(elem);

	player_add_indicators(elem, indicators);

	players.push({ id: id, element: elem });
}

function player_add_indicators(player_row, indicators, clear = true) {
	let indicator_container = $(player_row).find('#player-indicators')[0];

	if (clear)
		indicator_container.innerHTML = "";

	for (let i = 0; i < indicators.length; i++) {
		let ind = document.createElement("span");
		ind.className = indicators[i];
		indicator_container.appendChild(ind);
	}
}

function reset_all_players() {
	for (let i = 0; i < players.length; i++) {
		player_add_indicators(players[i].element, default_indicators);
	}
	info("Reset " + players.length + " player" + (players.length !== 1 ? "s" : "") + "! New turn started!");
	save();
}

function reset_player(event) {
	let player = $(event.target).parents('.player')[0];

	player_add_indicators(player, default_indicators);
	info("Restored " + player_get_name(player) + "!");
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

function action(event) {
	let player = $(event.target).parents('.player')[0];

	let actions = $(player).find('.action:not(.spent)');

	if (actions.length > 0) {
		actions[actions.length - 1].classList.add("spent");
		info(player_get_name(player) + " used action!");
	}
	else
		warn(player_get_name(player) + " has no actions left.");
	save();
}

function move(event) {
	let player = $(event.target).parents('.player')[0];

	let moves = $(player).find('.move:not(.spent)');

	if (moves.length > 0) {
		moves[moves.length - 1].classList.add("spent");
		info(player_get_name(player) + " moved!");
	}
	else {
		let actions = $(player).find('.action:not(.spent)');

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
			save();
		} else {
			warn(player_get_name(player) + " has no actions left.");
		}
	}
	save();
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
	setTimeout(function() { msg.style.opacity = ".5"; }, 1500);
}

function player_get_name(player_row) {
	return $(player_row).find('#player-name').text();
}

function save() {
	let save_data = { log: [], players: [] };

	$('#cont_player_active').find('.player').each(function() {
		let player = {};
		player.name = $(this).find('#player-name').text();
		let indicators = [];
		$(this).find('#player-indicators > span').each(function() {
			indicators.push(this.className);
		});
		player.indicators = indicators;
		save_data.players.push(player);
	});
	$('#message_box > div').each(function() {
		save_data.log.push({ msg: this.innerText, class: this.className });
	});
	window.localStorage.setItem("save_data", JSON.stringify(save_data));
}

function load() {
	if (window.localStorage.getItem("save_data") !== null) {
		$('#cont_player_active').html("");

		let save_data = JSON.parse(window.localStorage.getItem("save_data"));

		for (let i = 0; i < save_data.players.length; i++) {
			let player = save_data.players[i];
			player_add(player.name, player.indicators);
		}

		let msg_box = document.getElementById("message_box");
		msg_box.innerHTML = "";
		for (let i = 0; i < save_data.log.length; i++) {
			let log = save_data.log[i];
			msg_box.innerHTML += "<div class='" + log.class + "' style='opacity: 0.5'>" + log.msg + "</div>";
		}
	}
}

function clear_save() {
	window.localStorage.removeItem("save_data");
}