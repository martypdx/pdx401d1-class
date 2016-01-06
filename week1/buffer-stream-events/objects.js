function A() {
	this.foo = function(){
		console.log('foo');
	};
}

var a1 = new A();
var a2 = new A();

console.log( 'A', a1.foo === a2.foo );

function B() {
}

B.prototype.foo = function(){
	console.log('foo in B');
};

var b1 = new B();
var b2 = new B();

console.log( 'B', b1.foo === b2.foo );

function C(name){
	B.call(this, name);	
	this.qux = true;
}

var inherit = require('util').inherits;

inherit(C, B);
// C.prototype = Object.create(B.prototype);
// C.prototype.constructor = C;
C.prototype.bar = function(){
	
};

C.prototype.foo = function(){
	C.super_.foo.call(this);
	console.log(this.qux);
};

var c1 = new C();



