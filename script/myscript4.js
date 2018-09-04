// JavaScript Document
// D Smith based on a presentation from
// for Lynda.com
//https://css-tricks.com/centering-css-complete-guide/
//https://youtu.be/KhvOFA9v_-Y - url for video time movies

var ws;
var vidd, ddursecs,  myVideoPlayer, fdursecs, fdurmins, ddurmins, zdursecs, xdursecs, pbar, curmins, cursecs, durmins, dursecs, lmins, lsecs, lft ;

function vbeginFunction() {
    currentVid.play();
    clearTimeout(activityTimeout);
    activityTimeout = setTimeout(inActive, 3600000); //1 hour
    //console.log(activityTimeout);
}

$('#dnvol').click(function() {
    currentVid.volume = currentVid.volume - 1;
})

$('#upvol').click(function() {
    currentVid.volume = currentVid.volume + 1;
})
function vendFunction() {
    currentVid.pause();
    $.fancybox.close();
    clearTimeout(activityTimeout);
    activityTimeout = setTimeout(inActive, 300000);//5 minutes
    //console.log(activityTimeout);
}
function closeGal() {
    $.fancybox.close();
}
function nextGal() {
    $.fancybox.next();
}
function prevGal() {
    $.fancybox.prev();
}
function setFilterheader(ws) {
    switch (ws) {
        case 1:
            $('#filterHeader').html("<h3>Now Viewing All Videos and Slide Shows</h3>");
            break;
        case 2:
            $('#filterHeader').html("<h3>Now Viewing All Videos</h3>");
            break;
        case 3:
            $('#filterHeader').html("<h3>Now Viewing All Slide Shows</h3>");
            break;
        case 4:
            $('#filterHeader').html("<h3>Now Viewing New Shows</h3>");
            break;
        case 5:
            $('#filterHeader').html("<h3>Now Viewing Lighthouse Videos and Shows</h3>");
            break;
        case 6:
            $('#filterHeader').html("<h3>Now Viewing Keepers Videos and Shows</h3>");
            break;
        case 7:
            $('#filterHeader').html("<h3>Now Viewing Beavertail Videos and Shows</h3>");
            break;
        case 8:
            $('#filterHeader').html("<h3>Now Viewing Storms and Rough Seas Videos and Shows</h3>");
            break;
        case 9:
            $('#filterHeader').html("<h3>Now Viewing Ships and Pilots Videos and Shows</h3>");
            break;
        case 10:
            $('#filterHeader').html("<h3>Now Viewing World War II Videos and Shows</h3>");
            break;
        case 11:
            $('#filterHeader').html("<h3>Now Viewing The Tall Ship Oliver Hazard Perry Videos and Shows</h3>");
            break;
    }

}

/*function openintro() {
 $('#intro').show(1000);
 document.getElementById("introVid").play();
 }*/

function showivol() {
    $("#ivolbtns").show();
}
function playVid() {
    currentVid.play();
    $('#pausevidbtn').show();
    $('#playvidbtn').hide();
    console.log(currentVid.volume);
}

function pauseVid() {
    currentVid.pause();
    $('#pausevidbtn').hide();
    $('#playvidbtn').show();
}

//var thisvid = document.getElementById("currentVid");
function getVolume() {
    alert(currentVid.volume);
}
function setQtrVolume() {
    currentVid.volume = 0.25;

}
function setHalfVolume() {
    currentVid.volume = 0.5;
}
function setTrQtrVolume() {
    currentVid.volume = 0.75;
}

function setFullVolume() {
    currentVid.volume = 1.0;
}
function setNoVolume() {
    currentVid.volume = 0.0;
}
function isetFullVolume() {
    invid.volume = 1.0;
    $("#ivolbtns").hide();
}
function isetNoVolume() {
    invid.volume = 0.0;
    $("#ivolbtns").hide();
}
function isetQtrVolume() {
    invid.volume = 0.25;
    $("#ivolbtns").hide();
}
function isetHalfVolume() {
    invid.volume = 0.5;
    $("#ivolbtns").hide();
}
function isetTrQtrVolume() {
    invid.volume = 0.75;
    $("#ivolbtns").hide();
}

