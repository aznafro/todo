import { updateCurrentListUI } from "./formFunctions.js";

function hideForm(form) {
	let nameInput = form.querySelector(".new-todo__name");
	let radio = Array.prototype.slice.call(form.querySelectorAll("[name=\"priority\"]")).filter(function(radio) {
					return radio.checked == true;
				})[0];
	let defaultRadio = form.querySelector("#low-priority");
	let descInput = form.querySelector(".new-todo__desc");
	let dateInput = form.querySelector("#new-todo__date");
	let notice = form.querySelector(".new-todo__notice");

	nameInput.value = "";
	notice.textContent = "";
	radio.checked = false;
	defaultRadio.checked = true;
	descInput.value = "";
	dateInput.value = "";
	form.style.animation = "300ms hideForm ease-in-out forwards";
}

function initAddTodoForm() {
	let addTodoForm = document.createElement("div");
	addTodoForm.classList.add("add-todo__form");

	addTodoForm.innerHTML = "<h3 class=\"new-todo__header\">New Item</h3>" +
						  "<p class=\"new-todo__notice\"></p>" +
						  "<input type=\"text\" class=\"input new-todo__name\" placeholder=\"Item Name\" required>" +
						  "<h4 class=\"priority__header\">Priority Level</h4>" +
						  "<div class=\"row\">" +
						  	"<div class=\"col-1-3\">" + 
						  		"<label for=\"low-priority\" class=\"label\">" +
						  			"Low" +
						  			"<input type=\"radio\" id=\"low-priority\" value=\"3\" name=\"priority\" class=\"input\" checked=\"checked\">" +
						  		"</label>" +
						  	"</div>" +
						  	"<div class=\"col-1-3\">" + 
						  		"<label for=\"med-priority\" class=\"label\">" +
						  			"Medium" +
						  			"<input type=\"radio\" id=\"med-priority\" value=\"2\" name=\"priority\" class=\"input\">" +
						  		"</label>" +
						  	"</div>" +
						  	"<div class=\"col-1-3\">" + 
						  		"<label for=\"high-priority\" class=\"label\">" +
						  			"High" +
						  			"<input type=\"radio\" id=\"high-priority\"value=\"1\" name=\"priority\" class=\"input\">" +
						  		"</label>" +
						  	"</div>" +
						  "</div>" +
						  "<textarea class=\"input new-todo__desc\" placeholder=\"Description\"></textarea>" +
						  "<label for=\"new-todo__date\" class=\"label\">" +
						  	"Due Date" + 
							"<input type=\"date\" id=\"new-todo__date\" class=\"input\" required>" +
						  "</label>" +
						  "<div class=\"row\">" +
					   		"<div class=\"col-1-2\">" +
					  			"<button class=\"btn btn__add-todo\">Add Item</button>" +
					  		"</div>" +
					  		"<div class=\"col-1-2\">" +
					  			"<button class=\"btn btn__cancel-todo\">Cancel</button>" +
					  		"</div>" +
						  "</div>";

	let addItemButton = addTodoForm.querySelector(".btn__add-todo");
	let cancelItemButton = addTodoForm.querySelector(".btn__cancel-todo");
	let notice = addTodoForm.querySelector(".new-todo__notice");

	addItemButton.addEventListener("click", function() {
		// initialize the new todo object
		let itemName = addTodoForm.querySelector(".new-todo__name").value;

		if(!itemName) {
			notice.textContent = "An Item Name is required";
			return;
		}

		let priority = Array.prototype.slice.call(addTodoForm.querySelectorAll("[name=\"priority\"]")).filter(function(radio) {
						return radio.checked == true;
					})[0].value;
		let desc = addTodoForm.querySelector(".new-todo__desc").value;
		let date = addTodoForm.querySelector("#new-todo__date").value;

		let newTodo = {
			name: itemName,
			priority: priority,
			desc: desc,
			duedate: date
		};

		// get the project and add the todo
		let projectName = document.querySelector(".show-list .project__name").textContent;
		let projectObj = JSON.parse(localStorage.getItem(projectName));
		let todosList = projectObj.todos;
		let dupTodo = todosList.filter(function(todo) {
			return todo.name == itemName;
		});

		// duplicate case, do nothing
		if(dupTodo.length > 0) {
			document.querySelector(".new-todo__notice").textContent = "An item with that name already exists";
			return;
		}

		// update local storage
		if(todosList.length == 0) {
			todosList.push(newTodo);
		} else {
			// insertion sort todo items on push based on priority
			let index;
			for(index = todosList.length-1; index > -1; index--) {
				if(todosList[index].priority <= priority) {
					break;
				}
			}

			todosList.splice(index+1, 0, newTodo);
		}

		localStorage.setItem(projectName, JSON.stringify(projectObj));

		// update ui
		updateCurrentListUI();

		// close form
		hideForm(addTodoForm);
	});

	// cancel
	cancelItemButton.addEventListener("click", function() {
		hideForm(addTodoForm);
	});

	document.querySelector(".container").appendChild(addTodoForm);
}

export default initAddTodoForm;