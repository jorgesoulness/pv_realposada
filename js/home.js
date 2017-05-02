$(document).ready(function(){
	$('#acerca').parallax("50%", 0, 0.1, true);
	$('#habitaciones').parallax("50%", 1000, 0.1, true);
	$('#tours').parallax("50%", 1500, 0.1, true);
    
    $('a.mostrardetalle').click(function(e){
        e.preventDefault();
        var tar = $(this).attr('target');
        var boxHide = $('#DetailHidden'+tar);
        
        boxHide.slideDown('slow');
        setTimeout(function(){
            $('body, html').animate({
                scrollTop: boxHide.offset().top -75
            }, 300, 'easeOutCubic');
        }, 200);
        
    });
    
    $( ".ocultar" ).click(function() {
	  $( ".contentHab" ).slideUp( "slow" );
	  setTimeout(function() {
				$('html, body').animate({
			       scrollTop: $("#habitaciones").offset().top
			   }, 500, 'easeOutCirc');
	 }, 0);
	});
	
});

