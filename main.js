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

/***/ "./src/js/components/navbar.js":
/*!*************************************!*\
  !*** ./src/js/components/navbar.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _forms_removeProjectForm_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../forms/removeProjectForm.js */ \"./src/js/forms/removeProjectForm.js\");\n/* harmony import */ var _forms_formFunctions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../forms/formFunctions.js */ \"./src/js/forms/formFunctions.js\");\n\r\n\r\n\r\nfunction initNavbar() {\r\n\tlet nav = document.createElement(\"nav\");\r\n\t\r\n\tnav.innerHTML = \"<h1 class=\\\"logo\\\">Get 'er Done</h1>\" +\r\n\t\t\t        \"<ul class=\\\"menu-list\\\">\" +\r\n\t\t\t        \t\"<li class=\\\"nav-item back\\\">\" +\r\n\t\t\t        \t\t\"<a class=\\\"nav-link\\\">\" +\r\n\t\t\t        \t\t\t\"<i class=\\\"fas fa-arrow-left\\\"></i> <span>Back</span>\" +\r\n\t\t\t        \t\t\"</a>\" +\r\n\t\t\t        \t\"</li>\" +\r\n\t\t\t\t    \t\"<li class=\\\"nav-item\\\">\" +\r\n\t\t\t\t    \t\t\"<a class=\\\"nav-link add-project\\\"><i class=\\\"fas fa-folder-plus\\\"></i> <span>Add Project</span></a>\" +\r\n\t\t\t\t    \t\"</li>\" +\r\n\t\t\t\t    \t\"<li class=\\\"nav-item list-menu-items hidden\\\">\" +\r\n\t\t\t\t\t    \t\"<a class=\\\"nav-link add-todo\\\"><i class=\\\"fas fa-plus\\\"></i> <span>Add Item</span></a>\" +\r\n\t\t\t\t\t    \t\"<a class=\\\"nav-link remove-project\\\"><i class=\\\"fas fa-folder-minus\\\"></i> <span>Delete Project</span></a>\" +\r\n\t\t\t\t\t    \"</li>\" +\r\n\t\t\t\t    \"</ul>\";\r\n\r\n\t// buttons\r\n\tlet addProjectButton = nav.querySelector(\".add-project\");\r\n\tlet removeProjectButton = nav.querySelector(\".remove-project\");\r\n\tlet addTodoButton = nav.querySelector(\".add-todo\");\r\n\r\n\t// form containers\r\n\tlet newProjectContainer = document.querySelector(\".new-project__form\");\r\n\tlet confirmRemoveProjectContainer = document.querySelector(\".confirm-remove-project__form\");\r\n\tlet addTodoContainer = document.querySelector(\".add-todo__form\");\r\n\tlet listMenuItems = nav.querySelector(\".list-menu-items\");\r\n\r\n\tnav.querySelector(\".back\").addEventListener(\"click\", function() {\r\n\r\n\t\t// show the icons\r\n\t\tdocument.querySelector(\".projects__icons\").classList.remove(\"fade\");\r\n\r\n\t\t// whichever list is being show, stop showing it\r\n\t\t// we need this check in the case the list was removed\r\n\t\tif(document.querySelector(\".show-list\")) {\r\n\t\t\tdocument.querySelector(\".show-list\").classList.remove(\"show-list\");\r\n\t\t}\r\n\r\n\t\t// show/hide buttons\r\n\t\tthis.classList.remove(\"show\");\r\n\t\tlistMenuItems.classList.add(\"hidden\");\r\n\t\taddProjectButton.classList.remove(\"hidden\");\r\n\t});\r\n\r\n\t// add project\r\n\taddProjectButton.addEventListener(\"click\", function() {\r\n\t\tObject(_forms_formFunctions_js__WEBPACK_IMPORTED_MODULE_1__[\"showForm\"])(newProjectContainer);\r\n\t});\r\n\r\n\t// initiate delete\r\n\tremoveProjectButton.addEventListener(\"click\", function() {\r\n\t\tlet projectName = document.querySelector(\".show-list .project__name\").textContent;\r\n\t\tlet confirmRemoveProjectName = document.querySelector(\".confirm-remove-project__name\");\r\n\r\n\t\tconfirmRemoveProjectName.textContent = projectName;\r\n\t\tObject(_forms_formFunctions_js__WEBPACK_IMPORTED_MODULE_1__[\"showForm\"])(confirmRemoveProjectContainer);\r\n\t});\r\n\r\n\t// add todo\r\n\taddTodoButton.addEventListener(\"click\", function() {\r\n\t\tObject(_forms_formFunctions_js__WEBPACK_IMPORTED_MODULE_1__[\"showForm\"])(addTodoContainer);\r\n\t});\r\n\r\n\treturn nav;\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (initNavbar);\n\n//# sourceURL=webpack:///./src/js/components/navbar.js?");

/***/ }),

/***/ "./src/js/components/project.js":
/*!**************************************!*\
  !*** ./src/js/components/project.js ***!
  \**************************************/
