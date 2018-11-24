(function() {
	document.body.innerHTML += "<div class=\"container\"></div>";
	
	document.querySelector(".container").innerHTML += "<nav>" +
										      			"<ul class=\"nav-list\">" +
													        "<li class=\"nav-item\"><a class=\"nav-link\"><i class=\"fas fa-arrow-left\"></i></a></li>" +
													        "<li class=\"nav-item\"><a class=\"nav-link logo\">Get 'er Done</a></li>" +
													        "<li class=\"nav-item\"><a class=\"nav-link select\">Select</a></li>" +
													    "</ul>" +
													  "</nav>";							  
	document.querySelector(".fa-arrow-left").addEventListener("click", function() {
		console.log("back");
	});
})();