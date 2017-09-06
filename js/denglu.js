


$("#btndenglu").click(function(){
		$.post("denglumysql.php",
				{					
					"userTel":$("#name").val(),
					"userPass":$("#pass").val()
				},
				function(str){
<<<<<<< HEAD
					//console.log(str);
					if(str==0){
						//保存cookie		
						alert("用户名或者密码错误，登录失败！");
						//alert(str);
					}else{
						location.href="first.html";
=======
					if(str=="1"){
						//保存cookie
						
						location.href="first.html";
					}else{
						alert("用户名或者密码错误，登录失败！");
>>>>>>> a9c871c4c21bf7bf6b9f36849e81a1bb40360945
					}
					
				}
		);
		
	});	