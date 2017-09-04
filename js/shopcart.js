function getId(id){
	return document.getElementById(id);
}
function getClass(_class){
	return document.getElementsByClassName(_class);
}
function getTag(tag){
	return document.getElementsByTagName(tag);
}

window.onload=function(){
// 点击购物车
	getClass("bigShop")[0].onmouseover=function(){
	getClass("shop2")[0].style.display="block";
	getClass("shop1")[0].style.borderBottom="1px solid #fff";
}
    getClass("bigShop")[0].onmouseout=function(){
	getClass("shop2")[0].style.display="none";
	getClass("shop1")[0].style.borderBottom="1px solid #ff7300 ";
}
//导航
        for(let i=0;i<7;i++){
        	
        	getClass("list01")[i].onmouseover=function(){
			getClass("listbox")[i].style.display="block";
			getClass("listbox")[i].style.top=(50*i+3)+"px";
		    }
		    
		    getClass("list01")[i].onmouseout=function(){
		    getClass("listbox")[i].style.display="none";
	        }
        	
        	
        }
	    
		//轮播
		var oSlide = document.getElementsByClassName("lb")[0];
					var oWrap = getId("lunbo");
					var oLi = oSlide.getElementsByTagName("li");
					var oList = getId("list");
					var _Li = oList.getElementsByTagName("li");
					var timer=null;
					var m = 0;
					var oLen = oLi.length;
					//动态添加原点数
		//			for(var i=0;i<oLen;i++){
		//				var  _Li =  document.createElement("li");
		//				if(i==0){
		//					_Li.className = "active";
		//				}
		//				oList.appendChild(_Li);
		//			}
					//自动轮播
					function autoPlay(){
						timer = setInterval(function(){
		//					oLi[m].style.opacity = "0";
							for(var i=0;i<oLen;i++){
								oLi[i].style.display = "none";
							}
							m++;
							if(m==oLen){
								m=0;
							}
							oLi[m].style.display = "block";
							oLi[m].getElementsByTagName("img")[0].style.opacity = 0;
							move(oLi[m].getElementsByTagName("img")[0],{"opacity":"1"});
							for(var i=0;i<oLen;i++){
								_Li[i].className = "";
							}
							_Li[m].className = "active";
						},2000)
					}
					autoPlay();
				
			
					//鼠标事件
					oWrap.onmouseover = function(){
						clearInterval(timer);
					}
					oWrap.onmousemove = function(){
						clearInterval(timer);
						console.log("2");
					}
					oWrap.onmouseout = function(){
						autoPlay();
					}
					
					//
					for(var i=0;i<oLen;i++){
						_Li[i].index = i;
						_Li[i].onmouseover = function(){
							for(var j=0;j<oLen;j++){
								_Li[j].className = "";
								oLi[j].style.display = "none";
							}
							this.className = "active";
							m = this.index;
							oLi[m].style.display = "block";
							oLi[m].getElementsByTagName("img")[0].style.opacity = 0;
							move(oLi[m].getElementsByTagName("img")[0],{"opacity":"1"});
							
						}
					}
   
   

//侧边栏出现   side-ce
    let side=getClass("side-box-01")[0].children;
        for(let i=0;i<side.length;i++){
        	side[i].onmouseover=function(){
        		side[i].children[1].style.visibility="visible"
    	        move(side[i].children[1],{"left":"-92px"});
        	}
        	side[i].onmouseout=function(){
        		side[i].children[1].style.visibility="hidden"
    	        move(side[i].children[1],{"left":"-121px"});
        	}
        }
                 
    let side2=getClass("side-box-02")[0].children;
        for(let i=0;i<side2.length;i++){
        	side2[i].onmouseover=function(){
        		side2[i].children[1].style.visibility="visible"
    	        move(side2[i].children[1],{"left":"-92px"});
        	}
        	side2[i].onmouseout=function(){
        		side2[i].children[1].style.visibility="hidden"
    	        move(side2[i].children[1],{"left":"-121px"});
        	}
        }
        
    //顶部悬浮
	window.onscroll = function(){	
		var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
			if(scrollTop>0){
				document.getElementById("top2").style.background="rgba(0,0,0,0.5)";
			    //document.getElementById("top2").style.opacity=0.7;
			    document.getElementById("top2").style.position="fixed"
				document.getElementById("top2").style.top="0px"
			    
			}else if(scrollTop<0){
				document.getElementById("top2").style.top="-100px"
			}else if(scrollTop==0){
				document.getElementById("top2").style.background="#e0e0e0";
				document.getElementById("top2").style.position="";
			}
	}
	
	
	//列表隐藏、出现
	getClass("all-sort")[0].onmouseover=function(){
		getClass("allnav-list")[0].style.display="block";
	}
	getClass("allnav-list")[0].onmouseover=function(){
		getClass("allnav-list")[0].style.display="block";
	}
	getClass("all-sort")[0].onmouseout=function(){
		getClass("allnav-list")[0].style.display="none";
	}
	getClass("allnav-list")[0].onmouseout=function(){
		getClass("allnav-list")[0].style.display="none";
	}
	
	
	
//添加购物车
    var cartimg=document.getElementsByClassName("box-list-li-img");   
	var names=document.getElementsByClassName("box-list-li-wz");
	//加减
	var plus=document.getElementsByClassName("cart-li-num-ri");	
	var minus=document.getElementsByClassName("cart-li-num-lf");
	var numInput=document.getElementsByClassName("cart-li-num-sz");
//	var trs=document.getElementsByTagName("tr");
	var prices=document.getElementsByClassName("li-price");
	var sums=document.getElementsByClassName("li-sub");
	var check=document.getElementsByClassName("cart-checkbox-x");
	var weight=document.getElementsByClassName("li-wei")
	var deletes=document.getElementsByClassName("box-list-li-sc");
	
	var form=document.getElementsByTagName("form")[0];
	var zongshu=document.getElementById("zongshu");
	var zongjinge=document.getElementById("zongjinge");
	var zongqianshu=document.getElementsByClassName("cart-nr-zj-js")[0];
	//console.log(zongshu+","+zongjinge);
	
	var arr=[];
	var arrStr=[];
	/*
	var _cookie=getCookie("goodsInf");
	console.log(_cookie);
	if(_cookie==""){
		//页面加载的时候计算初始的金额
		for(var i=0;i<sums.length;i++){
			var danjia=prices[i].firstElementChild.innerHTML.split("￥")[1];
			console.log(danjia);
			var num=numInput[i].value;
			var sum=danjia*num;
			sums[i].firstElementChild.innerHTML="￥"+sum;
		}
		
		sumAll();
		zongLiang()
	}else{
		//根据cookie改变页面
			//数据转换string==>Array==>JSON
		var arr111=_cookie.split("},{");
		//console.log(arr111);
		for(var i=0;i<arr111.length;i++){
			
			numInput[i].value=arr111[i].split("\",\"")[3].split("\":\"")[1];
			
			
			var danjia=prices[i].firstElementChild.innerHTML.split("￥")[1];
			//console.log(danjia);
			var num=numInput[i].value;
			var sum=danjia*num;
			sums[i].firstElementChild.innerHTML="￥"+sum;
			
			var isChecked=arr111[i].split("\",\"")[5].split(":")[1].split("\"")[0];
			console.log(isChecked);
			if(isChecked.indexOf("true")!=-1){
				check[i].firstElementChild.checked=true;
			}else{
				check[i].firstElementChild.checked=false;
			}
			
		}
		
		sumAll();
		zongLiang()
	}
	*/
	
	//加号的点击事件
	for(var i=0;i<plus.length;i++){
		plus[i].index=i;
		plus[i].onclick=function(event){
			var e=event || window.event;
			e.preventDefault;
			//改变input的值
			var m=this.index;
			
			numInput[m].innerHTML++;
			//计算该商品总价并赋值至页面
				//获取单价
			var danjia=prices[m].innerHTML.split("￥")[1];
			//console.log(danjia);
			var num=numInput[m].innerHTML;
			var sum=danjia*num;
			sums[m].innerHTML=("￥"+sum.toFixed(2));
			zongqianshu.innerHTML=sums[m].innerHTML;
			
			zongLiang();
			sumAll();
			//saveToCookie();
		}
	}
	//减号的点击事件
	
	for(var j=0;j<minus.length;j++){
		minus[j].index=j;
		minus[j].onclick=function(event){
			var e=event || window.event;
			e.preventDefault;
			var n=this.index;
			//var num=numInput[n].value;
			if(numInput[n].innerHTML>1){
				numInput[n].innerHTML--;
			}
			var danjia=prices[n].innerHTML.split("￥")[1];
			//console.log(danjia);
			var num=numInput[n].innerHTML;
			var sum=danjia*num;
			sums[n].innerHTML=("￥"+sum.toFixed(2));
			zongqianshu.innerHTML=sums[n].innerHTML;
			
			zongLiang();
			sumAll();
			//saveToCookie();
		}
	}
	//input失去焦点时，先判断内容是否为数字，然后计算总价格
	for(var i=0;i<numInput.length;i++){
		numInput[i].index=i;
		numInput[i].onblur=function(){
			var nn=this.index;
			//console.log(nn);
			if(parseInt(numInput[nn].innerHTML)>0){
				var danjia=prices[nn].innerHTML.split("￥")[1];
				//console.log(danjia);
				var num=parseInt(numInput[nn].innerHTML);
				numInput[nn].innerHTML=num;
				var sum=danjia*num;
				sums[nn].innerHTML="￥"+sum.toFixed(2);
			}else{
				numInput[nn].innerHTML=1;
				var danjia=prices[nn].innerHTML.split("￥")[1];
				//console.log(danjia);
				var num=parseInt(numInput[nn].innerHTML);
				numInput[nn].innerHTML=num;
				var sum=danjia*num;
				sums[nn].innerHTML="￥"+sum.toFixed(2);
			}
			
			//saveToCookie();
		}
	}
	//保存到cookie
	/*
	function saveToCookie(){
		//console.log([1,'agga',46,'好',[12,'en'],{name:'zhao',id:'111'}].toString());//数组里面的JOSN会转换为[object Object]
		//console.log({name:'zhao',id:'111'}.toString());//[object Object]
		//console.log(JSON.stringify({name:'zhao',id:'111'}));//{"name":"zhao","id":"111"}
		
		for(var i=0;i<sums.length;i++){
			arr[i]=new Object;
			arr[i].goodsId=cartimg[i].firstElementChild.innerHTML;
			arr[i].goodsName=names[i].firstElementChild.innerHTML;
			arr[i].goodsPrice=prices[i].firstElementChild.innerHTML;
			arr[i].goodsNum=numInput[i].value;
			arr[i].goodsSum=sums[i].firstElementChild.innerHTML;
			arr[i].goodsChecked=check[i].firstElementChild.checked;
			//arr[i].goodsChecked="true";
			var strJSON=JSON.stringify(arr[i]);
			arrStr[i]=strJSON;
		}
		//console.log(arrStr);
		var str=arrStr.toString();
		//console.log(str);
		saveCookie("goodsInf",str,30);
		
		sumAll();
		
		zongLiang();
	}
	*/
	//计算总金额并赋值到页面上
	function sumAll(){
		var totalSum=0;
		for(var i=0;i<sums.length;i++){
			//console.log(check[i].firstElementChild.checked);
			if(check[i].checked==true){
				totalSum+=Number(sums[i].innerHTML.split("￥")[1]);
				//console.log(Number(sums[i].firstElementChild.innerHTML.split("￥")[1]));
			}
		}
		zongjinge.innerHTML="￥"+totalSum.toFixed(2);
		zongqianshu.innerHTML=zongjinge.innerHTML;
	}
	
	//复选框的点击事件（计算总金额）需要用事件监听的方法写，因为复选框本身有点击事件
	/*function sunForCheckboxChanged(){
		for(var i=0;i<check.length;i++){
//			check[i].firstElementChild.onclick=function(){
//				sumAll();
//			}
			check[i].firstElementChild.adEventLister("click",sumAll,false);
		}
	}*/
	
	//for(var i=0;i<check.length;i++){
		//check[i].firstElementChild.addEventListener("click",saveToCookie,false);
		//saveToCookie();
	//}
	
	//全选
	/*
	var quanxuan=document.getElementsByClassName("cart-checkbox");
	  if(quanxuan.checked==true){
	  	   _quanxuan();
	  }
	
	//quanxuan.addEventListener("click",_quanxuan,false);
	function _quanxuan(){
		for(var i=0;i<check.length;i++){
			check[i].checked=true;
		}
		//saveToCookie();
	}
	
	//反选
	var fanxuan=document.getElementById("fanxuan");
	fanxuan.addEventListener("click",_fanxuan,false);
	function _fanxuan(){
		for(var i=0;i<check.length;i++){
			//console.log(check[i].firstElementChild.checked);
			if(check[i].firstElementChild.checked==true){
				check[i].firstElementChild.checked=false;
			}else{
				check[i].firstElementChild.checked=true;
			}
		}
		//saveToCookie();
	}
	*/
	//点击删除按钮删除一行（删除该商品）
	function deleteGood(){
		//this.parentNode.parentNode.remove();
		table.deleteRow(this.parentNode.parentNode.rowIndex);
		//saveToCookie();
	}
	for(var i=0;i<deletes.length;i++){
		deletes[i].firstElementChild.addEventListener("click",deleteGood,false);
	}
	
	
	//求所选东西的总数量
	function zongLiang(){
		var zongjianshu=0;
		for(var i=0;i<numInput.length;i++){
			if(check[i].checked==true){
				zongjianshu+=Number(numInput[i].innerHTML);		
			}
		}
		zongshu.innerHTML = zongjianshu;
	//侧边栏
	document.getElementsByClassName("carnum")[0].innerHTML = zongjianshu;
	//右上  shop1-logo
	document.getElementsByClassName("shop1-logo")[0].innerHTML = zongjianshu;
	
	}
	
	for(let i=0;i<numInput.length;i++){
		 check[i].onclick=function(){
       	    zongLiang()
       	    sumAll();
       }
	}
	//全选
	var quanxuan=document.getElementsByClassName("cart-checkbox")[0];
	quanxuan.addEventListener("click",_quanxuan,false);
	function _quanxuan(){		
			zongLiang();  
            sumAll();		
	}
	//反选
	var fanxuan=document.getElementById("ckbox2");
	fanxuan.addEventListener("click",_fanxuan,false);
	function _fanxuan(){		
			zongLiang();  
            sumAll();		
	}
	//页面刚打开就调用	
    zongLiang();  
    sumAll();
	                 
}

//Jquery

	$("#ckbox1").click(function(){
		$(":checkbox").checkAll($("#ckbox1").attr("checked"));
		
	});
	
    $("#ckbox2").click(function(){
		$(".cart-x :checkbox").notCheck();		
		$(".cart-x :checkbox").checkParent($("#ckbox1"));	
	});
	
	
	$(".cart-x :checkbox").click(function(){
		$(".cart-x :checkbox").checkParent($("#ckbox1"));			
		
	});
	
