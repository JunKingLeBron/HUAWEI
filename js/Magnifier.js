$("#mate_box").mouseenter(function(){
	$(".mask").fadeIn(500);
	$(".mate_big").fadeIn(500);
}).mouseleave(function(){
	$(".mask").fadeOut(500);
	$(".mate_big").fadeOut(500);
}).mousemove(function(e){
	var e = e || event;
	var sTop = document.documentElement.scrollTop;
	//鼠标在小图区移动时，mask的的相对小图的位置
	var l = e.clientX - $(this).offset().left - $(".mask").width()/2;
	var t = e.clientY - $(this).offset().top - $(".mask").height()/2 +sTop;

	//宽高可移动的最大距离

	var maxW = $(this).outerWidth() - $(".mask").width();
	var maxH = $(this).outerHeight() - $(".mask").height();
	
	l = l < 0 ? 0 : (l > maxW ? maxW : l);
	t = t < 0 ? 0 : (t > maxH ? maxH : t);

	$(".mask").css({
		left: l + "px",
		top: t + "px"
	});
	
	$(".bigImg").css({
		left : -l*($(".bigImg").width() / $(".mate_small").width()) + "px",
		top : -t*($(".bigImg").height() / $(".mate_small").height()) + "px"
	});
})	
$(".s_img").mouseenter(function(){
	console.log(1);
	var index =$(this).index();
//	console.log($(".small_current")[index].src);
	$(".current_img").attr('src',$(".small_current")[index].src);
	$(".bigImg").attr('src',$(".small_current")[index].src);
}).click(function(){
	$(".current_img").attr('src',$(".small_current")[index].src);
	$(".bigImg").attr('src',$(".small_current")[index].src);
})
