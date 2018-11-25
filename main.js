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

/***/ "./src/js/components/addProjectForm.js":
/*!*********************************************!*\
  !*** ./src/js/components/addProjectForm.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sections_projects_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sections/projects.js */ \"./src/js/sections/projects.js\");\n\r\n\r\nfunction hide(element) {\r\n\telement.classList.remove(\"bring-up\");\r\n\telement.classList.add(\"fade\");\r\n}\r\n\r\nfunction closeNewProject() {\r\n\tlet newProjectContainer = document.querySelector(\".new-project-container\");\r\n\thide(newProjectContainer);\r\n\tnewProjectContainer.querySelector(\"#new-project__name\").value = \"\";\r\n\tnewProjectContainer.querySelector(\".icon-display i\").className = \"fas fa-sticky-note\";\r\n}\r\n\r\nfunction initAddProjectForm() {\r\n\tlet newProjectContainer = document.createElement(\"div\");\r\n\tnewProjectContainer.classList.add(\"new-project-container\");\r\n\tnewProjectContainer.classList.add(\"fade\");\r\n\r\n\tnewProjectContainer.innerHTML = \"<h3 class=\\\"new-project__header\\\">New Project</h3>\" +\r\n\t\t\t\t\t\t\t\t\t\"<p class=\\\"notice\\\"></p>\" +\r\n\t\t\t\t\t\t\t\t\t\"<label for=\\\"new-project__name\\\" class=\\\"label\\\">\" +\r\n\t\t\t\t\t\t\t\t\t\t\"<input id=\\\"new-project__name\\\" class=\\\"input\\\" placeholder=\\\"Project Name\\\" required>\" +\r\n\t\t\t\t\t\t\t\t\t\"</label>\" +\r\n\t\t\t\t\t\t\t\t\t\"<span class=\\\"icon-display\\\">\" +\r\n\t\t\t\t\t\t\t\t\t\t\"<i class=\\\"fas fa-sticky-note\\\"></i>\" +\r\n\t\t\t\t\t\t\t\t\t\"</span>\" +\r\n\t\t\t\t\t\t\t\t\t\"<button class=\\\"btn btn__choose-icon\\\">Select Icon</button>\" +\r\n\t\t\t\t\t\t\t\t\t\"<div class=\\\"row\\\">\" +\r\n\t\t\t\t\t\t\t\t\t\t\"<div class=\\\"col-1-2\\\">\" +\r\n\t\t\t\t\t\t\t\t\t\t\t\"<button class=\\\"btn btn__add-project\\\">Add Project</button>\" +\r\n\t\t\t\t\t\t\t\t\t\t\"</div>\" +\r\n\t\t\t\t\t\t\t\t\t\t\"<div class=\\\"col-1-2\\\">\" +\r\n\t\t\t\t\t\t\t\t\t\t\t\"<button class=\\\"btn btn__cancel-project\\\">Cancel</button>\" +\r\n\t\t\t\t\t\t\t\t\t\t\"</div>\" +\r\n\t\t\t\t\t\t\t\t\t\"</div>\" +\r\n\t\t\t\t\t\t\t\t\t\"<div class=\\\"choose-icon-container fade\\\">\" +\r\n\t\t\t\t\t\t\t\t\t\t\"<h4 class=\\\"choose-icon__header\\\">Choose an Icon</h4>\" +\r\n\t\t\t\t\t\t\t\t\t\t\"<div class=\\\"choose-icon__box\\\">\"+\r\n\t\t\t\t\t\t\t\t\t\t\t\"<i class=\\\"fas fa-broom icon\\\"></i><i class=\\\"fas fa-sticky-note icon\\\"></i>\" +\r\n\t\t\t\t\t\t\t\t\t\t\t\"<i class=\\\"fas fa-flask icon\\\"></i><i class=\\\"fas fa-snowflake icon\\\"></i>\" +\r\n\t\t\t\t\t\t\t\t\t\t\t\"<i class=\\\"fas fa-calculator icon\\\"></i><i class=\\\"fas fa-address-card icon\\\"></i>\" +\r\n\t\t\t\t\t\t\t\t\t\t\t\"<i class=\\\"fas fa-ambulance icon\\\"></i><i class=\\\"fas fa-dollar-sign icon\\\"></i>\" +\r\n\t\t\t\t\t\t\t\t\t\t\t\"<i class=\\\"fas fa-dog icon\\\"></i><i class=\\\"fas fa-birthday-cake icon\\\"></i>\" +\r\n\t\t\t\t\t\t\t\t\t\t\t\"<i class=\\\"fas fa-tshirt icon\\\"></i><i class=\\\"fas fa-utensils icon\\\"></i>\" +\r\n\t\t\t\t\t\t\t\t\t\t\t\"<i class=\\\"fas fa-football-ball icon\\\"></i><i class=\\\"fas fa-balance-scale icon\\\"></i>\" +\r\n\t\t\t\t\t\t\t\t\t\t\t\"<i class=\\\"fas fa-plane-departure icon\\\"></i>\" +\r\n\t\t\t\t\t\t\t\t\t\t\"</div>\" +\r\n\t\t\t\t\t\t\t\t\t\"</div>\";\r\n\r\n\tdocument.querySelector(\".container\").appendChild(newProjectContainer);\r\n\r\n\t// select icon\r\n\tlet iconContainer = newProjectContainer.querySelector(\".choose-icon-container\");\r\n\tnewProjectContainer.querySelector(\".btn__choose-icon\").addEventListener(\"click\", function() {\r\n\t\ticonContainer.classList.remove(\"fade\");\r\n\t});\r\n\r\n\tlet displayIcon = newProjectContainer.querySelector(\".icon-display i\");\r\n\tnewProjectContainer.querySelectorAll(\".icon\").forEach(function(icon) {\r\n\t\ticon.addEventListener(\"click\", function() {\t\r\n\t\t\tdisplayIcon.className = \"\";\t\t\r\n\t\t\tdisplayIcon.className = this.className;\r\n\t\t\ticonContainer.classList.add(\"fade\");\r\n\t\t});\r\n\t});\r\n\r\n\t// add the project\r\n\tnewProjectContainer.querySelector(\".btn__add-project\").addEventListener(\"click\", function() {\r\n\t\tlet projectName = newProjectContainer.querySelector(\"#new-project__name\").value;\r\n\t\tif(!projectName) {\r\n\t\t\tnewProjectContainer.querySelector(\".notice\").textContent = \"Project Name Field is Required\";\r\n\t\t\treturn;\r\n\t\t}\r\n\r\n\t\tlet iconClass = newProjectContainer.querySelector(\".icon-display i\").className;\r\n\t\tObject(_sections_projects_js__WEBPACK_IMPORTED_MODULE_0__[\"addNewProject\"])({\r\n\t\t\tname: projectName,\r\n\t\t\ticon: iconClass,\r\n\t\t\ttodos: []\r\n\t\t}, true);\r\n\r\n\t\tcloseNewProject();\r\n\t});\r\n\r\n\t// cancel add new project\r\n\tnewProjectContainer.querySelector(\".btn__cancel-project\").addEventListener(\"click\", function() {\r\n\t\tcloseNewProject();\r\n\t});\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (initAddProjectForm);\n\n//# sourceURL=webpack:///./src/js/components/addProjectForm.js?");

