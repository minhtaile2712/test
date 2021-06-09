const util = require("util");
const fs = require("fs");

// normal
fs.stat(".", (err, stats) => {
  if (err) {
    console.log(err);
    return;
  }

  doSth(stats);
});

// promisify
const asyncStat = util.promisify(fs.stat);
asyncStat(".")
  .then((stats) => {
    doSth(stats);
  })
  .catch((err) => {
    console.log(err);
    return;
  });

// Callbackify
const callbackStat = util.callbackify(asyncStat);
callbackStat(".", (err, stats) => {
  if (err) {
    console.log(err);
    return;
  }

  doSth(stats);
});

function doSth(stats) {
  console.log("is file:", stats.isFile());
  console.log("is directory:", stats.isDirectory());
  console.log("size:", stats.size);
}

async function callStat() {
  const stats = await asyncStat(".");
  doSth(stats);
}
// callStat();
