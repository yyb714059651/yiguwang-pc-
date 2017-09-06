


$("#btndenglu").click(function(){
		$.post("denglumysql.php",
				{					
					"userTel":$("#name").val(),
					"userPass":$("#pass").val()
				},
				function(str){
					//console.log(str);
					if(str==0){
						//保存cookie		
						alert("用户名或者密码错误，登录失败！");
						//alert(str);
					}else{
						location.href="first.html";
					}
					
				}
		);
		
	});	