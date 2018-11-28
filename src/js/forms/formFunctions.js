import createTodo from "../components/todo.js";

function showForm(form) {
	form.style.animation = "300ms showForm ease-in-out forwards";
}

function hideForm(container) {
	container.style.animation = "300ms hideForm ease-out forwards";
}

function updateCurrentListUI() {
	let projectName = document.querySelector(".show-list .project__name").textContent;
	let currentListFace = document.querySelector(".show-list .todos-container");
	let updatedList = JSON.parse(localStorage.getItem(projectName)).todos;
	
	currentListFace.innerHTML = "";
	updatedList.forEach(function(todo) {
		let todoEl = createTodo(todo);
		currentListFace.appendChild(todoEl);
	});
}

export {
	showForm,
	hideForm,
	updateCurrentListUI
}