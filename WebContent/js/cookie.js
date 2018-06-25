//设置cookie
function setCookie(_name,_val,_expires){
	var d = new Date();
	d.setDate(d.getDate()+_expires);
	document.cookie = _name+'='+_val+';path=/;expires='+d.toGMTString();
}

//删除cookie
function removeCookie(_name,_val){
	setCookie(_name,_val,-1);
}


//获取指定cookie

function getCookie(_name){
	var str = document.cookie;
	var arr = str.split('; ');
	var len = arr.length;
	for(var i=0;i<len;i++){
		var newarr = arr[i].split('=');
		if(newarr[0]==_name){
			return newarr[1]
		}
	}
}