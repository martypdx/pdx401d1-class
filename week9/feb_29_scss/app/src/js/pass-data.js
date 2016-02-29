export default function passData( args ) {
	
	const passState = function( $scope, $stateParams ) {
		Object.keys( $stateParams ).forEach( key => {
			$scope[key] = $stateParams[key];
		});
		
		if ( args ) {
			args.forEach( ( a, i ) => {
				$scope[ args[i] ] = arguments[ i + 2 ];
			});
		}
	};
	
	const inject = [ '$scope', '$stateParams' ];
	if ( args ) {
		args.forEach( a => inject.push(a) );
	}
	
	passState.$inject = inject;
	
	return passState;
}
