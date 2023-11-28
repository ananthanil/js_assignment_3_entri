var readlineSync = require("readline-sync");

let limit = parseInt(readlineSync.question("Enter the limit : "));

printEvenNumbers(limit);

function printEvenNumbers(limit) {
  console.log("Even number between 1 and ", limit);
  for (let i = 1; i <= limit; i++) {
    if (i % 2 == 0) {
      console.log(i);
    }
  }
}
