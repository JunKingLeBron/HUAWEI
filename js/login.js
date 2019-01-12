$("#login_btn").click(function(){
	console.log($("#phoneNum").val(),$("#pwd").val());
//	var phoneNum = $("#phoneNum").val();
//	var pwd =$("#pwd").val();
	var LocalStorPhone = JSON.stringify($("#phoneNum").val());
	var LocalStorpwd = JSON.stringify($("#pwd").val());
	$.ajax({
			type : "post",
			url: "php/login.php",
			data: {
				phoneNum:$("#phoneNum").val(),
				pwd: $("#pwd").val()
			},
			success : function(res){
				if(res == "0"){
					alert("密码错误")
				}else if(res == "2"){
					alert("手机号未注册")
				}else{
					alert("登录成功");
					localStorage.setItem("phoneNum",LocalStorPhone);
					localStorage.setItem("pwd",LocalStorpwd);
					location.href = "index.html";
					
				}
			}
		})
});