import removeProject from "../forms/removeProjectForm.js";
import { showForm, hideForm } from "../forms/formFunctions.js";

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
	let newProjectForm = document.querySelector(".new-project__form");
	let confirmRemoveProjectForm = document.querySelector(".confirm-remove-project__form");
	let addTodoForm = document.querySelector(".add-todo__form");
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
	addProjectButton.addEventListener("click", function(e) {
		e.stopPropagation();
		showForm(newProjectForm);
	});

	// initiate delete
	removeProjectButton.addEventListener("click", function(e) {
		let projectName = document.querySelector(".show-list .project__name").textContent;
		let confirmRemoveProjectName = document.querySelector(".confirm-remove-project__name");

		e.stopPropagation();
		if(addTodoForm.style.animation.indexOf("show") != -1) { hideForm(addTodoForm); }
		confirmRemoveProjectName.textContent = projectName;
		showForm(confirmRemoveProjectForm);
	});

	// add todo
	addTodoButton.addEventListener("click", function(e) {
		e.stopPropagation();
		if(confirmRemoveProjectForm.style.animation.indexOf("show") != -1) { hideForm(confirmRemoveProjectForm); }
		showForm(addTodoForm);
	});

	// on contents-container click, hide any forms that are displayed
	// form containers are all outside the contents-container
	// don't need to stopPropagation() on the form containers, just the buttons
	// there's one more for the confirm remove todo in the todo.js file
	document.querySelector(".contents-container").addEventListener("click", function() {
		if(newProjectForm.style.animation.indexOf("show") != -1) { hideForm(newProjectForm); }
		if(addTodoForm.style.animation.indexOf("show") != -1) { hideForm(addTodoForm); }
		if(confirmRemoveProjectForm.style.animation.indexOf("show") != -1) { hideForm(confirmRemoveProjectForm); }
	});

	return nav;
}

export default initNavbar;