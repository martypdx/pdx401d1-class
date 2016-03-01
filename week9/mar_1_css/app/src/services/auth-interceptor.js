export default function( ngModule ) {
	ngModule.factory( 'authInterceptor', [ '$window', '$q', authInterceptor ] );
}

function authInterceptor ( $window, $q ) {
	return {
		request: function ( config ) {
			
			config.headers = config.headers || {};
			const token = $window.localStorage.getItem( 'satellizer_token' );
			if ( token ) {
				config.headers.Authorization = `Bearer ${token}`;
			}	
			
			console.log( config.headers );
			
			return config;
		},
		response: function (response) {
			if (response.status === 401) {
				redirectToLogin();
			}
			return response || $q.when(response);
		}
	};
}