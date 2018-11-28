import { removeTodo } from "../forms/removeTodoForm.js";
import { showForm } from "../forms/formFunctions.js";

function createIconFace(name, icon) {
	// init icon face
	let iconFace = document.createElement("div");
	let projectIcon = document.createElement("i");
	let projectName = document.createElement("h2");

	iconFace.classList.add("project__icon-face");
	icon.split(" ").forEach(function(iconClass) {
		projectIcon.classList.add(iconClass);
	});
	projectName.classList.add("project__name");

	if(name.length > 13) {
		projectName.textContent = name.substring(0, 13) + "..";
	} else {
		projectName.textContent = name;
	}

	iconFace.appendChild(projectIcon);
	iconFace.appendChild(projectName);

	return iconFace;
}

function addTodo(todo, container) {
	let listItem = document.createElement("article");
	listItem.classList.add("todo");

	listItem.innerHTML = "<div class=\"menu-box\">" +
						 	"<i class=\"fas fa-ellipsis-v menu-toggle\"></i>" +
						 	"<ul class=\"menu-list\">" +
						 		"<li class=\"list-item\"><a class=\"list-link todo__delete\">Delete</a></li>" +
						 	"</ul>" +
						 "</div>" + 
						 "<h3 class=\"todo__name\"></h3>" +
						 "<span class=\"todo__duedate\"></span>" +
						 "<p class=\"todo__desc\"></p>";

	let priorityClass = "priority-" + todo.priority;
	listItem.classList.add(priorityClass);

	listItem.querySelector(".todo__name").textContent = todo.name;
	listItem.querySelector(".todo__duedate").textContent = todo.duedate;
	listItem.querySelector(".todo__desc").textContent = todo.desc;

	let menuList = listItem.querySelector(".menu-list");
	listItem.querySelector(".menu-toggle").addEventListener("click", function() {
		menuList.classList.toggle("show-menu");
	});

	let itemName = listItem.querySelector(".todo__name").textContent;
	let confirmRemoveItemForm = document.querySelector(".confirm-remove-todo__form");
	let itemNameSpan = confirmRemoveItemForm.querySelector(".confirm-remove-todo__name");
	listItem.querySelector(".todo__delete").addEventListener("click", function() {
		menuList.classList.remove("show-menu");

		// show confirm delete todo window
		itemNameSpan.textContent = itemName;
		showForm(confirmRemoveItemForm);
	});

	container.appendChild(listItem);
}

function createListFace(name, todos) {
	let listFace = document.createElement("div");
	let projectName = document.createElement("h1");
	let todosContainer = document.createElement("div");

	listFace.classList.add("project__list-face");
	projectName.classList.add("project__name");
	todosContainer.classList.add("todos-container");

	projectName.textContent = name;

	// a todo will have more things than this, but this is the gist of it for now
	todos.forEach(function(todo) {
		addTodo(todo, todosContainer);
	});

	listFace.appendChild(projectName);
	listFace.appendChild(todosContainer);
	return listFace;
}

export {
	createIconFace,
	createListFace,
	addTodo
};