const fullName = `Deyvin Cano`;

console.log(`My name is ${fullName}`);

console.log("Hello World");

firstName = "Deyvin";
let str = `How are you doing${firstName ? `, ${firstName}` : ""}?`;

let a = 40;
let b = 20;

if (a > 10 && b > 10) {
  console.log("a and b are greater then 10");
}
if (a > 60 && b > 60) {
  console.log("a and b are greater then 60");
}
if (a > 60 || b < 60) {
  console.log("b is less then 60");
}

let hour = 10;
let msg = hour < 11 ? "Good morning" : "Good Afternoon";
console.log(msg);

let fruit = "peach";
switch (fruit) {
  case "apple":
    console.log("Yummy apples");
    break;

  case "kwiw":
    console.log("Yummy kiwis");
    break;

  default:
    console.log("Aint nothing good here");
    break;
}
