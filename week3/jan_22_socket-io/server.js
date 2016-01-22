const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const bodyParser = require( 'body-parser' );
const restify = require( 'express-restify-mongoose' );
const Message = require( './Message' );

app.use( bodyParser.json() );

const mongoose = require( 'mongoose' );
mongoose.connect('mongodb://localhost/chat');

app.get('/', function(req, res){
  res.sendFile( __dirname + '/index.html' );
});

const router = express.Router();
restify.serve( router, Message );
app.use(router);


io.on('connection', function(socket){
  console.log('a user connected');
  
  socket.on('chat message', function(msg){
	  io.emit( 'chat message', msg.text);
  });
  
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
  
});


http.listen(3000, function(){
  console.log('listening on *:3000');
});
