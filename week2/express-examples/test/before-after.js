var chai = require('chai');
var assert = chai.assert;
var fs = require( 'fs' );

describe('suite', function(){
    
    function runSomeTest( name ) {
        it('some color ' + name, function(){
            assert.equal( name, 12 );
        });
    }
    
    [ 'red', 'blue', 'green' ].forEach( c => runSomeTest( c ) );
    
});
