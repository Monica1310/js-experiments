
function isOver60(arrayValue) {
    if (arrayValue > 60) {
       return true;
    }
    else {
       return false;
    }
 }

 // Here is array of numbers
let numbers = [7, 9, 64, 60, 12, 13, 65, 62];

let firstValOver60 = numbers.find(isOver60);  // returns 64

// If no value in the array was found, firstValOver60 will
// be undefined
if (firstValOver60 != undefined) {
   console.log(firstValOver60);
}
else {
   console.log("No values over 60");
}

 