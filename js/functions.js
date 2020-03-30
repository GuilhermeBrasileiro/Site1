$(function(){

	//Clique do botão contato

	$('nav a').click(function(){
		var href = $(this).attr('href');
		var offSetTop = $(href).offset().top;

		$('html,body').animate({'scrollTop':offSetTop});

		return false;
	})

	//Menu mobile

	$('.menu-mobile').click(function(){
		$(this).find('ul').slideToggle();
	})

	$('.mosaico .container .mosaico-wraper').slick({
		centerMode:false,
		slidesToShow:3,
		arrows:false,
		responsive:[

		{
			breakpoint:768,
			settings:{
				arrows:false,
				centerMode:true,
				slidesToShow:3
			}
		},

		{
			breakpoint:580,
			settings:{
				arrows:false,
				centerMode:true,
				slidesToShow:2
			}
		},

		{
			breakpoint:380,
			settings:{
				arrows:false,
				centerMode:true,
				slidesToShow:1
			}
		}

		]
	});

	$('.tratamento .container').slick({
		centerMode:false,
		slidesToShow:3,
		arrows:false,
		infinite:false,
		responsive:[

		{
			breakpoint:768,
			settings:{
				arrows:false,
				dots:true,
				infinite:false,
				centerMode:false,
				slidesToShow:2
			}
		},

		{
			breakpoint:480,
			settings:{
				arrows:false,
				dots:true,
				infinite:false,
				centerMode:false,
				slidesToShow:1
			}
		}

		]
	});

	$('.depoimentos .container').slick({
		centerMode:false,
		slidesToShow:1,
		arrows:false,
		dots:true,
		infinite:false
	});

})