// var obj = document.getElementById('test');
// console.log(obj);
// obj.onclick = function(){
// 	console.log();
// }
// obj.onclick = '';

// obj.onclick = test;
// function test(){
// 	alert('233333');
// }


var obj = document.getElementById('test');
obj.addEventListener('click',function(){
	console.log(this.onclick);
},false)

// obj.addEventListener('click',function(){
// 	alert('66666');
// },false)

// obj.removeEventListener('click',function(){
// 	alert('233333');
// },false)

// obj.addEventListener('click',test,false);
// function test(){
// 	alert('233333');
// }
// obj.removeEventListener('click',test,false);