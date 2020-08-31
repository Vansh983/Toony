$(document).ready(function(){
			$("a").on('click', function(event) {
    			if (this.hash !== "") {
      			event.preventDefault();
      			var hash = this.hash;

      			$('html, body').animate({
        			scrollTop: $(hash).offset().top
      					}, 1500, function(){
           				window.location.hash = hash;
      			});
    			} 
 			});
			$(window).scroll(function(){
				var b=$('body').scrollTop()
				if(b>250){
					$('.list').addClass('menu1-active');
					$('.navhead').addClass('navhead-active')
					$('.heading').addClass('heading-active')
				}
				else{
					$('.list').removeClass('menu1-active')
					$('.navhead').removeClass('navhead-active')
					$('.heading').removeClass('heading-active')
				}
			})

			$(".head1").click(function(){
        		$("table").scrollLeft(10);
    		});
			$('.pokemon1').hover(function(){
				$('.fa-angle-double-down').toggleClass('pokemon-arrow')
			})
			$('.input').click(function(){
				$(this).addClass('signup-active')
			})
			$('.newsign').click(function(){
				$('.signshow').fadeTo('fast', 1);
				$('.hidesign, .newsign').hide('fast')
			})
			$('.toggle').click(function(){
				$('.bg1heading').toggleClass('black')
				$('.about').toggleClass('info1active')
				$('.list').toggleClass('black')
				$('.sign').toggleClass('black')
				$('.navhead').toggleClass('black')

			})
			new WOW().init();
			
		})	
			