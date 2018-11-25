function initScreen() {
	let screen = document.createElement("div");
	screen.classList.add("screen");
	screen.classList.add("hidden");
	document.querySelector(".container").appendChild(screen);
}

export default initScreen;