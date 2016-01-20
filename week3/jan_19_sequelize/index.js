const Sequelize = require( 'sequelize' );

const sequelize = new Sequelize('postgres://server:abc@localhost:5432/petstore');

var Pet = sequelize.define('pet', {
  name: {
    type: Sequelize.STRING  
  },
  type: {
    type: Sequelize.STRING
  },
  cost: {
	type: Sequelize.DECIMAL(10, 2) 
  }
});

// Pet.sync( /* { force: true } */ )
// 	.then(function () {
// 		// Table created
// 		return Pet.create({
// 			name: 'tweeety',
// 			type: 'bird',
// 			cost: 102.55
// 		});
// 	})
// 	.then( pet => {
// 		console.log( 'pet created', pet.toJSON() );
// 	})
// 	.catch( err => {
// 		console.log( 'error :(', err );
// 	});


// Pet.findAll({ where: { type: 'bird' } }).then( pets => {
// 	console.log( pets.map( p => p.toJSON() ) );
// });

// sequelize.query( 'select type, max(cost) from pets group by type' ).spread( results => {
// 	console.log( results );
// });