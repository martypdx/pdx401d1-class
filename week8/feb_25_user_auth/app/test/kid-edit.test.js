describe( 'Kid Edit', () => {
	
	
	beforeEach( angular.mock.module( 'myApp' ) );
	
	
	const person = {
		name: 'Sarah Joe',
		age: 14,
		toy: 'airplane'
	};

	var scope, render;
	
	function getElement() {
		const element = render( scope );
		scope.$digest();
		return element;
	}
	
	beforeEach( angular.mock.inject( function( $rootScope, $compile ) {
		scope = $rootScope.$new();
		const html = `<kid-edit person="person" saved="update(person)"></kid-edit>
		`;
		render = $compile( html );
	}));
	
	it( 'creates copy of person data and returns copy of copy on submit', () => {
		
		scope.person = person;
		var updatedPerson;
		
		scope.update = function( person ) {
			updatedPerson = person;
		};

		const element = getElement( scope );
		
		// we made a copy
		const isoScope = element.isolateScope(); 
		
		// not same object references
		assert.notEqual( isoScope.editPerson, scope.person );
		// but the property values are the same
		assert.deepEqual( isoScope.editPerson, scope.person );
		
		isoScope.editPerson.name = 'Sarah Jane';
		
		assert.notOk( updatedPerson );
		isoScope.updated();
		assert.ok( updatedPerson );
		
		assert.equal( updatedPerson.name, 'Sarah Jane' );
	});
	
	/*
	var render, scope;
	
	const person = {
		name: 'Sarah Joe',
		age: 14,
		toy: 'airplane'
	};
	
	beforeEach( angular.mock.inject( function( $rootScope, $compile ) {
		scope = $rootScope.$new();
		const html = `<kid-edit person="person" saved="update(person)"></kid-edit>`;

    	// element = $compile(element)(scope);
    	// scope.$digest();
		render = $compile( html );
	}));
	
	it( 'sends updates only after submit', () => {
		
		scope.person = person;
		scope.update = function( edited ) {
			//ha	
		};
		
		const element = render( scope );
		scope.$digest();
		
		const editScope = element.isolateScope(); 
		
		assert.deepEqual( editScope.edit, scope.person );
		
		
		const name = editScope.form.name;
		name.$setViewValue( 'Sarah Jane' );
		
		element.find( 'input[name=name]' ).controller( 'kidEdit' ).$render();

		assert.equal( editScope.edit.name, 'Sarah Jane' );
	});
	*/
});