/***/ }),

/***/ "./src/js/components/navbar.js":
/*!*************************************!*\
  !*** ./src/js/components/navbar.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _removeProjectForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./removeProjectForm */ \"./src/js/components/removeProjectForm.js\");\n\r\n\r\nfunction initNavbar() {\r\n\tlet nav = document.createElement(\"nav\");\r\n\t\r\n\tnav.innerHTML = \"<h1 class=\\\"logo\\\">Get 'er Done</h1>\" +\r\n\t\t\t\t\t\"<ul class=\\\"nav-list\\\">\" +\r\n\t\t\t\t        \"<li class=\\\"nav-item back fade\\\"><i class=\\\"fas fa-arrow-left\\\"></i></li>\" +\r\n\t\t\t\t        \"<li class=\\\"nav-item toggle-box\\\">\" +\r\n\t\t\t\t        \t\"<div class=\\\"menu-toggle\\\">\" +\r\n\t\t\t\t        \t\t\"<div class=\\\"menu-toggle__bar top\\\"></div>\" +\r\n\t\t\t\t        \t\t\"<div class=\\\"menu-toggle__bar mid\\\"></div>\" +\r\n\t\t\t\t        \t\t\"<div class=\\\"menu-toggle__bar bot\\\"></div>\" +\r\n\t\t\t\t        \t\"</div>\" +\r\n\t\t\t\t        \"</li>\" +\r\n\t\t\t\t\t    \"<ul class=\\\"menu-list\\\">\" +\r\n\t\t\t\t\t    \t// \"<li class=\\\"nav-item select\\\"><a class=\\\"nav-link\\\">Select</a></li>\"+\r\n\t\t\t\t\t    \t\"<li class=\\\"nav-item add-remove-item\\\">\" +\r\n\t\t\t\t\t    \t\t\"<a class=\\\"nav-link add-project\\\">Add Project</a>\" +\r\n\t\t\t\t\t    \t\t\"<a class=\\\"nav-link remove-project fade\\\">Remove Project</a>\" +\r\n\t\t\t\t\t    \t\"</li>\" +\r\n\t\t\t\t\t    \"</ul>\" +\r\n\t\t\t\t\t\"</ul>\";\r\n\r\n\tdocument.querySelector(\".container\").appendChild(nav);\r\n\r\n\t// back button\r\n\tlet addProjectButton = nav.querySelector(\".add-project\");\r\n\tlet removeProjectButton = nav.querySelector(\".remove-project\");\r\n\tnav.querySelector(\".back\").addEventListener(\"click\", function() {\r\n\t\tconsole.log(\"clicked\");\r\n\r\n\t\t// show the icons\r\n\t\tdocument.querySelector(\".projects__icons\").classList.remove(\"fade\");\r\n\r\n\t\t// whichever list is being show, stop showing it\r\n\t\t// we need this check in the case the list was removed\r\n\t\tif(document.querySelector(\".show-list\")) {\r\n\t\t\tdocument.querySelector(\".show-list\").classList.remove(\"show-list\");\r\n\t\t}\r\n\r\n\t\t// show/hide buttons\r\n\t\tthis.classList.add(\"fade\");\r\n\t\tremoveProjectButton.classList.add(\"fade\");\r\n\t\taddProjectButton.classList.remove(\"fade\");\r\n\t});\r\n\r\n\t// menu toggle\r\n\tlet toggleBox = nav.querySelector(\".toggle-box\");\r\n\tlet menuToggle = nav.querySelector(\".menu-toggle\");\r\n\tlet menuList = nav.querySelector(\".menu-list\");\r\n\tlet top = nav.querySelector(\".top\");\r\n\tlet mid = nav.querySelector(\".mid\");\r\n\tlet bot = nav.querySelector(\".bot\");\r\n\ttoggleBox.addEventListener(\"click\", function() {\r\n\t\t// toggle animation\r\n\t\ttop.classList.toggle(\"top-spin\");\r\n\t\tmid.classList.toggle(\"fade\");\r\n\t\tbot.classList.toggle(\"bot-spin\");\r\n\r\n\t\t// show sreen\r\n\t\tdocument.querySelector(\".screen\").classList.toggle(\"hidden\");\r\n\r\n\t\t// change css of toggle button\r\n\t\tthis.classList.toggle(\"toggle-box-toggled\");\r\n\t\tmenuToggle.classList.toggle(\"menu-toggle-toggled\");\r\n\r\n\t\t// slide everything over\r\n\t\tdocument.querySelector(\".container\").classList.toggle(\"slide-over\");\r\n\t});\r\n\r\n\t// add project\r\n\tlet newProjectContainer = document.querySelector(\".new-project-container\");\r\n\taddProjectButton.addEventListener(\"click\", function() {\r\n\t\tif(window.innerWidth < 768) {\r\n\t\t\ttoggleBox.click();\r\n\t\t}\r\n\r\n\t\tnewProjectContainer.classList.remove(\"fade\");\r\n\t\tnewProjectContainer.classList.add(\"bring-up\");\r\n\t});\r\n\r\n\t// remove project\r\n\tlet confirmRemoveContainer = document.createElement(\"div\");\r\n\tconfirmRemoveContainer.classList.add(\"confirm-remove-container\");\r\n\tconfirmRemoveContainer.classList.add(\"fade\");\r\n\r\n\tconfirmRemoveContainer.innerHTML = \"<h3 class=\\\"confirm-remove__header\\\">Confirm Remove Project</h3>\" +\r\n\t\t\t\t\t\t\t\t\t   \"<p class=\\\"confirm-remove__text\\\">Are you sure you want to remove project: '<span class=\\\"confirm-remove__project-name\\\">\" +  + \"</span>'?</p>\" +\r\n\t\t\t\t\t\t\t\t\t   \"<div class=\\\"row\\\">\" +\r\n\t\t\t\t\t\t\t\t\t   \t\t\"<div class=\\\"col-1-2\\\">\" +\r\n\t\t\t\t\t\t\t\t\t   \t\t\t\"<button class=\\\"btn__confirm-remove\\\">Yes</button>\" +\r\n\t\t\t\t\t\t\t\t\t   \t\t\"</div>\" +\r\n\t\t\t\t\t\t\t\t\t   \t\t\"<div class=\\\"col-1-2\\\">\" +\r\n\t\t\t\t\t\t\t\t\t   \t\t\t\"<button class=\\\"btn__cancel-remove\\\">No</button>\" +\r\n\t\t\t\t\t\t\t\t\t   \t\t\"</div>\" +\r\n\t\t\t\t\t\t\t\t\t   \"</div>\";\r\n\r\n\tdocument.querySelector(\".container\").appendChild(confirmRemoveContainer);\r\n\r\n\t// initiate delete\r\n\tlet confirmRemoveProjectName = document.querySelector(\".confirm-remove__project-name\");\r\n\tremoveProjectButton.addEventListener(\"click\", function() {\r\n\t\tlet projectName = document.querySelector(\".show-list .project__name\").textContent;\r\n\t\tconfirmRemoveProjectName.textContent = projectName;\r\n\r\n\t\tconfirmRemoveContainer.classList.remove(\"fade\");\r\n\t\tconfirmRemoveContainer.classList.add(\"bring-up\");\r\n\t});\r\n\r\n\t// confirm delete\r\n\tdocument.querySelector(\".btn__confirm-remove\").addEventListener(\"click\", function() {\r\n\t\tObject(_removeProjectForm__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n\t});\r\n\r\n\t// cancel delete\r\n\tdocument.querySelector(\".btn__cancel-remove\").addEventListener(\"click\", function() {\r\n\t\tconfirmRemoveContainer.classList.add(\"fade\");\r\n\t\tconfirmRemoveContainer.classList.remove(\"bring-up\");\r\n\t});\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (initNavbar);\n\n//# sourceURL=webpack:///./src/js/components/navbar.js?");