$(document).ready(function () {
    $("#ivolbtns").hide();

    // Set up link thumbnails
    $('a.videoLink').each(function () {

        var thumbnailFilePath = 'video/' + $(this).attr('videofile') + '.jpg';
        var videoCaption = $(this).attr('videocaption');

        $(this).css('background-image', 'url(' + thumbnailFilePath + ')');
        // $(this).html('<div class="caption">' + videoCaption + '</div><img class="play" src="images/play_icon.png" />');
        $(this).html(`<div class="caption"> ${videocaption}</div><img class="play" src="images/play_icon.png"/>`);

    });
    $('a.fancybox-button').each(function () {

        var thumbnailFilePath = 'gallery/' + $(this).attr('galleryfile') + '/smSlide1.PNG';
        var galleryCaption = $(this).attr('gallerycaption');

        $(this).css('background-image', 'url(' + thumbnailFilePath + ')');
        // $(this).html('<div class="caption">' + galleryCaption + '</div><img class="play" src="images/play_icon.png" />');
        $(this).html(`<div class="caption"> ${galleryCaption}</div><img class="play" src="images/play_icon.png"/>`);

    });
    $('#MContainer').mixItUp();

    $('.videoLink').click(function () {

        // Get attributes from link clicked
        var videoFile = $(this).attr('videofile');
        var videoPoster = $(this).attr('videofile');
        var videoWidth = Number($(this).attr('videowidth'));
        var videoHeight = Number($(this).attr('videoheight'));
        var vcap = $(this).attr('videocaption');

        // Set up HTMLvideo player code with above variables

        var videoCode = '' +
            '<video id="currentVid" oncanplay="vbeginFunction()"  onended="vendFunction()" autoplay width="' + videoWidth + '" height="' + videoHeight + '"   >' +
            '<source src="video/' + videoFile + '.ogv" type="video/ogg" />' +
            '<source src="video/' + videoFile + '.mp4" type="video/mp4" />' +
            '<track src="video/' + videoFile + '.vtt" srclang="en" label="English" kind="subtitles" default />' + '</video>';

        /*var videoCode = '<video  onended="vendFunction()"  autoplay controls  >' +
         '<source src="video/'+videoFile+'.ogv" type="video/ogg" />' +
         '<source src="video/'+videoFile+'.mp4" type="video/mp4" />' +
         +'</video>';*/

        $('#videoPlayer').html(videoCode);
        myVideoPlayer = document.getElementById('currentVid');
        myVideoPlayer.addEventListener('loadedmetadata', function() {
            ddursecs=currentVid.duration;
            rdursecs=Math.round(ddursecs);

            ddurmins=ddursecs / 60;
            fdurmins=Math.floor(ddurmins);
            xdurmins = fdurmins * 60;
            zdursecs = rdursecs - xdurmins;
            $("#clicktostart").append("<p>This video is " + fdurmins +" Minutes and "+ zdursecs + " seconds long</p>");


    });
    //  display the current and remaining times

        currentVid.addEventListener("timeupdate", function () {
            //  Current time
            var vTime = currentVid.currentTime;
            vTime=Math.round(vTime);
            var vLength=rdursecs;
            vLength=Math.round(vLength);
            var vMins=Math.round(vTime/60);
            var vSecs=Math.round(vTime - (vMins*60) );
            /*document.getElementById("curTime").textContent = vMins + ":" + vSecs;

            document.getElementById("vRemaining").textContent = (vLength - vTime);*/
            pbar = document.getElementById("pbar");
            pbar.value = currentVid.currentTime
            pbar.max = currentVid.duration
            lft = currentVid.duration - currentVid.currentTime;
            curmins = Math.floor(currentVid.currentTime / 60);
            cursecs = Math.floor(currentVid.currentTime - curmins * 60);
            durmins = Math.floor(currentVid.duration / 60);
            dursecs = Math.floor(currentVid.duration - durmins * 60);
            lmins = Math.floor(lft / 60);
            lsecs = Math.floor(lft - lmins * 60);
            if(cursecs < 10) { cursecs = "0" + cursecs;}
            if(dursecs < 10) { dursecs = "0" + dursecs;}
            if(curmins < 10) { curmins = "0" + curmins;}
            if(durmins < 10) { durmins = "0" + durmins;}
            if(lmins < 10) { lmins = "0" + lmins;}
            if(lsecs < 10) { lsecs = "0" + lsecs;}
            curtimetext.innerHTML = curmins + ":" + cursecs;
            durtimetext.innerHTML = lmins + ":" + lsecs;

        }, false);




        $.fancybox({
            'transitionIn': 'fade',
            'transitionOut': 'fade',
            margin: [20, 270, 20, 0], // top, right, bottom, left
            closeBtn: false,
            modal: true,
            'href': '#videoPlayer',
            beforeLoad: function () {
                $("#clicktostart").html("<h2><b> Now Playing: </b></h2><h2>" + vcap + "</h2><p style='color:blue'>Video will start automatically</p>");
                $("#clicktostart").append('<p><button id="playvidbtn" class="btn btn-primary btn-lg" onclick="playVid()" style="display: none;">Play</button> <button id="pausevidbtn" class="btn btn-primary btn-lg" onclick="pauseVid()">Pause</button> <button id="closevidbtn" class="btn btn-primary  btn-lg" onclick="vendFunction()">Close</button></p>');

                $("#clicktostart").addClass('markee');

            },
            afterShow: function() {
                $("#clicktostart").append("<p><progress id='pbar' value='50' emax='100'></progress><span id='curtimetext'> </span> / <span  id='durtimetext'></span></p>");
                $("#clicktostart").append("<div id='volbtns'><p><button id='novol' onclick='setNoVolume()' class='glyphicon glyphicon-volume-off btn btn-info btn-lg tbtn ' '> </button><button id='qtvol' onclick='setQtrVolume()' class='glyphicon glyphicon-volume-down btn btn-info btn-xs tbtn'></button><button id='dnvol' onclick='setHalfVolume()' class='glyphicon glyphicon-volume-down btn btn-info btn-sm tbtn'    >    </button><button id='tqvol' onclick='setTrQtrVolume()' class='glyphicon glyphicon-volume-up btn btn-info tbtn'></button><button id='upvol' onclick='setFullVolume()' class='glyphicon glyphicon-volume-up btn btn-info btn-lg tbtn lbtn' ></button></p></div> ");

                //$("#clicktostart").append("Duration=" + dursecs + " seconds");

                /*console.log(vidd.duration / 60);
                console.log(dursecs);*/


            },
            afterClose: function () {
                // $("#clicktostart").html("<h2>BLMA Video and Slide Show Library</h2><p>Tap a movie or a category below</p>");
                // $("#clicktostart").removeClass('markee');

            }
        });

        // Add onclick to video tag for Android
        var myNavigator = navigator.userAgent.toLowerCase();
        var testForAndroid = myNavigator.indexOf("android") > -1;
        if (testForAndroid) {
            $('#videoPlayer source[type*="video/mp4"]').removeAttr('type');
            $('#videoPlayer video').attr('onclick', 'this.play();')
        }

    });
    $(".mix").click(function () {
        var gcap = $(this).attr('gallerycaption');

//Configure the slideshow fancybox
        $(".fancybox-button").fancybox({
            prevEffect: 'none',
            nextEffect: 'none',
            margin: [20, 270, 20, 0], // top, right, bottom, left
            closeBtn: false,
            arrows: false,
            nextClick: false,
            modal: true,
            autoSize: false,
            maxWidth: '75%',
            //maxHeight: '576px',
            /*helpers		: {
             title	: { type : 'inside' },
             buttons	: {position: 'bottom'}
             },*/

            afterLoad: function () {
                this.title = 'Image ' + (this.index + 1) + ' of ' + this.group.length + (this.title ? ' - ' + this.title : '');
                var vcap = $(this).attr('gallerycaption');
                $("#clicktostart").html("<h2>Now Playing:</h2><p>" + gcap);
                $("#clicktostart").append('<p><button id="preGalbtn" class="btn btn-primary  btn-lg" onclick="prevGal()" ">Previous</button> <button id="nextGalbtn" class="btn btn-primary  btn-lg" onclick="nextGal()">Next</button> <button id="closeGalbtn" class="btn btn-primary  btn-lg" onclick="closeGal()">Close</button></p>');
                $("#clicktostart").addClass('markee');
                $("#clicktostart").removeClass('hiding');
            },
            afterClose: function () {
                // $("#clicktostart").html("<h2>BLMA Video and Slide Show Library</h2><p>Tap a movie or a category below</p>");
                // $("#clicktostart").removeClass('markee');
                $("#clicktostart").addClass('hiding');
            }
        });
    });
    //Fancybox below controls the introduction video***************************************************
    $.fancybox({
        'transitionIn': 'fade',
        'transitionOut': 'fade',
        'closeClick': true,
        margin: [20, 270, 20, 0], // top, right, bottom, left
        'href': '#introvid',
        'overlayShow': false,
        closeBtn: false,
        beforeLoad: function () {
            clearTimeout(activityTimeout);
            //activityTimeout = setTimeout(inActive, 3600000); //1 hour
    },
        afterClose: function () {
            /*$("#introvid").pause();*/
            // $("#clicktostart").html("<h2>BLMA Video and Slide Show Library</h2><p>Tap a movie or a category below</p>");
            // return;

        }
    });

});
/*Code below controls the inactivity timeout*/
var activityTimeout = setTimeout(inActive, 300000);//300000

function resetActive() {
    clearTimeout(activityTimeout);
    activityTimeout = setTimeout(inActive, 300000);
    // $('#mainControl').show();
    //console.log(activityTimeout);
}
function inActive() {
   window.open("index.html", "_self");
    /*$.fancybox({
        'transitionIn': 'fade',
        'transitionOut': 'fade',
        'closeClick': true,
        margin: [20, 270, 20, 0], // top, right, bottom, left
        'href': '#introvid',
        'overlayShow': false,
        closeBtn: false,
        afterClose: function () {
            $("#introvid").pause();
            $("#clicktostart").html("<h2>BLMA Video and Slide Show Library</h2><p>Tap a movie or a category below</p>");
            return;

        }
    });*/

}
// Check for mousemove, could add other events here such as checking for key presses ect.
$(document).bind('mousemove', function () {
    resetActive()
});
