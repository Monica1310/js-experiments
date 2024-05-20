// label_maker.js

// Define the object literal with sample values
let myInfo = {
    name: "Pursalane Faye",
    address: "121 Cardinal Street",
    city: "Benbrook",
    state: "Texas",
    zip: "76126"
};

// Define the function that prints the contact information
function printContact(contact) {
    console.log(contact.name);
    console.log(contact.address);
    console.log(contact.city + ", " + contact.state + " " + contact.zip);
}

// Invoke the function with the myInfo object
printContact(myInfo);