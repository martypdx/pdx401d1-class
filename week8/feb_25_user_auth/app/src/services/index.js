import angular from 'angular';
import resources from './resources';
import user from './user';
import dialog from './dialog';

const services = angular.module( 'services', [] );

// TODO: move to env and config
const baseUrl = 'http://localhost:3000/api/v1';

services.config( [ '$provide', function( $provide ){
	$provide.constant( 'baseUrl', baseUrl );
}]);

dialog( services );
resources( services );
user( services );

export default services.name;