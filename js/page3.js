$(function(){
	$(".top-dq").mouseenter(function(){
		$(this).children(".dw").show();
	}).mouseleave(function(){
		$(this).children(".dw").hide();
	})
	$(".top-xz").mouseenter(function(){
		$(".appxz").show();
	}).mouseleave(function(){
		$(".appxz").hide();
	})
})


function ss(){
		var sh=document.getElementById("banner-aa");
		document.getElementById("banner").scrollLeft+=2;
		if(document.getElementById("banner").scrollLeft>=1420){
			sh.appendChild(sh.firstChild);//把第一个节点移动到当前节点内部的后面
			document.getElementById("banner").scrollLeft=0;
			clearInterval(ott);
			setTimeout("tt()",2000);
		}
	}
	function tt(){
		ott=setInterval("ss()",1);
	}
	setTimeout("tt()",2000)