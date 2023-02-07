console.log("Welcome");

// fetch("https://dummyjson.com/products/10")
//   .then((resp) => resp.json())
//   .then((data) => {
//     console.log(data);
//     document.write(`<h1>Title: ${data.title}<h1/>`);
//     document.write(`<h1>Description: ${data.description}<h1/>`);
//     document.write(`<h1> Price: ${data.price}<h1/>`);
//     document.write(`<img src=${data.images[1]} />`);
//     document.write(`<img src=${data.images[2]} />`);
//     document.write(`<img src=${data.images[3]} />`);
//   })
//   .catch((err) => {
//     document.write("can't fetch data...!");
//   });

// fetch("https://dummyjson.com/products")
//   .then((resp) => resp.json())
//   .then((data) => {
//     console.log(data);
//   });

// fetch("https://data.covid19india.org/v4/min/timeseries.min.json")
//   .then((resp) => resp.json())
//   .then((data) => {
//     console.log(data);
//     document.write(data.mh.dates);
//   });

// class Student {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   Hi() {
//     document.write(`Hi ${this.name} your age is ${this.age}<br/>`);
//   }
// }

// let a = new Student("Mahesh", 23);
// let b = new Student("Rahul", 26);
// a.Hi();
// b.Hi();

// export let Data = {
//   name: "Mahesh",
//   age: "78",
// };

// export const myGreet = function Greet() {
//   console.log("Hello Good Morning");
// };

const nums = [1, 2, 3, 4, 5, 6];

const square = nums.map((n) => {
  return n * n;
});

console.log(square);
