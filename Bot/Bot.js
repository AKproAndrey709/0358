// ==UserScript==
// @name         Bot for Yandex
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  try to take over the world!
// @author       Karpuk Andrey
// @match        https://ya.ru/*
// @match        https://autobazar.us/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

let links = document.links;
let searchBtn = document.querySelector(".mini-suggest__button");
let input = document.getElementById("text");
let keywords = [
  "Автомобили из Америки",
  "RAM 2500",
  "GMC SIERRA",
];
let keyword = keywords[getRandom(0, keywords.length)];

// Работаем на главной странице

if (input !== null) {
  let i = 0;
  let timerId = setInterval(() => {
    input.value += keyword[i];
    i++;
    if (i == keyword.length) {
      clearInterval(timerId);
      searchBtn.click();
    }
  }, 500);
}
else if (location.hostname == "autobazar.us") {

  //Работаем на целевом сайте

  //LogManager was not instantiated before (in entry file). Using dummy. --- сообщение в консоли на сайте "ВсеИнструменты", console.log не выводит.

  console.log("I'm here!");

  setInterval (() => {
    let index = getRandom(0, links.length);
    if (getRandom(0, 101) >= 60) {
      location.href = "https://ya.ru/";
    }
    if (links[index].href.includes("autobazar.us")) {
      links[index].click();
    }
  }, getRandom(2000, 5000))
}

// Работаем на странице поисковой выдачи

else {
  let nextPage = true;
  for (let i = 0; i < links.length; i++) {
    if (links[i].href.includes("autobazar.us")) {
      let link = links[i];
      nextPage = false;
      link.setAttribute("target", "_self");
      console.log("FIND " + link);
      setTimeout(() => {
        link.click();
      }, getRandom(2000, 4000))
      break;
    }
  }
  let elemExist = setInterval(() => {
    let elem = document.querySelector(".Pager-Item_current");
    if (elem != null) {
      if (elem.innerText == "5") {
        nextPage = false;
        location.href = "https://ya.ru/";
      }
      clearInterval(elemExist);
    }
  }, 100)

  if (nextPage) {
    setTimeout(() => {
      document.querySelector(".Pager-Item_type_next").click();
    }, getRandom(3000, 5000))
  }
}

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
