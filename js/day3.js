//Number & Maths

let a=42.1237
console.log(a.toFixed(3));  //return string and fix upto given argument
console.log(typeof a.toPrecision(4))

console.log(a.toString());
console.log(String(a));

// Maths in js

console.log(Math.PI)
console.log(Math.log10(32))
console.log(Math.sqrt(2))
console.log(Math.floor(32.1))
console.log(Math.ceil(32.1))
console.log(Math.max(12,12,3,1,2))
console.log(Math.min(121.3, 2, 1, 3, 1, 2))

// Math.random() method is not safe because it uses time 

//OTP Generator
function OTP(length) {
  let otp = "";
  for (let i = 0; i < length; i++) {
    otp += Math.floor(Math.random() * 9) + 1;
  }
  return Number(otp);
}
let lengthOfOtp = 4;
console.log(OTP(lengthOfOtp));

//for fixed length
function GenOTP() {
  return Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
}
console.log(GenOTP())

//code to generate random number
function random() {
  return (Date.now() % 10)/10;
}
console.log(random());
