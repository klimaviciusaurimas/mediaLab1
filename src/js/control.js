(function(window, videojs){

	var video = window.video = videojs("bipBop");

	var loadUrl = document.getElementById("loadUrl");

	var url = document.getElementById("linkInsert");

	loadUrl.addEventListener("change", function(event) {
		event.preventDefault();
		video.src({
			src: url.value,
			type: "application/x-mpegURL"
		});
		return false;
	});

}(window, window.videojs));


function pauseVideo(){
	video.pause();
	video.currentTime = 0;
}

function startVideo(){
	video.play();
	video.currentTime = 0;
}

function forwardVideo(){
	video.currentTime(video.currentTime() + 5);
}

function backVideo(){
	video.currentTime(video.currentTime() - 5);
}

document.getElementById("play").onclick = function(){
    startVideo();
}

document.getElementById("pause").onclick = function(){
    pauseVideo();
}

document.getElementById("forward").onclick = function(){
    forwardVideo();
}

document.getElementById("backwards").onclick = function(){
    backVideo();
}

/*function resetVideo(){
	video.load();
	video.play();
}*/

/*document.getElementById("stop").onclick = function(){
    resetVideo();
}*/

// var uploadLink = document.getElementById("linkInsert").value;

/*function changeLink(){
	video.play();
	video.currentTime = 0;
}
*/