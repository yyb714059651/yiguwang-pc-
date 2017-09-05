
<?php
    header("Content-type: text/html; charset=utf-8");
   //1、接收浏览器端的数据（即客户端的数据）
	$tel = $_POST['userTel'];
	$pass = $_POST['userPass'];
	//2、插入数据库
	
	//1、连接数据库
	$lianjiemysql= mysql_connect("localhost","root","123456");
	
	if(!$lianjiemysql){
		die("亲，connect fail");
	}else{
		//echo "connect success";
	}
	//2、选择数据库
	mysql_select_db("yiguwang",$lianjiemysql);
	//3、执行SQL语句
	$sqlStr="select * from userzhuce where userTel='".$tel."' and  userPass='".$pass."'";
    $result = mysql_query($sqlStr,$lianjiemysql);
    $rowCount = mysql_num_rows($result);
    if($rowCount==0){
    	echo "0";//登录失败    	
    }else{
    	echo "1";//登录成功！
    }
  
    //4、关闭数据库
    mysql_close($lianjiemysql);
?>