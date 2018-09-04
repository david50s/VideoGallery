// JavaScript Document
// D Smith based on a presentation from
// for Lynda.com
//https://css-tricks.com/centering-css-complete-guide/
//https://youtu.be/KhvOFA9v_-Y - url for video time movies

var ws, isvid, volumeslider, volumeslider2;
var vidd, ddursecs, myVideoPlayer, fdursecs, fdurmins, ddurmins, zdursecs, xdursecs, pbar, curmins, cursecs, durmins, dursecs, lmins, lsecs, lft;
var bckgrn = document.getElementById('background');
idt = 300000;

function vbeginFunction() {
    currentVid.play();
    $.idleTimer('pause');
    /*bckgrn.pause();*/
    //clearTimeout(activityTimeout);
    // activityTimeout = setTimeout(inActive, 3600000); //1 hour
    //console.log(activityTimeout);


}
// $("#volsliderholder").click(function(){
//     $("#volsliderholder").hide();
// })
$("#toplogo").click(function(){
    $("#volsliderholder").toggle();
})

$('#dnvol').click(function () {
    currentVid.volume = currentVid.volume - 1;
})

$('#upvol').click(function () {
    currentVid.volume = currentVid.volume + 1;
})

function vendFunction() {
    currentVid.pause();
    $.fancybox.close();
    restartIdleTimer();
    /*bckgrn.play();*/
    // cleiparTimeout(activityTimeout);
    //  activityTimeout = setTimeout(inActive, 300000);//5 minutes
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

function setvolume2() {
    currentVid.volume = volumeslider2.value / 100;
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

function callBigframe1() {
    $("#bigframe1").show()
    $("#bigframeholder1").show();
}

function hideBigframe1() {
    console.log(isvid);
    if (isvid == 2) {
        $("#bigframe1").hide();
        $("#bigframeholder1").hide();
    }
    if (isvid == 1) {
        bigvid.pause();
        $("#bigframe1").hide();
        $("#bigframeholder1").hide();
    }
}

function showbigvid() {
    isvid = 1;
    console.log(isvid);
    var bigvidstuff = '<video id="bigvid" src="video/BeavertailLighthouse.mp4" autoplay controls onended="hideBigframe1()"></video>';
    $("#bigframe1").html(bigvidstuff);
    $("#bigframe1").show();
    $("#bigframeholder1").show();
}

function showbigmap() {
    isvid = 2;
    console.log(isvid);
    var bigmapstuff = '<iframe src="eateries.html" height="99%" width="99%" ></iframe>';
    $("#bigframe1").html(bigmapstuff);
    $("#bigframe1").show();
    $("#bigframeholder1").show();
}

$(document).ready(function () {
    $("#bigframe1").hide();
    $("#bigframeholder1").hide();
    $("#volsliderholder").hide();

    // Set up link thumbnails
    $('a.videoLink').each(function () {

        var thumbnailFilePath = 'video/' + $(this).attr('videofile') + '.jpg';
        var videoCaption = $(this).attr('videocaption');

        $(this).css('background-image', 'url(' + thumbnailFilePath + ')');
        $(this).html('<div class="caption">' + videoCaption + '</div><img class="play" src="images/play_icon.png" />');

    });
    $('a.fancybox-button').each(function () {

        var thumbnailFilePath = 'gallery/' + $(this).attr('galleryfile') + '/smSlide1.PNG';
        var galleryCaption = $(this).attr('gallerycaption');

        $(this).css('background-image', 'url(' + thumbnailFilePath + ')');
        $(this).html('<div class="caption">' + galleryCaption + '</div><img class="play" src="images/play_icon.png" />');

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
            '<video id="currentVid" oncanplay="vbeginFunction()"  onended="vendFunction()" autoplay   >' +
            '<source src="video/' + videoFile + '.ogv" type="video/ogg" />' +
            '<source src="video/' + videoFile + '.mp4" type="video/mp4" />' +
            '<track src="video/' + videoFile + '.vtt" srclang="en" label="English" kind="subtitles" default />' + '</video>';
        // width="' + videoWidth + '" height="' + videoHeight + '"
        /*var videoCode = '<video  onended="vendFunction()"  autoplay controls  >' +
         '<source src="video/'+videoFile+'.ogv" type="video/ogg" />' +
         '<source src="video/'+videoFile+'.mp4" type="video/mp4" />' +
         +'</video>';*/

        $('#videoPlayer').html(videoCode);
        myVideoPlayer = document.getElementById('currentVid');
        myVideoPlayer.addEventListener('loadedmetadata', function () {
            ddursecs = currentVid.duration;
            rdursecs = Math.round(ddursecs);

            ddurmins = ddursecs / 60;
            fdurmins = Math.floor(ddurmins);
            xdurmins = fdurmins * 60;
            zdursecs = rdursecs - xdurmins;
            $("#clicktostart").append("<p>This video is " + fdurmins + " Minutes and " + zdursecs + " seconds long</p>");


        });
        //  display the current and remaining times

        currentVid.addEventListener("timeupdate", function () {
            //  Current time
            var vTime = currentVid.currentTime;
            vTime = Math.round(vTime);
            var vLength = rdursecs;
            vLength = Math.round(vLength);
            var vMins = Math.round(vTime / 60);
            var vSecs = Math.round(vTime - (vMins * 60));
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
            if (cursecs < 10) {
                cursecs = "0" + cursecs;
            }
            if (dursecs < 10) {
                dursecs = "0" + dursecs;
            }
            if (curmins < 10) {
                curmins = "0" + curmins;
            }
            if (durmins < 10) {
                durmins = "0" + durmins;
            }
            if (lmins < 10) {
                lmins = "0" + lmins;
            }
            if (lsecs < 10) {
                lsecs = "0" + lsecs;
            }
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
                $("#clicktostart").removeClass('hiding');
                /*bckgrn.pause();*/
                console.log("pause bg");
            },
            afterShow: function () {
                $("#clicktostart").append("<p><progress id='pbar' value='50' emax='100'></progress><span id='curtimetext'> </span> / <span  id='durtimetext'></span></p>");
                /*
                                $("#clicktostart").append("<div id='volbtns'><p><button id='novol' onclick='setNoVolume()' class='glyphicon glyphicon-volume-off btn btn-info btn-lg tbtn ' '> </button><button id='qtvol' onclick='setQtrVolume()' class='glyphicon glyphicon-volume-down btn btn-info btn-xs tbtn'></button><button id='dnvol' onclick='setHalfVolume()' class='glyphicon glyphicon-volume-down btn btn-info btn-sm tbtn'    >    </button><button id='tqvol' onclick='setTrQtrVolume()' class='glyphicon glyphicon-volume-up btn btn-info tbtn'></button><button id='upvol' onclick='setFullVolume()' class='glyphicon glyphicon-volume-up btn btn-info btn-lg tbtn lbtn' ></button></p></div> ");
                */
                $("#clicktostart").append("<h4 class='text-center'>Video Volume</h4>")
                $("#clicktostart").append("<input id='volumeslider2' type='range' min='0' max='100' value='50' step='1'>");
                //$("#clicktostart").append("Duration=" + dursecs + " seconds");
                volumeslider2 = document.getElementById("volumeslider2");
                volumeslider2.addEventListener("change", setvolume2, false);
                /*console.log(vidd.duration / 60);
                console.log(dursecs);*/


            },
            afterClose: function () {
                $("#clicktostart").html("<h2 onclick='showivol()'>BLMA Video and Slide Show Library</h2><p>Tap a movie or a category below</p>");
                $("#clicktostart").removeClass('markee');
                $("#clicktostart").addClass('hiding');
                /*bckgrn.play();*/
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
                /*bckgrn.pause();*/
            },
            afterClose: function () {
                $("#clicktostart").html("<h2 onclick='showivol()'>BLMA Video and Slide Show Library</h2><p>Tap a movie or a category below</p>");
                $("#clicktostart").removeClass('markee');
                $("#clicktostart").addClass('hiding');
                /*bckgrn.play();*/
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
        /*'width': 1080,
        'height': 750,*/
        closeBtn: false,
        beforeLoad: function () {
            //$('#filters').removeClass('aqua-gradient');
            //clearTimeout(activityTimeout);
            //activityTimeout = setTimeout(inActive, 3600000); //1 hour
        },
        afterClose: function () {
            closeintrovid()
            $("#clicktostart").html("<h2 onclick='showivol()'>BLMA Video and Slide Show Library</h2><p>Tap a movie or a category below</p>");
            $("#clicktostart").addClass('hiding');
            //$("#filters").addClass('aqua-gradient');
            return;

        }
    });
    $(document).bind("idle.idleTimer", function () {
        restartIntro();
    });
    volumeslider = document.getElementById("volumeslider");
    volumeslider.addEventListener("change", setvolume, false);

});

function setvolume() {
    invid.volume = volumeslider.value / 100;
}

function ivolminus() {
    invid.volume = invid.volume - 1;
    volumeslider.value = invid.volume;
}


$('#ivolplus').click(function () {
    invid.volume = invid.volume + 1;
})

function closeintrovid() {
    $("#filters").addClass('aqua-gradient');
    //initiate idle-timer
    $.idleTimer(idt);
}

function restartIntro() {
    console.log("restarting intro");
    $("#bigframe1").hide();
    $("#bigframeholder1").hide();
    closeGal();
    $('#showallbutton').trigger('click');
    $.idleTimer('pause');
    playintrovd();
    $("#clicktostart").removeClass('hiding');
    $('#filters').removeClass('aqua-gradient');
    $("#ivolbtns").hide();
}

function playintrovd() {
    $.fancybox({
        'transitionIn': 'fade',
        'transitionOut': 'fade',
        'closeClick': true,
        margin: [20, 270, 20, 0], // top, right, bottom, left
        'href': '#introvid',
        'overlayShow': false,
        closeBtn: false,
        beforeLoad: function () {
            $("#clicktostart").html("<div>" +
                "<div id='ivolbtns'>" +
                "<p><button id='inovol' onclick='isetNoVolume()' class='glyphicon glyphicon-volume-off btn btn-info btn-lg itbtn '> </button><button id='iqtvol' onclick='isetQtrVolume()' class='glyphicon glyphicon-volume-down btn btn-info btn-xs itbtn'></button><button id='idnvol' onclick='isetHalfVolume()' class='glyphicon glyphicon-volume-down btn btn-info btn-sm itbtn'    >    </button><button id='itqvol' onclick='isetTrQtrVolume()' class='glyphicon glyphicon-volume-up btn btn-info itbtn'></button><button id='iupvol' onclick='isetFullVolume()' class='glyphicon glyphicon-volume-up btn btn-info btn-lg itbtn lbtn' ></button></p></div>" +

                "<h2 onclick='showivol()'>BLMA Video and Slide Show Library</h2><h3>Tap the screen to begin</h3>" +
                "</div>");
            //clearTimeout(activityTimeout);
            //activityTimeout = setTimeout(inActive,300000);

        },
        afterClose: function () {
            restartIdleTimer();
            // startidletimer();
            //console.log("start idle timer");
            // activityTimeout = setTimeout(inActive, 10000); //10 sec
            /*$("#introvid").pause();*/
            $("#clicktostart").html("<h2 onclick='showivol()'>BLMA Video and Slide Show Library</h2><p>Tap a movie or a category below</p>");
            $("#clicktostart").addClass('hiding');
            $("#filters").addClass('aqua-gradient');
            return;

        }
    });
    invid.play();

}

function restartIdleTimer() {
    /* $(document).bind("idle.idleTimer", function(){
         restartIntro();
     });*/
    $.idleTimer('reset');
}