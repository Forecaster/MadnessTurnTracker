<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Mansions of Madness Turn Tracker</title>

	<link rel="stylesheet" href="https://towerofawesome.org/libraries_css/bootstrap.css" />
	<link rel="stylesheet" href="styles.css" />

	<script src="https://towerofawesome.org/libraries_javascript/jquery.min.js"></script>
	<script src="functions.js"></script>
</head>
<body>
<div class="container-fluid">
	<h1>Mansions of Madness Turn Tracker</h1>
	<div style="display: none;">
		<div id="player_template" class="player">
			<div class="row">
				<div class="col-sm-12 col-md-4 col-xl-3" id="player-name" onclick="player_name_update(this)">Player Name</div>
				<div class="col-sm-12 col-md-8 col-xl-5" id="player-indicators">
				</div>
				<div class="col-sm-6 col-md-2 col-xl-1 sm-button">
					<span class="btn btn-block btn-success" onclick="action(event)">Action</span>
				</div>
				<div class="col-sm-6 col-md-2 col-xl-1 sm-button">
					<span class="btn btn-block btn-warning" onclick="move(event)">Move</span>
				</div>
				<div class="col-sm-6 col-md-2 col-xl-1 sm-button">
					<span class="btn btn-block btn-warning" onclick="reset_player(event)">Reset</span>
				</div>
			</div>
			<div class="row">
				<div class="col-12 bg-button"><div class="btn btn-success btn-lg btn-block" onclick="action(event)">Action</div></div>
			</div>
			<div class="row" style="margin-top: 10px;">
				<div class="col-12 bg-button"><div class="btn btn-warning btn-lg btn-block" onclick="move(event)">Move</div></div>
			</div>
			<div class="row" style="margin-top: 10px;">
				<div class="col-12 bg-button"><div class="btn btn-primary btn-lg btn-block" onclick="reset_player(event)">Reset</div></div>
			</div>
		</div>
	</div>
	<div class="row">
		<div class="col-sm-12">
			<div class="btn btn-primary" onclick="player_add(default_indicators)">Add Player</div>
			<div class="btn btn-warning" onclick="reset_all_players()">New Turn</div>
		</div>
	</div>
	<div id="message_box">

	</div>
	<div class="header">Players</div>
	<div class="subheader">Click name to change</div>
	<div id="cont_player_active">

	</div>
</div>
</body>
<script>
	let players = [];
	let default_indicators = ["action", "action"];

	player_add(default_indicators);
</script>
</html>