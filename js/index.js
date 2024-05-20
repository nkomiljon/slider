import { move } from './interval.js';

"use strict";

const wrapper = document.querySelector(".slider-wrapper");
const indicatorsEl = document.querySelector(".indicators");
const listsEl = document.querySelector(".list");

let wrapperWidth = wrapper.clientWidth;

let slide = 0;
let i = 0;
const slideShow = () => {
  i++;
  slide = slide < wrapperWidth ? (slide += 320) : 0;
  console.log(slide);
  console.log(is(slide));
  transform(-1 * slide);
};

move(slideShow);

const is = (slide, i) => {
  return slide < -1 * wrapperWidth;
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
