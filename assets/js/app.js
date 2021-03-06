let audio = new Audio("assets\audios\music.mp3");

let isClickedOnce = false;
function click_play() {
	if (isClickedOnce) {
		return false;
	}
	audio.play()
	isClickedOnce = true;
}

audio.addEventListener("ended", function(){ 
	window.open('','_self').close(); 
});
	

window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

// ?¸?Š¤?„´?Š¤ ?ƒ?„±
const recognition = new SpeechRecognition();

// trueë©? ?Œ? ˆ?„ ?—°?†? ?œ¼ë¡? ?¸?‹?•˜?‚˜ falseë©? ?•œ ?Œ? ˆë§? ê¸°ë¡?•¨
recognition.interimResults = true;
// ê°’ì´ ?—†?œ¼ë©? HTML?˜ <html lang="en">?„ ì°¸ê³ ?•©?‹ˆ?‹¤. ko-KR, en-US
recognition.lang = "ko-KR";
// true means continuous, and false means not continuous (single result each time.)
// trueë©? ?Œ?„± ?¸?‹?´ ?•ˆ ??‚˜ê³? ê³„ì† ?©?‹ˆ?‹¤.
recognition.continuous = true;
// ?ˆ«?ê°? ?‘?„?ˆ˜ë¡? ë°œìŒ???ë¡? ? ê³?, ?¬ë©? ë¬¸ì¥?˜ ? ?•©?„?— ?”°?¼ ?•Œë§ì?? ?‹¨?–´ë¡? ???ì²´í•©?‹ˆ?‹¤.
// maxAlternativesê°? ?¬ë©? ?´?ƒ?•œ ?‹¨?–´?„ ë¬¸ì¥?— ? ?•©?•˜ê²? ?•Œ?•„?„œ ?ˆ˜? •?•©?‹ˆ?‹¤.
recognition.maxAlternatives = 10000;

let p = document.createElement("p");
p.classList.add("para");

let words = document.querySelector(".words");
words.appendChild(p);

let speechToText = "";
recognition.addEventListener("result", (e) => {
  let interimTranscript = "";
  for (let i = e.resultIndex, len = e.results.length; i < len; i++) {
    let transcript = e.results[i][0].transcript;
	
	
	let j = 0;
	for (j = transcript.length - 1; j >= 0; j--) {
		if (transcript[j] == ' ') {
			break;
		}
	}
	let one_word = transcript.slice(j+1, transcript.length);
	console.log(one_word);
	if (one_word == "?¬?ƒ") {
		audio.play();
	}
	else if (one_word == "? •ì§?") {
		audio.pause();
	}
	else if (one_word == "?‹¤?‹œ") {
		audio.load();
	}
	
	
    if (e.results[i].isFinal) {
      speechToText += transcript;
    } else {
      interimTranscript += transcript;
    }
  }
  document.querySelector(".para").innerHTML = speechToText + interimTranscript;
});

// ?Œ?„±?¸?‹?´ ??‚˜ë©? ??™?œ¼ë¡? ?¬?‹œ?‘?•©?‹ˆ?‹¤.
// recognition.addEventListener("end", recognition.start);

// ?Œ?„± ?¸?‹ ?‹œ?‘
recognition.start();