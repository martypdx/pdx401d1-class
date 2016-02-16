import moment from 'moment';

export default function( ngModule ) {
	
	ngModule.filter( 'moment', function () {
		return function filter( date, format /*, options*/ ){
			const momentDate = moment( date );
			return format ? momentDate.format( format ) : momentDate.fromNow();
		};
	});
	
}

/* "stateful" filter example */
// export default function( ngModule ) {
	
// 	ngModule.filter( 'moment', [ 'intratext', function(){
	
// 		function filter( date, options ){
// 			const momentDate = moment( date );
// 			return momentDate.format( `MM [${options.text}] YYYY` );
// 		}
		
// 		filter.$stateful = true;
			
// 		return filter;
		
// 	}])
// 	.value( 'intratext', { text: 'of the year' } );
	
// }