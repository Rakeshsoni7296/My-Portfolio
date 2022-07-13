const hams = document.querySelector('.hams');
const close = document.querySelector('.close');
const menu = document.querySelector('.links');
const logo = document.querySelector('.logo');
const hero = document.querySelector('.hero-section');
const myNav = document.querySelector('.header');

const projectCardContainer = document.querySelector('.project-container');

hams.addEventListener('click', () => {
  menu.classList.add('links-in-mob');
  logo.classList.add('logo-up');
  close.classList.add('display');
  hams.classList.add('hidden');
});

close.addEventListener('click', () => {
  menu.classList.remove('links-in-mob');
  close.classList.remove('display');
  hams.classList.remove('hidden');
  logo.classList.remove('logo-up');
});

window.onscroll = function() {
  "use strict";
  if (document.body.scrollTop >= 10 || document.documentElement.scrollTop >= 10) {
    myNav.classList.add("scroll");
  } else {
    myNav.classList.remove("scroll");
  }
};

projectCardContainer.addEventListener('mouseover', function(e){
  const cardClicked = e.target.closest('.project-card');
  if(!cardClicked) return;
  cardClicked.querySelector('.card-overlay').classList.remove('hidden');
  cardClicked.querySelector('.hover-show-wrapper').classList.remove('hidden');
});

projectCardContainer.addEventListener('mouseout', function(e){
  const cardClicked = e.target.closest('.project-card');
  if(!cardClicked) return;
  cardClicked.querySelector('.card-overlay').classList.add('hidden');
  cardClicked.querySelector('.hover-show-wrapper').classList.add('hidden');
});