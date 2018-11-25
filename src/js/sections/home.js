import initScreen from "../components/screen.js";
import initAddProjectForm from "../components/addProjectForm.js";
import initNavbar from "../components/navbar.js";
import { initProjects } from "./projects.js";

// these rows are initialized when the projects are initialized
// then re-accessed when new projects are added
let iconsRow;
let listsRow;

function home() {
	// init black screen
	initScreen();

	// init add project form
	initAddProjectForm();

	// init the top bar
	initNavbar();

	// init the projects section
	initProjects();
}

export default home;