console.log(4 == "4");   //If the type are not same, make it same then check the value
console.log(4 === "4"); //First check type then compare

// number and string compare(string convert number)
// String--> Number
let z = "120";
let a = Number(z);

console.log(typeof a);

console.log(typeof NaN)// NaN: Not a number(Type of it is number)


// let a = true;
// console.log(Number(true));
// console.log(Number(false));

// null after conversion 0
//  undefined after conversion NaN

console.log(Number(null));
console.log(Number(undefined));

console.log(null==undefined);
console.log(null===undefined); //null is object undefined is undefined
console.log(null==0);
// console.log(null=="");
// console.log(null==false);
// console.log(null==true);

// >,<,>=,<= (null --> number, undefined --> NaN)

// console.log(null>=0);
// console.log(null<=0);
// console.log(null>0);
// console.log(null<0);
// console.log(null>=undefined);
// console.log(undefined>=0);

// console.log("Rohit">"Rahit");

// console.log(10<true);

// Ek koi bhi type hai, usko agar muje compare karna hai dusre kisi type se
// Dono number mein convert honge

// console.log(null>="");

// console.log(NaN == NaN);

// loop kaise kaam karte hai

// for loop

// post increment
// post decrenment : i--

// for(let i = 0; i<10;i++){
//     console.log(i);
// }

// while loop

// let i = 0;

// while(i<10){
//     console.log(i);
//     i++;
// }

// do while

// let i= 0;

// do{
//     console.log(i);
//     i++;
// }while(i<10);

// if else condition

// let age = 25;

// if(age>=18){
//     console.log("Eligible for vote");
// }
// else{
//     console.log("Not eligible for vote");
// }

// kid young and old

// let age = 78;

// if(age<18){
//     console.log("Kid");
// }
// else if(age>=60){
//     console.log("Old");
// }
// else{
//     console.log("young");
// }

// Logical Operator

// logical And&& , ||

// console.log(true&&true);
// console.log(true&&false);
// console.log(false&&false);
// console.log(false&&true);

// console.log(true||true);
// console.log(true||false);
// console.log(false||false);
// console.log(false||true);

// let a = "Rohit";
// let b = "";
// let c = a&&b;
// console.log(c);

// let a = 0;
// let b = 20;

// console.log(a&&b);
// &&: If first value is false, it will return the first value itself
// If first value is true, it will return second

// || logical or

// let a = 0;
// let b = 20;

// console.log(a || b);
// &&: If first value is true, it will return the first value itself
// If first value is false, it will return second

// !=
// console.log(5!=5);

// AND: & , | or

// console.log(2 & 5);
