window.onload = function() {
    // Set the govtChkbox's clicked event handler to the onGovtChkboxClicked function
    let govtChkbox = document.getElementById("govtChkbox");
    govtChkbox.onclick = onGovtChkboxClicked;

    // Other event handlers can be connected here
}

function onGovtChkboxClicked() {
    let govtChkbox = document.getElementById("govtChkbox");
    
    if (govtChkbox.checked) {
        // Check the roadside assist checkbox
        let roadsideChkBox = document.getElementById("roadsideChkbox");
        roadsideChkBox.checked = true;
    }
    else{

        let roadsideChkBox = document.getElementById("roadsideChkbox");
        roadsideChkBox.checked = false;

    }
}
