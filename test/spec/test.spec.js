/*global describe, it */

var url = "http://books-backend.herokuapp.com/api/v1/";
/*var mongodb = mongodb;*/

'use strict';
(function () {


    describe('Give it some context', function () {
        describe('maybe a bit more context here', function () {
            it('should run here few assertions', function () {

            });
        });
    });

    describe('trying mocha', function () {

      it('should have property name - should fail', function() {
        expect({ name: 10 }).property('name');
      });

      it('boolean test', function() {
        expect(false).to.be.eql(!true);
      });


      it('100 + 20 equal to 120', function() {
        expect(100 + 20).to.be.eql(120);
      });

    });


    describe("Routes - Books", function() {

  //tests...

  it("GET - /api/v1/books", function(done){

    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", url + "books" , false);
    xmlHttp.onload = function(){
      if(xmlHttp.status >= 200 && xmlHttp.status < 400){
         data = JSON.parse(xmlHttp.responseText);
       /*  document.getElementById('response').innerHTML = data[0]._id + '<br/>' + data[0].title + '<br/>' + data[0].author + '<br/>' + data[0].description;*/
        console.log(data[0].title);
        expect( data[0].title ).to.be.eql('Javascript the Good Parts');

      }else{

      }

    };
      xmlHttp.oneerror = function(){
        alert('error!');
      };
    xmlHttp.send();
  /*  console.log(books.val);
    document.getElementById("response").innerHTML = xmlHttp.responseText;*/
    return xmlHttp.responseText;

     done();
    });
  });

/*
    describe("Routes - Books", function() {

  //tests...

  it("POST - /api/v1/books", function(){

    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("POST", url + "books" , true);
    xmlHttp.send();
    document.getElementById("response").innerHTML = xmlHttp.responseText;
    return xmlHttp.responseText;
    });
  });

     describe("Routes - Books", function() {

  //tests...

  it("PUT - /api/v1/books", function(){

    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("PUT", url + "books/528d7b2e91c2838acea81ed5" , true);
    xmlHttp.send();
    document.getElementById("response").innerHTML = xmlHttp.responseText;
    return xmlHttp.responseText;
    });
  });

      describe("Routes - Books", function() {

  //tests...

  it("DELETE - /api/v1/books", function(){

    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("DELETE", url + "books/528d7b2e91c2838acea81ed5" , true);
    xmlHttp.send();
    document.getElementById("response").innerHTML = xmlHttp.responseText;
    return xmlHttp.responseText;
    });
  });



       describe("Routes - Users", function() {

  //tests...

  it("GET - /api/v1/users", function(){

    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", url + "users/527d01bef373d12135000001" , false);
    xmlHttp.send();
    document.getElementById("response").innerHTML = xmlHttp.responseText;
    return xmlHttp.responseText;
    });
  });
*/
})();
