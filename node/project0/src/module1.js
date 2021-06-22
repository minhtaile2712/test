console.log("hello from module1");

function sayHello() {
  console.log("module1 said: hello from module1");
}

exports.sayHello = sayHello;

const a = 1;

module.exports = a;
