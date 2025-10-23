//forEach, filter, reduce, map, set
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//forEach
// arr.forEach((data, index, arr) => {
//   console.log(data * 3);
// });
//behind the sense

// arr.forIterate = (cb) => {
//   for (let i of this) {
//     cb(i);
//   }
// };

// arr.forIterate((data) => {
//   console.log(data + 2);
// });

//filter
// let ans = arr.filter((data) => data % 2 == 0);
// console.log(ans);

//filter under the hood
// arr.separate = function (cb) {
//   let ans = [];
//   for (let i of this) {
//     if (cb(i)) {
//       ans.push(i);
//     }
//   }
//   return ans;
// };

// let answer = arr.separate((data) => data % 2 == 0);
// console.log(answer);

//Make general method for array
// Array.prototype;
// Number.prototype;
// String.prototype;
// Object.prototype;

//map in array

// let ans = arr.map((data) => data * 2);
// console.dir(ans);

// arr.Mapping = function (cb) {
//   let newArray = [];
//   for (let i of this) {
//     newArray.push(cb(i));
//   }
//   return newArray;
// };
// let myAns = arr.Mapping((data) => data * 4);
// console.dir(myAns);

//reduce in arr

let ans=arr.reduce((ac, cv) => ac + cv,3);
console.log(ans)