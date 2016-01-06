var http = require('http');
var crypto = require('crypto');

http.createServer().on('request', (req, res) => {
	var email = req.url.substr(req.url.lastIndexOf('/')+1);
	if(!email) {
		res.writeHead(404);
		return res.end();
	}

	var buf = new Buffer(1024*1024);
	http.get('http://www.gravatar.com/avatar/'+crypto.createHash('md5').update(email).digest('hex'), resp => {
		resp.pipe(res);
	});
})
.listen(8080);
