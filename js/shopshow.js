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
	
	//放大镜
	var Box1=getClass("zj-bigbox")[0];
	var Pop=getClass("pop")[0];
	var _Imgbox=getClass("bigImg")[0];
	var IMG=_Imgbox.getElementsByTagName("img")[0];
	var list=getClass("ul-list")[0];
	var BtnList = list.getElementsByTagName("li"); 
	var len = BtnList.length; 
	
	var bw=484,bh=484;
	var pw=242,ph=242;
	var imgw=968;imgh=968;
	
	
	var _top=0;
	Box1.onmousemove=function (event){
		var e=event||window.event;
		var _left=0;
		//左右边界 
		if(e.pageX-Box1.offsetLeft<pw/2){
			_left=0; //左
		}else if(e.pageX-Box1.offsetLeft>bw-pw/2){  
			_left=bw-pw; //右
		}else{
			_left=e.pageX-Box1.offsetLeft-pw/2;   
		}
		//上下边界
		
		if(e.pageY-Box1.offsetTop<ph/2){
			_top=0;
		}else if(e.pageY-Box1.offsetTop>(bh-ph/2)){
			_top=bh-ph;
		}else{
			_top=e.pageY-Box1.offsetTop-ph/2;
		}
	//小框
	console.log(_left+"-"+(Box1.offsetTop));
	Pop.style.left=_left+"px";
	Pop.style.top=_top+"px";
	//大框
	IMG.style.left=(-1)*(imgw/bw)*_left+"px";
	IMG.style.top=(-1)*(imgh/bh)*_top+"px";
}
	//移上
	Box1.onmouseover=function(){
		Pop.style.display="block";
		_Imgbox.style.display="block";	
	}
	//移出
	Box1.onmouseout=function(){
		Pop.style.display="none";
		_Imgbox.style.display="none";	
	}
	
	//点击下图
	for(var i=0;i<len;i++){    //下面小图的点击
		    BtnList[i].onmouseover = function(){
		    	Box1.getElementsByTagName("img")[0].src=this.firstElementChild.src;
		    	_Imgbox.getElementsByTagName("img")[0].src=this.firstElementChild.src;
					 
				}
			}
	
	//选项卡
	    let tabshz=getId("tabs").getElementsByTagName("li");
	    let contents=getId("content").getElementsByTagName("section");
	    
	    for(let i=0;i< tabshz.length;i++){
		   tabshz[i].index=i;
		   tabshz[i].onclick=function(){
	    for(let j=0;j< tabshz.length;j++){
		    tabshz[j].className="";		    
			contents[j].style.display="none";
		}
	     this.className="active";
	        
		    contents[this.index].style.display="block";
	  }
	
	}
//	    tabshz[0].onclick=function(){		   		   
//		    contents[0].style.display="block";
//	    	contents[1].style.display="none";
//		    contents[2].style.display="none";			
//		}
//      tabshz[1].onclick=function(){       	
//          contents[0].style.display="none";
//	    	contents[1].style.display="block";
//		    contents[2].style.display="none";			
//		}
//	    tabshz[2].onclick=function(){	    	
//          contents[0].style.display="none";
//	    	contents[1].style.display="none";
//		    contents[2].style.display="block";			
//		}
	//右上点击轮播   
	//点击上移动
	    let num =0;
	    let cd= getId("List1").children.length;
	getClass("LeftBotton")[0].onclick=function(){
		// alert(1);
        num++;
        if(num>=cd-2){
       	   num=1;
       	   getId("List1").style.top="0px";
        }
        move(getId("List1"),{"top":-num *185});
	
	}
    //点击下移
    getClass("RightBotton")[0].onclick=function(){
		// alert(1);
        num--;
        if(num<0){
       	   num=cd-4;
       	   getId("List1").style.top=-(cd-3)*180+"px";
        }
        move(getId("List1"),{"top":-num *185});
	
	}
    //轮播
      let  timers=null;
        clearInterval( timers);
        timers = setInterval(getClass("LeftBotton")[0].onclick,2000);
	getClass("lunbo-ri-list")[0].onmouseover=function(){
		clearInterval(timers);
	}
	getClass("lunbo-ri-list")[0].onmouseout=function(){
		clearInterval(timers);
		timers = setInterval(getClass("LeftBotton")[0].onclick,2000);
	}
    
	
	
	
                  
}
