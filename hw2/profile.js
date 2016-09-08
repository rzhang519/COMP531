window.onload = function(){
	console.log("profile onload");
	document.getElementById("updateBtn").addEventListener("click", validate)
}

function validate(){
	// var allInputs = document.getElementsByClassName("inputBox");


	// validates non-empty inputs
	// var displayNameInput = document.getElementById("displayNameInput");
	// var displayName = displayNameInput.value;
	// if (displayName){ // not empty 
	// 	// does not match the requirement
	// 	if (!(new RegExp("[a-zA-Z][a-zA-Z0-9_.-]*").test(displayName))){
	// 		window.alert("Invalid Entry: displat name. Display names should be a combination of numbers, letters, underscore, dot and dash but it can only start with letters");
	// 		displayNameInput.value = '';
	// 		return;
	// 	}

	// 	// updates the value
	// 	var oldVal = document.getElementById("displayNameVal").innerHTML;
	// 	document.getElementById("displayNameVal").innerHTML = displayName;
	// 	window.alert("The input field display name has been changed from " + oldVal + " to " + displayName);
	// 	displayNameInput.value = '';
	// }

	validateInput("displayNameInput", "[a-zA-Z][a-zA-Z0-9_.-]*", "Invalid Entry: Display Name. Display names should be a combination of numbers, letters, underscore, dot and dash but it can only start with letters", "displayNameVal");
	validateInput("emailInput", "[a-zA-Z0-9_-]*[@][a-zA-Z0-9_.-]*[.][a-zA-Z0-9_.-]*", "Invalid Entry: Email Address. The format should be a@b.c", "emailVal");
	validateInput("phoneInput", "[0-9]{3}-[0-9]{3}-[0-9]{4}", "Invalid Entry: Phone Number. The format should be xxx-xxx-xxxx", "phoneVal");
	validateInput("zipInput", "[0-9]{5}", "Invalid Entry: Zip Code. The format should be 5-digit number", "zipVal");

	var oldPassword = document.getElementById("passwordVal").innerHTML;
	var oldConfirmation = document.getElementById("passwordConfirmationVal").innerHTML;
	var newPassword = document.getElementById("passwordInput").value;
	var newConfirmation = document.getElementById("passwordConfirmationInput").value;

	if (newPassword !== newConfirmation){
		window.alert("password does not match");
		document.getElementById("passwordInput").value = '';
		document.getElementById("passwordConfirmationInput").value = '';
		return;
	}

	document.getElementById("passwordVal").innerHTML = newPassword;
	document.getElementById("passwordConfirmationVal").innerHTML = newConfirmation;

	window.alert("Both the password and the password confirmation have been changed from " + oldPassword + " to " + newPassword);


}


function validateInput(inputID, regex, firstAlert, valueID){
	// validates non-empty inputs
	var displayNameInput = document.getElementById(inputID);
	var displayName = displayNameInput.value;
	if (displayName){ // not empty 
		// does not match the requirement
		if (!(new RegExp(regex).test(displayName))){
			window.alert(firstAlert);
			displayNameInput.value = '';
			return;
		}

		// updates the value
		var oldVal = document.getElementById(valueID).innerHTML;
		document.getElementById(valueID).innerHTML = displayName;
		window.alert("The input field has been changed from " + oldVal + " to " + displayName);
		displayNameInput.value = '';
	}
}


