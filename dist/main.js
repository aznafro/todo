/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/components/home.js":
/*!***********************************!*\
  !*** ./src/js/components/home.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project.js */ \"./src/js/components/project.js\");\n\r\n\r\n \r\nfunction initTopBar() {\r\n\tlet nav = document.createElement(\"nav\");\r\n\t\r\n\tnav.innerHTML = \"<ul class=\\\"nav-list\\\">\" +\r\n\t\t\t\t        \"<li class=\\\"nav-item back\\\"><i class=\\\"fas fa-arrow-left fade\\\"></i></li>\" +\r\n\t\t\t\t        \"<li class=\\\"nav-item logo\\\">Get 'er Done</li>\" +\r\n\t\t\t\t        \"<li class=\\\"nav-item\\\">\" +\r\n\t\t\t\t        \t\"<div class=\\\"menu-toggle\\\">\" +\r\n\t\t\t\t        \t\t\"<div class=\\\"menu-toggle__bar top\\\"></div>\" +\r\n\t\t\t\t        \t\t\"<div class=\\\"menu-toggle__bar mid\\\"></div>\" +\r\n\t\t\t\t        \t\t\"<div class=\\\"menu-toggle__bar bot\\\"></div>\" +\r\n\t\t\t\t        \t\"</div>\" +\r\n\t\t\t\t        \"</li>\" +\r\n\t\t\t\t\t    \"<ul class=\\\"menu-list\\\">\" +\r\n\t\t\t\t\t    \t\"<li class=\\\"nav-item\\\"><a class=\\\"nav-link select\\\">Select</a></li>\"+\r\n\t\t\t\t\t    \t\"<li class=\\\"nav-item\\\"><a class=\\\"nav-link add-project\\\">Add Project</a></li>\"+\r\n\t\t\t\t\t    \"</ul>\" +\r\n\t\t\t\t\t\"</ul>\";\r\n\r\n\tdocument.querySelector(\".container\").appendChild(nav);\r\n\tnav.querySelector(\".fa-arrow-left\").addEventListener(\"click\", function() {\r\n\t\tdocument.querySelector(\".projects__icons\").classList.remove(\"fade\");\r\n\t\tdocument.querySelector(\".show-list\").classList.remove(\"show-list\");\r\n\t\tthis.classList.add(\"fade\");\r\n\t});\r\n\r\n\tlet menuToggle = nav.querySelector(\".menu-toggle\");\r\n\tlet menuList = nav.querySelector(\".menu-list\");\r\n\tlet top = nav.querySelector(\".top\");\r\n\tlet mid = nav.querySelector(\".mid\");\r\n\tlet bot = nav.querySelector(\".bot\");\r\n\tmenuToggle.addEventListener(\"click\", function() {\r\n\t\ttop.classList.toggle(\"top-spin\");\r\n\t\tmid.classList.toggle(\"fade\");\r\n\t\tbot.classList.toggle(\"bot-spin\");\r\n\t\tmenuList.classList.toggle(\"slide-in\");\r\n\t});\r\n}\r\n\r\nfunction initProjects() {\r\n\tlet projects = [{\r\n\t\tname: \"Clean the House\",\r\n\t\ticon: \"fas fa-broom\",\r\n\t\ttodos: [{\r\n\t\t\tname: \"Sweep the Floors\",\r\n\t\t}, {\r\n\t\t\tname: \"Wipe down the kitchen\"\r\n\t\t}, {\r\n\t\t\tname: \"Vacuum upstairs\"\r\n\t\t}, {\r\n\t\t\tname: \"Take out the trash\"\r\n\t\t}]\r\n\t}, {\r\n\t\tname: \"Do Homework\",\r\n\t\ticon: \"fas fa-sticky-note\",\r\n\t\ttodos: [{\r\n\t\t\tname: \"Do Physics\"\r\n\t\t}, {\r\n\t\t\tname: \"Do Math\"\r\n\t\t}, {\r\n\t\t\tname: \"Do English\"\r\n\t\t}]\r\n\t}, {\r\n\t\tname: \"Finish Project\",\r\n\t\ticon: \"fas fa-flask\",\r\n\t\ttodos: [{\r\n\t\t\tname: \"Come up with title\"\r\n\t\t}, {\r\n\t\t\tname: \"Research chemical reactions\"\r\n\t\t}, {\r\n\t\t\tname: \"Build reaction demo\"\r\n\t\t}, {\r\n\t\t\tname: \"Make 3 fold display\"\r\n\t\t}]\r\n\t}];\r\n\r\n\tlet projectsContainer = document.createElement(\"section\");\r\n\tprojectsContainer.classList.add(\"projects-container\");\r\n\tprojectsContainer.innerHTML = \"<div class=\\\"projects__icons\\\"></div>\" +\r\n                                  \"<div class=\\\"projects__lists\\\"></div>\";\r\n\r\n    document.querySelector(\".container\").appendChild(projectsContainer);\r\n\r\n\tlet iconsContainer = document.querySelector(\".projects__icons\");\r\n\tlet listsContainer = document.querySelector(\".projects__lists\");\r\n\tlet iconsRow = document.createElement(\"div\");\r\n\tlet listsRow = document.createElement(\"div\");\r\n\r\n\ticonsRow.classList.add(\"row\");\r\n\tlistsRow.classList.add(\"row\");\r\n\r\n\tprojects.forEach(function(projectObj) {\r\n\t\tlet iconCol = document.createElement(\"div\");\r\n\t\tlet listCol = document.createElement(\"div\");\r\n\r\n\t\tlet iconElement = Object(_project_js__WEBPACK_IMPORTED_MODULE_0__[\"createIconFace\"])(projectObj.name, projectObj.icon);\r\n\t\tlet listElement = Object(_project_js__WEBPACK_IMPORTED_MODULE_0__[\"createListFace\"])(projectObj.name, projectObj.todos);\r\n\r\n\t\t// icon\r\n\t\ticonCol.classList.add(\"col-1-3\");\r\n\t\ticonCol.classList.add(\"col-md-1-4\");\r\n\t\ticonCol.classList.add(\"col-lg-1-5\");\r\n\r\n\t\ticonElement.addEventListener(\"click\", function() {\r\n\t\t\ticonsContainer.classList.add(\"fade\");\r\n\t\t\tlistElement.classList.add(\"show-list\");\r\n\t\t\tdocument.querySelector(\".fa-arrow-left\").classList.remove(\"fade\");\r\n\t\t});\r\n\r\n\t\ticonCol.appendChild(iconElement);\r\n\t\ticonsRow.appendChild(iconCol);\r\n\r\n\t\t//list\r\n\t\tlistCol.classList.add(\"col-1-3\");\r\n\t\tlistCol.classList.add(\"col-md-1-4\");\r\n\t\tlistCol.classList.add(\"col-lg-1-5\");\r\n\r\n\t\tlistCol.appendChild(listElement);\r\n\t\tlistsRow.appendChild(listCol);\r\n\t});\r\n\r\n\ticonsContainer.appendChild(iconsRow);\r\n\tlistsContainer.appendChild(listsRow);\r\n}\r\n\r\nfunction home() {\r\n\t// init the top bar\r\n\tinitTopBar();\r\n\r\n\t// init the projects section\r\n\tinitProjects();\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (home);\n\n//# sourceURL=webpack:///./src/js/components/home.js?");

