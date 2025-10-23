//Execution context and Global Execution Context

//Run Code ---->Execution Context
//Memory Allocation
//Execution Phase

//Memory Allocation
// a = uninitialized(Cannot access before the initialization (Temporal dead Zone))
// b=undefined
// c = uninitialized(Cannot access before the initialization (Temporal dead Zone))
//add=function Code

let a = 40;
console.log(b);

var b = 803;
console.log(b);
const c = 392;
add(a, b, c);
//TO run this add Function Code
//Again Execution Context (Memory Allocation in stack  and Execution of code)
function add(a, b, c) {
  console.log(a + b + c);
}
//this will give error this time const product store <uninitialized>
// product(a, b);
const product = function (a, b) {
  console.log(a * b);
};
product(a, b);

//arrow function
divide(a, b);
const divide = (a, b) => {
  console.log(a / b);
};
divide(a, b);
