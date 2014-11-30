var Hogan = require('hogan.js');
var data = {
  user: {
    id: 123,
    name: 'world'
  },
  screenName: "dhg",
};

var template = Hogan.compile("Follow @{{user.test.name}}.");
var output = template.render(data);

// prints "Follow @dhg."
console.log(output);