/***/ }),

/***/ "./src/js/components/project.js":
/*!**************************************!*\
  !*** ./src/js/components/project.js ***!
  \**************************************/
/*! exports provided: createIconFace, createListFace */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createIconFace\", function() { return createIconFace; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createListFace\", function() { return createListFace; });\nfunction createIconFace(name, icon) {\r\n\t// init icon face\r\n\tlet iconFace = document.createElement(\"div\");\r\n\tlet projectIcon = document.createElement(\"i\");\r\n\tlet projectName = document.createElement(\"h2\");\r\n\r\n\ticonFace.classList.add(\"project__icon-face\");\r\n\ticon.split(\" \").forEach(function(iconClass) {\r\n\t\tprojectIcon.classList.add(iconClass);\r\n\t});\r\n\tprojectName.classList.add(\"project__name\");\r\n\r\n\tif(name.length > 13) {\r\n\t\tprojectName.textContent = name.substring(0, 13) + \"..\";\r\n\t} else {\r\n\t\tprojectName.textContent = name;\r\n\t}\r\n\r\n\ticonFace.appendChild(projectIcon);\r\n\ticonFace.appendChild(projectName);\r\n\r\n\treturn iconFace;\r\n}\r\n\r\nfunction createListFace(name, todos) {\r\n\tlet listFace = document.createElement(\"div\");\r\n\tlet projectName = document.createElement(\"h1\");\r\n\tlet list = document.createElement(\"ul\");\r\n\r\n\tlistFace.classList.add(\"project__list-face\");\r\n\tprojectName.classList.add(\"project__name\");\r\n\tlist.classList.add(\"project__list\");\r\n\r\n\tprojectName.textContent = name;\r\n\r\n\t// a todo will have more things than this, but this is the gist of it for now\r\n\ttodos.forEach(function(todo) {\r\n\t\tlet listItem = document.createElement(\"li\");\r\n\r\n\t\tlistItem.classList.add(\"project__list--item\");\r\n\t\tlistItem.textContent = todo.name;\r\n\t\tlist.appendChild(listItem);\r\n\t});\r\n\r\n\tlistFace.appendChild(projectName);\r\n\tlistFace.appendChild(list);\r\n\treturn listFace;\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./src/js/components/project.js?");

