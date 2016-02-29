import angular from 'angular';
import router from 'angular-ui-router';
import resource from 'angular-resource';
import services from './services';
import components from './components';
import configRoutes from './js/config-router';

import './main.scss';

const app = angular.module( 'myApp', [
	router, resource, services, components
]);

configRoutes( app );

angular.bootstrap( document, [ app.name ], {} );




