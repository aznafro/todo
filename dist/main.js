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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project.js */ \"./src/js/components/project.js\");\n\r\n\r\n// these rows are initialized when the projects are initialized\r\n// then re-accessed when new projects are added\r\nlet iconsRow;\r\nlet listsRow;\r\n\r\nfunction initScreen() {\r\n\tlet screen = document.createElement(\"div\");\r\n\tscreen.classList.add(\"screen\");\r\n\tscreen.classList.add(\"hidden\");\r\n\tdocument.querySelector(\".container\").appendChild(screen);\r\n}\r\n\r\nfunction closeNewProject() {\r\n\tlet newProjectContainer = document.querySelector(\".new-project-container\");\r\n\thide(newProjectContainer);\r\n\tnewProjectContainer.querySelector(\"#new-project__name\").value = \"\";\r\n\tnewProjectContainer.querySelector(\".icon-display i\").className = \"fas fa-sticky-note\";\r\n}\r\n\r\nfunction hide(element) {\r\n\telement.classList.remove(\"bring-up\");\r\n\telement.classList.add(\"fade\");\r\n}\r\n\r\nfunction initForms() {\r\n\tlet newProjectContainer = document.createElement(\"div\");\r\n\tnewProjectContainer.classList.add(\"new-project-container\");\r\n\tnewProjectContainer.classList.add(\"fade\");\r\n\r\n\tnewProjectContainer.innerHTML = \"<h3 class=\\\"new-project__header\\\">New Project</h3>\" +\r\n\t\t\t\t\t\t\t\t\t\"<p class=\\\"notice\\\"></p>\" +\r\n\t\t\t\t\t\t\t\t\t\"<label for=\\\"new-project__name\\\" class=\\\"label\\\">\" +\r\n\t\t\t\t\t\t\t\t\t\t\"<input id=\\\"new-project__name\\\" class=\\\"input\\\" placeholder=\\\"Project Name\\\" required>\" +\r\n\t\t\t\t\t\t\t\t\t\"</label>\" +\r\n\t\t\t\t\t\t\t\t\t\"<span class=\\\"icon-display\\\"><i class=\\\"fas fa-sticky-note\\\"></i></span><button class=\\\"btn btn__choose-icon\\\">Select Icon</button>\" +\r\n\t\t\t\t\t\t\t\t\t\"<div class=\\\"row\\\">\" +\r\n\t\t\t\t\t\t\t\t\t\t\"<div class=\\\"col-1-2\\\">\" +\r\n\t\t\t\t\t\t\t\t\t\t\t\"<button class=\\\"btn btn__add-project\\\">Add Project</button>\" +\r\n\t\t\t\t\t\t\t\t\t\t\"</div>\" +\r\n\t\t\t\t\t\t\t\t\t\t\"<div class=\\\"col-1-2\\\">\" +\r\n\t\t\t\t\t\t\t\t\t\t\t\"<button class=\\\"btn btn__cancel-project\\\">Cancel</button>\" +\r\n\t\t\t\t\t\t\t\t\t\t\"</div>\" +\r\n\t\t\t\t\t\t\t\t\t\"<div>\" +\r\n\t\t\t\t\t\t\t\t\t\"<div class=\\\"choose-icon-container fade\\\">\" +\r\n\t\t\t\t\t\t\t\t\t\t\"<h4 class=\\\"choose-icon__header\\\">Choose an Icon</h4>\" +\r\n\t\t\t\t\t\t\t\t\t\t\"<div class=\\\"choose-icon__box\\\">\"+\r\n\t\t\t\t\t\t\t\t\t\t\t\"<i class=\\\"fas fa-broom icon\\\"></i><i class=\\\"fas fa-sticky-note icon\\\"></i>\" +\r\n\t\t\t\t\t\t\t\t\t\t\t\"<i class=\\\"fas fa-flask icon\\\"></i><i class=\\\"fas fa-snowflake icon\\\"></i>\" +\r\n\t\t\t\t\t\t\t\t\t\t\t\"<i class=\\\"fas fa-calculator icon\\\"></i><i class=\\\"fas fa-address-card icon\\\"></i>\" +\r\n\t\t\t\t\t\t\t\t\t\t\t\"<i class=\\\"fas fa-ambulance icon\\\"></i><i class=\\\"fas fa-dollar-sign icon\\\"></i>\" +\r\n\t\t\t\t\t\t\t\t\t\t\t\"<i class=\\\"fas fa-dog icon\\\"></i><i class=\\\"fas fa-birthday-cake icon\\\"></i>\" +\r\n\t\t\t\t\t\t\t\t\t\t\t\"<i class=\\\"fas fa-tshirt icon\\\"></i><i class=\\\"fas fa-utensils icon\\\"></i>\" +\r\n\t\t\t\t\t\t\t\t\t\t\t\"<i class=\\\"fas fa-football-ball icon\\\"></i><i class=\\\"fas fa-balance-scale icon\\\"></i>\" +\r\n\t\t\t\t\t\t\t\t\t\t\t\"<i class=\\\"fas fa-plane-departure icon\\\"></i>\" +\r\n\t\t\t\t\t\t\t\t\t\t\"</div>\" +\r\n\t\t\t\t\t\t\t\t\t\"</div>\";\r\n\r\n\tdocument.querySelector(\".container\").appendChild(newProjectContainer);\r\n\r\n\t// select icon\r\n\tlet iconContainer = newProjectContainer.querySelector(\".choose-icon-container\");\r\n\tnewProjectContainer.querySelector(\".btn__choose-icon\").addEventListener(\"click\", function() {\r\n\t\ticonContainer.classList.remove(\"fade\");\r\n\t});\r\n\r\n\tlet displayIcon = newProjectContainer.querySelector(\".icon-display i\");\r\n\tnewProjectContainer.querySelectorAll(\".icon\").forEach(function(icon) {\r\n\t\ticon.addEventListener(\"click\", function() {\t\r\n\t\t\tdisplayIcon.className = \"\";\t\t\r\n\t\t\tdisplayIcon.className = this.className;\r\n\t\t\ticonContainer.classList.add(\"fade\");\r\n\t\t});\r\n\t});\r\n\r\n\t// add the project\r\n\tnewProjectContainer.querySelector(\".btn__add-project\").addEventListener(\"click\", function() {\r\n\t\tlet projectName = newProjectContainer.querySelector(\"#new-project__name\").value;\r\n\t\tif(!projectName) {\r\n\t\t\tnewProjectContainer.querySelector(\".notice\").textContent = \"Project Name Field is Required\";\r\n\t\t\treturn;\r\n\t\t}\r\n\r\n\t\tlet iconClass = newProjectContainer.querySelector(\".icon-display i\").className;\r\n\t\taddNewProject({\r\n\t\t\tname: projectName,\r\n\t\t\ticon: iconClass,\r\n\t\t\ttodos: []\r\n\t\t});\r\n\r\n\t\tcloseNewProject();\r\n\t});\r\n\r\n\t// cancel add new project\r\n\tnewProjectContainer.querySelector(\".btn__cancel-project\").addEventListener(\"click\", function() {\r\n\t\tcloseNewProject();\r\n\t});\r\n}\r\n \r\nfunction initTopBar() {\r\n\tlet nav = document.createElement(\"nav\");\r\n\t\r\n\tnav.innerHTML = \"<h1 class=\\\"logo\\\">Get 'er Done</h1>\" +\r\n\t\t\t\t\t\"<ul class=\\\"nav-list\\\">\" +\r\n\t\t\t\t        \"<li class=\\\"nav-item back fade\\\"><i class=\\\"fas fa-arrow-left\\\"></i></li>\" +\r\n\t\t\t\t        \"<li class=\\\"nav-item toggle-box\\\">\" +\r\n\t\t\t\t        \t\"<div class=\\\"menu-toggle\\\">\" +\r\n\t\t\t\t        \t\t\"<div class=\\\"menu-toggle__bar top\\\"></div>\" +\r\n\t\t\t\t        \t\t\"<div class=\\\"menu-toggle__bar mid\\\"></div>\" +\r\n\t\t\t\t        \t\t\"<div class=\\\"menu-toggle__bar bot\\\"></div>\" +\r\n\t\t\t\t        \t\"</div>\" +\r\n\t\t\t\t        \"</li>\" +\r\n\t\t\t\t\t    \"<ul class=\\\"menu-list\\\">\" +\r\n\t\t\t\t\t    \t\"<li class=\\\"nav-item select\\\"><a class=\\\"nav-link\\\">Select</a></li>\"+\r\n\t\t\t\t\t    \t\"<li class=\\\"nav-item add-project\\\"><a class=\\\"nav-link\\\">Add Project</a></li>\"+\r\n\t\t\t\t\t    \"</ul>\" +\r\n\t\t\t\t\t\"</ul>\";\r\n\r\n\tdocument.querySelector(\".container\").appendChild(nav);\r\n\r\n\t// back button\r\n\tnav.querySelector(\".back\").addEventListener(\"click\", function() {\r\n\t\tdocument.querySelector(\".projects__icons\").classList.remove(\"fade\");\r\n\t\tdocument.querySelector(\".show-list\").classList.remove(\"show-list\");\r\n\t\tthis.style.animation = \"300ms fadeOut linear forwards\";\r\n\t\tthis.classList.add(\"fade\");\r\n\t});\r\n\r\n\t// menu toggle\r\n\tlet toggleBox = nav.querySelector(\".toggle-box\");\r\n\tlet menuToggle = nav.querySelector(\".menu-toggle\");\r\n\tlet menuList = nav.querySelector(\".menu-list\");\r\n\tlet top = nav.querySelector(\".top\");\r\n\tlet mid = nav.querySelector(\".mid\");\r\n\tlet bot = nav.querySelector(\".bot\");\r\n\ttoggleBox.addEventListener(\"click\", function() {\r\n\t\t// toggle animation\r\n\t\ttop.classList.toggle(\"top-spin\");\r\n\t\tmid.classList.toggle(\"fade\");\r\n\t\tbot.classList.toggle(\"bot-spin\");\r\n\r\n\t\t// show sreen\r\n\t\tdocument.querySelector(\".screen\").classList.toggle(\"hidden\");\r\n\r\n\t\t// change css of toggle button\r\n\t\tthis.classList.toggle(\"toggle-box-toggled\");\r\n\t\tmenuToggle.classList.toggle(\"menu-toggle-toggled\");\r\n\r\n\t\t// slide everything over\r\n\t\tdocument.querySelector(\".container\").classList.toggle(\"slide-over\");\r\n\t});\r\n\r\n\t// add project\r\n\tlet newProjectContainer = document.querySelector(\".new-project-container\");\r\n\tdocument.querySelector(\".add-project\").addEventListener(\"click\", function() {\r\n\t\tif(window.innerWidth < 768) {\r\n\t\t\ttoggleBox.click();\r\n\t\t}\r\n\r\n\t\tnewProjectContainer.classList.toggle(\"fade\");\r\n\t\tnewProjectContainer.classList.toggle(\"bring-up\");\r\n\t});\r\n}\r\n\r\nfunction addNewProject(projectObj) {\r\n\tlet iconCol = document.createElement(\"div\");\r\n\tlet listCol = document.createElement(\"div\");\r\n\r\n\tlet iconElement = Object(_project_js__WEBPACK_IMPORTED_MODULE_0__[\"createIconFace\"])(projectObj.name, projectObj.icon);\r\n\tlet listElement = Object(_project_js__WEBPACK_IMPORTED_MODULE_0__[\"createListFace\"])(projectObj.name, projectObj.todos);\r\n\r\n\t// icon\r\n\ticonCol.classList.add(\"col-1-3\");\r\n\ticonCol.classList.add(\"col-md-1-4\");\r\n\ticonCol.classList.add(\"col-lg-1-5\");\r\n\r\n\tlet iconsContainer = document.querySelector(\".projects__icons\");\r\n\ticonElement.addEventListener(\"click\", function() {\r\n\t\ticonsContainer.classList.add(\"fade\");\r\n\t\tlistElement.classList.add(\"show-list\");\r\n\t\tdocument.querySelector(\".back\").classList.remove(\"fade\");\r\n\t\tdocument.querySelector(\".back\").style.animation = \"fadeIn 300ms linear forwards\";\r\n\t});\r\n\r\n\ticonCol.appendChild(iconElement);\r\n\ticonsRow.appendChild(iconCol);\r\n\r\n\t//list\r\n\tlistCol.classList.add(\"col-1-3\");\r\n\tlistCol.classList.add(\"col-md-1-4\");\r\n\tlistCol.classList.add(\"col-lg-1-5\");\r\n\r\n\tlistCol.appendChild(listElement);\r\n\tlistsRow.appendChild(listCol);\r\n}\r\n\r\nfunction initProjects() {\r\n\tlet projects = [{\r\n\t\tname: \"Clean the House\",\r\n\t\ticon: \"fas fa-broom\",\r\n\t\ttodos: [{\r\n\t\t\tname: \"Sweep the Floors\",\r\n\t\t}, {\r\n\t\t\tname: \"Wipe down the kitchen\"\r\n\t\t}, {\r\n\t\t\tname: \"Vacuum upstairs\"\r\n\t\t}, {\r\n\t\t\tname: \"Take out the trash\"\r\n\t\t}]\r\n\t}, {\r\n\t\tname: \"Do Homework\",\r\n\t\ticon: \"fas fa-sticky-note\",\r\n\t\ttodos: [{\r\n\t\t\tname: \"Do Physics\"\r\n\t\t}, {\r\n\t\t\tname: \"Do Math\"\r\n\t\t}, {\r\n\t\t\tname: \"Do English\"\r\n\t\t}]\r\n\t}, {\r\n\t\tname: \"Finish Project\",\r\n\t\ticon: \"fas fa-flask\",\r\n\t\ttodos: [{\r\n\t\t\tname: \"Come up with title\"\r\n\t\t}, {\r\n\t\t\tname: \"Research chemical reactions\"\r\n\t\t}, {\r\n\t\t\tname: \"Build reaction demo\"\r\n\t\t}, {\r\n\t\t\tname: \"Make 3 fold display\"\r\n\t\t}]\r\n\t}];\r\n\r\n\tlet projectsContainer = document.createElement(\"section\");\r\n\tprojectsContainer.classList.add(\"projects-container\");\r\n\tprojectsContainer.innerHTML = \"<div class=\\\"projects__icons\\\"></div>\" +\r\n                                  \"<div class=\\\"projects__lists\\\"></div>\";\r\n\r\n    document.querySelector(\".container\").appendChild(projectsContainer);\r\n\r\n\tlet iconsContainer = document.querySelector(\".projects__icons\");\r\n\tlet listsContainer = document.querySelector(\".projects__lists\");\r\n\ticonsRow = document.createElement(\"div\");\r\n\tlistsRow = document.createElement(\"div\");\r\n\r\n\ticonsRow.classList.add(\"row\");\r\n\tlistsRow.classList.add(\"row\");\r\n\r\n\tprojects.forEach(function(projectObj) {\r\n\t\taddNewProject(projectObj);\r\n\t});\r\n\r\n\ticonsContainer.appendChild(iconsRow);\r\n\tlistsContainer.appendChild(listsRow);\r\n}\r\n\r\nfunction home() {\r\n\t// init screen\r\n\tinitScreen();\r\n\r\n\t// init forms\r\n\tinitForms();\r\n\r\n\t// init the top bar\r\n\tinitTopBar();\r\n\r\n\t// init the projects section\r\n\tinitProjects();\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (home);\n\n//# sourceURL=webpack:///./src/js/components/home.js?");

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