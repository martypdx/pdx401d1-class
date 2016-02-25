import angular from 'angular';
import router from 'angular-ui-router';
import resource from 'angular-resource';
import template from './app.html';
import './css.css';

const app = angular.module( 'myApp', [
	router, resource
]);

var getUrl = 'http://localhost:3000/api/v1/pets?populate=store';

app.factory( 'PetService', function( $resource ) {
	return $resource( getUrl );
});

app.factory( 'FooService', function( $timeout ){
	return $timeout(function(){
		return { foo: 'FOO' };
	}, 5000);
});

app.config( function( $stateProvider ) {
	$stateProvider
		.state( 'pets', {
			url: '/pets?type',
			template: `
				<h3>These are the pets <span ng-if='type'>Of type {{type}}</span></h3>
				
				<li ng-repeat="pet in pets">
					{{pet.name}} the 
					<span style='color: blue' ui-sref='pets.type({ petType: pet.type })'>
						{{pet.type}}
					</span>
				</li>
				
				<div ui-view='details'></div>
				<div ui-view='picture'></div>
				<div ui-view='availability'></div>
			`,
			resolve: {
				pets ( PetService, $stateParams ) {
					return PetService.query({ 
						query: { 
							type: $stateParams.type 
						} 
					});
				}
			},
			controller: function( $scope, pets ){
				$scope.pets = pets;
			}
		})
		.state( 'pets.type', {
			url: '/type/:petType',
			views: {
				details: {
					template: `<div class='details'>This is the detail view for type {{type}}</div>`,
					controller: function( $scope, $stateParams ){
						$scope.type = $stateParams.petType;
					}
				},
				picture: {
					template: `<div class='picture'>This is the picture of {{type}}</div>`,
					controller: function( $scope, $stateParams ){
						$scope.type = $stateParams.petType;
					}
					
				},
				availability: {
					template: `<div class='availability'>This is the list of available {{type}} pets</div>`,
					controller: function( $scope, $stateParams ){
						$scope.type = $stateParams.petType;
					}
					
				}
			}
		})
		.state( 'stores', {
			url: '/stores',
			template: 'These are the stores'
		});
	
});

app.run( function( $rootScope, $state ) {
	$rootScope.place = 'earth';
	$rootScope.petTypes = [ 'bird', 'dog', 'lion' ];
	
	// $state.transitionTo( 'pets' );
});

document.body.innerHTML = template;
angular.bootstrap( document, [ app.name ], {} );




