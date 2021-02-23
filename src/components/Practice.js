import _ from "lodash";
import { add } from "../components/Card";

export default function Practice(props) {
  const { x, y } = props.values;
  // const { x, y } = values;
  const myNumbers = add(x, y);

  return <div>{myNumbers}</div>;
}

// const address = {
//   plate: 123,
//   streetName: "main St.",
// };
// // ES6+ = es2015
// // es5 old, came out in 2009

// const person = {
//   name: "Justin",
//   age: 40,
//   // walk: function () {
//   //   console.log(`walk`);
//   // },
//   // address: address,  if key and value are the same, write shorthand
//   address,
//   walk() {
//     console.log("walk");
//   },
// };

// //Object destructuring
// const address1 = {
//   street: "",
//   city: "",
//   country: "",
// };

// const address2 = {
//   street: "",
//   city: "",
//   country: "",
// };

// // old way
// // const street = address.street;
// // const city = address.city;
// // const country = address.country;

// const { street: street1, city: city1 = "LA", country: country1 } = address1;
// const { street, city, country } = address2;

// // spread operator
// const arr1 = [1, 2, 3];
// const arr2 = [5, 6, 7];

// // old way
// const oldWayToJoin = arr1.concat(arr2);

// const arr3 = [...arr1, 4, 50, 60, ...arr2]; // new location in memory. shallow copy.

// const arr4 = JSON.parse(JSON.stringify(arr3)); //deep copy

// // shallow copy
// // deep copy  take all the deeply nested objects and copy them as well

// var objects = [{ a: 1 }, { b: 2 }];

// var deep = _.cloneDeep(objects);

// console.log(deep);

/// ES6 Classes
// const Person = {
//   name: "Justin",
//   age: 36,
//   walk() {
//     console.log("walk");
//   },
// };

const Person2 = {
  name: "Mendel",
  age: 19,
  walk() {
    console.log("walk");
  },
};

const Person3 = {
  name: "Sholom",
  age: 16,
  walk() {
    console.log("walk");
  },
};

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  walk() {
    console.log("walk");
  }
}

class Teacher extends Person {
  constructor(name, degree, age) {
    super(name, age);
    this.degree = degree;
  }
}

const teacher = new Teacher("Justin Instructor", "B.S.E.", 36);
const Mendel = new Person("mendel", 18);
const Justin = new Person("Justin", 40);
const Sholom = new Person("Sholom", 19);
const David = new Person("David", 20);
