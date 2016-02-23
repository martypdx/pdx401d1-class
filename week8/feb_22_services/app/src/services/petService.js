export default function( ngModule ) {
	
	
	// ngModule.factory( 'petService', [ 'apiUrl', '$resource', function( apiUrl, $resource ) {
		
	// 	return $resource( apiUrl + '/pets/:id?populate=store', {
	// 		id: '@_id'
	// 	}, {
	// 		update: { method: 'PUT' }
	// 	});
	
	// }]);
			
		
	ngModule.provider( 'petService', function ( apiUrl ) {
		
		var url = apiUrl;
		
		// this.setUrl = function( setUrl ) {
		// 	url = setUrl;	
		// };
		
		this.$get = function ( $http ) {
			return {
				get() {
					return $http.get( url + '/pets?populate=store' ).then( res => {
						return res.data;
					});	
				}
			};		
		};
			
	});
	
}