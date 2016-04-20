;

window.onscroll = function () {
	elast();
}
	
function elast(){
		if (document.body.scrollTop > 2200 || document.documentElement.scrollTop > 2200){
	 document.getElementById('liquid2').style.animation = "elastic2 3s ease-in-out";
	 document.getElementById('liquid1').style.animation = "elastic1 3s ease-in-out";
	 document.getElementById('liquid3').style.animation = "elastic3 3s ease-in-out";
}}

var width = 1;
var id = setInterval(func, 25);
function func(){
	if (document.body.scrollTop > 2200 || document.documentElement.scrollTop > 2200){
	if(width < 95){
		width++;
		document.getElementById('liquid1').innerHTML = width*1 + "%";
	}
	if(width<=85){
		document.getElementById('liquid2').innerHTML = width*1 + "%";
	}
	if(width<=80){
		document.getElementById('liquid3').innerHTML = width*1 + "%";
	}
}
}