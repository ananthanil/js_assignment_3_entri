var readlineSync = require("readline-sync");

let limit = parseInt(readlineSync.question("Enter the limit : "));

printNumbers(limit);

function printNumbers(limit) {
  for (let i = 1; i <= limit; i++) {
    console.log(i);
  }
}
