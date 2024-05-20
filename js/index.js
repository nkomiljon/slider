import { move } from './interval.js';
import { scroll } from './scroll.js';

("use strict");

const wrapper = document.querySelector(".slider-wrapper");

const screen = document.querySelector(".screen");
const slideEl = screen.querySelector(".slide");
const listsEl = screen.querySelector(".list");

const buttonEl = document.querySelector(".slider-controls > .left");
const indicatorsEl = document.querySelector(".indicators");

const slidesCount = listsEl.childElementCount;

let wrapperWidth = screen.clientWidth;

let slide = 0;
let i = 0;
const slideShow = () => {
  i++;

  slide = i !== slidesCount ? -1 * (wrapperWidth * i) : 0;
  console.log(i);
  console.log(slide);
  transform(slide);
};

move(slideShow);

const is = (i) => {
  return slidesCount !== i;
};

const calculate = () => {
  return ++wrapperWidth;
};

const transform = (slide) => {
  listsEl.style = `transform: translateX(${slide}px)`;
};

const addClass = (slide, i) => {
  indicatorsEl.children[i].classList.add("indicator--active");
};

const removeClass = () => {
  indicatorsEl.children[i].classList.remove("indicator--active");
};

let width = 0;
buttonEl.addEventListener("click", () => {
  width += -1 * screen.clientWidth;
  console.log(width);
  transform(width);
});

/*
const TIME = 1000;

setTimeout(() => {
  console.log("TIME");
}, TIME);

let increment = 0;
const log = () => {
  stopInterval(increment, intervalTime);
};

const intervalTime = setInterval(log, TIME);

const stopInterval = (i, id) => {
  if (i === 5) clearInterval(id);
};
*/
