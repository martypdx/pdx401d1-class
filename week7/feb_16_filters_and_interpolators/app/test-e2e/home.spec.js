const HomePage = require( './page-objects/home-page' );
const fs = require( 'fs' );

describe('Home Page', function() {

	it('should submit', function() {
		const home = new HomePage();
		home.get();
		expect( home.getState() ).toEqual('edit');
		home.setText('hello');
		
		browser.debugger();
		
		browser.takeScreenshot().then( png => {
			fs.writeFileSync( 'test.png', png, { encoding: 'base64' } );
		});
		
		home.submit();
		expect( home.getState() ).toEqual('hello');
	});
	
});