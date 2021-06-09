XLSX = require("xlsx");
// var workbook = XLSX.readFile("../Book.xlsx");
var workbook = XLSX.readFile("../Sheet1x.csv");
console.log("workbook", workbook);

var address_of_cell = "A2";

var first_sheet_name = workbook.SheetNames[0];
var worksheet = workbook.Sheets[first_sheet_name];
console.log("worksheet", worksheet);
var desired_cell = worksheet[address_of_cell];
var desired_value = desired_cell ? desired_cell.v : undefined;
console.log(address_of_cell, desired_value);
