import { createIconFace, createListFace } from "./project.js";

// these rows are initialized when the projects are initialized
// then re-accessed when new projects are added
let iconsRow;
let listsRow;

function initScreen() {
	let screen = document.createElement("div");
	screen.classList.add("screen");
	screen.classList.add("hidden");
	document.querySelector(".container").appendChild(screen);
}

function closeNewProject() {
	let newProjectContainer = document.querySelector(".new-project-container");
	hide(newProjectContainer);
	newProjectContainer.querySelector("#new-project__name").value = "";
	newProjectContainer.querySelector(".icon-display i").className = "fas fa-sticky-note";
}

function hide(element) {
	element.classList.remove("bring-up");
	element.classList.add("fade");
}

function initForms() {
	let newProjectContainer = document.createElement("div");
	newProjectContainer.classList.add("new-project-container");
	newProjectContainer.classList.add("fade");

	newProjectContainer.innerHTML = "<h3 class=\"new-project__header\">New Project</h3>" +
									"<p class=\"notice\"></p>" +
									"<label for=\"new-project__name\" class=\"label\">" +
										"<input id=\"new-project__name\" class=\"input\" placeholder=\"Project Name\" required>" +
									"</label>" +
									"<span class=\"icon-display\"><i class=\"fas fa-sticky-note\"></i></span><button class=\"btn btn__choose-icon\">Select Icon</button>" +
									"<div class=\"row\">" +
										"<div class=\"col-1-2\">" +
											"<button class=\"btn btn__add-project\">Add Project</button>" +
										"</div>" +
										"<div class=\"col-1-2\">" +
											"<button class=\"btn btn__cancel-project\">Cancel</button>" +
										"</div>" +
									"<div>" +
									"<div class=\"choose-icon-container fade\">" +
										"<h4 class=\"choose-icon__header\">Choose an Icon</h4>" +
										"<div class=\"choose-icon__box\">"+
											"<i class=\"fas fa-broom icon\"></i><i class=\"fas fa-sticky-note icon\"></i>" +
											"<i class=\"fas fa-flask icon\"></i><i class=\"fas fa-snowflake icon\"></i>" +
											"<i class=\"fas fa-calculator icon\"></i><i class=\"fas fa-address-card icon\"></i>" +
											"<i class=\"fas fa-ambulance icon\"></i><i class=\"fas fa-dollar-sign icon\"></i>" +
											"<i class=\"fas fa-dog icon\"></i><i class=\"fas fa-birthday-cake icon\"></i>" +
											"<i class=\"fas fa-tshirt icon\"></i><i class=\"fas fa-utensils icon\"></i>" +
											"<i class=\"fas fa-football-ball icon\"></i><i class=\"fas fa-balance-scale icon\"></i>" +
											"<i class=\"fas fa-plane-departure icon\"></i>" +
										"</div>" +
									"</div>";

	document.querySelector(".container").appendChild(newProjectContainer);

	// select icon
	let iconContainer = newProjectContainer.querySelector(".choose-icon-container");
	newProjectContainer.querySelector(".btn__choose-icon").addEventListener("click", function() {
		iconContainer.classList.remove("fade");
	});

	let displayIcon = newProjectContainer.querySelector(".icon-display i");
	newProjectContainer.querySelectorAll(".icon").forEach(function(icon) {
		icon.addEventListener("click", function() {	
			displayIcon.className = "";		
			displayIcon.className = this.className;
			iconContainer.classList.add("fade");
		});
	});

	// add the project
	newProjectContainer.querySelector(".btn__add-project").addEventListener("click", function() {
		let projectName = newProjectContainer.querySelector("#new-project__name").value;
		if(!projectName) {
			newProjectContainer.querySelector(".notice").textContent = "Project Name Field is Required";
			return;
		}

		let iconClass = newProjectContainer.querySelector(".icon-display i").className;
		addNewProject({
			name: projectName,
			icon: iconClass,
			todos: []
		});

		closeNewProject();
	});

	// cancel add new project
	newProjectContainer.querySelector(".btn__cancel-project").addEventListener("click", function() {
		closeNewProject();
	});
}
 
