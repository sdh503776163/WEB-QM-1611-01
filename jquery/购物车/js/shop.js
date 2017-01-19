xj();
hj()
//数量修改方法
$('.p').click(p);
function p(){
	var num = Number($(this).prev().val())+1;
	$(this).prev().val(num);
	xj($(this));
}

$('.s').click(s);
function s(){
	var num = Number($(this).next().val())-1;
	if(num <=0){
		return;
	}
	$(this).next().val(num);
	xj($(this));
}

//小计功能
function xj(obj){
	var d,num,m;
	if(obj){
		var fa = obj.parents('.sp-list');
		// d = fa.find('.dj').text();
		// num = fa.find('input').val();
		// m = (Number(d)*Number(num)).toFixed(1);
		// fa.find('.xj').text(m);
		getM(fa);
	}else{
		$('.sp-list').each(function(){
			// d = $(this).find('.dj').text();
			// num = $(this).find('input').val();
			// m = (Number(d)*Number(num)).toFixed(1);
			// $(this).find('.xj').text(m);
			getM($(this));
		});
	}
	hj();
}
function getM(obj){
	var d,num,m;
	d = obj.find('.dj').text();
	num = obj.find('input').val();
	m = (Number(d)*Number(num)).toFixed(1);
	obj.find('.xj').text(m);
}

//合计方法
function hj(){
	var hjm = 0;
	$('.sp-list .xj').each(function(){
		hjm+=Number($(this).text());
	});
	$('strong').text(hjm.toFixed(1));
}

//删除一行
$('.del').click(delRow);
function delRow(){
	$(this).parents('.sp-list').remove();
	hj();
}

//添加一行
$('.addRow').click(function(){
	var nodeTxt = $('<ul class="sp-list"><li class="sp"><img src="img/4.jpg"><span>Casio/卡西欧 EX-TR350</span></li><li class="dj">640.6</li><li class="sl"><div><span class="s">-</span><input type="text" value="1" readonly="readonly"><span class="p">+</span></div></li><li class="xj redColor fontBold">640.6</li><li class="cz"><span class="del">删除</span></li></ul>');
	nodeTxt.find('.s').click(s);
	nodeTxt.find('.p').click(p);
	nodeTxt.find('.del').click(delRow);
	$('.list-content').append(nodeTxt);
	hj();
});
