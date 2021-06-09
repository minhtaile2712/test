let obj = {
  a: 1,
  b: {
    c: 2,
    d: {
      e: 3,
      f: {
        g: 4,
        h: {
          i: 5,
        },
      },
    },
  },
};
console.log(obj);
console.log(JSON.stringify(obj, null, 2));
