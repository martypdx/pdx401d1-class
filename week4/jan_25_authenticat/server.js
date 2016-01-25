var app = require('express')();
var mongoose = require('mongoose');
var connection = mongoose.createConnection('mongodb://localhost/whatever');
var Authenticat = require('authenticat');
var authenticat = new Authenticat(connection);

app.use('/api', authenticat.router);

app.get('/secretpath', authenticat.tokenAuth, function(req, res) {
	res.send( 'you haz token' );
});

app.get('/rolepath', authenticat.tokenAuth, authenticat.roleAuth('otherRole'), function(req, res) {
	res.send( 'you haz role' );
});

app.listen(3000, function() {
  console.log('server up on port 3000');
});