var 버튼 = $('.tab-button');
for (let i = 0; i < 3; i++) {
	버튼.eq(0).on('click', function(){
	  버튼.removeClass('orange');
	  버튼.eq(0).addClass('orange');
	  $('.tab-content').removeClass('show');
	  $('.tab-content').eq(0).addClass('show');
	})
}