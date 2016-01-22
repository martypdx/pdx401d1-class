var express = require('express');
var passport = require('passport');
var Strategy = require('passport-twitter').Strategy;
var ensure = require('connect-ensure-login');
var Twitter = require('twitter');

var cKey = process.env.CONSUMER_KEY || 'V58oeC6099knG8hD1KpO962HZ';
var cSecret = process.env.CONSUMER_SECRET || 'jtu5MniFCSXpQpbi8AnNR78ocZ5HNa45ARfzdeMyAOGPrL7cjZ';

// Configure the Twitter strategy for use by Passport.
//
// OAuth 1.0-based strategies require a `verify` function which receives the
// credentials (`token` and `tokenSecret`) for accessing the Twitter API on the
// user's behalf, along with the user's profile.  The function must invoke `cb`
// with a user object, which will be set at `req.user` in route handlers after
// authentication.
passport.use(new Strategy({
    consumerKey: cKey,
    consumerSecret: cSecret,
    callbackURL: 'http://127.0.0.1:3000/login/twitter/return',
    passReqToCallback: true
  },
  function(req, token, tokenSecret, profile, cb) {
    // In this example, the user's Twitter profile is supplied as the user
    // record.  In a production-quality application, the Twitter profile should
    // be associated with a user record in the application's database, which
    // allows for account linking and authentication with other identity
    // providers.
    req.session.twitter = { token, tokenSecret };
    return cb(null, profile);
  }));


// Configure Passport authenticated session persistence.
//
// In order to restore authentication state across HTTP requests, Passport needs
// to serialize users into and deserialize users out of the session.  In a
// production-quality application, this would typically be as simple as
// supplying the user ID when serializing, and querying the user record by ID
// from the database when deserializing.  However, due to the fact that this
// example does not have a database, the complete Twitter profile is serialized
// and deserialized.
passport.serializeUser(function(user, cb) {
  cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});


// Create a new Express application.
var app = express();

// Configure view engine to render EJS templates.
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

// Use application-level middleware for common functionality, including
// logging, parsing, and session handling.
app.use(require('morgan')('dev'));
app.use(require('cookie-parser')());
app.use(require('body-parser').urlencoded({ extended: true }));
app.use(require('express-session')({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));

// Initialize Passport and restore authentication state, if any, from the
// session.
app.use(passport.initialize());
app.use(passport.session());


// Define routes.
app.get('/',
  function(req, res) {
    res.render('home', { user: req.user });
  });

app.get('/login',
  function(req, res){
    res.render('login');
  });

app.get('/login/twitter',
  passport.authenticate('twitter'));

app.get('/login/twitter/return',
  passport.authenticate('twitter', { failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('/');
  });

app.get('/profile',
  ensure.ensureLoggedIn(),
  function(req, res){
    res.render('profile', { user: req.user });
  });

app.get('/tweets',
  ensure.ensureLoggedIn(),
  function(req, res){
    var oauth = req.session.twitter;


    var client = new Twitter({
      consumer_key: cKey,
      consumer_secret: cSecret,
      access_token_key: oauth.token,
      access_token_secret: oauth.tokenSecret
    });

    var params = { screen_name: req.user.name };
    client.get('statuses/user_timeline', params, function(error, tweets, response){
      if (!error) {
        res.json(tweets);
      }
    });
  });

app.listen(3000);
