const data = require("./data.json");
// console.log("data is", typeof data);

let sortedDataArr = Object.entries(data).sort();

let dataObj = {};

for (const [key, value] of sortedDataArr) {
  dataObj[key] = value;
}

let jsonStr = JSON.stringify(dataObj);
console.log(jsonStr);
