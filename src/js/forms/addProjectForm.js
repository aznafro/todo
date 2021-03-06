"use strict";

import { addNewProject } from "../sections/projects.js";
import { hideForm } from "./formFunctions.js";

function resetForm(container) {
	container.querySelector("#new-project__name").value = "";
	container.querySelector(".icon-display i").className = "fas fa-sticky-note";
	hideForm(container);
}

function initAddProjectForm() {
	let newProjectContainer = document.createElement("div");
	newProjectContainer.classList.add("new-project__form");

	newProjectContainer.innerHTML = "<h3 class=\"new-project__header\">New Project</h3>" +
									"<p class=\"new-project__notice\"></p>" +
									"<input type=\"text\" id=\"new-project__name\" class=\"input\" placeholder=\"Project Name\" required>" +
									"<div class=\"display-icon__box\">" +
										"<span class=\"icon-display\">" +
											"<i class=\"fas fa-sticky-note\"></i>" +
										"</span>" +
										"<button class=\"btn btn__choose-icon\">Select Icon</button>" +
									"</div>" +
									"<div class=\"choose-icon__form\">" +
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
									"</div>" +
									"<div class=\"row\">" +
										"<div class=\"col-1-2\">" +
											"<button class=\"btn btn__add-project\">Add Project</button>" +
										"</div>" +
										"<div class=\"col-1-2\">" +
											"<button class=\"btn btn__cancel-project\">Cancel</button>" +
										"</div>" +
									"</div>";

	// select icon
	let iconContainer = newProjectContainer.querySelector(".choose-icon__form");
	newProjectContainer.querySelector(".btn__choose-icon").addEventListener("click", function() {
		iconContainer.classList.toggle("show-choose-icon");
	});

	let displayIcon = newProjectContainer.querySelector(".icon-display i");
	newProjectContainer.querySelectorAll(".icon").forEach(function(icon) {
		icon.addEventListener("click", function() {	
			displayIcon.className = "";		
			displayIcon.className = this.className;
			iconContainer.classList.remove("show-choose-icon");
		});
	});

	// add the project
	newProjectContainer.querySelector(".btn__add-project").addEventListener("click", function() {
		let projectName = newProjectContainer.querySelector("#new-project__name").value;
		let dupProj = localStorage.getItem(projectName);
		
		// make sure there is a project name
		if(!projectName) {
			newProjectContainer.querySelector(".new-project__notice").textContent = "Project Name Field is required";
			return;
		}

		// and make sure there isn't a duplicate project with the same name
		else if(dupProj) {
			newProjectContainer.querySelector(".new-project__notice").textContent = "Project with that name already exists";
			return;
		}

		let iconClass = newProjectContainer.querySelector(".icon-display i").className;
		addNewProject({
			name: projectName,
			icon: iconClass,
			todos: []
		}, true);

		resetForm(newProjectContainer);
	});

	// cancel add new project
	newProjectContainer.querySelector(".btn__cancel-project").addEventListener("click", function() {
		resetForm(newProjectContainer);
	});

	document.querySelector(".container").appendChild(newProjectContainer);
}

export default initAddProjectForm;