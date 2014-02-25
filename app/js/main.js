function myFunction()
{
var x="";
var time=new Date().getHours();
if (time<20)
  {
  x="Good day";
  }
else
  {
  x="Good evening";
  }
document.getElementById("demo").innerHTML=x;
}

function test(){
  $.getJSON("http://books-backend.herokuapp.com/api/v1/books"), function(data) {
    console.log(data);
      var feed = data.feed;
      console.log(feed);
    }
}
