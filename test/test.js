var assert = require("assert"),
    requirejs = require("requirejs"),
    should = require("should");
var url = "http://127.0.0.1:4000";
// -1 importar el modulo que consulta la base datos;
 

  var MongoClient = require('mongodb').MongoClient,
      mongodb = null;

  describe("Library Database", function() {
      
      before(function(done){

        MongoClient.connect('mongodb://127.0.0.1:27017', function(err, db) {
          if(err) {
            console.log(err); 
            done();
          }
          mongodb = db;
          done();
        });  
      }); 
      it("Connected to the db", function(done) {
          mongodb.serverConfig.connected.should.be.equal(true);
          done(); 
      });
  });

  

// -2 escribir los test que yo desee.
    
    var request  = require("supertest");
    /*require = require("../../books-backend/routes/books.js");*/
  
describe("Routes - Books", function() {
  
  //tests...  

  it("POST - /api/books", function(done){
        
      var book = {
        title: "Javascript test", 
        author: "john john",
        description: "something"
      }

      request(url)
        .post('/api/books')
        .send(book)
        .expect('Content-Type', /json/)
        .expect(200, done)
  });


  it("GET - /api/books should reponse with status 200 and Content-Type JSON", function(done){
    
      request(url)
        .get('/api/books')
        .expect('Content-Type', /json/)
        .expect(200, done);
  });

  



});

    describe("Routes - Users", function(){


        it("POST - /api/users",function(){
          var user = {
            name: "Emilia",
            email: "asdf@hotmail.com",
            avatar: "------"
          }
          request(url)
          .post('/api/users')
          .send(user)
          .expect('Content-Type', /json/)
        })

        it("GET - /api/users", function(done){

          request(url)
          .get('/api/users')
          .expect('Content-Type', /json/)
          .expect(200, done);
        })

    })
      // -2.1 - provar get all books.
      // -2.2 - obtner el usuario activo

// -3 empezar hacer que los test pasen



/*describe('Array', function(){
  describe('#indexOf()', function(){
    it('should return -1 when the value is not present', function(){
      assert.equal(-1, [1,2,3].indexOf(5));
      assert.equal(-1, [1,2,3].indexOf(0));
    })
    	describe('sub2', function(){
    		it('testing sub2', function(){

    		})
    	})
  })
})*/




