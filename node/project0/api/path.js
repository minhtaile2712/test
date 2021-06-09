const path = require("path");

const notes = "/users/joe/notes.txt";

console.log(path.dirname(notes));
console.log(path.basename(notes));
console.log(path.extname(notes));
console.log(path.basename(notes, path.extname(notes)));
console.log(path.join("/", "workspace", "ptn209b3", "context-broker"));
// not check at all
console.log(path.resolve("index.js"));