/*! exports provided: createIconFace, createListFace, addTodo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createIconFace\", function() { return createIconFace; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createListFace\", function() { return createListFace; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addTodo\", function() { return addTodo; });\n/* harmony import */ var _forms_removeTodoForm_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../forms/removeTodoForm.js */ \"./src/js/forms/removeTodoForm.js\");\n/* harmony import */ var _forms_formFunctions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../forms/formFunctions.js */ \"./src/js/forms/formFunctions.js\");\n/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todo.js */ \"./src/js/components/todo.js\");\n\r\n\r\n\r\n\r\nfunction createIconFace(name, icon) {\r\n\t// init icon face\r\n\tlet iconFace = document.createElement(\"div\");\r\n\tlet projectIcon = document.createElement(\"i\");\r\n\tlet projectName = document.createElement(\"h2\");\r\n\r\n\ticonFace.classList.add(\"project__icon-face\");\r\n\ticon.split(\" \").forEach(function(iconClass) {\r\n\t\tprojectIcon.classList.add(iconClass);\r\n\t});\r\n\tprojectName.classList.add(\"project__name\");\r\n\r\n\tif(name.length > 13) {\r\n\t\tprojectName.textContent = name.substring(0, 13) + \"..\";\r\n\t} else {\r\n\t\tprojectName.textContent = name;\r\n\t}\r\n\r\n\ticonFace.appendChild(projectIcon);\r\n\ticonFace.appendChild(projectName);\r\n\r\n\treturn iconFace;\r\n}\r\n\r\nfunction createListFace(name, todos) {\r\n\tlet listFace = document.createElement(\"div\");\r\n\tlet projectName = document.createElement(\"h1\");\r\n\tlet todosContainer = document.createElement(\"div\");\r\n\r\n\tlistFace.classList.add(\"project__list-face\");\r\n\tprojectName.classList.add(\"project__name\");\r\n\ttodosContainer.classList.add(\"todos-container\");\r\n\r\n\tprojectName.textContent = name;\r\n\r\n\t// a todo will have more things than this, but this is the gist of it for now\r\n\ttodos.forEach(function(todo) {\r\n\t\tlet todoEl = Object(_todo_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(todo);\r\n\t\ttodosContainer.appendChild(todoEl);\r\n\t});\r\n\r\n\tlistFace.appendChild(projectName);\r\n\tlistFace.appendChild(todosContainer);\r\n\treturn listFace;\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./src/js/components/project.js?");

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

/***/ "./src/js/components/todo.js":
/*!***********************************!*\
  !*** ./src/js/components/todo.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _forms_formFunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../forms/formFunctions */ \"./src/js/forms/formFunctions.js\");\n\r\n\r\nfunction createTodo(todo) {\r\n\tlet listItem = document.createElement(\"article\");\r\n\tlistItem.classList.add(\"todo\");\r\n\r\n\tlistItem.innerHTML = \"<div class=\\\"menu-box\\\">\" +\r\n\t\t\t\t\t\t \t\"<i class=\\\"fas fa-ellipsis-v menu-toggle\\\"></i>\" +\r\n\t\t\t\t\t\t \t\"<ul class=\\\"menu-list\\\">\" +\r\n\t\t\t\t\t\t \t\t\"<li class=\\\"menu-list__item\\\">\" +\r\n\t\t\t\t\t\t \t\t\t\"<a class=\\\"menu-list__link delete-todo\\\">Delete</a>\" +\r\n\t\t\t\t\t\t \t\t\"</li>\" +\r\n\t\t\t\t\t\t \t\"</ul>\" +\r\n\t\t\t\t\t\t \"</div>\" + \r\n\t\t\t\t\t\t \"<h3 class=\\\"todo__name\\\"></h3>\" +\r\n\t\t\t\t\t\t \"<span class=\\\"todo__duedate\\\"></span>\" +\r\n\t\t\t\t\t\t \"<p class=\\\"todo__desc\\\"></p>\";\r\n\r\n\tlet priorityClass = \"priority-\" + todo.priority;\r\n\tlistItem.classList.add(priorityClass);\r\n\r\n\tlistItem.querySelector(\".todo__name\").textContent = todo.name;\r\n\tlistItem.querySelector(\".todo__duedate\").textContent = todo.duedate;\r\n\tlistItem.querySelector(\".todo__desc\").textContent = todo.desc;\r\n\r\n\tlet menuList = listItem.querySelector(\".menu-list\");\r\n\tlistItem.querySelector(\".menu-toggle\").addEventListener(\"click\", function() {\r\n\t\tmenuList.classList.toggle(\"show-menu\");\r\n\t});\r\n\r\n\tlet itemName = listItem.querySelector(\".todo__name\").textContent;\r\n\tlet confirmRemoveItemForm = document.querySelector(\".confirm-remove-todo__form\");\r\n\tlet itemNameSpan = confirmRemoveItemForm.querySelector(\".confirm-remove-todo__name\");\r\n\tlistItem.querySelector(\".delete-todo\").addEventListener(\"click\", function() {\r\n\t\tmenuList.classList.remove(\"show-menu\");\r\n\r\n\t\t// show confirm delete todo window\r\n\t\titemNameSpan.textContent = itemName;\r\n\t\tObject(_forms_formFunctions__WEBPACK_IMPORTED_MODULE_0__[\"showForm\"])(confirmRemoveItemForm);\r\n\t});\r\n\r\n\treturn listItem;\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (createTodo);\n\n//# sourceURL=webpack:///./src/js/components/todo.js?");

/***/ }),

