exports.config = {
  //this is where our selenium server by default sits
  seleniumAddress: 'http://localhost:4444/wd/hub',

  //This is the framework we use to write our tests, in this case cucumber
  framework: 'cucumber',

  // Spec patterns are relative to this directory
  specs: [
    'features/**/*'
  ],

  //We ask protractor to run our tests in chrome
  capabilities: {
    'browserName': 'chrome'
  },

  //We tell protractor it can access our app in this location
  baseUrl: 'http://localhost:8000',

  //cucumber options
  cucumberOpts: {
    //find the step definitions here
    require: '**/*.js',
    //this outputs better information
    format: 'pretty',
    //ask tests to wait 20 seconds before they timeout
    timeout: 20000
  }
};
