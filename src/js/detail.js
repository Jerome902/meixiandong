//引入顶部与底部
$(function(){
	$("header").load("index.html header");
 	$("aside").load("index.html aside");
	$(".logo-search").load("index.html .logo-search");
	$(".listTop").load("index.html .listTop");
	$("footer").load("index.html footer");
	
	
	//放大镜
	//获取元素
	var $bigBox = $("#left-pro");
	var $smallBox = $("#showbox");
	var $mark = $("#mark");
	var $float = $("#float");
	var $bigPic = $("#big-pic");
	var $bigImg = $("#big-pic img");
	
	//事件
	//遮罩移入事件
	$mark.mouseenter(function(){
		$float.css({display:"block"});
		$bigPic.css({display:"block"});
	})
	//遮罩移出事件
	$mark.mouseleave(function(){
		$float.css({display:"none"});
		$bigPic.css({display:"none"});
	})
	//遮罩移动事件（鼠标跟随）
	$mark.mousemove(function(evt){
		var e = evt;
		var bigOft = $bigBox.offset();
		var smallOft = $smallBox.offset();
		var left = e.pageX - smallOft.left - $float.innerWidth() / 2;
		var top = e.pageY - smallOft.top - $float.innerHeight() / 2;
		//边界
		if(left <= 0){
			left = 0;
		}else if(left >= $mark.innerWidth() - $float.innerWidth()){
			left = $mark.innerWidth() - $float.innerWidth();
		}
		if(top <= 0){
			top = 0;
		}else if(top >= $mark.innerHeight() - $float.innerHeight()){
			top = $mark.innerHeight() - $float.innerHeight();
		}
		$float.css({left:left + "px",top:top + "px"});
		
		//移动比例
		var pX = left / ($mark.innerWidth() - $float.innerWidth());
		var pY = top / ($mark.innerHeight() - $float.innerHeight());
		var imgLt = - pX * ($bigImg.innerWidth() - $bigPic.innerWidth());
		var imgTp = - pY * ($bigImg.innerHeight() - $bigPic.innerHeight());

		$bigImg.css({left: imgLt + "px",top: imgTp + "px"});
	})
})