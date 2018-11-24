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
	let list = document.createElement("ul");

	listFace.classList.add("project__list-face");

	// a todo will have more things than this, but this is the gist of it for now
	todos.forEach(function(todo) {
		let listItem = document.createElement("li");

		listItem.classList.add("todo__list-item");
		listItem.textContent = todo.name;
		list.appendChild(listItem);
	});

	listFace.appendChild(list);
	return listFace;
}

export {
	createIconFace,
	createListFace
};