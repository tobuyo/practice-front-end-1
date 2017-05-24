$(function(){
	$("#mod-accordion dt").on("click", function() {
		$(this).next().slideToggle();
	});
		$(".tab li").click(function() {
		var index = $(".tab li").index(this);
		$(".content li").addClass("is-closed");
		$(".content li").eq(index).removeClass("is-closed");
		$(".tab li").removeClass("select");
		$(this).addClass("select")
	});
});