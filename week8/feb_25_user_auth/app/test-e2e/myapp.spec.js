describe('My App', function() {

	it('should have a title', function() {
		browser.get('/');
		expect(browser.getTitle()).toEqual( 'Hello from Code Fellows' );
	});
	
	describe('navigation', function() {

		beforeEach(function() {
			browser.get('/');
		});


		it('default to /view1', function() {
			
			expect( browser.getLocationAbsUrl() ).toMatch("/view1");
			
			const nav = element.all(by.tagName('a'));
			const a1 = nav.get(0);
			const a2 = nav.get(1);
			
			expect( element.all( by.css('[ng-view] p' ) ).first().getText() )
				.toMatch(/hello from view 1/);
			
			expect( element( by.binding('animalTypes') ).getText() )
				.toMatch('["cats","dogs","birds"]')
			
			a2.click();
			expect( browser.getLocationAbsUrl() ).toMatch("/view2");
			
			expect( element( by.binding('place') ).getText() )
				.toMatch( /hello world/ );
			
			a1.click();
			expect( browser.getLocationAbsUrl() ).toMatch("/view1");
		});
	});
});