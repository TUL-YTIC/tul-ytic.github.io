let audio = new Audio("/assets/audios/music.mp3");

let isClickedOnce = false;
function click_play() {
	if (isClickedOnce) {
		return false;
	}
	audio.play()
	isClickedOnce = true;
}

audio.addEventListener("ended", function(){ 
	window.open("about:blank",'_self').close(); 
});