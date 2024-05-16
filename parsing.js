// Create a new script file and name it parsing.js

// Define the parseAndDisplayName function
function parseAndDisplayName(name) {
    // Find the index of the space
    let spaceIndex = name.indexOf(" ");

    // Extract the first and last name
    let firstName = name.substring(0, spaceIndex);
    let lastName = name.substring(spaceIndex + 1);

    // Display the results
    console.log("Name: " + name);
    console.log("First name: " + firstName);
    console.log("Last name: " + lastName);
}

// Call the function with example names
parseAndDisplayName("Brenda Kaye");
parseAndDisplayName("Ian Auston");
parseAndDisplayName("Siddalee Grace");