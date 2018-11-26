import removeProject from "../forms/removeProjectForm";

function showForm(form) {
	form.style.animation = "300ms showForm ease-in-out forwards";
}

function initNavbar() {
	let nav = document.createElement("nav");
	
	nav.innerHTML = "<ul class=\"nav-list\">" +
				        "<li class=\"nav-item back\"><i class=\"fas fa-arrow-left\"></i></li>" +
				        "<h1 class=\"logo\">Get 'er Done</h1>" +
				        "<ul class=\"menu-list\">" +
					    	"<li class=\"nav-item\">" +
					    		"<a class=\"nav-link add-project\"><i class=\"fas fa-folder-plus\"></i></a>" +
					    	"</li>" +
					    	"<li class=\"nav-item\">" +
					    		"<a class=\"nav-link add-todo hidden\"><i class=\"fas fa-plus\"></i></a>" +
					    	"</li>" +
					    	"<li class=\"nav-item\">" +
					    		"<a class=\"nav-link remove-project hidden\"><i class=\"fas fa-folder-minus\"></i></a>" +
					    	"</li>" +
					    "</ul>" +
					"</ul>";

	// buttons
	let addProjectButton = nav.querySelector(".add-project");
	let removeProjectButton = nav.querySelector(".remove-project");
	let addTodoButton = nav.querySelector(".add-todo");

	// form containers
	let newProjectContainer = document.querySelector(".new-project-container");
	let confirmRemoveContainer = document.querySelector(".confirm-remove-container");
	let addTodoContainer = document.querySelector(".add-todo-container");

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
		addTodoButton.classList.add("hidden");
		removeProjectButton.classList.add("hidden");
		addProjectButton.classList.remove("hidden");
	});

	// add project
	addProjectButton.addEventListener("click", function() {
		showForm(newProjectContainer);
	});

	// initiate delete
	removeProjectButton.addEventListener("click", function() {
		let projectName = document.querySelector(".show-list .project__name").textContent;
		let confirmRemoveProjectName = document.querySelector(".confirm-remove__project-name");

		confirmRemoveProjectName.textContent = projectName;
		showForm(confirmRemoveContainer);
	});

	// add todo
	addTodoButton.addEventListener("click", function() {
		showForm(addTodoContainer);
	});

	return nav;
}

export default initNavbar;