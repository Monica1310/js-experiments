"use strict";

let clickMeBtn = document.getElementById("clickMeBtn");
clickMeBtn.addEventListener("click",showGreeting);
function showGreeting() {
   // Find the messageDiv element
   

   let messageDiv = document.getElementById("messageDiv");
   let nameField = document.getElementById("nameField").value;
   // Set its contents to "Hello World!"
   messageDiv.innerHTML = `Hello  ${nameField}`;
  
}       

