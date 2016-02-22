const mongoose = require('mongoose');
const Schema = mongoose.Schema;

module.exports = mongoose.model( 'Pet', new Schema({
	name: String,
	type: String,
	store: { type: Schema.Types.ObjectId, ref: 'Store' }
}, { 
	timestamps: true 
}));