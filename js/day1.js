// let const var
//let and const cannot redeclare but var can
//let and const are block scope but var is function scope

//primitive data type are immutable
//non primitive data type are mutable
let num1 = 32;
console.log(num1);
console.log(typeof num1);

let name = "Nul!=Nishant";
console.log(name);
console.log(typeof name);

let bigNum1 = 1231341411231n;
console.log(bigNum1);
console.log(typeof bigNum1);

let userDetail = undefined;
console.log(userDetail);
console.log(typeof userDetail);

let weather = null;
console.log(weather);
console.log(typeof weather);

let symbol1 = Symbol("roll");
console.log(symbol1);
console.log(typeof symbol1);

let available = false;
console.log(available);
console.log(typeof available);

function greet(name) {
  console.log("Hello! " + name);
}
greet("Nishant");
console.log(typeof greet);

let array = [12, 3, 1, 3, true, "Nishant"];
console.log(array);
console.log(typeof array);

let detail = {
  name: "Nishant",
  age: 20,
};
console.log(detail);
console.log(typeof detail);


let a = 20;
let b = a;
b = 100;
console.log(a, b);

let user = "Nishant";
user[0] = "j";
console.log(user);


let arr = [12, 13, 14, 15];
arr[2] = 5;
console.log(arr);

let data = {
  name: "Nishant",
  age: 18,
};
data["age"] = 13;
console.log(data);
