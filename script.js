const backgroundUrls = [
    "./images/001.jpg",
    "./images/002.jpg",
    "./images/003.jpg",
    "./images/004.jpg",
    "./images/005.jpg",
    "./images/006.jpg",
    "./images/007.jpg"
];

window.addEventListener('load', function(){
    new Glider(document.querySelector('#carousel'), {
        slidesToShow: 1,
        draggable: false,
        scrollLock: true,
        scrollLockDelay: 100,
        arrows: {
          prev: '.glider-prev',
          next: '.glider-next'
        }
    })
})

$(document).ready(function() {    

    let counter = 1;
    let scale = 1.1;

    $("#welcome img").css("transform", "scale("+scale+")");

    setInterval(function() {

        scale = scale == 1 ? 1.1 : 1;

        $("#welcome img").fadeOut(1500, function() {
            $("#welcome img").attr("src", backgroundUrls[counter]).fadeIn(1500);
        })

        $("#welcome img").css("transform", "scale("+scale+")");

        if(counter>=6) {
            counter = 0;
        }
        else {
            counter++;
        } 
    }, 10000);

})