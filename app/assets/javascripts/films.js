//VARIABLES

var a = false;
var sound_click = document.createElement('audio');
var sound_drop = document.createElement('audio');
var sound_drop_back = document.createElement('audio');
var i = 1;
var params;
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
    // get ID, check if DOM exists
    var objCounter = 0;

    do {
        objCounter += 1;
        objectID = 'object-' + objCounter;
    } while ($('#' + objectID).length != 0);

    sound_click.play();

    // get object type and create

    var types = {
        'label' : function () {
            var myObject = $("<div id=" + objectID + "><span>Hello world</span></div>");
            myObject.addClass('obj obj-label').appendTo('#page').draggable({
                revert : function(valid) {
                    if(!valid) {
                        this.remove();
                    }
                }
            });

            params = {
                w : myObject.width($('#' + objectID + " > span").width() * 1.25),
                h : myObject.height($('#' + objectID + " > span").width() * 1.25)
            };
            console.log(myObject.width());
        },
        'image' : function () {
            $("<div id=" + objectID + "></div>").addClass('obj obj-image').appendTo('#page').draggable();
        }
    };

    return types[type]();
}

function pageAdjust() {

    /*if ($('.preview').height() <= $('#page').height()) {
        $('#page').height($('.preview').height());
        $('#page').width($('#page').height() * 1.7778);
    } else {
        $('#page').width('80%');
        $('#page').height($('#page').width() * 0.5625);
    }*/

    $('#page').width('80%');
    $('#page').height($('#page').width() * 0.5625);

    if ($('.preview').height() <= $('#page').height()) {
        $('#page').height($('.preview').height());
        $('#page').width($('.preview').height() * 1.7778);
    }



    if ($(window).width() < 720) {
        $('#page').hide();
    } else {
        $('#page').show();
    }
}

$(window).on('resize', function(){
    pageAdjust();
});


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
    pageAdjust();

    $('#label').mousedown(function(){
        objectCreate('label');
    });

    $('#page').droppable();
});






