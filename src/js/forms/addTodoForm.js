function initAddTodoForm() {
	let container = document.createElement("container");
	container.classList.add("add-todo-container");

	container.innerHTML = "<h3 class=\"new-todo__header\">New Item</h3>" +
						  "<p class=\"new-todo__notice\"></p>" +
						  "<input type=\"text\" class=\"input new-todo__name\" placeholder=\"Item Name\" required>" +
						  "<h4 class=\"priority__header\">Priority Level</h4>" +
						  "<div class=\"row\">" +
						  	"<div class=\"col-1-3\">" + 
						  		"<label for=\"low-priority\" class=\"label\">" +
						  			"Low" +
						  			"<input type=\"radio\" id=\"low-priority\" name=\"priority\" class=\"input\" checked=\"checked\">" +
						  		"</label>" +
						  	"</div>" +
						  	"<div class=\"col-1-3\">" + 
						  		"<label for=\"med-priority\" class=\"label\">" +
						  			"Medium" +
						  			"<input type=\"radio\" id=\"med-priority\" name=\"priority\" class=\"input\">" +
						  		"</label>" +
						  	"</div>" +
						  	"<div class=\"col-1-3\">" + 
						  		"<label for=\"high-priority\" class=\"label\">" +
						  			"High" +
						  			"<input type=\"radio\" id=\"high-priority\" name=\"priority\" class=\"input\">" +
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

	let addItemButton = container.querySelector(".btn__add-todo");
	let cancelItemButton = container.querySelector(".btn__cancel-todo");
	let notice = container.querySelector(".new-todo__notice");

	addItemButton.addEventListener("click", function() {
		let itemName = container.querySelector(".new-todo__name").value;

		if(!itemName) {
			notice.textContent = "An Item Name is required";
			return;
		}

		let priority = container.querySelector("[name=\"priority\"][checked=\"checked\"]").id.split("-")[0];
		let desc = container.querySelector(".new-todo__desc").textContent;
		let date = container.querySelector("#new-todo__date").value;

		// save data to local storage


		// update ui
	});

	// cancel
	cancelItemButton.addEventListener("click", function() {
		container.style.animation = "300ms hideForm ease-in-out forwards";
	});

	document.querySelector(".container").appendChild(container);
}

export default initAddTodoForm;