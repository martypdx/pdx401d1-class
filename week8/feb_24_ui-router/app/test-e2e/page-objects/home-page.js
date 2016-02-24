module.exports = function(){
	var state = $('#state');
	var input = $('input');
	var button = $('button');
	
	this.get = function(){
		browser.get('#/view1');
	};
	
	this.setText = function( value ){
		input.sendKeys( value );
	};
	
	this.submit = function(){
		button.click();
	};
	
	this.getState = function() {
		return state.getText();
	};
};