// const ingredients = ["tomato", "Spinach"];

// const pizzaTimer = setTimeout(
//   (ing1, ing2) => {
//     console.log(`I want to order pizza with ${ing1} and ${ing2}...!`);
//   },
//   5000,
//   ...ingredients
// );
// console.log("Waiting...");

// if (ingredients.includes("tomato")) clearTimeout(pizzaTimer);

// Set Interval It update that function after specific timing

// let timer = setInterval(() => {
//   const now = new Date();
//   document.querySelector(
//     ".timer"
//   ).textContent = `${now.getHours()} : ${now.getMinutes()} : ${now.getSeconds()}`;

//   document.querySelector(".date").textContent = `Date: ${now}`;

//   console.log(`${now.getHours()} : ${now.getMinutes()} : ${now.getSeconds()}`);
// }, 1000);

// console.log(timer);

/**Making timer of 2 minute... **/
// let time = 120;
// const timers = setInterval(function () {
//   const min = String(Math.trunc(time / 60)).padStart(2, 0);
//   const sec = String(Math.trunc(time % 60)).padStart(2, 0);

//   document.querySelector(".timer").textContent = `${min}:${sec}`;

//   time--;

//   if (sec <= 10) {
//     document.querySelector(".dec").textContent = `last ${sec} seconds`;
//     document.querySelector(".dec").style.color = "red ";
//   }

//   if (min == 0 && sec == 0) {
//     document.querySelector(".dec").textContent = `Time is over`;
//     document.querySelector(".timer").textContent = `${000}:${000}`;
//     clearInterval(timers);
//   }

//   console.log(time);
// }, 1000);

// console.log(h1);
// console.log(h1.parentElement);
// const h1 = document.querySelectorAll("h1");

// // console.log(h1);
// // console.log(h1.parentElement);
// console.log(h1.parentElement.children);

console.log("hello");

const big = function (x) {
  x.style.fontSize = "64px";
  console.log("click");
};

const normal = function (x) {
  x.style.fontSize = "32px";
};
