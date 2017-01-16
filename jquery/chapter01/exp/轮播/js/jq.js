var setIn = setInterval(banner,2000);

var imgIndex = 1;

function banner(){
	imgIndex++;
	if(imgIndex==7){
		imgIndex = 1;
	}
	 $('img').attr('src','img/img'+imgIndex+'.png');
	 img.setAttribute('src','img/img'+imgIndex+'.png');

	 // function attr(a,b){
	 // 	if(b){
	 // 		setAttribute
	 // 	}else{
	 // 		getAttribute
	 // 	}
	 // }
}

$('img').mouseover(function(){
	clearInterval(setIn);
});

// function mouseover(fn){
// 	obj.onmouseover = fn;
// }

$('img').mouseout(function(){
	clearInterval(setIn);
	setIn = setInterval(banner,2000);
});