const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Store = new Schema({
	name: String,
	location: String
}, { 
	timestamps: true 
});

module.exports = mongoose.model( 'Store', new Schema({
	name: String,
	location: String
}, { 
	timestamps: true 
}));