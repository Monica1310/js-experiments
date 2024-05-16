//"use strict";


// We want this code to run when the user clicks the Show button
document.getElementById("showBtn").addEventListener("click", function() {
    // Get references to the input fields
    let nameField = document.getElementById("nameField");
    let ageField = document.getElementById("ageField");

    // Get values in the name and age fields
    let name = nameField.value;
    let age = ageField.value;    // age is a string here
    console.log(name, age);

    // Construct the message
    let message = "Hi " + name + "! I hear you are " + age + " years old!";

    // Get reference to the message paragraph
    const messagePara = document.getElementById("messagePara");

    // Display the message
    messagePara.innerHTML = message;
});