import angular from 'angular';
import app from './js/app-module';
import configAuth from './js/config-auth';
import configRoutes from './js/config-routes';
import './main.scss';

configAuth( app );
configRoutes( app );
angular.bootstrap( document, [ app.name ], {} );