/***/ "./src/js/forms/addProjectForm.js":
/*!****************************************!*\
  !*** ./src/js/forms/addProjectForm.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sections_projects_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sections/projects.js */ \"./src/js/sections/projects.js\");\n\r\n\r\nfunction hideForm(container) {\r\n\tcontainer.querySelector(\"#new-project__name\").value = \"\";\r\n\tcontainer.querySelector(\".icon-display i\").className = \"fas fa-sticky-note\";\r\n\tcontainer.style.animation = \"300ms hideForm ease-out forwards\";\r\n}\r\n\r\nfunction initAddProjectForm() {\r\n\tlet newProjectContainer = document.createElement(\"div\");\r\n\tnewProjectContainer.classList.add(\"new-project__form\");\r\n\r\n\tnewProjectContainer.innerHTML = \"<h3 class=\\\"new-project__header\\\">New Project</h3>\" +\r\n\t\t\t\t\t\t\t\t\t\"<p class=\\\"new-project__notice\\\"></p>\" +\r\n\t\t\t\t\t\t\t\t\t\"<input type=\\\"text\\\" id=\\\"new-project__name\\\" class=\\\"input\\\" placeholder=\\\"Project Name\\\" required>\" +\r\n\t\t\t\t\t\t\t\t\t\"<div class=\\\"display-icon__box\\\">\" +\r\n\t\t\t\t\t\t\t\t\t\t\"<span class=\\\"icon-display\\\">\" +\r\n\t\t\t\t\t\t\t\t\t\t\t\"<i class=\\\"fas fa-sticky-note\\\"></i>\" +\r\n\t\t\t\t\t\t\t\t\t\t\"</span>\" +\r\n\t\t\t\t\t\t\t\t\t\t\"<button class=\\\"btn btn__choose-icon\\\">Select Icon</button>\" +\r\n\t\t\t\t\t\t\t\t\t\"</div>\" +\r\n\t\t\t\t\t\t\t\t\t\"<div class=\\\"choose-icon__form\\\">\" +\r\n\t\t\t\t\t\t\t\t\t\t\"<h4 class=\\\"choose-icon__header\\\">Choose an Icon</h4>\" +\r\n\t\t\t\t\t\t\t\t\t\t\"<div class=\\\"choose-icon__box\\\">\"+\r\n\t\t\t\t\t\t\t\t\t\t\t\"<i class=\\\"fas fa-broom icon\\\"></i><i class=\\\"fas fa-sticky-note icon\\\"></i>\" +\r\n\t\t\t\t\t\t\t\t\t\t\t\"<i class=\\\"fas fa-flask icon\\\"></i><i class=\\\"fas fa-snowflake icon\\\"></i>\" +\r\n\t\t\t\t\t\t\t\t\t\t\t\"<i class=\\\"fas fa-calculator icon\\\"></i><i class=\\\"fas fa-address-card icon\\\"></i>\" +\r\n\t\t\t\t\t\t\t\t\t\t\t\"<i class=\\\"fas fa-ambulance icon\\\"></i><i class=\\\"fas fa-dollar-sign icon\\\"></i>\" +\r\n\t\t\t\t\t\t\t\t\t\t\t\"<i class=\\\"fas fa-dog icon\\\"></i><i class=\\\"fas fa-birthday-cake icon\\\"></i>\" +\r\n\t\t\t\t\t\t\t\t\t\t\t\"<i class=\\\"fas fa-tshirt icon\\\"></i><i class=\\\"fas fa-utensils icon\\\"></i>\" +\r\n\t\t\t\t\t\t\t\t\t\t\t\"<i class=\\\"fas fa-football-ball icon\\\"></i><i class=\\\"fas fa-balance-scale icon\\\"></i>\" +\r\n\t\t\t\t\t\t\t\t\t\t\t\"<i class=\\\"fas fa-plane-departure icon\\\"></i>\" +\r\n\t\t\t\t\t\t\t\t\t\t\"</div>\" +\r\n\t\t\t\t\t\t\t\t\t\"</div>\" +\r\n\t\t\t\t\t\t\t\t\t\"<div class=\\\"row\\\">\" +\r\n\t\t\t\t\t\t\t\t\t\t\"<div class=\\\"col-1-2\\\">\" +\r\n\t\t\t\t\t\t\t\t\t\t\t\"<button class=\\\"btn btn__add-project\\\">Add Project</button>\" +\r\n\t\t\t\t\t\t\t\t\t\t\"</div>\" +\r\n\t\t\t\t\t\t\t\t\t\t\"<div class=\\\"col-1-2\\\">\" +\r\n\t\t\t\t\t\t\t\t\t\t\t\"<button class=\\\"btn btn__cancel-project\\\">Cancel</button>\" +\r\n\t\t\t\t\t\t\t\t\t\t\"</div>\" +\r\n\t\t\t\t\t\t\t\t\t\"</div>\";\r\n\r\n\t// select icon\r\n\tlet iconContainer = newProjectContainer.querySelector(\".choose-icon__form\");\r\n\tnewProjectContainer.querySelector(\".btn__choose-icon\").addEventListener(\"click\", function() {\r\n\t\ticonContainer.classList.toggle(\"show-choose-icon\");\r\n\t});\r\n\r\n\tlet displayIcon = newProjectContainer.querySelector(\".icon-display i\");\r\n\tnewProjectContainer.querySelectorAll(\".icon\").forEach(function(icon) {\r\n\t\ticon.addEventListener(\"click\", function() {\t\r\n\t\t\tdisplayIcon.className = \"\";\t\t\r\n\t\t\tdisplayIcon.className = this.className;\r\n\t\t\ticonContainer.classList.remove(\"show-choose-icon\");\r\n\t\t});\r\n\t});\r\n\r\n\t// add the project\r\n\tnewProjectContainer.querySelector(\".btn__add-project\").addEventListener(\"click\", function() {\r\n\t\tlet projectName = newProjectContainer.querySelector(\"#new-project__name\").value;\r\n\t\tlet dupProj = localStorage.getItem(projectName);\r\n\t\t\r\n\t\t// make sure there is a project name\r\n\t\tif(!projectName) {\r\n\t\t\tnewProjectContainer.querySelector(\".new-project__notice\").textContent = \"Project Name Field is required\";\r\n\t\t\treturn;\r\n\t\t}\r\n\r\n\t\t// and make sure there isn't a duplicate project with the same name\r\n\t\telse if(dupProj) {\r\n\t\t\tnewProjectContainer.querySelector(\".new-project__notice\").textContent = \"Project with that name already exists\";\r\n\t\t\treturn;\r\n\t\t}\r\n\r\n\t\tlet iconClass = newProjectContainer.querySelector(\".icon-display i\").className;\r\n\t\tObject(_sections_projects_js__WEBPACK_IMPORTED_MODULE_0__[\"addNewProject\"])({\r\n\t\t\tname: projectName,\r\n\t\t\ticon: iconClass,\r\n\t\t\ttodos: []\r\n\t\t}, true);\r\n\r\n\t\thideForm(newProjectContainer);\r\n\t});\r\n\r\n\t// cancel add new project\r\n\tnewProjectContainer.querySelector(\".btn__cancel-project\").addEventListener(\"click\", function() {\r\n\t\thideForm(newProjectContainer);\r\n\t});\r\n\r\n\tdocument.querySelector(\".container\").appendChild(newProjectContainer);\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (initAddProjectForm);\n\n//# sourceURL=webpack:///./src/js/forms/addProjectForm.js?");

