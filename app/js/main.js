/*function login(){*/
var container = document.getElementsByClassName("container")[1];
  function hasClass(element, cls) {
    return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
  }

   Element.prototype.toggle = function() {
    if ( this.style.display == '' || this.style.display == 'none' ) {
        //alert ( "Changing display to BLOCK ");
        this.style.display = 'inline-block';
    }else{
        this.style.display = 'none';
        //alert ( "Changing display to NONE ");
      }
    }

  console.log(document.getElementsByTagName("button")[0]);
  document.getElementsByTagName("button")[0].onclick = function(event){
  event.preventDefault();

  var login = document.getElementById("test");

  if(hasClass(container, 'closed') == true){
   /* container.className = '';
    container.className = 'container , open';*/
    container.classList.add('open');
    login.toggle();
    //alert("clos");
  }else{
    container.classList.remove('open');
    container.classList.add('closed');
    login.toggle();
  }

  //document.getElementById("#test").slideToggle();
 /* if(container.hasClass(container, "closed")){
    $(container).removeClass(container, "closed" );
    $(container).addClass(container, "open");
  } else {
    $(container).removeClass(container, "open");
      $(container).addClass(container, 'closed');
  }*/
};

var search = document.getElementById('search');
var dropdown = document.getElementById('search-dropdown');
  console.log(search);
  search.onclick = function(){
    dropdown.toggle();
  }

var grid = document.getElementById('grid-list');
var block = document.getElementById('block-list');
grid.onclick = function(){
  container.classList.add('grid-list');
}
block.onclick = function(){
  container.classList.remove('grid-list');
}

/*document.onmouseup = function(e){
  var container = document.getElementById('test');
  alert('test')

    if(!container.is(e.target) && container.has(e.target).lenght === 0){
      alert('test');
    }
};*/
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
