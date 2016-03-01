import angular from 'angular';
import router from 'angular-ui-router';
import resource from 'angular-resource';
import animate from 'angular-animate';
// import dialog from './js/dialog';
import services from './services';
import components from './components';
import configAuth from './js/config-auth';
import configRoutes from './js/config-routes';

import ngDialog from 'ng-dialog';
import 'ng-dialog/css/ngDialog.css';
import 'ng-dialog/css/ngDialog-theme-default.css';


import './main.scss';

const app = angular.module( 'myApp', [
	router, resource, animate, ngDialog, services, components
]);

// app.config( function( $httpProvider ) {
// 	$httpProvider.interceptors.push( 'authInterceptor' );
// });

configAuth( app );
configRoutes( app );


angular.bootstrap( document, [ app.name ], {} );




