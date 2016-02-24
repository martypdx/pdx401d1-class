import template from './pets.html';

export default function( ngModule ) {
	ngModule.directive( 'pets', function() {
		return {
			replace: true,
			restrict: 'E',
			template,
			scope: {
				pets: '='
			},
			controller() {
			 // do stuff	
			}
		};
	});
}