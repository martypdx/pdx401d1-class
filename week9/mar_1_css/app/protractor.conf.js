exports.config = {
	
  allScriptsTimeout: 11000,

//   specs: [
//     'test-e2e/**/*.js'
//   ],
  
  suites: {
    home: 'test-e2e/home.spec.js',
    full: 'test-e2e/**/*.spec.js'
  },

  capabilities: {
    'browserName': 'chrome'
  },
  
  seleniumAddress: 'http://localhost:4444/wd/hub',

  baseUrl: 'http://localhost:8080',

  framework: 'jasmine',

  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  }
};