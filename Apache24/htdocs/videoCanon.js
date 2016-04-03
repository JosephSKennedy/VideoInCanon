var tag = document.createElement('script');
tag.src = "http://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


var size = {
	width: Math.floor( (window.innerWidth || document.body.clientWidth) / 4 ) - 12,
	height: Math.floor( (window.innerHeight || document.body.clientHeight) / 3 ) - 9
}

var player1;
var player2;
var player3;
var player4;

var player5;
var player6;
var player7;
var player8;

var player9;
var playerA;
var playerB;
var playerC;
//var players[12];

var videoIDSource = prompt("Please enter the Youtube video ID:", "FZUcpVmEHuk");
if (videoIDSource == null)
	videoIDSource = 'FZUcpVmEHuk';

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
	player5 = new YT.Player('video5', {
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
	player6 = new YT.Player('video6', {
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
	player7 = new YT.Player('video7', {
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
	player8 = new YT.Player('video8', {
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

	/*
	player9 = new YT.Player('video9', {
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
	playerA = new YT.Player('videoA', {
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
	playerB = new YT.Player('videoB', {
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
	playerC = new YT.Player('videoC', {
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
	*/
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
	}, 250);
	setTimeout( function () {
		player3.playVideo();
	}, 500);
	setTimeout( function () {
		player4.playVideo();
	}, 750);
	
		setTimeout( function () {
		player5.playVideo();
	}, 1000);
	setTimeout( function () {
		player6.playVideo();
	}, 1250);
	setTimeout( function () {
		player7.playVideo();
	}, 1500);
		setTimeout( function () {
		player8.playVideo();
	}, 1750);
	
	/*
	setTimeout( function () {
		player9.playVideo();
	}, 2000);
	setTimeout( function () {
		playerA.playVideo();
	}, 2250);
	setTimeout( function () {
		playerB.playVideo();
	}, 2500);
	setTimeout( function () {
		playerC.playVideo();
	}, 2750);
	*/
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
