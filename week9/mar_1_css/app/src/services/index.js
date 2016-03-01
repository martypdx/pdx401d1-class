import angular from 'angular';
import resources from './resources';
import user from './user';
// import authInterceptor from './auth-interceptor';

const services = angular.module( 'services', [] );

// TODO: move to env and config
const baseUrl = 'http://localhost:3000/api/v1';

services.config( [ '$provide', function( $provide ){
	$provide.constant( 'baseUrl', baseUrl );
}]);

resources( services );
user( services );
// authInterceptor( services );

export default services.name;