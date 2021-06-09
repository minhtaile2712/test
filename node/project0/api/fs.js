const fs = require("fs");

fs.stat("index.js", (err, stats) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log(stats.isFile(), stats.isDirectory(), stats.size);
});
