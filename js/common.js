$(function(){
	var obj = {
		phoneNum : localStorage.getItem("phoneNum"),
		pwd : localStorage.getItem("pwd"),
		oLogin : $("#login_btn"),
		oGoods : $(".phone_list"),
		oCart : $("#cart_href"),
		Num : $("#num")
	}
	new ShowGoods(obj).init();
});
class ShowGoods{
	constructor(obj){
		this.btn = obj.btn;
		this.phoneNum = obj.phoneNum;
		this.oLogin = obj.oLogin;
		this.oGoods = obj.oGoods;
		this.Cart = obj.oCart;
		this.Num = obj.Num;
	}
	init(){//初始化
		this.login();
	}
	login(){
		var _this = this;
		this.btn.click(function(){
			
			console.log(1);
		});
	}
}
