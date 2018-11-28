import { addTodo } from "../components/project.js";

function showForm(form) {
	form.style.animation = "300ms showForm ease-in-out forwards";
}

function hideForm(container) {
	container.style.animation = "300ms hideForm ease-out forwards";
}

function updateListUI() {
	let projectName = document.querySelector(".show-list .project__name").textContent;
	let currentListFace = document.querySelector(".show-list .todos-container");
	let updatedList = JSON.parse(localStorage.getItem(projectName)).todos;
	
	currentListFace.innerHTML = "";
	updatedList.forEach(function(todo) {
		addTodo(todo, currentListFace);
	});
}

export {
	showForm,
	hideForm,
	updateListUI
}