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
			$("#code-show").animate({right:"-187px"});
			$(this).css("background","");
		})
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	//遮罩
	$("#mark-pic").css({display:"block"}).animate({top:"50%"},3000);
	$("#mark-close").click(function(){
		$("#mark").css({display:"none"});
		$("#mark-pic").css({display:"none"});
	})
})
