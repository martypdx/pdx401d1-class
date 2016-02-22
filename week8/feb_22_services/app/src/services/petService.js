export default function( ngModule ) {
	
	
	ngModule.factory( 'petService', [ 'apiUrl', '$resource', function( apiUrl, $resource ) {
		
		return $resource( apiUrl + '/pets/:id?populate=store', {
			id: '@_id'
		}, {
			update: { method: 'PUT' }
		});
	
	}]);
			
		
}

// ngModule.factory( 'petService', [ 'apiUrl', '$resource', function( apiUrl, $resource ) {
		
// 		// var url = '';
		
// 		// this.setUrl = function( setUrl ) {
// 		// 	url = setUrl;	
// 		// };
		
// 		// this.$get = [ '$http', function ( $http ) {
			
// 			return {
// 				get() {
// 					return $http.get( apiUrl + '/pets?populate=store' ).then( res => {
// 						return res.data;
// 					});	
// 				}
// 			};
			
// 		// }];
			
// 	}]);