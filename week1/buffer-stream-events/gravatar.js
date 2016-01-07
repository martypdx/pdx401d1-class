var http = require('http');
var crypto = require('crypto');
var fs = require( 'fs' );

http.createServer().on('request', (req, res) => {
	var email = req.url.substr(req.url.lastIndexOf('/')+1);
	if(!email) {
		res.writeHead(404);
		return res.end('request must include email');
	}

    // var url = 'http://www.gravatar.com/avatar/'+crypto.createHash('md5').update(email).digest('hex');
	
    // http.get(url, image => {
	// 	image.pipe(res);
	// });
    
    fs.createReadStream( 'chopper.jpeg' ).pipe(res);
    
})
.listen(8080);
