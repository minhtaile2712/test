const XLSX = require("xlsx");
const decode_range = XLSX.utils.decode_range;
const encode_cell = XLSX.utils.encode_cell;

console.log("workbook", workbook);

var address_of_cell = "A2";

var first_sheet_name = workbook.SheetNames[0];
var worksheet = workbook.Sheets[first_sheet_name];
console.log("worksheet", worksheet);
var desired_cell = worksheet[address_of_cell];
var desired_value = desired_cell ? desired_cell.v : undefined;
console.log(address_of_cell, desired_value);

try {
  const workbook = XLSX.readFile("./uploads/sheet1.csv");
  // console.log("workbook", workbook);
  const firtSheetName = workbook.SheetNames[0];
  const worksheet = workbook.Sheets[firtSheetName];
  console.log("worksheet", worksheet);

  const cellRange = decode_range(worksheet["!ref"]);
  for (var R = cellRange.s.r; R <= cellRange.e.r; ++R) {
    for (var C = cellRange.s.c; C <= cellRange.e.c; ++C) {
      const cellAddress = { c: C, r: R };
      const cellAddressA1 = encode_cell(cellAddress);

      const workcell = worksheet[cellAddressA1];
      const workcellValue = workcell ? workcell.v : undefined;
      console.log(cellAddressA1, workcellValue);
    }
  }

  return res.send("ok");
} catch (error) {
  console.log(error.message);
  return res.sendStatus(500);
}
