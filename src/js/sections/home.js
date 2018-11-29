"use strict";

import initAddProjectForm from "../forms/addProjectForm.js";
import { initRemoveProjectForm } from "../forms/removeProjectForm.js";
import initAddTodoForm from "../forms/addTodoForm.js";
import { initRemoveTodoForm } from "../forms/removeTodoForm.js";
import initNavbar from "../components/navbar.js";
import { initProjects } from "./projects.js";

function home() {

	// init forms
	initAddProjectForm();
	initRemoveProjectForm();
	initAddTodoForm();
	initRemoveTodoForm();

	let contentsContainer = document.createElement("div");
	contentsContainer.classList.add("contents-container");

	document.querySelector(".container").appendChild(contentsContainer);

	let navbar = initNavbar();
	contentsContainer.appendChild(navbar);

	let projects = initProjects();
	contentsContainer.appendChild(projects);
}

export default home;