/***/ }),

/***/ "./src/js/components/removeProjectForm.js":
/*!************************************************!*\
  !*** ./src/js/components/removeProjectForm.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst PROJECT_NAMES = \"PROJECT_NAMES\";\r\n\r\nfunction removeProject() {\r\n\tlet projectName = document.querySelector(\".show-list .project__name\").textContent;\r\n\t\r\n\t// remove it from local storage\r\n\tlet projectNames = localStorage.getItem(PROJECT_NAMES).split(\",\");\r\n\tfor(let i=0; i < projectNames.length; i++) {\r\n\t\tif(projectNames[i] == projectName) {\r\n\t\t\tprojectNames.splice(i, 1);\r\n\t\t\tbreak;\r\n\t\t}\r\n\t}\r\n\tprojectNames = projectNames.join(\",\");\r\n\tlocalStorage.setItem(PROJECT_NAMES, projectNames);\r\n\r\n\tlocalStorage.removeItem(projectName);\r\n\r\n\t// remove it from the UI\r\n\tdocument.querySelectorAll(\"[data-name=\\\"\" + projectName + \"\\\"]\").forEach(function(el) {\r\n\t\tel.remove();\r\n\t});\r\n\r\n\tlet confirmRemoveContainer = document.querySelector(\".confirm-remove-container\");\r\n\tconfirmRemoveContainer.classList.add(\"fade\");\r\n\tconfirmRemoveContainer.classList.remove(\"bring-up\");\r\n\r\n\tdocument.querySelector(\"nav .back\").click();\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (removeProject);\n\n//# sourceURL=webpack:///./src/js/components/removeProjectForm.js?");

/***/ }),