/***/ }),

/***/ "./src/js/forms/addTodoForm.js":
/*!*************************************!*\
  !*** ./src/js/forms/addTodoForm.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _formFunctions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formFunctions.js */ \"./src/js/forms/formFunctions.js\");\n\r\n\r\nfunction hideForm(form) {\r\n\tlet nameInput = form.querySelector(\".new-todo__name\");\r\n\tlet radio = Array.prototype.slice.call(form.querySelectorAll(\"[name=\\\"priority\\\"]\")).filter(function(radio) {\r\n\t\t\t\t\treturn radio.checked == true;\r\n\t\t\t\t})[0];\r\n\tlet defaultRadio = form.querySelector(\"#low-priority\");\r\n\tlet descInput = form.querySelector(\".new-todo__desc\");\r\n\tlet dateInput = form.querySelector(\"#new-todo__date\");\r\n\tlet notice = form.querySelector(\".new-todo__notice\");\r\n\r\n\tnameInput.value = \"\";\r\n\tnotice.textContent = \"\";\r\n\tradio.checked = false;\r\n\tdefaultRadio.checked = true;\r\n\tdescInput.value = \"\";\r\n\tdateInput.value = \"\";\r\n\tform.style.animation = \"300ms hideForm ease-in-out forwards\";\r\n}\r\n\r\nfunction initAddTodoForm() {\r\n\tlet addTodoForm = document.createElement(\"div\");\r\n\taddTodoForm.classList.add(\"add-todo__form\");\r\n\r\n\taddTodoForm.innerHTML = \"<h3 class=\\\"new-todo__header\\\">New Item</h3>\" +\r\n\t\t\t\t\t\t  \"<p class=\\\"new-todo__notice\\\"></p>\" +\r\n\t\t\t\t\t\t  \"<input type=\\\"text\\\" class=\\\"input new-todo__name\\\" placeholder=\\\"Item Name\\\" required>\" +\r\n\t\t\t\t\t\t  \"<h4 class=\\\"priority__header\\\">Priority Level</h4>\" +\r\n\t\t\t\t\t\t  \"<div class=\\\"row\\\">\" +\r\n\t\t\t\t\t\t  \t\"<div class=\\\"col-1-3\\\">\" + \r\n\t\t\t\t\t\t  \t\t\"<label for=\\\"low-priority\\\" class=\\\"label\\\">\" +\r\n\t\t\t\t\t\t  \t\t\t\"Low\" +\r\n\t\t\t\t\t\t  \t\t\t\"<input type=\\\"radio\\\" id=\\\"low-priority\\\" value=\\\"3\\\" name=\\\"priority\\\" class=\\\"input\\\" checked=\\\"checked\\\">\" +\r\n\t\t\t\t\t\t  \t\t\"</label>\" +\r\n\t\t\t\t\t\t  \t\"</div>\" +\r\n\t\t\t\t\t\t  \t\"<div class=\\\"col-1-3\\\">\" + \r\n\t\t\t\t\t\t  \t\t\"<label for=\\\"med-priority\\\" class=\\\"label\\\">\" +\r\n\t\t\t\t\t\t  \t\t\t\"Medium\" +\r\n\t\t\t\t\t\t  \t\t\t\"<input type=\\\"radio\\\" id=\\\"med-priority\\\" value=\\\"2\\\" name=\\\"priority\\\" class=\\\"input\\\">\" +\r\n\t\t\t\t\t\t  \t\t\"</label>\" +\r\n\t\t\t\t\t\t  \t\"</div>\" +\r\n\t\t\t\t\t\t  \t\"<div class=\\\"col-1-3\\\">\" + \r\n\t\t\t\t\t\t  \t\t\"<label for=\\\"high-priority\\\" class=\\\"label\\\">\" +\r\n\t\t\t\t\t\t  \t\t\t\"High\" +\r\n\t\t\t\t\t\t  \t\t\t\"<input type=\\\"radio\\\" id=\\\"high-priority\\\"value=\\\"1\\\" name=\\\"priority\\\" class=\\\"input\\\">\" +\r\n\t\t\t\t\t\t  \t\t\"</label>\" +\r\n\t\t\t\t\t\t  \t\"</div>\" +\r\n\t\t\t\t\t\t  \"</div>\" +\r\n\t\t\t\t\t\t  \"<textarea class=\\\"input new-todo__desc\\\" placeholder=\\\"Description\\\"></textarea>\" +\r\n\t\t\t\t\t\t  \"<label for=\\\"new-todo__date\\\" class=\\\"label\\\">\" +\r\n\t\t\t\t\t\t  \t\"Due Date\" + \r\n\t\t\t\t\t\t\t\"<input type=\\\"date\\\" id=\\\"new-todo__date\\\" class=\\\"input\\\" required>\" +\r\n\t\t\t\t\t\t  \"</label>\" +\r\n\t\t\t\t\t\t  \"<div class=\\\"row\\\">\" +\r\n\t\t\t\t\t   \t\t\"<div class=\\\"col-1-2\\\">\" +\r\n\t\t\t\t\t  \t\t\t\"<button class=\\\"btn btn__add-todo\\\">Add Item</button>\" +\r\n\t\t\t\t\t  \t\t\"</div>\" +\r\n\t\t\t\t\t  \t\t\"<div class=\\\"col-1-2\\\">\" +\r\n\t\t\t\t\t  \t\t\t\"<button class=\\\"btn btn__cancel-todo\\\">Cancel</button>\" +\r\n\t\t\t\t\t  \t\t\"</div>\" +\r\n\t\t\t\t\t\t  \"</div>\";\r\n\r\n\tlet addItemButton = addTodoForm.querySelector(\".btn__add-todo\");\r\n\tlet cancelItemButton = addTodoForm.querySelector(\".btn__cancel-todo\");\r\n\tlet notice = addTodoForm.querySelector(\".new-todo__notice\");\r\n\r\n\taddItemButton.addEventListener(\"click\", function() {\r\n\t\t// initialize the new todo object\r\n\t\tlet itemName = addTodoForm.querySelector(\".new-todo__name\").value;\r\n\r\n\t\tif(!itemName) {\r\n\t\t\tnotice.textContent = \"An Item Name is required\";\r\n\t\t\treturn;\r\n\t\t}\r\n\r\n\t\tlet priority = Array.prototype.slice.call(addTodoForm.querySelectorAll(\"[name=\\\"priority\\\"]\")).filter(function(radio) {\r\n\t\t\t\t\t\treturn radio.checked == true;\r\n\t\t\t\t\t})[0].value;\r\n\t\tlet desc = addTodoForm.querySelector(\".new-todo__desc\").value;\r\n\t\tlet date = addTodoForm.querySelector(\"#new-todo__date\").value;\r\n\r\n\t\tlet newTodo = {\r\n\t\t\tname: itemName,\r\n\t\t\tpriority: priority,\r\n\t\t\tdesc: desc,\r\n\t\t\tduedate: date\r\n\t\t};\r\n\r\n\t\t// get the project and add the todo\r\n\t\tlet projectName = document.querySelector(\".show-list .project__name\").textContent;\r\n\t\tlet projectObj = JSON.parse(localStorage.getItem(projectName));\r\n\t\tlet todosList = projectObj.todos;\r\n\t\tlet dupTodo = todosList.filter(function(todo) {\r\n\t\t\treturn todo.name == itemName;\r\n\t\t});\r\n\r\n\t\t// duplicate case, do nothing\r\n\t\tif(dupTodo.length > 0) {\r\n\t\t\tdocument.querySelector(\".new-todo__notice\").textContent = \"An item with that name already exists\";\r\n\t\t\treturn;\r\n\t\t}\r\n\r\n\t\t// update local storage\r\n\t\tif(todosList.length == 0) {\r\n\t\t\ttodosList.push(newTodo);\r\n\t\t} else {\r\n\t\t\t// insertion sort todo items on push based on priority\r\n\t\t\tlet index;\r\n\t\t\tfor(index = todosList.length-1; index > -1; index--) {\r\n\t\t\t\tif(todosList[index].priority <= priority) {\r\n\t\t\t\t\tbreak;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\r\n\t\t\ttodosList.splice(index+1, 0, newTodo);\r\n\t\t}\r\n\r\n\t\tlocalStorage.setItem(projectName, JSON.stringify(projectObj));\r\n\r\n\t\t// update ui\r\n\t\tObject(_formFunctions_js__WEBPACK_IMPORTED_MODULE_0__[\"updateCurrentListUI\"])();\r\n\r\n\t\t// close form\r\n\t\thideForm(addTodoForm);\r\n\t});\r\n\r\n\t// cancel\r\n\tcancelItemButton.addEventListener(\"click\", function() {\r\n\t\thideForm(addTodoForm);\r\n\t});\r\n\r\n\tdocument.querySelector(\".container\").appendChild(addTodoForm);\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (initAddTodoForm);\n\n//# sourceURL=webpack:///./src/js/forms/addTodoForm.js?");

