module.exports = {
  "server": {
    "protocol": "http",
    "host": "127.0.0.1:3000"
  },
//   "facebook": {
//     "key": "[APP_ID]",
//     "secret": "[APP_SECRET]",
//     "callback": "/handle_facebook_callback",
//     "scope": [
//       "user_groups",
//       "user_likes"
//     ]
//   },
  twitter: {
    key: process.env.TWITTER_CONSUMER_KEY || 'V58oeC6099knG8hD1KpO962HZ',
    secret: process.env.TWITTER_CONSUMER_SECRET || 'jtu5MniFCSXpQpbi8AnNR78ocZ5HNa45ARfzdeMyAOGPrL7cjZ',
    callback: '/login/twitter/callback'
  }
};