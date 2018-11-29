'use strict';

import createTodo from "./todo.js";

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
		let todoEl = createTodo(todo);
		todosContainer.appendChild(todoEl);
	});

	listFace.appendChild(projectName);
	listFace.appendChild(todosContainer);
	return listFace;
}

export {
	createIconFace,
	createListFace
};