function initTopBar() {
	let nav = document.createElement("nav");
	
	nav.innerHTML = "<h1 class=\"logo\">Get 'er Done</h1>" +
					"<ul class=\"nav-list\">" +
				        "<li class=\"nav-item back fade\"><i class=\"fas fa-arrow-left\"></i></li>" +
				        "<li class=\"nav-item toggle-box\">" +
				        	"<div class=\"menu-toggle\">" +
				        		"<div class=\"menu-toggle__bar top\"></div>" +
				        		"<div class=\"menu-toggle__bar mid\"></div>" +
				        		"<div class=\"menu-toggle__bar bot\"></div>" +
				        	"</div>" +
				        "</li>" +
					    "<ul class=\"menu-list\">" +
					    	"<li class=\"nav-item select\"><a class=\"nav-link\">Select</a></li>"+
					    	"<li class=\"nav-item add-project\"><a class=\"nav-link\">Add Project</a></li>"+
					    "</ul>" +
					"</ul>";

	document.querySelector(".container").appendChild(nav);

	// back button
	nav.querySelector(".back").addEventListener("click", function() {
		document.querySelector(".projects__icons").classList.remove("fade");
		document.querySelector(".show-list").classList.remove("show-list");
		this.style.animation = "300ms fadeOut linear forwards";
		this.classList.add("fade");
	});

	// menu toggle
	let toggleBox = nav.querySelector(".toggle-box");
	let menuToggle = nav.querySelector(".menu-toggle");
	let menuList = nav.querySelector(".menu-list");
	let top = nav.querySelector(".top");
	let mid = nav.querySelector(".mid");
	let bot = nav.querySelector(".bot");
	toggleBox.addEventListener("click", function() {
		// toggle animation
		top.classList.toggle("top-spin");
		mid.classList.toggle("fade");
		bot.classList.toggle("bot-spin");

		// show sreen
		document.querySelector(".screen").classList.toggle("hidden");

		// change css of toggle button
		this.classList.toggle("toggle-box-toggled");
		menuToggle.classList.toggle("menu-toggle-toggled");

		// slide everything over
		document.querySelector(".container").classList.toggle("slide-over");
	});

	// add project
	let newProjectContainer = document.querySelector(".new-project-container");
	document.querySelector(".add-project").addEventListener("click", function() {
		if(window.innerWidth < 768) {
			toggleBox.click();
		}

		newProjectContainer.classList.toggle("fade");
		newProjectContainer.classList.toggle("bring-up");
	});
}

function addNewProject(projectObj) {
	let iconCol = document.createElement("div");
	let listCol = document.createElement("div");

	let iconElement = createIconFace(projectObj.name, projectObj.icon);
	let listElement = createListFace(projectObj.name, projectObj.todos);

	// icon
	iconCol.classList.add("col-1-3");
	iconCol.classList.add("col-md-1-4");
	iconCol.classList.add("col-lg-1-5");

	let iconsContainer = document.querySelector(".projects__icons");
	iconElement.addEventListener("click", function() {
		iconsContainer.classList.add("fade");
		listElement.classList.add("show-list");
		document.querySelector(".back").classList.remove("fade");
		document.querySelector(".back").style.animation = "fadeIn 300ms linear forwards";
	});

	iconCol.appendChild(iconElement);
	iconsRow.appendChild(iconCol);

	//list
	listCol.classList.add("col-1-3");
	listCol.classList.add("col-md-1-4");
	listCol.classList.add("col-lg-1-5");

	listCol.appendChild(listElement);
	listsRow.appendChild(listCol);
}

function initProjects() {
	let projects = [{
		name: "Clean the House",
		icon: "fas fa-broom",
		todos: [{
			name: "Sweep the Floors",
		}, {
			name: "Wipe down the kitchen"
		}, {
			name: "Vacuum upstairs"
		}, {
			name: "Take out the trash"
		}]
	}, {
		name: "Do Homework",
		icon: "fas fa-sticky-note",
		todos: [{
			name: "Do Physics"
		}, {
			name: "Do Math"
		}, {
			name: "Do English"
		}]
	}, {
		name: "Finish Project",
		icon: "fas fa-flask",
		todos: [{
			name: "Come up with title"
		}, {
			name: "Research chemical reactions"
		}, {
			name: "Build reaction demo"
		}, {
			name: "Make 3 fold display"
		}]
	}];

	let projectsContainer = document.createElement("section");
	projectsContainer.classList.add("projects-container");
	projectsContainer.innerHTML = "<div class=\"projects__icons\"></div>" +
                                  "<div class=\"projects__lists\"></div>";

    document.querySelector(".container").appendChild(projectsContainer);

	let iconsContainer = document.querySelector(".projects__icons");
	let listsContainer = document.querySelector(".projects__lists");
	iconsRow = document.createElement("div");
	listsRow = document.createElement("div");

	iconsRow.classList.add("row");
	listsRow.classList.add("row");

	projects.forEach(function(projectObj) {
		addNewProject(projectObj);
	});

	iconsContainer.appendChild(iconsRow);
	listsContainer.appendChild(listsRow);
}

function home() {
	// init screen
	initScreen();

	// init forms
	initForms();

	// init the top bar
	initTopBar();

	// init the projects section
	initProjects();
}

export default home;