var fs = require('fs');
var split = require("split"); 

var Transform = require("stream").Transform;
var util = require("util");
util.inherits(ReverseStream, Transform); // inherit Transform

function ReverseStream () {
    Transform.call(this); //, { "objectMode": true }); // invoke Transform's constructor
}

ReverseStream.prototype._transform = function (line, encoding, done) {
     this.push( line.reverse() + '\n' );
     done();
};

var file = fs.createReadStream( 'foo.txt' );
var output = fs.createWriteStream( 'foo-flip.txt' );

file.setEncoding( 'utf-8' );

var split = file.pipe( split() );

var reverse = new ReverseStream();
reverse.setEncoding('utf-8');

split.pipe( reverse );

reverse.pipe( output );

watchStream('file', file);
watchStream('split', split);
watchStream('reverse', reverse);
    
function watchStream( name, stream ){
    stream.on( 'data', data => {
        console.log( name, '==>', data ); 
    });
}