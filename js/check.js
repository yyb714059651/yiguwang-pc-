//jQuery插件
jQuery.fn.extend(
	{		
		//根据传入的值，决定是选择，还是取消
		"checkAll":function(isCheck){
			this.each(function(){
				this.checked = isCheck;
			});
		},
		
		//反选
		"notCheck":function(){
			this.each(function(){
				this.checked = !this.checked;
			});
		},
		//反向控制
		//参数：$parent 表示要反向控制的全选复选框
		"checkParent":function($parent){
			let allChecked = true;
			this.each(function(){
				if(!this.checked){
					allChecked = false;
				}
			});
			
			$parent.attr("checked",allChecked);			
		}		
	}
);
