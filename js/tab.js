// for (let i = 0; i < 3; i++) {
// 	$('.tab-button').eq(i).on('click', function(){
// 	  openTab(i)
// 	})
// }
var shirt = [95, 100, 105, 110];
var pants = [28, 30, 32, 34];

$('.form-select').eq(0).on('click', function () {
	var value = $('.form-select').eq(0).val();
	
	if (value == '셔츠') {
		$('.form-select').eq(1).removeClass('form-hide');
		$('.form-select').eq(1).html('');
		shirt.forEach(function(a){
			$('.form-select').eq(1).append(`<option>${a}</option>`);
		})
	}else if(value == '바지'){
		$('.form-select').eq(1).removeClass('form-hide');
		$('.form-select').eq(1).html('');
		pants.forEach(function(a){
			$('.form-select').eq(1).append(`<option>${a}</option>`);
		})
	}else{
		$('.form-select').eq(1).addClass('form-hide');
	}
})



$('.list').click(function (e) {
	openTab(e.target.dataset.id);
})

var car2 = { name: '소나타', price: 50000 }

$('#name').html(car2.name);
$('#price').html(car2.price);

$.get('https://codingapple1.github.io/price.json')
	.done(function(data){
		console.log(data.price)
	})
	.fall(function(){
		console.log('실패함')
	})



function openTab(num) {
	$('.tab-button').removeClass('orange');
	$('.tab-button').eq(num).addClass('orange');
	$('.tab-content').removeClass('show');
	$('.tab-content').eq(num).addClass('show');
}
