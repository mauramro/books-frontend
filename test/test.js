var assert = require("assert")
    
// -1 importar el modulo que consulta la base datos;

// -2 escribir los test que yo desee.
      // -2.1 - provar get all books.
      // -2.2 - obtner el usuario activo

// -3 empezar hacer que los test pasen



describe('Array', function(){
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
})

describe('test', function(){
	describe('Number()', function(){
		it('testing numbers', function(){
			var test = "hola";
			var test1 = "hola";
			assert(test == test1);
			/*assert(1 === 2);*/
		})
	})
})

describe('testing2', function(){
	describe('Probando mocha', function(){
		it('Probando comments', function(){
			assert(20 == 50-30);
		})
	})
})

describe('testing3', function(){
	describe('Probando mocha otra vez', function(){
		it('Probando comments asdf', function(){
			assert(1 == true);
		})
	})
})

describe('html test', function(){
  /*var div = document.getElementById('test').children[0].textContent;
console.log(div);*/
  describe('Probando background', function(){
    it('Match background', function(){
      assert('First' == 'First');
    })
  })
})