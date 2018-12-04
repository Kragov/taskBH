

$(document).ready(function(){

    $("#sliderContainer > .slide:gt(0)").hide()
    
mrgn = -800;

//   setInterval(function () {
//        $("#sliderContainer > .slide:first")
//            .animate({right: "+=800"}, 2000)  
//            .next()
//            .css("right", mrgn)
//            .fadeIn(0)
//            .animate({right: "+=800"}, 2000)
//            .end()
//            
//            .appendTo('#sliderContainer')
//        $("#sliderContainer > .slide:last")
//            .css("right", "-=800")
//            .css("right", "-=800")
//    }, 3000)
//})
    
$(".next").click(function(){
    $("#sliderContainer > .slide:first")
        .animate({right: "+=800"}, 2000)
        .next()
        .css("right", mrgn)
        .fadeIn(0)
        .animate({right: "+=800"}, 2000)
        .end()
        .appendTo('#sliderContainer')
    })
})