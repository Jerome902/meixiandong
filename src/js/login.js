$(function(){
	//获取表单元素
	var $user = $("#username");
	var $pwd = $("#password");
	var $logBtn = $("#loginsubmit");
	var $loginTab1 = $("#login_tab1");
	var $loginTab2 = $("#login_tab2");
	

	//选择登录方式
	$loginTab1.click(function(){
		$("#user-message").css({display:"block"});
		$("#test-login").css({display:"none"});
		$(this).attr("class","on");
		$loginTab2.attr("class","");
	})
	$loginTab2.click(function(){
		$("#test-login").css({display:"block"});
		$("#user-message").css({display:"none"});
		$(this).attr("class","on");
		$loginTab1.attr("class","");
	})

	//判断账号是否正确
	$logBtn.click(function(){
		var uname = $user.val();
		var pwd = $pwd.val();
		var $cookieStr = $.cookie('registerUser');
		var obj = strToObj($cookieStr);
		
		if(obj[uname] == pwd){
			alert('登录成功！');
			location.href = 'index.html';
			$.cookie('loginUser',uname,{ expires: 7, path: '/' });
		}else{
			alert('用户名或密码错误! 请重新登录。')
			pwd = '';
		}
	})
	
	
	function strToObj(str){
		if(!str){
			return {};
		}
		
		var obj = {};
		var arr = str.split(',');
		for(var i = 0,len = arr.length;i < len;i ++){
			var list = arr[i].split(':');
			obj[list[0]] = list[1];
		}
		return obj;
	}
})
