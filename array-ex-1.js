// Create an array
let kids = ["Natalie", "Brittany", "Zachary"];

// Access the third element (0-based index)
let youngest = kids[2];
console.log("Youngest kid:", youngest); // Output: Youngest kid: Zachary

// Get the length of the array
let numKids = kids.length;
console.log("Number of kids:", numKids); // Output: Number of kids: 3

// Iterate over the array and print each element
for (let i = 0; i < numKids; i++) {
    console.log(kids[i]);
}