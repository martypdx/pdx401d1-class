import angular from 'angular';
import pets from './pets/pets';

const views = angular.module( 'views', [] );

views.config( function( $stateProvider ) {
	pets( $stateProvider );
	// $stateProvider.state( 'pets', pets );
});

export default views.name;