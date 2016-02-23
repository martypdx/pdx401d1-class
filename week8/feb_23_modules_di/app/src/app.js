import angular from 'angular';
import router from 'angular-route';
import resource from 'angular-resource';
import template from './app.html';

const app = angular.module( 'myApp', [
	router, resource
]);

app.constant( 'url', 'http://locahost:3000/api/vi');
app.value( 'foo', 'FOO' );

app.provider( 'petType', function( $httpProvider ) {
	var petTypes = {
		cat: 'feline',
		dog: 'canine',
		bird: 'raptor'	
	};
	
	this.setName = function( type, name ) {
		petTypes[ type ] = name;
		return this;
	};
	
	this.$get = function(){ 
		return petTypes; 
	};
});

app.factory( 'storeLocation', function(){
	return 'bar';
});

app.config( function( petTypeProvider, $injector ){
	petTypeProvider
		.setName( 'bird', 'flyer' )
		.setName( 'cat', 'claws and paws' );
	
	console.log( 'config', $injector.get( 'petTypeProvider' ) );
});

var $injector = angular.injector();

app.run( function( $injector ) {
	
	console.log( 'run', $injector.get( 'petType' ) );
});



// run: function( param ) {
// 	if ( Array.isArray( param ) ){
// 		var fn = param[param.length -1];
// 		fn.$inject = param.slice(0, param.length - 2 );
// 	}
// 	// act on fn
// }

var getUrl = 'http://localhost:3000/api/v1/pets?populate=store';

app.factory( 'PetService', function( $resource ) {
	return $resource( getUrl );
});

app.factory( 'DataService', function( $http, $cacheFactory ){
	var petsCache = $cacheFactory('pets');
	var storeCache = $cacheFactory('stores');
	
	return {
		getPets: function(){
			return $http.get( getUrl, {
				cache: petsCache
			}).then( res => res.data );
		},
		getStores: function(){
			return $http.get( url, {
				cache: storeCache
			}).then( res => res.data );
		},
		savePet: function( pet ){
			$http.post( '', pet ).then( res => {
				petsCache.removeAll();
			});
		},
		updatePet: function( pet ){
			$http.put( '', pet ).then( res => {
				var pet = res.data;
				var pets = petsCache.get( getUrl );
				var index = pets.findIndex( p => p._id = pet._id );
				pets[ index ] = res.data;
				petsCache.put( getUrl, pets );
			});
		}
	};
});

app.controller( 'PetsCtrl', [ '$scope', 'PetService', function( $scope, PetService ) {
	PetService.query( { query: { name: 'tweety' } }, pets => {
		$scope.pets = pets;
	});
}]);
// app.controller( 'PetsCtrl', [ '$scope', '$http', function( $scope, $http ) {
// 	$http.get( 'http://localhost:3000/api/v1/pets', {
// 		cache: true
// 	}).then( res => {
// 		$scope.pets = res.data;
// 	});
// }]);

app.controller( 'StoresCtrl',  function( $scope, $http, $cacheFactory ) {
	const url = 'http://localhost:3000/api/v1/stores';
	$http.get( url, {
		cache: true
	}).then( res => {
		$scope.stores = res.data;
	});
	
	$scope.clearCache = function(){
		var httpCache = $cacheFactory.get('$http');  
		console.log( httpCache.get(url) );
		// httpCache.remove(url);
	};
});


app.config( function( $routeProvider ) {
	$routeProvider
		.when( '/pets', {
			template: `
				<div>
					<h2>pets</h2>
					<li ng-repeat="pet in pets">{{pet|json}}</li>
				</div>`,
			controller: 'PetsCtrl'
		})
		.when( '/stores', {
			template: `
				<div>
					<h2>stores</h2>
					<div><button ng-click='clearCache()'>show</button></div>
					<li ng-repeat="store in stores">{{store|json}}</li>
				</div>`,
			controller: 'StoresCtrl'
		})
		.otherwise({ redirectTo: '/pets' });
});

document.body.innerHTML = template;
angular.bootstrap( document, [ app.name ], {} );