/***/ }),

/***/ "./src/js/forms/formFunctions.js":
/*!***************************************!*\
  !*** ./src/js/forms/formFunctions.js ***!
  \***************************************/
/*! exports provided: showForm, hideForm, updateCurrentListUI */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"showForm\", function() { return showForm; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"hideForm\", function() { return hideForm; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"updateCurrentListUI\", function() { return updateCurrentListUI; });\n/* harmony import */ var _components_todo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/todo.js */ \"./src/js/components/todo.js\");\n\r\n\r\nfunction showForm(form) {\r\n\tif(form.className.indexOf(\"add-todo\") != -1) {\r\n\t\tform.style.animation = \"300ms showAddTodoForm ease-in-out forwards\";\r\n\t} else {\r\n\t\tform.style.animation = \"300ms showForm ease-in-out forwards\";\r\n\t}\r\n}\r\n\r\nfunction hideForm(form) {\r\n\tif(form.className.indexOf(\"add-todo\") != -1) {\r\n\t\tform.style.animation = \"300ms hideAddTodoForm ease-in-out forwards\";\r\n\t} else {\r\n\t\tform.style.animation = \"300ms hideForm ease-in-out forwards\";\r\n\t}\r\n}\r\n\r\nfunction updateCurrentListUI() {\r\n\tlet projectName = document.querySelector(\".show-list .project__name\").textContent;\r\n\tlet currentListFace = document.querySelector(\".show-list .todos-container\");\r\n\tlet updatedList = JSON.parse(localStorage.getItem(projectName)).todos;\r\n\t\r\n\tcurrentListFace.innerHTML = \"\";\r\n\tupdatedList.forEach(function(todo) {\r\n\t\tlet todoEl = Object(_components_todo_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(todo);\r\n\t\tcurrentListFace.appendChild(todoEl);\r\n\t});\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./src/js/forms/formFunctions.js?");

