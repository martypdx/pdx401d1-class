angular.module( 'authApp', [] )
	.controller( 'authCtrl', [ '$scope', '$http', function( $scope, $http ) {
		
		$scope.action = '';
		
		$scope.submit = function( event ) {
			
			var action = $scope.action;
			var http;
			$scope.error = '';
			
			if ( action === 'signup' ) {
				http = $http.post( '/login/signup', {
					username: $scope.username,
					password: $scope.password
				});
			}
			else if ( action === 'signin' ) {
				http = $http.get( 'login/signin', {
					headers: {
						Authorization: 'Basic ' + btoa( $scope.username + ':' + $scope.password )
					}
				});
			}
			
			if ( http ) {
				http
					.then( res => {
						window.localStorage.token = res.data.token;
						window.location.assign('/');
					})
					.catch( res => {
						$scope.error = res.statusText + '\n' + res.data.msg;
					});	
			}
			
		};
		
		
	}]);