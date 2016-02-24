import angular from 'angular';
import resources from './resources';

const services = angular.module( 'services', [] );

// TODO: move to env and config
const baseUrl = 'http://localhost:3000/api/v1';

services.config( [ '$provide', function( $provide ){
	$provide.constant( 'baseUrl', baseUrl );
}]);

resources( services );

export default services.name;