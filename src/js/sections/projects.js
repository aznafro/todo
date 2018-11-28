import { createIconFace, createListFace } from "../components/project.js";

const PROJECT_NAMES = "PROJECT_NAMES";
let iconsContainer;
let iconsRow;
let listsRow;

function addNewProject(projectObj, userAdded) {
	// update localStorage
	if(userAdded) {
		let names = localStorage.getItem(PROJECT_NAMES);

		if(!names) {
			names = projectObj.name;
		} else {
			names += "," + projectObj.name;
		}

		localStorage.setItem(PROJECT_NAMES, names);
		localStorage.setItem(projectObj.name, JSON.stringify(projectObj));
	}

	// update ui
	let iconCol = document.createElement("div");
	let listCol = document.createElement("div");

	let iconElement = createIconFace(projectObj.name, projectObj.icon);
	let listElement = createListFace(projectObj.name, projectObj.todos);

	// icon
	let iconDataAttr = document.createAttribute("data-name");
	iconDataAttr.value = projectObj.name;

	iconCol.classList.add("col-1-3");
	iconCol.classList.add("col-md-1-4");
	iconCol.classList.add("col-lg-1-5");
	iconCol.setAttributeNode(iconDataAttr);

	let backButton = document.querySelector("nav .back");
	let addProjectButton = document.querySelector("nav .add-project");
	let removeProjectButton = document.querySelector("nav .remove-project");
	let addTodoButton = document.querySelector("nav .add-todo");
	iconElement.addEventListener("click", function() {
		// icons fade
		iconsContainer.classList.add("fade");

		// list of clicked project shows
		listElement.classList.add("show-list");

		// hide/show buttons
		backButton.classList.add("show");
		addProjectButton.classList.add("hidden");
		removeProjectButton.classList.remove("hidden");
		addTodoButton.classList.remove("hidden");
	});

	iconCol.appendChild(iconElement);
	iconsRow.appendChild(iconCol);

	//list
	let listDataAttr = document.createAttribute("data-name");
	listDataAttr.value = projectObj.name;

	listCol.classList.add("col-1-3");
	listCol.classList.add("col-md-1-4");
	listCol.classList.add("col-lg-1-5");
	listCol.setAttributeNode(listDataAttr);

	listCol.appendChild(listElement);
	listsRow.appendChild(listCol);
}

// <container>
//	<icons>
//	<lists>
function initProjects() {

	let projectsContainer = document.createElement("section");
	projectsContainer.classList.add("projects-container");
	projectsContainer.innerHTML = "<div class=\"projects__icons\"></div>" +
                                  "<div class=\"projects__lists\"></div>";

	iconsContainer = projectsContainer.querySelector(".projects__icons");
	let listsContainer = projectsContainer.querySelector(".projects__lists");
	iconsRow = document.createElement("div");
	listsRow = document.createElement("div");

	iconsRow.classList.add("row");
	listsRow.classList.add("row");

	// saved projects
	let names = localStorage.getItem(PROJECT_NAMES);
	if(names) {
		names.split(",").forEach(function(name) {
			let projectObj = JSON.parse(localStorage.getItem(name));
			addNewProject(projectObj, false);
		});
	}

	iconsContainer.appendChild(iconsRow);
	listsContainer.appendChild(listsRow);

	return projectsContainer;
}

export {
	addNewProject,
	initProjects
}