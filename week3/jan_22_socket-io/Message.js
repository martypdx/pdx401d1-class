const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Message = new Schema({
	text: String
}, { timestamps: true } );

module.exports = mongoose.model( 'Message', Message );