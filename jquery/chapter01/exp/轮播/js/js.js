var setIn = setInterval(banner,2000);

var imgIndex = 1;
var img = document.querySelector('img');
function banner(){
	// console.log(6666);
	imgIndex++;
	if(imgIndex==7){
		imgIndex = 1;
	}
	img.setAttribute('src','img/img'+imgIndex+'.png');
}

img.onmouseover = function(){
	clearInterval(setIn);
}

img.onmouseout = function(){
	clearInterval(setIn);
	setIn = setInterval(banner,2000);
}