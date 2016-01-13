var express = require( 'express' );

var router = express.Router();

router.get( '/', (req,res) => {
    res.send('get some pets');
});

router.post( '/', (req,res) => {
    res.send('posted to pets:' + req.body);
});

router.put( '/:id', (req,res) => {} );

router['delete']( '/:id', (req,res) => {} );

module.exports = router;