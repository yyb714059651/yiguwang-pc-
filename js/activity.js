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
	//中间
	setInterval(function() {
		var endDate="2017-10-10";
		var times = new Array(); 
		times=endDate.split("-"); 
		var ts = (new Date(times[0], times[1]-1, times[2], 23, 59, 0)) - (new Date()); //计算剩余的毫秒数  
		if(ts<=0) { 
			 $("#djs_1").text("预订已结束,请于下次购买...");
			 $("#qx_1").text("抢鲜结束");
			 $("#qx_1").attr("href","#")
		}
		else {
	    var dd = parseInt(ts / 1000 / 60 / 60 / 24, 10); //计算剩余的天数  
	    var hh = parseInt(ts / 1000 / 60 / 60 % 24, 10); //计算剩余的小时数  
	    var mm = parseInt(ts / 1000 / 60 % 60, 10); //计算剩余的分钟数  
	    var ss = parseInt(ts / 1000 % 60, 10); //计算剩余的秒数  
	    dd = dd<10? "0"+dd:dd;
	    hh = hh<10? "0"+hh:hh;
	    mm = mm<10? "0"+mm:mm;
	    ss = ss<10? "0"+ss:ss;
	    var djs = dd + "天" + hh + "时" + mm + "分" + ss + "秒";
	    $("#djs_1").text("距抢鲜结束  "+djs);
		}
	}, 1000);

}