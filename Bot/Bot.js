// ==UserScript==
// @name         Bot for Yandex
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Bot
// @author       Karpuk Andrey
// @match        https://ya.ru/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

let links = document.links;
let searchBtn = document.querySelector(".mini-suggest__button");
let input = document.getElementById("text");
let keywords = [
  "Инструменты",
  "Ручной инструмент",
  "Бензопилы",
];

let keyword = keywords[getRandom(0, keywords.length)];

if (input !== null) {
  input.value = keyword;
  searchBtn.click();
} else {
  for (let i = 0; i < links.length; i++) {
    if (links[i].href.includes("vseinstrumenti.ru")) {
      let link = links[i];
      link.setAttribute('target', '_self');
      console.log("FIND " + link);
      link.click();
      break;
    }
  }
}

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
