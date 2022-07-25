/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./style.css":
/*!*******************!*\
  !*** ./style.css ***!
  \*******************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://fe-sprint-my-agora-states-reference-main/./style.css?");

/***/ }),

/***/ "./script.js":
/*!*******************!*\
  !*** ./script.js ***!
  \*******************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("__webpack_require__(/*! ./style.css */ \"./style.css\");\n\n// index.html을 열어서 agoraStatesDiscussions 배열 요소를 확인하세요.\nconsole.log(agoraStatesDiscussions);\nlet data;\nconst dataFromLocalStorage = localStorage.getItem(\"agoraStatesDiscussions\");\nif (dataFromLocalStorage) {\n  data = JSON.parse(dataFromLocalStorage);\n} else {\n  data = agoraStatesDiscussions.slice();\n}\n\n// convertToDiscussion은 아고라 스테이츠 데이터를 DOM으로 바꿔줍니다.\nconst convertToDiscussion = (obj) => {\n  const li = document.createElement(\"li\"); // li 요소 생성\n  li.className = \"discussion__container\"; // 클래스 이름 지정\n\n  const avatarWrapper = document.createElement(\"div\");\n  avatarWrapper.className = \"discussion__avatar--wrapper\";\n  const discussionContent = document.createElement(\"div\");\n  discussionContent.className = \"discussion__content\";\n  const discussionAnswered = document.createElement(\"div\");\n  discussionAnswered.className = \"discussion__answered\";\n\n  // TODO: 객체 하나에 담긴 정보를 DOM에 적절히 넣어주세요.\n  const avatarImg = document.createElement(\"img\");\n  avatarImg.src = obj.avatarUrl;\n  avatarImg.alt = \"avatar of \" + obj.author;\n  avatarWrapper.append(avatarImg);\n\n  const discussionTitle = document.createElement(\"h2\");\n  const titleAnchor = document.createElement(\"a\");\n  titleAnchor.href = obj.url;\n  titleAnchor.textContent = obj.title;\n  discussionTitle.append(titleAnchor);\n\n  const discussionInformation = document.createElement(\"div\");\n  discussionInformation.className = \"discussion__information\";\n  discussionInformation.textContent = `${obj.author} / ${new Date(\n    obj.createdAt\n  ).toLocaleTimeString()}`;\n  discussionContent.append(discussionTitle, discussionInformation);\n\n  const checked = document.createElement(\"p\");\n  checked.textContent = obj.answer ? \"☑\" : \"☒\";\n  discussionAnswered.append(checked);\n\n  li.append(avatarWrapper, discussionContent, discussionAnswered);\n  return li;\n};\n\n// data 배열의 모든 데이터를 화면에 렌더링하는 함수입니다.\nconst render = (element, from, to) => {\n  console.log(from, to);\n  if (!from && !to) {\n    from = 0;\n    to = data.length - 1;\n  }\n  // 다 지우고 배열에 있는 내용 다 보여주기\n  while (element.firstChild) {\n    element.removeChild(element.firstChild);\n  }\n  for (let i = from; i < to; i += 1) {\n    element.append(convertToDiscussion(data[i]));\n  }\n  return;\n};\n\n// 페이지네이션을 위한 변수\nlet limit = 10,\n  page = 1;\n\n// ul 요소에 data 배열의 모든 데이터를 화면에 렌더링합니다.\nconst ul = document.querySelector(\"ul.discussions__container\");\nrender(ul, 0, limit);\n\nconst getPageStartEnd = (limit, page) => {\n  const len = data.length - 1;\n  let pageStart = Number(page - 1) * Number(limit);\n  let pageEnd = Number(pageStart) + Number(limit);\n  if (page <= 0) {\n    pageStart = 0;\n  }\n  if (pageEnd >= len) {\n    pageEnd = len;\n  }\n  return { pageStart, pageEnd };\n};\n\nconst buttons = document.querySelector(\".buttons\");\nbuttons.children[0].addEventListener(\"click\", () => {\n  if (page > 1) {\n    page = page - 1;\n  }\n  const { pageStart, pageEnd } = getPageStartEnd(limit, page);\n  render(ul, pageStart, pageEnd);\n});\n\nbuttons.children[1].addEventListener(\"click\", () => {\n  if (limit * page < data.length - 1) {\n    page = page + 1;\n  }\n  const { pageStart, pageEnd } = getPageStartEnd(limit, page);\n  render(ul, pageStart, pageEnd);\n});\n\nbuttons.children[2].addEventListener(\"click\", () => {\n  localStorage.removeItem(\"agoraStatesDiscussions\");\n  data = agoraStatesDiscussions.slice();\n  limit = 10;\n  page = 1;\n  render(ul, 0, limit);\n});\n\n// 문서의 내용을 확인해야 합니다.\nconst form = document.querySelector(\"form.form\");\nconst author = form.querySelector(\"div.form__input--name > input\");\nconst title = form.querySelector(\"div.form__input--title > input\");\nconst textbox = form.querySelector(\"div.form__textbox > textarea\");\n\n// 문서를 제출해야 합니다.\nform.addEventListener(\"submit\", (event) => {\n  event.preventDefault();\n  const obj = {\n    id: \"unique id\",\n    createdAt: new Date().toISOString(),\n    title: title.value,\n    url: \"https://github.com/codestates-seb/agora-states-fe/discussions\",\n    author: author.value,\n    answer: null,\n    bodyHTML: textbox.value,\n    avatarUrl:\n      \"https://avatars.githubusercontent.com/u/12145019?s=64&u=5c97f25ee02d87898457e23c0e61b884241838e3&v=4\",\n  };\n  data.unshift(obj);\n\n  // 로컬스토리지에 저장\n  localStorage.setItem(\"agoraStatesDiscussions\", JSON.stringify(data));\n\n  // 렌더링\n  render(ul, 0, limit);\n});\n\n\n//# sourceURL=webpack://fe-sprint-my-agora-states-reference-main/./script.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./script.js");
/******/ 	
/******/ })()
;