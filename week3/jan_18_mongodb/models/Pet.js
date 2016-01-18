const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Pet = new Schema({
	name: String,
	type: String,
	born: Date
}, { timestamps: true } );

module.exports = mongoose.model( 'Pet', Pet );