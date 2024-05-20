// avg_scores.js

// Declare two arrays of exam scores
let myScores = [92, 98, 84, 76, 89, 99, 100]; 
let yourScores = [82, 98, 94, 88, 92, 100, 100]; 

// Function to calculate the average of an array
function getAverage(scores) {
    let sum = 0;
    for (let i = 0; i < scores.length; i++) {
        sum += scores[i];
    }
    let average = sum / scores.length;
    return average;
}

// Calculate and display the average for myScores
let myAverage = getAverage(myScores);
console.log("My average score is: " + myAverage);

// Calculate and display the average for yourScores
let yourAverage = getAverage(yourScores);
console.log("Your average score is: " + yourAverage);