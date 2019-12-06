
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

function color_msg(text, color) {
	let container = document.getElementById("message_box");

	let msg = document.createElement("div");
	msg.className = "message";
	msg.style.color = color;
	msg.innerText = text;

	container.insertBefore(msg, container.firstChild);
	setTimeout(function() { msg.classList.add("old"); }, 1500);
}

function get_save_data() {
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
		save_data.log.push({ msg: this.innerText, class: this.className, color: this.style.color });
	});
	return save_data;
}

function restore_save_data(save_data) {
	$('#cont_player_active').html("");
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
		let color = (log.color !== "" && log.color !== null ? "style='color: " + log.color + ";'" : "");
		msg_box.innerHTML += "<div class='" + log.class + " old' " + color + ">" + log.msg + "</div>";
	}
}

function save() {
	window.localStorage.setItem("save_data", JSON.stringify(get_save_data()));
}

function load() {
	if (window.localStorage.getItem("save_data") !== null) {
		restore_save_data(JSON.parse(window.localStorage.getItem("save_data")));
	}
}

function clear_save() {
	window.localStorage.removeItem("save_data");
	location.reload();
}

function get_investigator_by_name(investigator) {
	for (let i = 0; i < investigators.length; i++) {
		if (investigators[i].name === investigator)
			return investigators[i];
	}
	return null;
}

/**
 * @param {string} effect_name The name of the effect
 * @returns Effect
 */
function get_effect_by_name(effect_name) {
	for (let i = 0; i < effects.length; i++) {
		if (effects[i].name === effect_name)
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

function save_to_file() {
	save_file('madness_turn_tracker_save.json', JSON.stringify(get_save_data()));
}

function save_file(filename, content) {
	let hiddenElement = document.createElement('a');
	hiddenElement.href = 'data:text/plain;charset=utf-8,' + encodeURI(content);
	hiddenElement.target = '_blank';
	hiddenElement.download = filename;
	hiddenElement.click();
}

function load_file() {
	var element = document.createElement('input');
	element.type = "file";

	element.style.display = 'none';
	document.body.appendChild(element);

	element.onchange = function() {
		let reader = new FileReader();
		reader.onload = function () {
			let text = reader.result;

			try {
				let save_data = JSON.parse(text);
				console.debug(save_data);

				restore_save_data(save_data);

			} catch (ex) {
				alert("Something went wrong loading this file:\n" + ex.message);
			}
		};
		reader.readAsText(element.files[0]);
		// document.body.removeChild(element);
	};

	element.click();
}

function overlay(show = false) {
	let overlay = document.getElementsByClassName("overlay")[0];
	if (show) {
		overlay.style.display = "block";
	} else {
		overlay.style.display = "none";
	}
}

function popup_show(id, title, content, html = false) {
	let popup = document.getElementById("popup_" + id);

	if (typeof popup != "undefined" && popup != null) {
		if (html) {
			$(popup).find('#popup_title')[0].innerHTML = title;
			$(popup).find('#popup_body')[0].innerHTML = content.replace(/\n/g, "<br/>");
		} else {
			$(popup).find('#popup_title')[0].innerText = title;
			$(popup).find('#popup_body')[0].innerText = content;
		}
		overlay(true);
		popup.style.display = "block";
	}
}

function popup_hide(id) {
	let popup = document.getElementById("popup_" + id);
	if (typeof popup != "undefined" && popup != null) {
		popup.style.display = "none";
		overlay();
	}
}