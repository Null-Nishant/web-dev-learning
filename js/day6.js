//Object in javascript

//under the hood array is stores as object (index is key)

//in object key is string

//crud operation create read update delete
// create object
const user = {
  name: "Nishant",
  age: 20,
  Aadhar: 982080242940,
  Address: "Muradnager, Ghaziabad",
};
console.log(user); //read object

//update data inside the object or adding new value

user.happy = true;
console.log(user);
user.happy = false;
console.log(user);

//delete the data

delete user.happy;
console.log(user);

console.log(typeof user);

//
for (let key in user) {
  console.log(typeof user[key]);
}

for (let key of Object.values(user)) {
  //Object is not iterable
  console.log(key);
}

const { name, Aadhar } = user;

console.log(name);

console.log(Aadhar);

for (let key of Object.keys(user)) {
  console.log(`${key} : ${user[key]}`);
}

//nested object

const person = {
  name: "Nishant",
  dob: new Date("2005-07-27"),
  address: {
    state: "Uttar Pradesh",
    city: "Muradnagar",
  },
};

console.log(person.address.city);

const person1 = person; //only reference copy
const person2 = { ...person }; //shallow copy
const person3 = structuredClone(person);

//destructuring of object
let { name: userName, age: userAge } = user;
console.log(userName);
console.log(userAge);

const arr = [12, 3, 2, 1, 3];
let [first, second] = arr;
console.log(first, second);
