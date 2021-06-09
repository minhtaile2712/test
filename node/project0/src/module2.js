const Thing1 = require("./thing1");

Thing1.b = 324;

function func2() {
  console.log(Thing1.a);
  console.log(Thing1.b);
}

module.exports = func2;
