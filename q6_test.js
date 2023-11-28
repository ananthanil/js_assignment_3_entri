var readlineSync = require("readline-sync");

test();

test2();

test3();

function test() {
  console.log("test");
  for (let i = 1; i <= 5; i++) {
    paterrn = "";
    for (let j = 1; j <= i; j++) {
      paterrn = paterrn + "*";
    }
    console.log(paterrn);
  }
}

function test2() {
  console.log("test2");
  for (let i = 1; i <= 5; i++) {
    paterrn = "";
    for (let j = 5; j >= i; j--) {
      paterrn = paterrn + "*";
    }
    console.log(paterrn);
  }
}

function test3() {
  console.log("test3");
  for (let i = 1; i <= 5; i++) {
    let pattern = "*";
    for (let j = 1; j >= i; j++) {
      pattern = pattern + "";
    }
    console.log(pattern);
  }
}