/***/ }),

/***/ "./src/js/forms/removeProjectForm.js":
/*!*******************************************!*\
  !*** ./src/js/forms/removeProjectForm.js ***!
  \*******************************************/
/*! exports provided: removeProject, initRemoveProjectForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"removeProject\", function() { return removeProject; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initRemoveProjectForm\", function() { return initRemoveProjectForm; });\n/* harmony import */ var _formFunctions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formFunctions.js */ \"./src/js/forms/formFunctions.js\");\n\r\n \r\nconst PROJECT_NAMES = \"PROJECT_NAMES\";\r\n\r\nfunction removeProject(formToHide) {\r\n\tlet projectName = document.querySelector(\".show-list .project__name\").textContent;\r\n\t\r\n\t// remove it from local storage\r\n\tlet projectNames = localStorage.getItem(PROJECT_NAMES).split(\",\");\r\n\tfor(let i=0; i < projectNames.length; i++) {\r\n\t\tif(projectNames[i] == projectName) {\r\n\t\t\tprojectNames.splice(i, 1);\r\n\t\t\tbreak;\r\n\t\t}\r\n\t}\r\n\tprojectNames = projectNames.join(\",\");\r\n\tlocalStorage.setItem(PROJECT_NAMES, projectNames);\r\n\r\n\tlocalStorage.removeItem(projectName);\r\n\r\n\t// remove it from the UI\r\n\tdocument.querySelectorAll(\"[data-name=\\\"\" + projectName + \"\\\"]\").forEach(function(el) {\r\n\t\tel.remove();\r\n\t});\r\n\r\n\tObject(_formFunctions_js__WEBPACK_IMPORTED_MODULE_0__[\"hideForm\"])(formToHide);\r\n\r\n\tdocument.querySelector(\"nav .back\").click();\r\n}\r\n\r\n// remove project\r\nfunction initRemoveProjectForm() {\r\n\tlet confirmRemoveProjectForm = document.createElement(\"div\");\r\n\tconfirmRemoveProjectForm.classList.add(\"confirm-remove-project__form\");\r\n\r\n\tconfirmRemoveProjectForm.innerHTML = \"<h3 class=\\\"confirm-remove-project__header\\\">Confirm Remove Project</h3>\" +\r\n\t\t\t\t\t\t\t\t\t   \"<p class=\\\"confirm-remove-project__text\\\">Are you sure you want to remove project '<span class=\\\"confirm-remove-project__name\\\">\" + \"</span>'?</p>\" +\r\n\t\t\t\t\t\t\t\t\t   \"<div class=\\\"row\\\">\" +\r\n\t\t\t\t\t\t\t\t\t   \t\t\"<div class=\\\"col-1-2\\\">\" +\r\n\t\t\t\t\t\t\t\t\t   \t\t\t\"<button class=\\\"btn btn__confirm-remove\\\">Yes</button>\" +\r\n\t\t\t\t\t\t\t\t\t   \t\t\"</div>\" +\r\n\t\t\t\t\t\t\t\t\t   \t\t\"<div class=\\\"col-1-2\\\">\" +\r\n\t\t\t\t\t\t\t\t\t   \t\t\t\"<button class=\\\"btn btn__cancel-remove\\\">No</button>\" +\r\n\t\t\t\t\t\t\t\t\t   \t\t\"</div>\" +\r\n\t\t\t\t\t\t\t\t\t   \"</div>\";\r\n\r\n\t// confirm delete\r\n\tconfirmRemoveProjectForm.querySelector(\".btn__confirm-remove\").addEventListener(\"click\", function() {\r\n\t\tremoveProject(confirmRemoveProjectForm);\r\n\t});\r\n\r\n\t// cancel delete\r\n\tconfirmRemoveProjectForm.querySelector(\".btn__cancel-remove\").addEventListener(\"click\", function() {\r\n\t\tObject(_formFunctions_js__WEBPACK_IMPORTED_MODULE_0__[\"hideForm\"])(confirmRemoveProjectForm);\r\n\t});\r\n\r\n\tdocument.querySelector(\".container\").appendChild(confirmRemoveProjectForm);\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./src/js/forms/removeProjectForm.js?");

/***/ }),

/***/ "./src/js/forms/removeTodoForm.js":
/*!****************************************!*\
  !*** ./src/js/forms/removeTodoForm.js ***!
  \****************************************/