/***/ "./src/js/components/screen.js":
/*!*************************************!*\
  !*** ./src/js/components/screen.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction initScreen() {\r\n\tlet screen = document.createElement(\"div\");\r\n\tscreen.classList.add(\"screen\");\r\n\tscreen.classList.add(\"hidden\");\r\n\tdocument.querySelector(\".container\").appendChild(screen);\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (initScreen);\n\n//# sourceURL=webpack:///./src/js/components/screen.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sections_home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sections/home.js */ \"./src/js/sections/home.js\");\n\r\n\r\n\r\n(function() {\r\n\tdocument.body.innerHTML += \"<div class=\\\"container\\\"></div>\";\r\n\t\r\n\tObject(_sections_home_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n})();\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ }),

/***/ "./src/js/sections/home.js":
/*!*********************************!*\
  !*** ./src/js/sections/home.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_screen_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/screen.js */ \"./src/js/components/screen.js\");\n/* harmony import */ var _components_addProjectForm_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/addProjectForm.js */ \"./src/js/components/addProjectForm.js\");\n/* harmony import */ var _components_navbar_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/navbar.js */ \"./src/js/components/navbar.js\");\n/* harmony import */ var _projects_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projects.js */ \"./src/js/sections/projects.js\");\n\r\n\r\n\r\n\r\n\r\n// these rows are initialized when the projects are initialized\r\n// then re-accessed when new projects are added\r\nlet iconsRow;\r\nlet listsRow;\r\n\r\nfunction home() {\r\n\t// init black screen\r\n\tObject(_components_screen_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n\r\n\t// init add project form\r\n\tObject(_components_addProjectForm_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n\r\n\t// init the top bar\r\n\tObject(_components_navbar_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n\r\n\t// init the projects section\r\n\tObject(_projects_js__WEBPACK_IMPORTED_MODULE_3__[\"initProjects\"])();\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (home);\n\n//# sourceURL=webpack:///./src/js/sections/home.js?");

/***/ }),

/***/ "./src/js/sections/projects.js":
/*!*************************************!*\
  !*** ./src/js/sections/projects.js ***!
  \*************************************/
