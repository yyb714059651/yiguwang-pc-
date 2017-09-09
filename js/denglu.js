


//$("#btndenglu").click(function(){
//		$.post("php/denglumysql.php",
//				{					
//					"userTel":$("#name").val(),
//					"userPass":$("#pass").val()
//				},
//				function(str){
//					//console.log(str);
//					if(str==0){
//						//保存cookie		
//						alert("用户名或者密码错误，登录失败！");
//						//alert(str);
//					}else{
//						location.href="first.html";
//					}
//					
//				}
//		);
//		
//	});	
//验证码变化
    var _yzmtxt=document.getElementById("yzm")                                 
    var _aa=document.getElementById("aa")	
	var _yzmbox=document.getElementById("yzmid");
	window.onload=function(){
		 var arrCode = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F","G","H","I",
	       "J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
	        var result="";
			var oLen=arrCode.length;
		    for(var i=0;i<4;i++){
			result+=arrCode[parseInt(Math.random()*oLen)];    
			}
			_aa.innerHTML=result;
		
	}
	_yzmbox.onclick =function(){
	     var arrCode = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F","G","H","I",
	       "J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
	        var result="";
			var oLen=arrCode.length;
		    for(var i=0;i<4;i++){
			result+=arrCode[parseInt(Math.random()*oLen)];    
			}
			_aa.innerHTML=result;
	}
	
	function yz(){
		if(_yzmtxt.value.toLowerCase()==_aa.innerHTML.toLowerCase()){   //转化小写
			//验证后台
		$("#btndenglu").click(function(){
		$.post("php/denglumysql.php",
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
	    //后台验证完
		}else{
			alert("输入正确的验证码");
		}
		
	}
	
