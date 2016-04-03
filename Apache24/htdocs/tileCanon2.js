var tag = document.createElement('script');
tag.src = "http://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


var size = {
	width: Math.floor( (window.innerWidth || document.body.clientWidth) / 4 ) - 8,
	height: Math.floor( (window.innerHeight || document.body.clientHeight) / 3 ) - 6
}

/*
window.onresize = displayWindowSize;
window.onload = displayWindowSize;
function displayWindowSize() {
    // your size calculation code here
    document.getElementById("dimensions").innerHTML = size.width + "x" + size.height;
};
*/

var player1;
var player2;
var player3;
var player4;
var videoIDSource = 'FZUcpVmEHuk';

function onYouTubeIframeAPIReady() {
    player1 = new YT.Player('video1', {
        width: size.width,
        height: size.height,
        videoId: videoIDSource,
        playerVars: {
            rel: 0,
			autoplay: 1,
            controls: 0,
            autohide: 1,
            disablekb: 1,
            enablejsapi: 1,
            modestbranding: 1,
            showinfo: 0
        },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange1
        }
    });
    player2 = new YT.Player('video2', {
        width: size.width,
        height: size.height,
        videoId: videoIDSource,
        playerVars: {
            rel: 0,
			autoplay: 0,
            controls: 0,
            autohide: 1,
            disablekb: 1,
            enablejsapi: 1,
            modestbranding: 1,
            showinfo: 0
        },
        events: {
            'onReady': onPlayerReadyMute,
            'onStateChange': onPlayerStateChange2
        }
    });
	player3 = new YT.Player('video3', {
        width: size.width,
        height: size.height,
        videoId: videoIDSource,
        playerVars: {
            rel: 0,
			autoplay: 0,
            controls: 0,
            autohide: 1,
            disablekb: 1,
            enablejsapi: 1,
            modestbranding: 1,
            showinfo: 0
        },
        events: {
            'onReady': onPlayerReadyMute,
            'onStateChange': onPlayerStateChange2
        }
    });
	player4 = new YT.Player('video4', {
        width: size.width,
        height: size.height,
        videoId: videoIDSource,
        playerVars: {
            rel: 0,
			autoplay: 0,
            controls: 0,
            autohide: 1,
            disablekb: 1,
            enablejsapi: 1,
            modestbranding: 1,
            showinfo: 0
        },
        events: {
            'onReady': onPlayerReadyMute,
            'onStateChange': onPlayerStateChange2
        }
    });
}

/*
function startVideo1() {
    player1.playVideo();
    $('#video_box_B1').delay(1000).fadeIn();
    $("#video_box_B1").delay(20000).hide();
}

function startVideo2() {
    player2.playVideo();
    $('#video_box_E5').delay(1000).fadeIn();
    $("#video_box_E5").delay(20000).hide();
}
*/

function onPlayerReady(event)
{
	event.target.playVideo();
}

function onPlayerReadyMute(event)
{
	event.target.mute()
	event.target.playVideo();

}

function videoCascade()
{
	player.playVideo();
	setTimeout( function () {
		player2.playVideo();
	}, 400);
	setTimeout( function () {
		player3.playVideo();
	}, 400);
	setTimeout( function () {
		player4.playVideo();
	}, 400);
}

function onPlayerStateChange1(event) {
    if (event.data === 2) {
        $("#video_box_B1").hide();
    }
}

function onPlayerStateChange2(event) {
    if (event.data === 2) {
        $("#video_box_E5").hide();
    }
}
