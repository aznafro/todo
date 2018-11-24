import { createIconFace, createListFace } from "./project.js";

 
function initTopBar() {
	let nav = document.createElement("nav");
	
	nav.innerHTML = "<ul class=\"nav-list\">" +
				        "<li class=\"nav-item back\"><i class=\"fas fa-arrow-left fade\"></i></li>" +
				        "<li class=\"nav-item logo\">Get 'er Done</li>" +
				        "<li class=\"nav-item\">" +
				        	"<div class=\"menu-toggle\">" +
				        		"<div class=\"menu-toggle__bar top\"></div>" +
				        		"<div class=\"menu-toggle__bar mid\"></div>" +
				        		"<div class=\"menu-toggle__bar bot\"></div>" +
				        	"</div>" +
				        "</li>" +
					    "<ul class=\"menu-list\">" +
					    	"<li class=\"nav-item\"><a class=\"nav-link select\">Select</a></li>"+
					    	"<li class=\"nav-item\"><a class=\"nav-link add-project\">Add Project</a></li>"+
					    "</ul>" +
					"</ul>";

	document.querySelector(".container").appendChild(nav);
	nav.querySelector(".fa-arrow-left").addEventListener("click", function() {
		document.querySelector(".projects__icons").classList.remove("fade");
		document.querySelector(".show-list").classList.remove("show-list");
		this.classList.add("fade");
	});

	let menuToggle = nav.querySelector(".menu-toggle");
	let menuList = nav.querySelector(".menu-list");
	let top = nav.querySelector(".top");
	let mid = nav.querySelector(".mid");
	let bot = nav.querySelector(".bot");
	menuToggle.addEventListener("click", function() {
		top.classList.toggle("top-spin");
		mid.classList.toggle("fade");
		bot.classList.toggle("bot-spin");
		menuList.classList.toggle("slide-in");
	});
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
	let iconsRow = document.createElement("div");
	let listsRow = document.createElement("div");

	iconsRow.classList.add("row");
	listsRow.classList.add("row");

	projects.forEach(function(projectObj) {
		let iconCol = document.createElement("div");
		let listCol = document.createElement("div");

		let iconElement = createIconFace(projectObj.name, projectObj.icon);
		let listElement = createListFace(projectObj.name, projectObj.todos);

		// icon
		iconCol.classList.add("col-1-3");
		iconCol.classList.add("col-md-1-4");
		iconCol.classList.add("col-lg-1-5");

		iconElement.addEventListener("click", function() {
			iconsContainer.classList.add("fade");
			listElement.classList.add("show-list");
			document.querySelector(".fa-arrow-left").classList.remove("fade");
		});

		iconCol.appendChild(iconElement);
		iconsRow.appendChild(iconCol);

		//list
		listCol.classList.add("col-1-3");
		listCol.classList.add("col-md-1-4");
		listCol.classList.add("col-lg-1-5");

		listCol.appendChild(listElement);
		listsRow.appendChild(listCol);
	});

	iconsContainer.appendChild(iconsRow);
	listsContainer.appendChild(listsRow);
}

function home() {
	// init the top bar
	initTopBar();

	// init the projects section
	initProjects();
}

export default home;