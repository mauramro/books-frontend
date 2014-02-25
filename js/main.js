/*function login(){*/
$("button").on("click", function(event){
	event.preventDefault();
	var container = $(".main_container");
	$("#test").slideToggle();
	if(container.hasClass( "closed")){
    $(container).removeClass( "closed" );
    $(container).addClass("open");
	} else {
		$(container).removeClass("open");
	    $(container).addClass( 'closed' );
	}
});

$(document).mouseup(function (e)
{
    var container = $("#test");

    if (!container.is(e.target) // if the target of the click isn't the container...
        && container.has(e.target).length === 0) // ... nor a descendant of the container
    {
        container.slideUp();
        $(".main_container").addClass('closed');
    }
});
/*}*/