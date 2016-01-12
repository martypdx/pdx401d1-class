var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

module.exports = function createApp(db){
    
    var app = express();
    
    // parse application/x-www-form-urlencoded
    app.use(bodyParser.urlencoded({ extended: false }));

    // parse application/json
    app.use(bodyParser.json());

    var publicPath = path.join( __dirname, 'public' );
    app.use( express.static( publicPath ) );

    app.set( 'view engine', 'jade' );

    app.get( '/', function(req, res){
        res.send('hello world');
    });

    app.get( '/pets', function(req, res){
        var pets = db.get('pets');
        res.render('pets', { pets: pets } );
    });

    app.post( '/pets', function(req, res){
        var pet = req.body;
        pets.push(pet);
        res.redirect('pets');
    });
    
    return app;

};