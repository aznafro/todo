import { hideForm } from "./formFunctions.js";
 
const PROJECT_NAMES = "PROJECT_NAMES";

function removeProject(formToHide) {
	let projectName = document.querySelector(".show-list .project__name").textContent;
	
	// remove it from local storage
	let projectNames = localStorage.getItem(PROJECT_NAMES).split(",");
	for(let i=0; i < projectNames.length; i++) {
		if(projectNames[i] == projectName) {
			projectNames.splice(i, 1);
			break;
		}
	}
	projectNames = projectNames.join(",");
	localStorage.setItem(PROJECT_NAMES, projectNames);

	localStorage.removeItem(projectName);

	// remove it from the UI
	document.querySelectorAll("[data-name=\"" + projectName + "\"]").forEach(function(el) {
		el.remove();
	});

	hideForm(formToHide);

	document.querySelector("nav .back").click();
}

// remove project
function initRemoveProjectForm() {
	let confirmRemoveProjectForm = document.createElement("div");
	confirmRemoveProjectForm.classList.add("confirm-remove-project__form");

	confirmRemoveProjectForm.innerHTML = "<h3 class=\"confirm-remove-project__header\">Confirm Remove Project</h3>" +
									   "<p class=\"confirm-remove-project__text\">Are you sure you want to remove project '<span class=\"confirm-remove-project__name\">" + "</span>'?</p>" +
									   "<div class=\"row\">" +
									   		"<div class=\"col-1-2\">" +
									   			"<button class=\"btn btn__confirm-remove\">Yes</button>" +
									   		"</div>" +
									   		"<div class=\"col-1-2\">" +
									   			"<button class=\"btn btn__cancel-remove\">No</button>" +
									   		"</div>" +
									   "</div>";

	// confirm delete
	confirmRemoveProjectForm.querySelector(".btn__confirm-remove").addEventListener("click", function() {
		removeProject(confirmRemoveProjectForm);
	});

	// cancel delete
	confirmRemoveProjectForm.querySelector(".btn__cancel-remove").addEventListener("click", function() {
		hideForm(confirmRemoveProjectForm);
	});

	document.querySelector(".container").appendChild(confirmRemoveProjectForm);
}

export { 
	removeProject, 
	initRemoveProjectForm
}