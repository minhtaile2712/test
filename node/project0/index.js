console.log("program started");

setImmediate(() => console.log("from immediate 1"));

console.log("program progress 1");

console.log("program progress 2");

setImmediate(() => console.log("from immediate 2"));

setTimeout(() => console.log("from timeout"), 0);

console.log("end of program");

process.nextTick(console.log, "from nextTick");
