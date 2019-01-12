<?php
	header("Content_type:text/html;charset=utf-8");
	$phoneNum = $_POST["phoneNum"];
	$pwd = $_POST["pwd"];
	$conn = mysqli_connect("localhost","root","","huawei");
	mysqli_query($conn,"set names utf-8");
	
	$selectSql = "select phoneNum,pwd from user";
	
	$row  = mysqli_query($conn,$selectSql);
	$flag = false;
	while($resultArr = mysqli_fetch_array($row)){
//		print_r $resultArr;
		if($phoneNum == $resultArr["phoneNum"]){
			if($pwd == $resultArr["pwd"]){
				//登录成功
				echo "1";
			}else{
				echo "0";//密码错误
			}
			$flag = true;
			break;
		}	
	
	}
	if(!$flag){
		//账号不存在
		echo "2";
	}
?>