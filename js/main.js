$(function(){
	

	$('.menu-btn').on('click', ()=>{
		$('.menu-items').toggleClass('active');
		$('.menu-btn').toggleClass('close');
		$('.menu-contacts').toggleClass('shown');
	});

	$('.footer__menu-btn').on('click', ()=>{
		$('.footer__menu-items').toggleClass('active');
		$('.footer__menu-btn').toggleClass('close');
		$('.footer__menu-contacts').toggleClass('shown');
	});

    window.addEventListener('resize', function(){
        let w = $(window).width();
      console.log (w);
        
    });
});


