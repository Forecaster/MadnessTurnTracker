
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
	setTimeout(function() { msg.classList.add("old"); }, 1500);
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
		player.investigator = $(this).find('#player-investigator').text();
		player.effects = [];
		$(this).find('#player-effects > span.icon.active').each(function() {
			player.effects.push(this.getAttribute("data-effect-name"));
		});
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
			let player_row = player_add(player.name, player.indicators, player.investigator);
			$(player_row).find('#player-effects > span.icon').each(function() {
				if (player.effects.indexOf(this.getAttribute("data-effect-name")) !== -1)
					this.classList.add("active");
			});
		}

		let msg_box = document.getElementById("message_box");
		msg_box.innerHTML = "";
		for (let i = 0; i < save_data.log.length; i++) {
			let log = save_data.log[i];
			msg_box.innerHTML += "<div class='" + log.class + " old'>" + log.msg + "</div>";
		}
	}
}

function clear_save() {
	window.localStorage.removeItem("save_data");
}

function get_investigator_by_name(investigator) {
	for (let i = 0; i < investigators.length; i++) {
		if (investigators[i].name === investigator)
			return investigators[i];
	}
	return null;
}

function get_effect_by_name(effect) {
	for (let i = 0; i < effects.length; i++) {
		if (effects[i].name === effect)
			return effects[i];
	}
	return null;
}

function find_player_row(target) {
	return $(target).parents('.player')[0];
}

function btn_delete_player_confirm(event) {
	event.target.setAttribute("data-text", event.target.innerText);
	event.target.innerText = "Sure?";
	event.target.onclick = btn_delete_player;

	setTimeout(function() {
		event.target.innerText = event.target.getAttribute("data-text");
		event.target.onclick = btn_delete_player_confirm;
	}, 5000);
}

function btn_delete_player(event) {
	let player = $(event.target).parents('.player')[0];

	player.parentElement.removeChild(player);
}