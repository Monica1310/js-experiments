let payrate = 17.30;
let hoursworked = 45;
let grosspay=0;

if (hoursworked<40) {

    grosspay = payrate * hoursworked;
    console.log("The grosspay of the employee is " + grosspay);
}

if (hoursworked>=40){
 
grosspay = (40*payrate)+((hoursworked-40)*payrate*1.5);
console.log ("The grosspay of the employee is " + grosspay);

}


