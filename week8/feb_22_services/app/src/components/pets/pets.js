import template from './pets.html';
import './pets.css';

export default function( ngModule ) {
	ngModule.directive( 'pets', function(){
		return {
			replace: true,
			restrict: 'E',
			template,
			bindToController: true,
			controllerAs: 'pets',		
			controller: [ 'petService', function( Pet ) {
				
				this.selected = null;
				
				Pet.get().then( pets => this.list = pets );
							
				this.closeDetail = () => {
					this.selected = null;
				};
				
				this.update =  pet => {
					var updated = Pet.update( { _id: this.selected._id }, pet );
					var index = this.list.indexOf( this.selected );
					this.list[ index ] = updated;
					this.closeDetail();
				};

			}]
		};
	});
}