var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('pets are awesome');
});

router.get('/super', function(req, res, next) {
	if( !req.user.isAdmin ) res.redirect( req.baseUrl );
	res.send('pets are super awesome');
});

module.exports = router;
