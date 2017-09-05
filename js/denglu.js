


$("#btndenglu").click(function(){
		$.post("denglumysql.php",
				{					
					"userTel":$("#name").val(),
					"userPass":$("#pass").val()
				},
				function(str){
					if(str=="1"){
						//保存cookie
						
						location.href="first.html";
					}else{
						alert("用户名或者密码错误，登录失败！");
					}
					
				}
		);
		
	});	