/*! exports provided: removeTodo, initRemoveTodoForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"removeTodo\", function() { return removeTodo; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initRemoveTodoForm\", function() { return initRemoveTodoForm; });\n/* harmony import */ var _formFunctions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formFunctions.js */ \"./src/js/forms/formFunctions.js\");\n\r\n\r\nfunction removeTodo(itemName, container) {\r\n\t// update localstorage\r\n\tlet projectName = document.querySelector(\".show-list .project__name\").textContent;\r\n\tlet projectObj = JSON.parse(localStorage.getItem(projectName));\r\n\tlet todos = projectObj.todos;\r\n\r\n\t// remove item from list\r\n\tfor(let i=0; i < todos.length; i++) {\r\n\t\tif(todos[i].name == itemName) {\r\n\t\t\ttodos.splice(i, 1);\r\n\t\t\tbreak;\r\n\t\t}\r\n\t}\r\n\r\n\t// re-set it back\r\n\tlocalStorage.setItem(projectName, JSON.stringify(projectObj));\r\n\r\n\t// update UI\r\n\tObject(_formFunctions_js__WEBPACK_IMPORTED_MODULE_0__[\"updateCurrentListUI\"])();\r\n\r\n\tObject(_formFunctions_js__WEBPACK_IMPORTED_MODULE_0__[\"hideForm\"])(container);\r\n}\r\n\r\n// remove todo\r\nfunction initRemoveTodoForm() {\r\n\tlet confirmRemoveTodoForm = document.createElement(\"div\");\r\n\tconfirmRemoveTodoForm.classList.add(\"confirm-remove-todo__form\");\r\n\r\n\tconfirmRemoveTodoForm.innerHTML = \"<h3 class=\\\"confirm-remove-todo__header\\\">Confirm Remove Item</h3>\" +\r\n\t\t\t\t\t\t\t\t\t   \"<p class=\\\"confirm-remove-todo__text\\\">Are you sure you want to remove item '<span class=\\\"confirm-remove-todo__name\\\"></span>'?</p>\" +\r\n\t\t\t\t\t\t\t\t\t   \"<div class=\\\"row\\\">\" +\r\n\t\t\t\t\t\t\t\t\t   \t\t\"<div class=\\\"col-1-2\\\">\" +\r\n\t\t\t\t\t\t\t\t\t   \t\t\t\"<button class=\\\"btn btn__confirm-remove\\\">Yes</button>\" +\r\n\t\t\t\t\t\t\t\t\t   \t\t\"</div>\" +\r\n\t\t\t\t\t\t\t\t\t   \t\t\"<div class=\\\"col-1-2\\\">\" +\r\n\t\t\t\t\t\t\t\t\t   \t\t\t\"<button class=\\\"btn btn__cancel-remove\\\">No</button>\" +\r\n\t\t\t\t\t\t\t\t\t   \t\t\"</div>\" +\r\n\t\t\t\t\t\t\t\t\t   \"</div>\";\r\n\r\n\t// confirm delete\r\n\tconfirmRemoveTodoForm.querySelector(\".btn__confirm-remove\").addEventListener(\"click\", function() {\r\n\t\tlet itemName = confirmRemoveTodoForm.querySelector(\".confirm-remove-todo__name\").textContent;\r\n\t\tremoveTodo(itemName, confirmRemoveTodoForm);\r\n\t});\r\n\r\n\t// cancel delete\r\n\tconfirmRemoveTodoForm.querySelector(\".btn__cancel-remove\").addEventListener(\"click\", function() {\r\n\t\tObject(_formFunctions_js__WEBPACK_IMPORTED_MODULE_0__[\"hideForm\"])(confirmRemoveTodoForm);\r\n\t});\r\n\r\n\tdocument.querySelector(\".container\").appendChild(confirmRemoveTodoForm);\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./src/js/forms/removeTodoForm.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sections_home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sections/home.js */ \"./src/js/sections/home.js\");\n\r\n\r\n\r\n(function() {\r\n\tdocument.body.innerHTML = \"<div class=\\\"container\\\"></div>\";\r\n\t\r\n\tObject(_sections_home_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n})();\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ }),

/***/ "./src/js/sections/home.js":
/*!*********************************!*\
  !*** ./src/js/sections/home.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_screen_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/screen.js */ \"./src/js/components/screen.js\");\n/* harmony import */ var _forms_addProjectForm_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../forms/addProjectForm.js */ \"./src/js/forms/addProjectForm.js\");\n/* harmony import */ var _forms_removeProjectForm_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../forms/removeProjectForm.js */ \"./src/js/forms/removeProjectForm.js\");\n/* harmony import */ var _forms_addTodoForm_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../forms/addTodoForm.js */ \"./src/js/forms/addTodoForm.js\");\n/* harmony import */ var _forms_removeTodoForm_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../forms/removeTodoForm.js */ \"./src/js/forms/removeTodoForm.js\");\n/* harmony import */ var _components_navbar_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/navbar.js */ \"./src/js/components/navbar.js\");\n/* harmony import */ var _projects_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./projects.js */ \"./src/js/sections/projects.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n// these rows are initialized when the projects are initialized\r\n// then re-accessed when new projects are added\r\nlet iconsRow;\r\nlet listsRow;\r\n\r\nfunction home() {\r\n\t// init black screen\r\n\tObject(_components_screen_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n\r\n\t// init forms\r\n\tObject(_forms_addProjectForm_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n\tObject(_forms_removeProjectForm_js__WEBPACK_IMPORTED_MODULE_2__[\"initRemoveProjectForm\"])();\r\n\tObject(_forms_addTodoForm_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n\tObject(_forms_removeTodoForm_js__WEBPACK_IMPORTED_MODULE_4__[\"initRemoveTodoForm\"])();\r\n\r\n\tlet contentsContainer = document.createElement(\"div\");\r\n\tcontentsContainer.classList.add(\"contents-container\");\r\n\r\n\tdocument.querySelector(\".container\").appendChild(contentsContainer);\r\n\r\n\tlet navbar = Object(_components_navbar_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\r\n\tcontentsContainer.appendChild(navbar);\r\n\r\n\tlet projects = Object(_projects_js__WEBPACK_IMPORTED_MODULE_6__[\"initProjects\"])();\r\n\tcontentsContainer.appendChild(projects);\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (home);\n\n//# sourceURL=webpack:///./src/js/sections/home.js?");

