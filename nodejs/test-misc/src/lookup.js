const lookup = function (obj, field) {
  if (!obj) {
    return null;
  }

  console.log("after split ]: ", field.split("]"));
  console.log("after join ``:", field.split("]").join(""));
  console.log(chain);
  var chain = field.split("]").join("").split("[");

  for (var i = 0, len = chain.length; i < len; i++) {
    var prop = obj[chain[i]];
    if (typeof prop === "undefined") {
      return null;
    }
    if (typeof prop !== "object") {
      return prop;
    }
    obj = prop;
  }
  return null;
};

let myObj = { a: { b: { c: "wtf" } }, b: 2, c: 3, d: 4 };
const field = "a[b[c]]";

console.log("looked up:", lookup(myObj, field));
