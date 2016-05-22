$(document).ready(function() {
    $('ul > li > a:not(.dont)').click(function() {
        var url = $(this).attr('href');
        
        $.ajax({
            url: url + '?ajax',
            success: function(data){
                $('#content').html(data);
                history.pushState('', document.title, window.location.pathname);
                $("#content").css("display", "none");
                $("#content").fadeIn(500);
                
            }
        });
        
        return false;
    });
    
    $("#content").css("display", "none");
    $("#content").fadeIn(500);
    
    $('#scrollup img').mouseover( function(){
		$( this ).animate({opacity: 0.65},100);
	}).mouseout( function(){
		$( this ).animate({opacity: 1},100);
	}).click( function(){
		window.scroll(0 ,0); 
		return false;
	});

	$(window).scroll(function(){
		if ( $(document).scrollTop() > 0 )
			$('#scrollup').fadeIn('fast');
		else 
			$('#scrollup').fadeOut('fast');
	});
});

function validate_form()
{
	valid = true;

        if ( document.contact_form.fname.value == "")
        {
                alert ( "Пожалуйста заполните поле 'Имя'." );
                valid = false;
        } else
        if ( document.contact_form.lname.value == "")
        {
                alert ( "Пожалуйста заполните поле 'Фамилия'." );
                valid = false;
        }
        return valid;
}
