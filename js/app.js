let a = [10, 2, 11, 23, 24, 88];
let num = undefined;
let evenOdd = a.map(function (v) {
  v % 2 == 0 ? (num = "even") : (num = "odd");
  console.log(num);
});

const request = "POST";

switch (request) {
  case "POST":
    console.log(`the request ${request}`);
    break;
  case "GET":
    console.log(`the request ${request}`);
    break;
  default:
    console.log(`Invalid ${request} request`);
}

if (request == "POST") {
  console.log(`the request ${request}`);
} else if (request == "GET") {
  console.log(`the request is ${request}`);
} else {
  console.log(`the ${request} request is invalid`);
}
