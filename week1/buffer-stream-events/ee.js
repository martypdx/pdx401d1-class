
function MyEventEmitter(){
	this.events = {
		'write': [],
		'read': []
	};
}

// #3
MyEventEmitter.prototype = {
	
	constructor: MyEventEmitter,
	
	on: function( eventName, callback ){
		var events = this.events[eventName] || (this.events[eventName] = [] ); 
		events.push( callback );
	},
	
	fire: function( eventName ){
		var events = this.events[eventName] || (this.events[eventName] = []); 
		if ( !events ) return;
		
		events.forEach( callback => callback() );
	},
	
	off: function( eventName, callback ){
		
	}
};

var mee = new MyEventEmitter();
mee.on('foo', function(){
	//do something
});
mee.fire('foo');