/***/ }),

/***/ "./src/js/sections/projects.js":
/*!*************************************!*\
  !*** ./src/js/sections/projects.js ***!
  \*************************************/
/*! exports provided: addNewProject, initProjects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addNewProject\", function() { return addNewProject; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initProjects\", function() { return initProjects; });\n/* harmony import */ var _components_project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/project.js */ \"./src/js/components/project.js\");\n\r\n\r\nconst PROJECT_NAMES = \"PROJECT_NAMES\";\r\nlet iconsContainer;\r\nlet iconsRow;\r\nlet listsRow;\r\n\r\nfunction addNewProject(projectObj, userAdded) {\r\n\t// update localStorage\r\n\tif(userAdded) {\r\n\t\tlet names = localStorage.getItem(PROJECT_NAMES);\r\n\r\n\t\tif(!names) {\r\n\t\t\tnames = projectObj.name;\r\n\t\t} else {\r\n\t\t\tnames += \",\" + projectObj.name;\r\n\t\t}\r\n\r\n\t\tlocalStorage.setItem(PROJECT_NAMES, names);\r\n\t\tlocalStorage.setItem(projectObj.name, JSON.stringify(projectObj));\r\n\t}\r\n\r\n\t// update ui\r\n\tlet iconCol = document.createElement(\"div\");\r\n\tlet listCol = document.createElement(\"div\");\r\n\r\n\tlet iconElement = Object(_components_project_js__WEBPACK_IMPORTED_MODULE_0__[\"createIconFace\"])(projectObj.name, projectObj.icon);\r\n\tlet listElement = Object(_components_project_js__WEBPACK_IMPORTED_MODULE_0__[\"createListFace\"])(projectObj.name, projectObj.todos);\r\n\r\n\t// icon\r\n\tlet iconDataAttr = document.createAttribute(\"data-name\");\r\n\ticonDataAttr.value = projectObj.name;\r\n\r\n\ticonCol.classList.add(\"col-1-3\");\r\n\ticonCol.classList.add(\"col-md-1-4\");\r\n\ticonCol.classList.add(\"col-lg-1-5\");\r\n\ticonCol.setAttributeNode(iconDataAttr);\r\n\r\n\tlet backButton = document.querySelector(\"nav .back\");\r\n\tlet addProjectButton = document.querySelector(\"nav .add-project\");\r\n\tlet listMenuItems = document.querySelector(\"nav .list-menu-items\");\r\n\ticonElement.addEventListener(\"click\", function() {\r\n\t\t// icons fade\r\n\t\ticonsContainer.classList.add(\"fade\");\r\n\r\n\t\t// list of clicked project shows\r\n\t\tlistElement.classList.add(\"show-list\");\r\n\r\n\t\t// hide/show buttons\r\n\t\tbackButton.classList.add(\"show\");\r\n\t\taddProjectButton.classList.add(\"hidden\");\r\n\t\tlistMenuItems.classList.remove(\"hidden\");\r\n\t});\r\n\r\n\ticonCol.appendChild(iconElement);\r\n\ticonsRow.appendChild(iconCol);\r\n\r\n\t//list\r\n\tlet listDataAttr = document.createAttribute(\"data-name\");\r\n\tlistDataAttr.value = projectObj.name;\r\n\r\n\tlistCol.classList.add(\"col-1-3\");\r\n\tlistCol.classList.add(\"col-md-1-4\");\r\n\tlistCol.classList.add(\"col-lg-1-5\");\r\n\tlistCol.setAttributeNode(listDataAttr);\r\n\r\n\tlistCol.appendChild(listElement);\r\n\tlistsRow.appendChild(listCol);\r\n}\r\n\r\n// <container>\r\n//\t<icons>\r\n//\t<lists>\r\nfunction initProjects() {\r\n\r\n\tlet projectsContainer = document.createElement(\"section\");\r\n\tprojectsContainer.classList.add(\"projects-container\");\r\n\tprojectsContainer.innerHTML = \"<div class=\\\"projects__icons\\\"></div>\" +\r\n                                  \"<div class=\\\"projects__lists\\\"></div>\";\r\n\r\n\ticonsContainer = projectsContainer.querySelector(\".projects__icons\");\r\n\tlet listsContainer = projectsContainer.querySelector(\".projects__lists\");\r\n\ticonsRow = document.createElement(\"div\");\r\n\tlistsRow = document.createElement(\"div\");\r\n\r\n\ticonsRow.classList.add(\"row\");\r\n\tlistsRow.classList.add(\"row\");\r\n\r\n\t// saved projects\r\n\tlet names = localStorage.getItem(PROJECT_NAMES);\r\n\tif(names) {\r\n\t\tnames.split(\",\").forEach(function(name) {\r\n\t\t\tlet projectObj = JSON.parse(localStorage.getItem(name));\r\n\t\t\taddNewProject(projectObj, false);\r\n\t\t});\r\n\t}\r\n\r\n\ticonsContainer.appendChild(iconsRow);\r\n\tlistsContainer.appendChild(listsRow);\r\n\r\n\treturn projectsContainer;\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./src/js/sections/projects.js?");

/***/ })

/******/ });