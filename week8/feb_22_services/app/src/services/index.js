import angular from 'angular';
import petService from './petService';

const services = angular.module( 'services', [] );
services.constant( 'apiUrl', 'http://localhost:3000/api/v1' );

petService( services );

export default services.name;