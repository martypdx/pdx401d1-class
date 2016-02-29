import angular from 'angular';
import resources from './resources';
import user from './user';

const services = angular.module( 'services', [] );

// TODO: move to env and config
const baseUrl = 'http://localhost:3000/api/v1';

services.config( [ '$provide', function( $provide ){
	$provide.constant( 'baseUrl', baseUrl );
}]);

resources( services );
user( services );

export default services.name;