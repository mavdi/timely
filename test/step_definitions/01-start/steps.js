var steps = function() {
  this.Given(/^that I am an unauthenticated user$/, function (callback) {
    // express the regexp above with the code you wish you had
    callback.pending();
  });

  this.When(/^I open the timely app$/, function (callback) {
    // express the regexp above with the code you wish you had
    callback.pending();
  });

  this.Then(/^I should should see a window with Timely title$/, function (callback) {
    // express the regexp above with the code you wish you had
    callback.pending();
  });
};

module.exports = steps;