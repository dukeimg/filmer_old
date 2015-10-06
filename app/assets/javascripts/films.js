// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

var a = false;
var sound_click = document.createElement('audio');
var sound_drop = document.createElement('audio');
var sound_drop_back = document.createElement('audio');

   // $(window).load(function() {
     //   a = true;
    //});

var loading;
var i = 1;
loading = function() {
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
};

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

$(document).ready(function(){
    a = true;
    var drag;

    $('.tool').mousedown(function(e){
        drag = true;
        console.log('yay!');
        sound_click.play();
        $("<div id='object'><span style='display:block'>hello world</span></div>").appendTo('.page').offset({left:e.pageX,top:e.pageY}).draggable();
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

    var measurements;
    $(document).on({
        mouseenter: function () {
            measurements = [$(this).width(), $(this).height(), $(this).offset().top, $(this).offset().left ];
            console.log("width: " + $(this).width());
            var w = $(this).width() * 1.25;
            console.log("w: " + w);
            $(this).width(w);
            $(this).height(w);
            $(this).css({ top: ($(this).offset().top - ((w - measurements[1]) / 2))});
            $(this).css({ left: $(this).offset().left - ((w - measurements[0]) / 2) });
            console.log((w - measurements[0]) / 2);
            $(this).mouseup(function() {
                sound_drop.play();
                measurements[2] = $(this).offset().top + ((w - measurements[1]) / 2);
                measurements[3] = $(this).offset().left + ((w - measurements[0]) / 2);
            });

        },
        mouseleave: function () {
            $(this).width(measurements[0] + 4);
            $(this).height(measurements[1] + 4);
            $(this).css({ top: measurements[2] });
            $(this).css({ left: measurements[3] });
        }
    }, "#object");
});






