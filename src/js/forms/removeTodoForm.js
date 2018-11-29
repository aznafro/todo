"use strict";

import { updateCurrentListUI, hideForm } from "./formFunctions.js";

function removeTodo(itemName, container) {
	// update localstorage
	let projectName = document.querySelector(".show-list .project__name").textContent;
	let projectObj = JSON.parse(localStorage.getItem(projectName));
	let todos = projectObj.todos;

	// remove item from list
	for(let i=0; i < todos.length; i++) {
		if(todos[i].name == itemName) {
			todos.splice(i, 1);
			break;
		}
	}

	// re-set it back
	localStorage.setItem(projectName, JSON.stringify(projectObj));

	// update UI
	updateCurrentListUI();

	hideForm(container);
}

// remove todo
function initRemoveTodoForm() {
	let confirmRemoveTodoForm = document.createElement("div");
	confirmRemoveTodoForm.classList.add("confirm-remove-todo__form");

	confirmRemoveTodoForm.innerHTML = "<h3 class=\"confirm-remove-todo__header\">Confirm Remove Item</h3>" +
									   "<p class=\"confirm-remove-todo__text\">Are you sure you want to remove item '<span class=\"confirm-remove-todo__name\"></span>'?</p>" +
									   "<div class=\"row\">" +
									   		"<div class=\"col-1-2\">" +
									   			"<button class=\"btn btn__confirm-remove\">Yes</button>" +
									   		"</div>" +
									   		"<div class=\"col-1-2\">" +
									   			"<button class=\"btn btn__cancel-remove\">No</button>" +
									   		"</div>" +
									   "</div>";

	// confirm delete
	confirmRemoveTodoForm.querySelector(".btn__confirm-remove").addEventListener("click", function() {
		let itemName = confirmRemoveTodoForm.querySelector(".confirm-remove-todo__name").textContent;
		removeTodo(itemName, confirmRemoveTodoForm);
	});

	// cancel delete
	confirmRemoveTodoForm.querySelector(".btn__cancel-remove").addEventListener("click", function() {
		hideForm(confirmRemoveTodoForm);
	});

	document.querySelector(".container").appendChild(confirmRemoveTodoForm);
}

export { 
	removeTodo, 
	initRemoveTodoForm
};