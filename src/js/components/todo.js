import { showForm } from "../forms/formFunctions";

function createTodo(todo) {
	let listItem = document.createElement("article");
	listItem.classList.add("todo");

	listItem.innerHTML = "<div class=\"menu-box\">" +
						 	"<i class=\"fas fa-ellipsis-v menu-toggle\"></i>" +
						 	"<ul class=\"menu-list\">" +
						 		"<li class=\"menu-list__item\">" +
						 			"<a class=\"menu-list__link delete-todo\">Delete</a>" +
						 		"</li>" +
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
	listItem.querySelector(".delete-todo").addEventListener("click", function() {
		menuList.classList.remove("show-menu");

		// show confirm delete todo window
		itemNameSpan.textContent = itemName;
		showForm(confirmRemoveItemForm);
	});

	return listItem;
}

export default createTodo;