function updateBasePremium() {
    let selectedOption = document.querySelector("input[name='policy']:checked");
    let basePremium = 0;
    
    if (selectedOption.value == "auto") {
        basePremium = 175.00;
    }
    else if (selectedOption.value == "home") {
        basePremium = 395.00;
    }
    else {
        basePremium = 225.00;
    }
    
    document.getElementById("basePremium").textContent = basePremium.toFixed(2);
}

// Add event listeners to radio buttons to update the base premium on change
document.querySelectorAll("input[name='policy']").forEach(function(radio) {
    radio.addEventListener('change', updateBasePremium);
});

// Initial calculation
updateBasePremium();