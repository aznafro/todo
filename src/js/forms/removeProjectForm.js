const PROJECT_NAMES = "PROJECT_NAMES";

function removeProject() {
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

	let confirmRemoveContainer = document.querySelector(".confirm-remove-container");
	confirmRemoveContainer.classList.add("fade");
	confirmRemoveContainer.classList.remove("bring-up");

	document.querySelector("nav .back").click();
}

// remove project
function initRemoveProjectForm() {
	let confirmRemoveContainer = document.createElement("div");
	confirmRemoveContainer.classList.add("confirm-remove-container");

	confirmRemoveContainer.innerHTML = "<h3 class=\"confirm-remove__header\">Confirm Remove Project</h3>" +
									   "<p class=\"confirm-remove__text\">Are you sure you want to remove project: '<span class=\"confirm-remove__project-name\">" + "</span>'?</p>" +
									   "<div class=\"row\">" +
									   		"<div class=\"col-1-2\">" +
									   			"<button class=\"btn btn__confirm-remove\">Yes</button>" +
									   		"</div>" +
									   		"<div class=\"col-1-2\">" +
									   			"<button class=\"btn btn__cancel-remove\">No</button>" +
									   		"</div>" +
									   "</div>";

	// confirm delete
	confirmRemoveContainer.querySelector(".btn__confirm-remove").addEventListener("click", function() {
		removeProject();
	});

	// cancel delete
	confirmRemoveContainer.querySelector(".btn__cancel-remove").addEventListener("click", function() {
		confirmRemoveContainer.style.animation = "300ms hideForm ease-out forwards";
	});

	document.querySelector(".container").appendChild(confirmRemoveContainer);
}

export { 
	removeProject, 
	initRemoveProjectForm
}