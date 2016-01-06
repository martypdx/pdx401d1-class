

function isHappy( n ) {
	const seen = {};
	
	return check( n );
	
	function check( n ){
		if ( n === 1 ) return true;
		
		const str = n.toString();
		if ( seen[str] ) return false;
		
		seen[str] = true;
		n = str.split('').reduce( ( s, n ) => {
			return s + ( n * n );
		}, 0);
		
		return check( n );
	}
	
	
}

console.log( 4, isHappy(4), 19, isHappy(19) );