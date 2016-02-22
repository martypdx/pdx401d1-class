import angular from 'angular';
import petService from './petService';

const services = angular.module( 'services', [] );
petService( services );

export default services.name;