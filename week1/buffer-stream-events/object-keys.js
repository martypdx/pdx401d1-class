function A(name) {
	this.foo = name;	
}

A.prototype.doSomething = function(){
	
};

function B(name){
	A.call(this, name);
}

B.prototype = Object.create(A.prototype);

var b = new B('foo');

console.log(b);

// var key;

// for( key in b ) {
// 	console.log(key);
// }

// console.log(Object.keys(b));

// new A()
// 	1. create an instance 
// 	2. run the constructor with result of #1