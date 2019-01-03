//引入底部
$(function(){
	$("footer").load("index.html footer .bottom-nr")
	
	//获取表单元素
	var $user = $("#name-user");
	var $pwd = $("#test-password");
	var $rePwd = $("#test-pass");
	var $checkOne = $("#check-one");
	var $regBtn = $("#register-btn");
	var arr = [false,false,false];
	//失焦事件
	$user.blur(function(){
		var uname = $user.val();
		var re = /^[\u4e00-\u9fa5\w]{3,12}$/;
		if(!re.test(uname)){
			$("#uname-notice").show();
			arr[0] = false;
		}else{
			$("#uname-notice").hide();
			arr[0] = true;
		}
	})
	$pwd.blur(function(){
		var pwd = $pwd.val();
		var re = /^\w{6,12}$/;
		if(!re.test(pwd)){
			$("#password-notice").show();
			arr[1] = false;
		}else{
			$("#password-notice").hide();
			arr[1] = true;
		}
	})
	$rePwd.blur(function(){
		var rePwd = $rePwd.val();
		var re = /^\w{6,12}$/;
		if(rePwd == $pwd.val()){
			if(!re.test(rePwd)){
				$("#confirm-password-notice").show();
				arr[2] = false;
			}else{
				$("#confirm-password-notice").hide();
				arr[2] = true;
			}
		}else{
			alert('密码不一致');
		}
	})
	//注册按钮点击事件
	$regBtn.click(function(){	
		var uname = $user.val();
		var pwd = $pwd.val();
		var rePwd = $rePwd.val();
		var num = 1;
		if(!uname){
			alert('用户名不能为空！');
			return;
		}else if(!pwd){
			alert('密码不能为空！');
			return;
		}else if(!rePwd){
			alert('确认密码不能为空！');
			return;
		}
		if(arr.indexOf(false) != -1){
			alert('请正确填写信息！');
			return;
		}
		//cookie
		var $cookieStr = $.cookie('registerUser');
		var $cookieObj = strToObj($cookieStr);
		
		if(uname in $cookieObj){
			alert('用户名已存在');
		}else{
			$cookieObj[uname] = pwd;
			$cookieStr = objToStr($cookieObj);
			$.cookie('registerUser', $cookieStr, { expires: 7, path: '/' });
			alert("注册成功！")
		}
	})		

	//将字符串转为对象
	function strToObj(str){
		if(!str){
			return {};
		}
		
		var obj = {};
		var arr = str.split(',');
		for(var i = 0,len = arr.length;i < len;i ++){
			var list = arr[i].split(':');
			obj[arr[0]] = arr[1];
		}
		return obj;
	}
	//将对象转为cookie字符串
	function objToStr(obj){
		var str = '';
		for(var i in obj){
			if(str){
				str += ','
			}
			str += i + ':' + obj[i];
		}
		return str;
	}
})


