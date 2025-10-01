//String in more detail
// (in all method original string remain same)
let day = 28;
let str1 = `Modern Method and very useful ${day}`;
console.log(str1);
console.log(str1.length);
console.log(str1.toUpperCase());
console.log(str1.toLowerCase());
console.log(str1.replace("M", "N"));
console.log(str1.includes("very"));
console.log(str1.replaceAll("M", "N"));
console.log(str1.includes("very  "));
console.log(str1.indexOf("and"));
console.log(str1.slice(2, 5));
console.log(str1.split(" "));
let userName = "  Null Nishant";
console.log(userName.trimEnd());

//Date in js

const date = new Date(-4312131); // with respect 1 Jan 1970
console.log(date);
console.log(date.toString());
console.log(date.getDate());
console.log(date.getMonth()); // 0 based month counting
console.log(date.getFullYear());
console.log(Date.now());
