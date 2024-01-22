// for (let i = 0; i < 3; i++) {
// 	$('.tab-button').eq(i).on('click', function(){
// 	  openTab(i)
// 	})
// }


$('.form-select').eq(0).on('click', function () {
	var value = $('.form-select').eq(0).val();
	
	if (value == '셔츠') {
		$('.form-select').eq(1).removeClass('form-hide');
		$('.form-select').eq(1).html('');
		var shirt = '<option>100</option><option>105</option>';
		$('.form-select').eq(1).append(shirt)
	}else if(value == '바지'){
		$('.form-select').eq(1).removeClass('form-hide');
		$('.form-select').eq(1).html('');
		var pants = '<option>28</option><option>30</option>';
		$('.form-select').eq(1).append(pants)
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


function openTab(num) {
	$('.tab-button').removeClass('orange');
	$('.tab-button').eq(num).addClass('orange');
	$('.tab-content').removeClass('show');
	$('.tab-content').eq(num).addClass('show');
}
