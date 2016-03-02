import angular from 'angular';
import router from 'angular-ui-router';
import resource from 'angular-resource';
import animate from 'angular-animate';
import services from '../services';
import components from '../components';

import ngDialog from 'ng-dialog';
import 'ng-dialog/css/ngDialog.css';
import 'ng-dialog/css/ngDialog-theme-default.css';

const app = angular.module( 'myApp', [
	router, resource, animate, ngDialog, services, components
]);

export default app;