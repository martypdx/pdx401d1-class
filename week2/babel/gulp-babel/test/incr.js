import incr from '../src/incr';
import assert from 'assert';

it( 'running', () => {
	assert.deepEqual( incr(), [2, 3, 4] );	
});