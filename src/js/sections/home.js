import initScreen from "../components/screen.js";
import initAddProjectForm from "../forms/addProjectForm.js";
import { initRemoveProjectForm } from "../forms/removeProjectForm.js";
import initAddTodoForm from "../forms/addTodoForm.js";
import { initRemoveTodoForm } from "../forms/removeTodoForm.js";
import initNavbar from "../components/navbar.js";
import { initProjects } from "./projects.js";

// these rows are initialized when the projects are initialized
// then re-accessed when new projects are added
let iconsRow;
let listsRow;

function home() {
	// init black screen
	initScreen();

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