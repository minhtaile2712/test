console.log("windows");
const bytes1 = 500105249280;
printSize(bytes1);
printSize(476939 * 1024 * 1024);

console.log("fedora");
const size2 = 500107862016;
printSize(size2);
const p21 = 104857600;
printSize(p21);
const p22 = 16777216;
printSize(p22);
const p23 = 155853052928;
printSize(p23);
const p24 = 532676608;
printSize(p24);
const p2x = 343598456832;
printSize(p2x);
console.log("wasted");
printSize(size2 - p21 - p22 - p23 - p24 - p2x);

console.log(
  "((976773168-320*1024*1024*2)-305682432)*512/1024 is ",
  ((976773168 - 320 * 1024 * 1024 * 2 - 305682432) * 512) / 1024
);

function printSize(bytes) {
  const divisor = 1024;
  const result = [];
  let dividend = bytes;
  while (dividend != 0) {
    remainder = dividend % divisor;
    dividend = Math.floor(dividend / divisor); //quotient
    result.push(remainder);
  }

  let str = "";
  for (var i = 0; i < result.length; i++) {
    if (result[i]) str = result[i] + sizename(i) + " " + str;
  }
  console.log("Size is", str);
}

function sizename(level) {
  switch (level) {
    case 0:
      return "bytes";
    case 1:
      return "KiB";
    case 2:
      return "MiB";
    case 3:
      return "GiB";
    case 4:
      return "TiB";
    default:
      return "xB";
  }
}
