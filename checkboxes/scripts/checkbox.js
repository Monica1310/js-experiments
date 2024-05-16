let extraPerDay = 0;

   let tollTagChkbox = document.getElementById("tollTagChkbox");
   if (tollTagChkbox.checked) {
      extraPerDay += 3.95;
   }

   let gpsChkbox = document.getElementById("gpsChkbox");
   if (gpsChkbox.checked) {
      extraPerDay += 4.95;
   }

   let roadsideChkbox = document.getElementById("roadsideChkbox");
   if (roadsideChkbox.checked) {
      extraPerDay += 2.95;
   }

   console.log("Extra cost per day: $" + extraPerDay.toFixed(2));
   document.getElementById("extraPerDay").innerHTML = "Extra cost per day: $" + extraPerDay.toFixed(2);