/***/ }),

/***/ "./src/js/components/project.js":
/*!**************************************!*\
  !*** ./src/js/components/project.js ***!
  \**************************************/
/*! exports provided: createIconFace, createListFace */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createIconFace\", function() { return createIconFace; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createListFace\", function() { return createListFace; });\nfunction createIconFace(name, icon) {\r\n\t// init icon face\r\n\tlet iconFace = document.createElement(\"div\");\r\n\tlet projectIcon = document.createElement(\"i\");\r\n\tlet projectName = document.createElement(\"h2\");\r\n\r\n\ticonFace.classList.add(\"project__icon-face\");\r\n\ticon.split(\" \").forEach(function(iconClass) {\r\n\t\tprojectIcon.classList.add(iconClass);\r\n\t});\r\n\tprojectName.classList.add(\"project__name\");\r\n\r\n\tif(name.length > 13) {\r\n\t\tprojectName.textContent = name.substring(0, 13) + \"..\";\r\n\t} else {\r\n\t\tprojectName.textContent = name;\r\n\t}\r\n\r\n\ticonFace.appendChild(projectIcon);\r\n\ticonFace.appendChild(projectName);\r\n\r\n\treturn iconFace;\r\n}\r\n\r\nfunction createListFace(name, todos) {\r\n\tlet listFace = document.createElement(\"div\");\r\n\tlet list = document.createElement(\"ul\");\r\n\r\n\tlistFace.classList.add(\"project__list-face\");\r\n\r\n\t// a todo will have more things than this, but this is the gist of it for now\r\n\ttodos.forEach(function(todo) {\r\n\t\tlet listItem = document.createElement(\"li\");\r\n\r\n\t\tlistItem.classList.add(\"todo__list-item\");\r\n\t\tlistItem.textContent = todo.name;\r\n\t\tlist.appendChild(listItem);\r\n\t});\r\n\r\n\tlistFace.appendChild(list);\r\n\treturn listFace;\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./src/js/components/project.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/home.js */ \"./src/js/components/home.js\");\n\r\n\r\n\r\n(function() {\r\n\tdocument.body.innerHTML += \"<div class=\\\"container\\\"></div>\";\r\n\t\r\n\tObject(_components_home_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n})();\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ })

/******/ });