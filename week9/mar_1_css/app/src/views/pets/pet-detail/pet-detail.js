import details from './details/details';
// picture
// availability

export default function( $stateProvider ) {
	$stateProvider.state( 'pets.type', {
		url: '/type/:petType',
		views: {
			details,
			picture,
			availability
		}
	});
}