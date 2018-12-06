$(document).ready(function(){
	lastSlide = $("#sliderContainer > .slide:last")
	chbx = $("#looper").prop("checked")
	
		
	$("#sliderContainer > .slide:gt(0)").hide()
		
	$("#next").click(function(){
		if ($("#looper").prop("checked") === true) {
			mrgn = -800
			$("#sliderContainer > .slide:first")
				.animate({right: "+=800"}, 2000)
				.next(".slide")
				.css("right", mrgn)
				.fadeIn(0)
				.animate({right: "+=800"}, 2000)
				.end()
				.appendTo('#sliderContainer')						
		}
		else if ($("#sliderContainer > .slide:first") != lastSlide) {
			mrgn = -800
			$("#sliderContainer > .slide:first")
				.animate({right: "+=800"}, 2000)
				.next(".slide")
				.css("right", mrgn)
				.fadeIn(0)
				.animate({right: "+=800"}, 2000)
				.end()
				.appendTo('#sliderContainer')
		}
	})
		
		
		
	$("#prev").click(function(){
		mrgn = 800
		$("#sliderContainer > .slide:first")
			.animate({right: "-=800"}, 2000)
			.end()
		$("#sliderContainer > .slide:last")
			.css("right", mrgn)
			.fadeIn(0)
			.animate({right: "-=800"}, 2000)
			.prependTo("#sliderContainer")
	})

})

