var readlineSync = require("readline-sync");

let row = parseInt(
  readlineSync.question("Enter the number of row requied to print pattern : ")
);

const printPattern = (row) => {
  for (let i = 1; i <= row; i++) {
    let pattern = "";
    for (let j = 1; j <= i; j++) {
      pattern = pattern + "*";
    }
    console.log(i + "    " + pattern);
  }
};

printPattern(row);
