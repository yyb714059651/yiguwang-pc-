function getId(id){
	return document.getElementById(id);
}
function getClass(_class){
	return document.getElementsByClassName(_class);
}
function getTag(tag){
	return document.getElementsByTagName(tag);
}

	//注册
	//协议隐藏
    getClass("button1")[0].onclick=function(){
    	getClass("hide-box")[0].style.display="block";
    	getClass("hide-text")[0].style.display="block";
    }
    getClass("hide-close")[0].onclick=function(){
    	getClass("hide-box")[0].style.display="none";
    	getClass("hide-text")[0].style.display="none";
    }
	
		

//正则验证
//手机号
function show1(){
	var phone= document.getElementById("phone").value;
	//var reg=/^13\d{9}$/;
	var result=checkAll("phone",phone);
	if(result==true){
		document.getElementById("phone-No").innerHTML="√";
		document.getElementById("phone-yz").innerHTML="手机号码正确";
		
		 return 1;
	}else{
		document.getElementById("phone-No").innerHTML="×";
		document.getElementById("phone-yz").innerHTML="请输入正确的手机号码";
		return 0;
	}	
}
//验证码
 function show2(){
	var verify= document.getElementById("verify").value;
	//var reg=/^\d{6}$/;
	var result=checkAll("yzm",verify);
	if(result==true){
		document.getElementById("verify-No").innerHTML="√";
		document.getElementById("verify-yz").innerHTML="验证码正确";
		
		 return 1;
	}else{
		document.getElementById("verify-No").innerHTML="×";
		document.getElementById("verify-yz").innerHTML="请输入正确的验证码";
		return 0;
	}	
}        
  //密码
  function show3(){
	var pass = document.getElementById("mima").value;
	 //密码只能使用数字 字母 长度在6-15之间
	var result=checkAll("pass",pass);
	
	if(result==true){
		document.getElementById("pass-No").innerHTML="√";
		document.getElementById("pass-yz").innerHTML="密码格式正确";
		 
		 return 1;
	}else{
		document.getElementById("pass-No").innerHTML="×";
		document.getElementById("pass-yz").innerHTML="请输入密码格式为长度在6-15之间，字母开头（只能使用数字 字母）";
		return 0;
	}
}	
function show4(){

	if(document.getElementById("mima-two").value!=document.getElementById("mima").value){
		document.getElementById("passtwo-No").innerHTML="×";
		document.getElementById("passtwo-yz").innerHTML="两次密码不相同，请重新输入";
		return 0;
	}else{
		document.getElementById("passtwo-No").innerHTML="√";
		document.getElementById("passtwo-yz").innerHTML="两次密码相同";
		
		 return 1;
	}
	
}
function show5(){
	var sum=show1()+show2()+show3()+show4()
    if(sum==4){
	
	   alert("恭喜你，完成了注册！！！");
	
	}else{
		alert("请完善信息");
	}
   
 
}
//发送验证码
 getId("fsyzm").onclick=function(){
 	if(getId("fsyzm").innerHTML=="发送验证码"){
 		getId("fsyzm").innerHTML="60S后，发送";
 		let time=60;
 		timers=setInterval(function(){
 			time--;
 			if(time<0){
 				getId("fsyzm").innerHTML="发送验证码"; 
 				clearInterval(timers);
 			}
 			else{
 				getId("fsyzm").innerHTML=time+"S后，发送";
 			}
 		},1000)
 	}
 }
 //同意协议  background:#fd7400;
 getId("check").onclick=function(){
 	if(getId("check").checked==true){
 		getClass("finish")[0].style.background="#fd7400";
 	   // getId("check").index=true;
 	   getClass("finish")[0].onclick=function(){
	if(getId("check").checked){
		 show5(); 	
	}
 	       	 
}	  
 	   
    
 }else{ 		
 		getClass("finish")[0].style.background="#ccc";
 		 //getId("check").index=false;
    }  	


}	
