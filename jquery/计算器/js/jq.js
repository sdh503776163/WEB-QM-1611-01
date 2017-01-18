$('span').click(function(){
	getStr($(this),$('#number'));
});

$('#delOne').click(delOne);
$('#delAll').click(delAll);
$('#q').click(ys);

var inputNum = 0;
var num1 = '';
var num2 = '';
var y = "";
var j = 0;

function getStr(that,input){
	//获取str进行判断
	var inputStr = input.val();
	var thatStr = that.text();
	// console.log(y);

	if(/^[+|\-|*|/|%]$/.test(thatStr)){
		y = thatStr;
	}else{
		if(y==''){
			console.log('第一个数字');
			if(thatStr == '.'){
				if(inputStr == '0'){
					num1 = '0.';
				}else{
					num1 += thatStr;
				}
			}else if(/^[0-9|00]$/.test(thatStr)){
				console.log('666');
				if(thatStr == '00'){
					if(inputStr == '0'){
						return;
					}else{
						num1 += thatStr;
					}
				}else{
					num1 += thatStr;
				}
				
			}
			if(num1 == ''){
				inputNum = 0;
			}else{
				inputNum = num1;
			}
			
			setVal();
		}else{
			console.log('第二个数字');
			if(thatStr == '.'){
				if(inputStr == '0'){
					num2 = '0.';
				}else{
					num2 += thatStr;
				}
			}else if(/^[0-9|00]$/.test(thatStr)){
				if(thatStr == '00'){
					if(inputStr == '0'){
						return;
					}else{
						num2 += thatStr;
					}
				}else{
					num2 += thatStr;
				}
				
			}
			inputNum = num2;
			setVal();
		}
	}

	
	
	
}

function delOne(){
	//删除一位函数
	if(/^[+|\-|*|/|%]$/.test(y)){
		if(num2 < 10){
			num2 = '';
			inputNum = 0;
			setVal();
			return;
		}
	}else{
		if(num1 < 10){
			num1 = '';
			inputNum = 0;
			setVal();
			return;
		}
	}
}

function delAll(){
	//清空方法
	$('#number').val(0);
	num1 = '';
	num2 = '';
	y = '';
}

function setVal(){
	//向input里设置value值
	$('#number').val(inputNum);
}

function ys(){
	//执行运算函数
	console.log(num1);
	console.log(y);
	console.log(num2);
	num1 = Number(num1);
	num2 = Number(num2);
	switch(y){
		case '+':
			j = num1 + num2;
		break;
		case '-':
			j = num1 - num2;
		break;
		case '*':
			j = num1 * num2;
		break;
		case '/':
			if(num2==0){
				j = '除数不能为0';
			}else{
				j = num1 / num2;
			}
		break;
		case '%':
			j = num1 % num2;
		break;
	}
	$('#number').val(j);
	num1 = '';
	num2 = '';
	y = '';
	inputNum = '';
}



/*
	全局变量保存数字和运算符
	根据运算符判断当前是第几个数字
		如果运算符为空，将数字存入num1，插入input
			判断第一个数字是不是0
				如果是0直接插入数字
				如果不是进行字符串拼接之后插入
		如果不为空，将数字存入num2，插入input
			判断第一个数字是不是0
				如果是0直接插入数字
				如果不是进行字符串拼接之后插入
	或者是那一个全局val保存input需要插入的值
*/