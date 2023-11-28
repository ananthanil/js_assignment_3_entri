var readlineSync = require("readline-sync");

let limit = parseInt(readlineSync.question("Enter the limit : "));

sumOfSquares(limit);

function sumOfSquares(limit) {
  let sum = 0;
  for (let i = 1; i <= limit; i++) {
    sum = sum + i ** 2;
  }
  console.log(
    "The sum of the squares of numbers between 1 and " + limit + " is " + sum
  );
}
