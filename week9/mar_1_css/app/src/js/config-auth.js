import satellizer from 'satellizer';

export default function( app ) {
	app.requires.push( satellizer );
	app.config( [ '$authProvider', configAuth ]);
	app.run( [ '$rootScope', '$auth', 'ngDialog', '$state', runAuth ]);
}

function configAuth( $authProvider ) {
	const url = `${API_URL}/auth/twitter`;
	$authProvider.twitter({ url });
}

function runAuth ( $rootScope, $auth, ngDialog, $state ) {

	$rootScope.$on('$stateChangeStart', function (event, toState, toParams) {
   
    	if ( toState.data && toState.data.requireAuth && !$auth.isAuthenticated() ) {
      		event.preventDefault();
			  
      		const dialog = ngDialog.open({ 
				template: `<signin success="success(response)"/>`, 
				plain: true,
				controller: [ '$scope', function( $scope ){
					$scope.success = function( response ){
						dialog.close();
						return $state.go( toState.name, toParams );
					};
				}]
			});
			
			dialog.closePromise
				// .then( () => alert( 'success!') )
				.catch( err => alert( 'failure!\n\n' + err ) );
    	}
	});
  
}