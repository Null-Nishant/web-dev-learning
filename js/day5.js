//Array and Operation on array

const arr = [1, 3, 1, 3, 1, "Nishant ", "ROhit "];
console.log(typeof arr);
console.log(arr);

const num = [2, 1, 3, 41, 3];
console.log(num.sort((a, b) => a - b));
console.log(num.join("-"));

const arr1 = ["Strike", 2, 3, 1, 2, "Nishant", "Rohit"];
console.log(arr1.sort()); //sort on the basis of first character and so on

let multiArray = [1, 2, 1, [32, 21], 13, 4, 2112, 2, 31];
console.log(multiArray.flat(Infinity)); //level upto which it is flatted

for (let i = 0; i < arr1.length; i++) {
  console.log(arr1[i]);
}

for (let i of multiArray) {
  console.log(i);
}

const num1 = [1, 2, 3, 4, 2, 3];
const num2 = [123, 123, "Nishant", 443, 5, 6, 456, 46];
console.log([...num1, num2]); //spread operator
