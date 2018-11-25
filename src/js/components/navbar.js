import removeProject from "./removeProjectForm";

function initNavbar() {
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
					    	// "<li class=\"nav-item select\"><a class=\"nav-link\">Select</a></li>"+
					    	"<li class=\"nav-item add-remove-item\">" +
					    		"<a class=\"nav-link add-project\">Add Project</a>" +
					    		"<a class=\"nav-link remove-project fade\">Remove Project</a>" +
					    	"</li>" +
					    "</ul>" +
					"</ul>";

	document.querySelector(".container").appendChild(nav);

	// back button
	let addProjectButton = nav.querySelector(".add-project");
	let removeProjectButton = nav.querySelector(".remove-project");
	nav.querySelector(".back").addEventListener("click", function() {
		console.log("clicked");

		// show the icons
		document.querySelector(".projects__icons").classList.remove("fade");

		// whichever list is being show, stop showing it
		// we need this check in the case the list was removed
		if(document.querySelector(".show-list")) {
			document.querySelector(".show-list").classList.remove("show-list");
		}

		// show/hide buttons
		this.classList.add("fade");
		removeProjectButton.classList.add("fade");
		addProjectButton.classList.remove("fade");
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
	addProjectButton.addEventListener("click", function() {
		if(window.innerWidth < 768) {
			toggleBox.click();
		}

		newProjectContainer.classList.remove("fade");
		newProjectContainer.classList.add("bring-up");
	});

	// remove project
	let confirmRemoveContainer = document.createElement("div");
	confirmRemoveContainer.classList.add("confirm-remove-container");
	confirmRemoveContainer.classList.add("fade");

	confirmRemoveContainer.innerHTML = "<h3 class=\"confirm-remove__header\">Confirm Remove Project</h3>" +
									   "<p class=\"confirm-remove__text\">Are you sure you want to remove project: '<span class=\"confirm-remove__project-name\">" +  + "</span>'?</p>" +
									   "<div class=\"row\">" +
									   		"<div class=\"col-1-2\">" +
									   			"<button class=\"btn__confirm-remove\">Yes</button>" +
									   		"</div>" +
									   		"<div class=\"col-1-2\">" +
									   			"<button class=\"btn__cancel-remove\">No</button>" +
									   		"</div>" +
									   "</div>";

	document.querySelector(".container").appendChild(confirmRemoveContainer);

	// initiate delete
	let confirmRemoveProjectName = document.querySelector(".confirm-remove__project-name");
	removeProjectButton.addEventListener("click", function() {
		let projectName = document.querySelector(".show-list .project__name").textContent;
		confirmRemoveProjectName.textContent = projectName;

		confirmRemoveContainer.classList.remove("fade");
		confirmRemoveContainer.classList.add("bring-up");
	});

	// confirm delete
	document.querySelector(".btn__confirm-remove").addEventListener("click", function() {
		removeProject();
	});

	// cancel delete
	document.querySelector(".btn__cancel-remove").addEventListener("click", function() {
		confirmRemoveContainer.classList.add("fade");
		confirmRemoveContainer.classList.remove("bring-up");
	});
}

export default initNavbar;