'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
// let arr = 0;
// const getCountryData = function (country) {
//   country === 'India' ? (arr = 1) : (arr = 0);
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v2/name/${country}`);
//   request.send();

//   request.addEventListener('load', function () {
//     const data = JSON.parse(this.responseText);
//     console.log(data);
//     // console.log(data[1].name);
//     // console.log(data[0].flag);

//     const html = `
//   <article class="country">
//           <img class="country__img" src="${data[`${arr}`].flag}" />
//           <div class="country__data">
//             <h3 class="country__name">${data[`${arr}`].name}</h3>
//             <h4 class="country__region">${data[`${arr}`].region}</h4>
//             <p class="country__row"><span>👫</span>${(
//               +data[`${arr}`].population / 1000000
//             ).toFixed(1)} People</p>
//             <p class="country__row"><span>🗣️</span>${
//               data[`${arr}`].languages[0].name
//             }</p>
//             <p class="country__row"><span>💰</span>${
//               data[`${arr}`].currencies[0].name
//             }</p>
//           </div>
//         </article>
//   `;

//     countriesContainer.insertAdjacentHTML('beforeend', html);
//     countriesContainer.style.opacity = 1;
//   });
// };
// getCountryData('usa');
// getCountryData('USA');
// getCountryData('Russia');

// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v2/name/${country}`)
//     .then(function (response) {
//       console.log(response);
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);
//     });
// };

// getCountryData('usa');

// try {
//   let a = 90;
//   const x = 12;
//   x = 89;
//   console.log(x);
// } catch (er) {
//   alert(er.message);
// }
