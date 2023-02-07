'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

//////////////////////////////////////////////////

// console.log(document.documentElement);
// console.log(document.head);
// console.log(document.body);

const headers = document.querySelector('.header');

// const allSections = document.querySelectorAll('.section');
// console.log(allSections);
// const allButton = document.getElementsByTagName('button');
// console.log(allButton);

const message = document.createElement('div');
message.classList.add('cookie-message');
message.textContent = 'This is cookies';
message.innerHTML =
  'This is cookies clicking close button close it... <button class="btn btn--close-cookies">Close This!</button>';

headers.prepend(message);
// headers.append(message);
// headers.before(message);

document
  .querySelector('.btn--close-cookies')
  .addEventListener('click', function () {
    message.remove();
    // message.parentElement.removeChild(message);
  });

/*** Style */
message.style.backgroundColor = '#37383d';
message.style.width = '120%';
// message.style.color = '#63628d';

console.log(message.style.color);
console.log(message.style.backgroundColor);
console.log(message.style.width);

console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message.height));

message.style.height =
  Number.parseFloat(getComputedStyle(message).height) + 40 + 'px';
