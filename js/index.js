

$(document).ready(function(){

    $("#sliderContainer > .slide:gt(0)").hide();

    setInterval(function () {
        $("#sliderContainer > .slide:first")
            .fadeOut(1000)
            .next()
            .fadeIn(1000)
            .end()
            .appendTo('#slideshow');
    }, 3000)
})