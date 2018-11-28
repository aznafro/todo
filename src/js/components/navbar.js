import removeProject from "../forms/removeProjectForm.js";
import { showForm } from "../forms/formFunctions.js";

function initNavbar() {
	let nav = document.createElement("nav");
	
	nav.innerHTML = "<h1 class=\"logo\">Get 'er Done</h1>" +
			        "<ul class=\"menu-list\">" +
			        	"<li class=\"nav-item back\">" +
			        		"<a class=\"nav-link\">" +
			        			"<i class=\"fas fa-arrow-left\"></i> <span>Back</span>" +
			        		"</a>" +
			        	"</li>" +
				    	"<li class=\"nav-item\">" +
				    		"<a class=\"nav-link add-project\"><i class=\"fas fa-folder-plus\"></i> <span>Add Project</span></a>" +
				    	"</li>" +
				    	"<li class=\"nav-item list-menu-items hidden\">" +
					    	"<a class=\"nav-link add-todo\"><i class=\"fas fa-plus\"></i> <span>Add Item</span></a>" +
					    	"<a class=\"nav-link remove-project\"><i class=\"fas fa-folder-minus\"></i> <span>Delete Project</span></a>" +
					    "</li>" +
				    "</ul>";

	// buttons
	let addProjectButton = nav.querySelector(".add-project");
	let removeProjectButton = nav.querySelector(".remove-project");
	let addTodoButton = nav.querySelector(".add-todo");

	// form containers
	let newProjectContainer = document.querySelector(".new-project__form");
	let confirmRemoveProjectContainer = document.querySelector(".confirm-remove-project__form");
	let addTodoContainer = document.querySelector(".add-todo__form");
	let listMenuItems = nav.querySelector(".list-menu-items");

	nav.querySelector(".back").addEventListener("click", function() {

		// show the icons
		document.querySelector(".projects__icons").classList.remove("fade");

		// whichever list is being show, stop showing it
		// we need this check in the case the list was removed
		if(document.querySelector(".show-list")) {
			document.querySelector(".show-list").classList.remove("show-list");
		}

		// show/hide buttons
		this.classList.remove("show");
		listMenuItems.classList.add("hidden");
		addProjectButton.classList.remove("hidden");
	});

	// add project
	addProjectButton.addEventListener("click", function() {
		showForm(newProjectContainer);
	});

	// initiate delete
	removeProjectButton.addEventListener("click", function() {
		let projectName = document.querySelector(".show-list .project__name").textContent;
		let confirmRemoveProjectName = document.querySelector(".confirm-remove-project__name");

		confirmRemoveProjectName.textContent = projectName;
		showForm(confirmRemoveProjectContainer);
	});

	// add todo
	addTodoButton.addEventListener("click", function() {
		showForm(addTodoContainer);
	});

	return nav;
}

export default initNavbar;