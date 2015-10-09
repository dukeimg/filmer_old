// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

//VARIABLES

var a = false;
var sound_click = document.createElement('audio');
var sound_drop = document.createElement('audio');
var sound_drop_back = document.createElement('audio');
var i = 1;
var objID = 1;

   // $(window).load(function() {
     //   a = true;
    //});

//FUNCTIONS

function loading() {
    console.log(i);

    switch (i) {
        case 1:
            $(".color-3").css("left", "0%");
            $(".color-1").css("z-index", "3");
            $(".color-2").css("z-index", "2");
            $(".color-3").css("z-index", "1");
            break;
        case 2:
            $(".color-1").css("left", "0%");
            $(".color-1").css("z-index", "1");
            $(".color-2").css("z-index", "3");
            $(".color-3").css("z-index", "2");
            break;
        case 3:
            $(".color-2").css("left", "0%");
            $(".color-1").css("z-index", "2");
            $(".color-2").css("z-index", "1");
            $(".color-3").css("z-index", "3");
            break;
    }
    setTimeout(function () {
        if (a == false) {
            $(".color-" + i.toString()).animate({left: '-125%'}, 1250, "easeInOutCirc",function(){
                i = i + 1;
                if (i == 4){
                    i = 1;
                }
                loading();
            })
        } else {
            $("#loading").animate({left: '-125%'}, 1250, "easeInOutCirc",function(){
                $("#loading").css("display", "none");
            })
        }
    }, 3000);
}

function mediaLoad() {

    sound_click.setAttribute('src', 'https://dl.dropboxusercontent.com/u/100656262/round_pop_click.wav');
    sound_drop.setAttribute('src', 'https://dl.dropboxusercontent.com/u/100656262/round_pop_click1.wav');
    sound_drop_back.setAttribute('src', 'https://dl.dropboxusercontent.com/u/100656262/round_pop_click2.wav');
    //sound_click.setAttribute('autoplay', 'autoplay');
    //sound_click.load()

    $.get();

    sound_click.addEventListener("load", function() {
        sound_click.play();
    }, true);
    sound_drop.addEventListener("load", function() {
        sound_drop.play();
    }, true);
    sound_drop_back.addEventListener("load", function() {
        sound_click.play();
    }, true);

}

function objectCreate(type) {
    // get ID
    if ($('object-' + objID).length) {
        objID++;
    }
    drag = true; // start of dragging
    sound_click.play();

    // get object type

   /* switch(type) {
        case 'label'
    }*/

    /*$("<div id='object'><span id='obj-label' style='display:block'></span></div>").appendTo('.page').offset({left:e.pageX,top:e.pageY}).draggable(); // create an object
    measurements = [$('#object').width(), $('#object').height(), $('#object').offset().top, $('#object').offset().left ];
    var w = $('#object').width() * 1.25;
    $('#object').width(w).height(w).css({ top: ($(this).offset().top - ((w - measurements[1]) / 2))}).css({ left: $(this).offset().left - ((w - measurements[0]) / 2) });
    $(document).on('mousemove', function(e){
        $('#object').css({
            left:  e.pageX,
            top:   e.pageY
        });
        $(document).mouseup(function() {
            $(document).off("mousemove");
            if (drag == true) {
                sound_drop.play();
            }
            drag = false; // finish of dragging
        });
    });*/
}

//OBJECTS
//nothing is here for now

/*$(document).ready(function(){
    a = true;
    var drag;
    var measurements;
    var font = 14;

    $('.tool').mousedown(function(e){
        drag = true;
        sound_click.play();
        $("<div id='object'><span id='obj-label' style='display:block'>hello world</span></div>").appendTo('.page').offset({left:e.pageX,top:e.pageY}).draggable();
        measurements = [$('#object').width(), $('#object').height(), $('#object').offset().top, $('#object').offset().left ];
        var w = $('#object').width() * 1.25;
        $('#object').width(w);
        $('#object').height(w);
        $('#object').css({ top: ($('#object').offset().top - ((w - measurements[1]) / 2))});
        $('#object').css({ left: $('#object').offset().left - ((w - measurements[0]) / 2) });
        $(document).on('mousemove', function(e){
            $('#object').css({
                left:  e.pageX,
                top:   e.pageY
            });
            $(document).mouseup(function() {
                $(document).off("mousemove");
                if (drag == true) {
                    sound_drop.play();
                }
                drag = false;
            });
        });
    });
    var lastObject;
    $(document).on({
        click: function(){
            $(this).draggable('enable').resizable(
                {   disabled: false,
                    aspectRatio: true,
                    start: (function(){$(this).toggleClass('on-resize')}),
                    stop: (function(){$(this).toggleClass('on-resize')}),
                    resize: (function(){

                        //Get window width
                        var width = $("#obj-label").width();
                        var width2 = $('#object').width() * 0.75;

                        //Set new font size
                        var newFont = font * (width2/width);
                        $('#object').css('font-size', Math.floor(newFont));
                        font = newFont;
                    })
                }
            );
            lastObject = $(this);
            $(this).addClass('active');
            console.log("enabled");
        }
    }, "#object");

    $('.page').on({
        click: function(){
            $(lastObject).draggable('disable').resizable({disabled: true});
            console.log("disabled");
            $(lastObject).removeClass('active');
        }
    }, !lastObject);
});*/

//READY

$(document).ready(function(){

});






