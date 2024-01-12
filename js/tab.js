// for (let i = 0; i < 3; i++) {
// 	$('.tab-button').eq(i).on('click', function(){
// 	  openTab(i)
// 	})
// }


$('.list').click(function(e){
	openTab(e.target.dataset.id);
})

var car2 = { name : '소나타', price : 50000 } 

$('#name').html(car2.name);
$('#price').html(car2.price);


function openTab(num){
	$('.tab-button').removeClass('orange');
	$('.tab-button').eq(num).addClass('orange');
	$('.tab-content').removeClass('show');
	$('.tab-content').eq(num).addClass('show');
}