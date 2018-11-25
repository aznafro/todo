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

export default removeProject