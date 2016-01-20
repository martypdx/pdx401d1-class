const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Child = new Schema({
	name: { type: String, required: true },
	age: { type: Number, required: true }
});

var Parent = new Schema({
	name: String,
  	children: [ Child ]
});

module.exports = mongoose.model( 'Parent', Parent );