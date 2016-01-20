const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Store = new Schema({
	name: String,
	location: String,
	pets: [ { type: Schema.Types.ObjectId, ref: 'Pet' } ]
});

module.exports = mongoose.model( 'Store', Store );