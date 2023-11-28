var readlineSync = require("readline-sync");

let name = readlineSync.question("Enter the name : ");

let message = greetMessage(name);

function greetMessage(name) {
  return "Hello ," + name;
}

console.log(message);
