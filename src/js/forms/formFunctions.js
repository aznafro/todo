import createTodo from "../components/todo.js";

function showForm(form) {
	if(form.className.indexOf("add-todo") != -1) {
		form.style.animation = "300ms showAddTodoForm ease-in-out forwards";
	} else {
		form.style.animation = "300ms showForm ease-in-out forwards";
	}
}

function hideForm(form) {
	if(form.className.indexOf("add-todo") != -1) {
		form.style.animation = "300ms hideAddTodoForm ease-in-out forwards";
	} else {
		form.style.animation = "300ms hideForm ease-in-out forwards";
	}
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