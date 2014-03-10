/*function login(){*/

  function hasClass(element, cls) {
    return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
  }

   Element.prototype.toggle = function() {
    if ( this.style.display == '' || this.style.display == 'none' ) {
        //alert ( "Changing display to NONE ");
        this.style.display = 'block';
    }else{
        this.style.display = 'none';
        //alert ( "Changing display to BLOCK ");
      }
    }

  console.log(document.getElementsByTagName("button")[0]);
  document.getElementsByTagName("button")[0].onclick = function(event){
  event.preventDefault();
  //console.log("test");



  var container = document.getElementsByClassName("container")[1];
  var login = document.getElementById("test");

  if(hasClass(container, 'closed') == true){
    container.className = '';
    container.className = 'container , open';
    login.toggle();
    //alert("clos");
  }else{
    container.className = 'container , closed';
    login.toggle();
  }


  /*if(container.hasClass() = "closed"){
    alert("test");
  }*/

  //document.getElementById("#test").slideToggle();
 /* if(container.hasClass(container, "closed")){
    $(container).removeClass(container, "closed" );
    $(container).addClass(container, "open");
  } else {
    $(container).removeClass(container, "open");
      $(container).addClass(container, 'closed');
  }*/
};

/*$(document).mouseup(function (e)
{
    var container = $("#test");

    if (!container.is(e.target) // if the target of the click isn't the container...
        && container.has(e.target).length === 0) // ... nor a descendant of the container
    {
        container.slideUp();
        $(".container").addClass('closed');
    }
});*/
/*}*/
