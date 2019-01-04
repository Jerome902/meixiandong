$(function(){
	/*	
		头部
	*/
	//我的美鲜移入效果
	var $headRightUL = $('#right');
	var $operate = $('#list-operate');
	var $firstList = $headRightUL.children().eq(0)
	$firstList.hover(
		function(){
			$(this).css('background','#fff');
			$operate.show();
		},
		function(){
			$(this).css('background','#f5f5f5');
			$operate.hide();
		})
	$operate.on("mouseenter","a",function(event){
		$firstList.css('background','#f5f5f5');
		var target = $(event.target);
		target.css({"background":"#1a9733",'color':'#fff'});
    })
	$operate.on("mouseleave","a",function(event){
		$firstList.css('background','#fff');
		var target = $(event.target);
		target.css({"background":"",'color':''});
	})
	
	//我的购物车移入效果
	$headRightUL.children().eq(1).hover(function(){
			$(this).css('background','#fff');
		},
		function(){
			$(this).css('background','#f5f5f5');
		})
	//手机逛美鲜移入效果
	$headRightUL.children().eq(3).hover(function(){
			$('#code_QR').css('display','block');
		},
		function(){
			$('#code_QR').css('display','none');
		})
	/*
		右侧小按钮栏
	*/
   //购物车移入点击效果
	$("#null-cart").click(function(){	//点击
		$("#cart-show").toggle();
	})
	$("#null-cart").mouseenter(function(){	//移入
		$(this).css("background","#1a9733");
		$("#cart").css("background-position","-36px -164px");
	})
	$("#null-cart").mouseleave(function(){	//移出
		$(this).css("background","");
		$("#cart").css("background-position","-10px -164px");
	})
	//联系QQ移入移出效果
	$(".QQ").parent().hover(function(){
		$(this).css("background","#1a9733");
		$("#QQ").css("left","-144px")
	},
	function(){
		$(this).css("background","");
		$("#QQ").css("left","42px");
	})
	//客服电话移入移出效果
	$(".phone").parent().hover(function(){
		$(this).css("background","#1a9733");
		$("#phone").css("left","-190px")
	},
	function(){
		$(this).css("background","");
		$("#phone").css("left","42px");
	})
	//二维码移入移出效果
	$(".code").parent().hover(function(){
			$(this).css("background","#1a9733");
			$("#code-show").animate({right:"42px"});
		},
		function(){
			$("#code-show").css({display:"none",right:"-187px"});
			$(this).css("background","");
		})
	//回到顶部按钮
	$("#re-top").parent().click(function(){
		//$("html,body").animate({scrollTop:"0"});
		 $("html,body").scrollTop(0);
	})
	/*
		logo*搜索栏
	*/
	//热门搜索移入效果
	$("#hotwords").on("mouseenter","a",function(event){
		var target = $(event.target);
		target.css({'color':'#1a9733'});
    })
	$("#hotwords").on("mouseleave","a",function(event){
		var target = $(event.target);
		target.css({'color':'#999'});
	})
	/*
		列表与banner
	*/
	//左侧列表移入效果
	$("#list").on("mouseenter","h3",function(event){
		var target = $(event.target);
		target.css({'background':'#1a9733'});
    })
	$("#list").on("mouseleave","h3",function(event){
		var target = $(event.target);
		target.css({'background':''});
	})
	
	var $list = $("#list");
	var $listShow = $("#list-show"); //一级菜单
	var $listCon = $("#list-con"); //二级菜单
	var $listConRt = $("#list-con-right"); //二级菜单
	
	$listShow.mouseenter(function(){
		$listCon.css({display:"block"});
		$listConRt.css({display:"block"});
	})
	$listShow.mouseleave(function(){
		$listCon.css({display:"none"});
		$listConRt.css({display:"none"});
	})
	
	
// 	$.getJSON("../menu.json",function(i){
// 		var one = i.menu;
// 		console.log(one.one[0]);
// 	})

	//获取json
	$.getJSON("../menu.json", function(json) {
		var myMenu = json.menu;
		var myOne = myMenu.one;
		var myTwo = myMenu.two;
	
		$.each(myOne,function(j){
			$("<li><h3><a href='javescript:;'>" + myOne[j] + "</a></h3></li>").appendTo("#list-show");
		})

//		$.each(myTwo,function(i){
// 			$("<div>" + myTwo[i] + "</div>").appendTo("#div");
// 		})
		
// 		$listCon.mouseover(function() {
// 			$(this).css("display", "block");
// 		});
// 		$a.mouseover(function() {
// 			$listCon.css("display", "block");
// 		});
// 		$("ul li").mouseover(function() {
// 			$level02.css("display", "block");
// 			$("#div div").css("display", "none").eq($(this).index()).css("display", "block");
// 		});
// 		$("#div div").mouseout(function() {
// 			$listCon.css("display", "none");
// 			$level02.css("display", "none");
// 		});
	});
	//banner轮播效果
	var $banner = $("#banner")
	var $bannerList = $("#banner-list");
	var $listPic = $("#banner-list li");
	var $listPicWidth = $listPic.eq(0).width();
	var $btn = $("#btn span")
	var timer = null;
	var size = $btn.size();
	//console.log($btn.size());
	var index = -1;
	//鼠标滑过事件
	$banner.hover(function(){
		clearInterval(timer);
	},function(){
		timer = setInterval(slider,3000);
	});
	function slider(){
		index ++;
		doSlider();
	}
	function doSlider(){
// 		// 圆点按钮轮播
// 		//dots.removeClass('dots_active').eq(index % size).addClass('dots_active');
// 		//console.log(2);
// 		// 图片轮播
		$bannerList.stop().animate({
			left : - (index + 1) * $listPicWidth + "px"
		},1000,function(){
			if((index + 1) == size){
				index = -1;
				$bannerList.css('left', - (index + 1) * $listPicWidth + 'px');
			}else if(index == -1){				
				index = size;
				$bannerList.css('left', - (size) * $listPicWidth + 'px');
			}
		});
		//console.log()
 	}
	timer = setInterval(slider,3000);
		// 点击圆点切换图片
	$btn.mouseenter(function(){
		$(this).css({opacity:1,height: "44px"})
		$(this).children().css({display:"block"})
		index = $(this).index() - 1;
		doSlider();
	});
	$btn.mouseleave(function(){
		$(this).css({opacity:0.3,height: "40px"})
		$(this).children().css({display:"none"})
	//	index = $(this).index();
		doSlider();
	});
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	//遮罩
	$("#mark-pic").css({display:"block"}).animate({top:"50%"},3000);
	$("#mark-close").click(function(){
		$("#mark").css({display:"none"});
		$("#mark-pic").css({display:"none"});
	})
})
