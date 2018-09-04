// JavaScript Document
// D Smith based on a presentation from
// for Lynda.com
//https://css-tricks.com/centering-css-complete-guide/
//https://youtu.be/KhvOFA9v_-Y - url for video time movies

var ws;
var vidd, dursecs ;

function vbeginFunction() {
    currentVid.play();
    clearTimeout(activityTimeout);
    activityTimeout = setTimeout(inActive, 3600000); //1 hour
    console.log(activityTimeout);
}

function vendFunction() {
    currentVid.pause();
    $.fancybox.close();
    clearTimeout(activityTimeout);
    activityTimeout = setTimeout(inActive, 300000);//5 minutes
    console.log(activityTimeout);
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


function playVid() {
    currentVid.play();
    $('#pausevidbtn').show();
    $('#playvidbtn').hide();
}

function pauseVid() {
    currentVid.pause();
    $('#pausevidbtn').hide();
    $('#playvidbtn').show();
}


$(document).ready(function () {


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

    $('.videoLink').click(function () {

        // Get attributes from link clicked
        var videoFile = $(this).attr('videofile');
        var videoPoster = $(this).attr('videofile');
        var videoWidth = Number($(this).attr('videowidth'));
        var videoHeight = Number($(this).attr('videoheight'));
        var vcap = $(this).attr('videocaption');

        // Set up HTMLvideo player code with above variables

        var videoCode = '' +
            '<video id="currentVid" oncanplay="vbeginFunction()"  onended="vendFunction()" autoplay width="' + videoWidth + '" height="' + videoHeight + '"  >' +
            '<source src="video/' + videoFile + '.ogv" type="video/ogg" />' +
            '<source src="video/' + videoFile + '.mp4" type="video/mp4" />' + '</video>';
            //'<track src="video/' + videoFile + '.vtt" srclang="en" label="English" kind="subtitles" default />' +

        /*var videoCode = '<video  onended="vendFunction()"  autoplay controls  >' +
         '<source src="video/'+videoFile+'.ogv" type="video/ogg" />' +
         '<source src="video/'+videoFile+'.mp4" type="video/mp4" />' +
         +'</video>';*/

        $('#videoPlayer').html(videoCode);

        vidd = document.getElementById("currentVid");
        dursecs = vidd.duration ;

        //var vid = (viddur.duration) * 1000;
        /*function myFunction() {
            alert(viddur.duration);
        }*/
        //vid = document.getElementById("currentVid");
        //curtimetext = document.getElementById("curtimetext");
        //durtimetext = document.getElementById("durtimetext");
        //console.log(viddur.duration);
        // Load new inline HTML code in lightbox
        $.fancybox({
            'transitionIn': 'fade',
            'transitionOut': 'fade',
            margin: [20, 270, 20, 0], // top, right, bottom, left
            closeBtn: false,
            modal: true,
            'href': '#videoPlayer',
            beforeLoad: function () {
                $("#clicktostart").html("<h2>Now Playing:</h2><p>" + vcap + "</p><p style='color:blue'>Video will start automatically</p>");
                $("#clicktostart").append('<p><button id="playvidbtn" class="button" onclick="playVid()" style="display: none;">Play</button> <button id="pausevidbtn" class="button" onclick="pauseVid()">Pause</button> <button id="closevidbtn" class="button" onclick="vendFunction()">Close</button></p>');
                $("#clicktostart").addClass('markee');

            },
            afterShow: function() {

                $("#clicktostart").append("<span id='curtimetext'></span> / <span id='durtimetext'></span>");
                $("#clicktostart").append("Duration="+ vidd.duration + " seconds");

                console.log(vidd.duration / 60);
                console.log(dursecs);


            },
            afterClose: function () {
                $("#clicktostart").html("<h2>BLMA Video and Slide Show Library</h2><p>Tap a movie or a category below</p>");
                $("#clicktostart").removeClass('markee');

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
            width: '200px',
            height: '200px',
            /*helpers		: {
             title	: { type : 'inside' },
             buttons	: {position: 'bottom'}
             },*/

            afterLoad: function () {
                this.title = 'Image ' + (this.index + 1) + ' of ' + this.group.length + (this.title ? ' - ' + this.title : '');
                var vcap = $(this).attr('gallerycaption');
                $("#clicktostart").html("<h2>Now Playing:</h2><p>" + gcap);
                $("#clicktostart").append('<p><button id="preGalbtn" class="button" onclick="prevGal()" ">Previous</button> <button id="nextGalbtn" class="button" onclick="nextGal()">Next</button> <button id="closeGalbtn" class="button" onclick="closeGal()">Close</button></p>');
                $("#clicktostart").addClass('markee');
            },
            afterClose: function () {
                $("#clicktostart").html("<h2>BLMA Video and Slide Show Library</h2><p>Tap a movie or a category below</p>");
                $("#clicktostart").removeClass('markee');
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
        afterClose: function () {
            $("#clicktostart").html("<h2>BLMA Video and Slide Show Library</h2><p>Tap a movie or a category below</p>");
            return;

        }
    });

});
/*Code below controls the inactivity timeout*/
var activityTimeout = setTimeout(inActive, 300000);//300000

function resetActive() {
    clearTimeout(activityTimeout);
    activityTimeout = setTimeout(inActive, 300000);
    // $('#mainControl').show();
    console.log(activityTimeout);
}
function inActive() {
    window.open("index3.html", "_self");

}
// Check for mousemove, could add other events here such as checking for key presses ect.
$(document).bind('mousemove', function () {
    resetActive()
});
