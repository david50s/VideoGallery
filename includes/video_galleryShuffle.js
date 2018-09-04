// JavaScript Document
// Written by Chris Converse
// for Lynda.com

function vendFunction() {
	$.fancybox.close();
}

$(document).ready(function() {
	/* initialize shuffle plugin */
	var $grid = $('#grid');

	$grid.shuffle({
		itemSelector: '.item' // the selector for the items in the grid
	});


	// Set up link thumbnails
	$('a.videoLink').each(function(){
		
		var thumbnailFilePath = 'video/' + $(this).attr('videofile') + '.jpg';
		var videoCaption = $(this).attr('videocaption');
		
		$(this).css('background-image','url('+thumbnailFilePath+')');
		$(this).html('<div class="caption">'+videoCaption+'</div><img class="play" src="images/play_icon.png" />');
	
	});
	$('a.fancybox-button').each(function(){

		var thumbnailFilePath = 'gallery/' + $(this).attr('galleryfile')+ '/smSlide1.png';
		var galleryCaption = $(this).attr('gallerycaption');

		$(this).css('background-image','url('+thumbnailFilePath+')');
		$(this).html('<div class="caption">'+galleryCaption+'</div><img class="play" src="images/play_icon.png" />');

	});
	
	$('.videoLink').click(function(){
		
		// Get attributes from link clicked
		var videoFile = $(this).attr('videofile');
		var videoPoster = $(this).attr('videofile');
		var videoWidth = Number($(this).attr('videowidth'));
		var videoHeight = Number($(this).attr('videoheight'));
		
		// Set up HTMLvideo player code with above variables
		var videoCode = '<video  controls onended="vendFunction()"  autoplay  width="'+videoWidth+'" height="'+videoHeight+'"  >' +
			'<source src="video/'+videoFile+'.ogv" type="video/ogg" />' +
			'<source src="video/'+videoFile+'.mp4" type="video/mp4" />' +
			 +'</video>';
		$('#videoPlayer').html(videoCode);
		
		// Load new inline HTML code in lightbox
		$.fancybox({
			'transitionIn' : 'fade',
			'transitionOut' : 'fade',
			'href' : '#videoPlayer'
		});
		
		// Add onclick to video tag for Android
		var myNavigator = navigator.userAgent.toLowerCase();
		var testForAndroid = myNavigator.indexOf("android") > -1;
		if(testForAndroid) {
			$('#videoPlayer source[type*="video/mp4"]').removeAttr('type');
			$('#videoPlayer video').attr('onclick','this.play();')
		}
	
	});

	$(".fancybox-button").fancybox({
		prevEffect		: 'none',
		nextEffect		: 'none',
		closeBtn		: true,
		arrows			: false,
		nextClick		: true,
		helpers		: {
			title	: { type : 'inside' },
			buttons	: {position: 'bottom'}
		},
		afterLoad : function() {
			this.title = 'Image ' + (this.index + 1) + ' of ' + this.group.length +  (this.title ? ' - ' + this.title : '');
	}
	});
	$.fancybox({
		'transitionIn' : 'fade',
		'transitionOut' : 'fade',
		'hideOnContentClick': true,
		'href' : '#introvid',
		closeBtn: true
	});
});
$('#filter a').click(function (e) {
	e.preventDefault();

	// set active class
	$('#filter a').removeClass('active');
	$(this).addClass('active');

	// get group name from clicked item
	var groupName = $(this).attr('data-group');

	// reshuffle grid
	$grid.shuffle('shuffle', groupName );
});
var activityTimeout = setTimeout(inActive, 300000);

function resetActive(){
	clearTimeout(activityTimeout);
	activityTimeout = setTimeout(inActive, 300000);
	// $('#mainControl').show();
}
function inActive(){
	window.open("index_option_1.html","_self");
	/*$.fancybox({
		'transitionIn' : 'fade',
		'transitionOut' : 'fade',
		'hideOnContentClick': true,
		'href' : '#introvid',
		closeBtn: true
	});*/

}
// Check for mousemove, could add other events here such as checking for key presses ect.
$(document).bind('mousemove', function(){resetActive()});