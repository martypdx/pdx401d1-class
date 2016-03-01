
export default function( ngModule ) {
	
	function create( name, url ) {
		ngModule.factory( name, [ '$resource', 'baseUrl', 
			function( $resource, baseUrl ) {
				return $resource( `${baseUrl}${url}`, {
					id: '@_id'
				});
			}
		]);
	}
	
	create( 'PetService', '/pets/:id' );
	create( 'StoreService', '/stores' );
}

