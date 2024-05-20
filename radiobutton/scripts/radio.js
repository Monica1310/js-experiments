document.getElementById("autoRadioBtn").onclick = function() 
{
   updateBasePremium();
};
document.getElementById("homeRadioBtn").onclick = function() 
{
   updateBasePremium();
};
document.getElementById("lifeRadioBtn").onclick = function() 
{
   updateBasePremium();
};

function updateBasePremium() {
   let basePremium = 0;
   if (document.getElementById("autoRadioBtn").checked) {
      basePremium = 175.00;
   } else if (document.getElementById("homeRadioBtn").checked) {
      basePremium = 395.00;
   } else {
      // It must be life since one is always checked
      basePremium = 225.00;
   }

   document.getElementById("basePremium").innerHTML = basePremium;
}