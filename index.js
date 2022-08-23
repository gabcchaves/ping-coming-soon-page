'use strict';

// Validate e-mail address
function validateEmail() {

	if ( /.+@.+\..+/.test(document.querySelector("#email-input").value) ) {
		if (document.querySelector("main small") !== null) {
			document.querySelector("main").removeChild(document.querySelector("main small"));
			//document.querySelector("main form input[type=email]").style.background = "none";
			document.querySelector("main form input[type=email]").style.borderColor = "lightgray";
		}
		return true;
	} else {
		// Create error message element
		let errorMsg = document.createElement("small");
		errorMsg.innerHTML = "Please provide a valid email";
		errorMsg.style.color = "var(--light-red)";
		errorMsg.style.display = "block";
		errorMsg.style.width= "31vw";
		document.querySelector("main form input[type=email]").style.borderColor = "var(--light-red)";
		if (window.matchMedia("(min-width: 1081px)").matches) {
			errorMsg.style.fontSize = "1vw";
			// Checks if error message has already been displayed
			if (document.querySelector("main small") == undefined)
				document.querySelector("main").appendChild(errorMsg);
		} else {
			errorMsg.style.fontSize = "4vw";
			// Checks if error message has already been displayed
			if (document.querySelector("main form small") == undefined)
				document.querySelector("main form").insertBefore(errorMsg, document.querySelector("main form input[type=submit]"));
		}
	}
}
