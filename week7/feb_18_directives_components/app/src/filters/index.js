import angular from 'angular';
import momentFilter from './moment-filter';

const filters = angular.module( 'filters', [] );

momentFilter( filters );

export default filters.name;