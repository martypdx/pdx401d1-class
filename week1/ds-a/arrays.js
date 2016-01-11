var assert = require('assert');

var dups = [1, 4, 5, 3, 2, 1];
var nodups = [1, 4, 5, 3, 2];

assert( hasDups(dups), 'dups should be true' );
assert( !hasDups(nodups), 'nodups should be false' );

function hasDups(arr){
    
}