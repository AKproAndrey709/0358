			// ==UserScript==
			// @name         Bot for Yandex
			// @namespace    http://tampermonkey.net/
			// @version      0.1
			// @description  try to take over the world!
			// @author       Karpuk Andrey
			// @match        https://ya.ru/*
			// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
			// @grant        none
			// ==/UserScript==

			let links = document.links;
			let searchBtn = document.querySelector(".mini-suggest__button");
			let input = document.getElementById("text");
			let keywords = [
				"Инструменты купить",
				"Немецкое качество",
				"Бензопилы",
				// "10 самых популярных шрифтов Google",
				// "Отключение редакций и ревизий",
				// "Вывод произвольных типов записей и полей",
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

				// Работаем на странице поисковой выдачи
				// input.value = keyword;
			} else {
				for (let i = 0; i < links.length; i++) {
					if (links[i].href.includes("vseinstrumenti.ru")) {
						let link = links[i];
						link.setAttribute("target", "_self");
						console.log("FIND " + link);
						link.click();
						break;
					}
				}
			}

			function getRandom(min, max) {
				return Math.floor(Math.random() * (max - min) + min);
			}
