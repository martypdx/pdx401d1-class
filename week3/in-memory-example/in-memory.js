'use strict';

const items = Object.create( null );
var id = 0;

module.exports = {
	getAll () {
		return new Promise( ( resolve, reject ) => {
			const all = Object.keys( items ).map( key => items[ key ] );
			resolve( all );
		});
	},
	
	get ( id ) {
		return new Promise( ( resolve, reject ) => {
			const item = items[ id ];
			if ( !item ) return reject( `Invalid id "${id}"` );
			resolve( item.content );
		});
	},
	
	save ( item ) {
		return new Promise( ( resolve, reject ) => {
			id++;
			items[ id ] = { id, content: item || {} };
			resolve( { id } );
		});
	},
	
	remove ( id ) {
		return new Promise( ( resolve, reject ) => {
			if ( !items[id] ) return resolve( false );
			resolve( delete items[ id ] );
		});
	}
};