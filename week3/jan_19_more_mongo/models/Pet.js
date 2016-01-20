const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Pet = new Schema({
	name: String,
	type: String,
	store: { type: Schema.Types.ObjectId, ref: 'Store' }
}, { timestamps: true } );

module.exports = mongoose.model( 'Pet', Pet );