/*! exports provided: addNewProject, initProjects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addNewProject\", function() { return addNewProject; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initProjects\", function() { return initProjects; });\n/* harmony import */ var _components_project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/project.js */ \"./src/js/components/project.js\");\n\r\n\r\nconst PROJECT_NAMES = \"PROJECT_NAMES\";\r\nlet iconsRow;\r\nlet listsRow;\r\n\r\n// the projects are added as a group of icons and a group of lists\r\n// it was done this way in order to get the list full screen animation effect\r\nfunction addNewProject(projectObj, userAdded) {\r\n\tlet iconCol = document.createElement(\"div\");\r\n\tlet listCol = document.createElement(\"div\");\r\n\r\n\tlet iconElement = Object(_components_project_js__WEBPACK_IMPORTED_MODULE_0__[\"createIconFace\"])(projectObj.name, projectObj.icon);\r\n\tlet listElement = Object(_components_project_js__WEBPACK_IMPORTED_MODULE_0__[\"createListFace\"])(projectObj.name, projectObj.todos);\r\n\r\n\t// icon\r\n\tlet iconDataAttr = document.createAttribute(\"data-name\");\r\n\ticonDataAttr.value = projectObj.name;\r\n\r\n\ticonCol.classList.add(\"col-1-3\");\r\n\ticonCol.classList.add(\"col-md-1-4\");\r\n\ticonCol.classList.add(\"col-lg-1-5\");\r\n\ticonCol.setAttributeNode(iconDataAttr);\r\n\r\n\tlet iconsContainer = document.querySelector(\".projects__icons\");\r\n\tlet backButton = document.querySelector(\".back\");\r\n\tlet addProjectButton = document.querySelector(\"nav .add-project\");\r\n\tlet removeProjectButton = document.querySelector(\"nav .remove-project\");\r\n\ticonElement.addEventListener(\"click\", function() {\r\n\t\t// icons fade\r\n\t\ticonsContainer.classList.add(\"fade\");\r\n\r\n\t\t// list of clicked project shows\r\n\t\tlistElement.classList.add(\"show-list\");\r\n\r\n\t\t// hide/show buttons\r\n\t\tbackButton.classList.remove(\"fade\");\r\n\t\taddProjectButton.classList.add(\"fade\");\r\n\t\tremoveProjectButton.classList.remove(\"fade\");\r\n\t});\r\n\r\n\ticonCol.appendChild(iconElement);\r\n\ticonsRow.appendChild(iconCol);\r\n\r\n\t//list\r\n\tlet listDataAttr = document.createAttribute(\"data-name\");\r\n\tlistDataAttr.value = projectObj.name;\r\n\r\n\tlistCol.classList.add(\"col-1-3\");\r\n\tlistCol.classList.add(\"col-md-1-4\");\r\n\tlistCol.classList.add(\"col-lg-1-5\");\r\n\tlistCol.setAttributeNode(listDataAttr);\r\n\r\n\tlistCol.appendChild(listElement);\r\n\tlistsRow.appendChild(listCol);\r\n\r\n\tif(userAdded) {\r\n\t\tlet names = localStorage.getItem(PROJECT_NAMES);\r\n\r\n\t\tif(!names) {\r\n\t\t\tnames = projectObj.name;\r\n\t\t} else {\r\n\t\t\tnames += \",\" + projectObj.name;\r\n\t\t}\r\n\r\n\t\tlocalStorage.setItem(PROJECT_NAMES, names);\r\n\t\tlocalStorage.setItem(projectObj.name, JSON.stringify(projectObj));\r\n\t}\r\n}\r\n\r\nfunction initProjects() {\r\n\r\n\tlet projectsContainer = document.createElement(\"section\");\r\n\tprojectsContainer.classList.add(\"projects-container\");\r\n\tprojectsContainer.innerHTML = \"<div class=\\\"projects__icons\\\"></div>\" +\r\n                                  \"<div class=\\\"projects__lists\\\"></div>\";\r\n\r\n    document.querySelector(\".container\").appendChild(projectsContainer);\r\n\r\n\tlet iconsContainer = document.querySelector(\".projects__icons\");\r\n\tlet listsContainer = document.querySelector(\".projects__lists\");\r\n\ticonsRow = document.createElement(\"div\");\r\n\tlistsRow = document.createElement(\"div\");\r\n\r\n\ticonsRow.classList.add(\"row\");\r\n\tlistsRow.classList.add(\"row\");\r\n\r\n\t// saved projects\r\n\tlet names = localStorage.getItem(PROJECT_NAMES);\r\n\tif(names) {\r\n\t\tnames.split(\",\").forEach(function(name) {\r\n\t\t\tlet projectObj = JSON.parse(localStorage.getItem(name));\r\n\t\t\taddNewProject(projectObj, false);\r\n\t\t});\r\n\t}\r\n\r\n\ticonsContainer.appendChild(iconsRow);\r\n\tlistsContainer.appendChild(listsRow);\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./src/js/sections/projects.js?");

/***/ })

/******/ });