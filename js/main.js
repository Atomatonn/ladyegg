// Adds the egg containers so the smileys can be on the eggs
function reset() {
    // Add 6 egg cartons to contain eggs
    for (let i = 1; i < 7; i++) {
        function addCarton() {
            var eggCarton = document.createElement("div");
            eggCarton.setAttribute('class', 'egg-emotion draggable js-egg' + i);

            $(".js-eggs").append(eggCarton);

        }

        // Add the eggs
        function addEggs() {
            var egg = document.createElement("img");
            egg.setAttribute('id', 'ball' + i);
            egg.setAttribute('class', 'eggs_egg');
            egg.setAttribute('src', 'http://www.pngmart.com/files/5/Eggs-PNG-Image.png');
            $(".js-egg" + i).append(egg);

        }

        addCarton();
        addEggs();




            $('.js-egg' + i).css({
                // Position eggs ranbdomly in container
                left: Math.random() * ($('.wrapper').width() - $('.js-egg' + i).width()),
                top: Math.random() * ($('.wrapper').height() - $('.js-egg' + i).height())
            });

            // Create and add SVG for egg faces
            var eggFace = document.createElement("div");
            eggFace.setAttribute('class', 'egg-face');
            eggFace.innerHTML =
                '<svg class="happy" width="44px" height="44px" viewBox="0 0 44 44"> <g id="Happy" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" transform="translate(0, 0)"> <circle id="Body" fill="" cx="22" cy="22" r="22"></circle> <g class="scaleFace"> <g class="face"> <ellipse id="Eye-right" fill="#2C0E0F" cx="29.0875" cy="21.75" rx="1.89926471" ry="1.75"></ellipse> <ellipse id="Eye-left" fill="#2C0E0F" cx="14.8992647" cy="21.75" rx="1.89926471" ry="1.75"></ellipse> <path d="M21.8941176,27.8819633 C24.8588235,27.8819632 25.4941176,25.5404999 25.4941176,24.5648901 C25.4941176,23.5892803 24.4352941,23.9795242 22.1058824,23.9795242 C19.7764706,23.9795242 18.2941176,23.5892803 18.2941176,24.5648901 C18.2941176,25.5404999 18.9294118,27.8819633 21.8941176,27.8819633 Z" id="Mouth" fill="#2C0E0F"></path> <ellipse id="Tung" fill="#E23D18" cx="21.8941176" cy="26.4390244" rx="1.69411765" ry="0.780487805"></ellipse> </g> </g> </svg> <svg class="sad none" width="44px" height="44px" viewBox="0 0 44 44" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <g id="sad" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" transform="translate(0, 0)"> <circle id="body" fill="" cx="22" cy="22" r="22"></circle> <g id="face" transform="translate(13.000000, 20.000000)"> <g class="face"> <path d="M7,4 C7,5.1045695 7.8954305,6 9,6 C10.1045695,6 11,5.1045695 11,4" class="mouth" stroke="#2C0E0F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" transform="translate(9.000000, 5.000000) rotate(-180.000000) translate(-9.000000, -5.000000) "></path> <ellipse class="right-eye" fill="#2C0E0F" cx="16.0941176" cy="1.75609756" rx="1.90588235" ry="1.75609756"></ellipse> <ellipse class="left-eye" fill="#2C0E0F" cx="1.90588235" cy="1.75609756" rx="1.90588235" ry="1.75609756"></ellipse> </g> </g> </g> </svg>';
            // var referenceNode = document.querySelector('.js-egg');
            // Insert the new node before the reference node


                $('.js-egg' + i).append(eggFace);

// $(".js-egg").append(eggFace);

    }




    // SEAL SOUNDS ARPHH! ARPHH! L'EGG!
    $(function() {

        var functions = [

            function fibsh() {
                var audio = new Audio('audio/degg.mp3');
                audio.play();
            },

            function degg() {
                var audio = new Audio('audio/fibsh.mp3');
                audio.play();
            },

            function ahh() {
                var audio = new Audio('audio/migph.mp3');
                audio.play();
            },

            function murph() {
                var audio = new Audio('audio/ahhhhh.mp3');
                audio.play();
            }
        ];

        var i = -1;

        // Drag and Drop functions below

        $(".draggable").draggable();

        $('.droppable').droppable({
            over: function(event, ui) {

            },

            // Do a bunch of shit on the drop of the egg
            drop: function(event, ui) {
                setTimeout(function() {
                    if ($('.egg-emotion').length) {
                        // alert('still eggs');
                    } else {
                        $('#leanne').toggle('explode', { pieces: 64 });
                        // functions[0]();
                        // i = 0;
                    }
                }, 500);


                $("#leanne").addClass('animated bounce');
                $("#leanne").on('animationend', function() {
                    $(this).removeClass('animated bounce');
                })
                ui.draggable.remove();
                if (i < 3) {
                    functions[++i]();
                } else {
                    functions[0]();
                    i = 0;
                }
            },
            out: function(event, ui) {

            }
        });
    });

    //Put leanne back together again
    if ($('#leanne').css('display') == 'none') {
        $('#leanne').css('display', 'block');
    }

    // $('.egg-emotion').mousedown(function(){
    //     $(this).addClass('filter-shadow');
    // });
    //
    // $('.egg-emotion').mouseup(function(){
    //     $(this).removeClass('filter-shadow');
    // });

    // Change egg faces on mouse down and up
    $('.egg-face').mousedown(function() {
        $(this).children('svg.sad').removeClass('none');
        $(this).children('svg.happy').addClass('none');
        $()
    });

    $('.egg-face').mouseup(function() {
        $(this).children('svg.sad').addClass('none');
        $(this).children('svg.happy').removeClass('none');
    });
}

reset();

function ocean() {
    var audio = new Audio('https://freesound.org/data/previews/462/462592_670687-lq.mp3');
    audio.play();
}

ocean();
// Define the area where the eyes track movement of the mouse
$(".move-area").mousemove(function(event) {
    var eye = $(".eye");
    var x = (eye.offset().left) + (eye.width() / 2);
    var y = (eye.offset().top) + (eye.height() / 2);
    var rad = Math.atan2(event.pageX - x, event.pageY - y);
    var rot = (rad * (180 / Math.PI) * -1) + 180;
    eye.css({
        '-webkit-transform': 'rotate(' + rot + 'deg)',
        '-moz-transform': 'rotate(' + rot + 'deg)',
        '-ms-transform': 'rotate(' + rot + 'deg)',
        'transform': 'rotate(' + rot + 'deg)'
    });
});

// Reset the game when EGGS button is clicked
$('.reset').on('click', function() {
    if(!$('.egg-emotion').length) {
        reset();
    } else {
        alert('YOU MUST FEED LADY EGG!');
    }

});
