import template from './stores.html';

export default function( ngModule ) {
	ngModule.directive( 'stores', function() {
		return {
			replace: true,
			restrict: 'E',
			template,
			scope: {
				stores: '='
			},
			controller() {
				// do stuff	
			}
		};
	});
}