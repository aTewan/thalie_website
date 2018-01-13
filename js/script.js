function changerVideo() {

	var d = document.getElementById("ddl");
	var n_vid = d.options[d.selectedIndex].value;

	var player = document.getElementById("player");
	var source = document.getElementById("video");
	source.src = "videos/" + n_vid + ".mp4"
	player.load();
	player.play();
}