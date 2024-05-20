// app.js

// Function to handle button click event
function onButtonClick() {
    // Get the selected team
    const teamSelect = document.getElementById('teamSelect');
    const selectedTeam = teamSelect.value;

    // Determine the message based on the selected team
    let message = '';
    switch (selectedTeam) {
        case 'DAL':
            message = 'You selected the Dallas Cowboys (DAL) who play in Arlington, TX';
            break;
        case 'NE':
            message = 'You selected the New England Patriots (NE) who play in Foxborough, MA';
            break;
        case 'GB':
            message = 'You selected the Green Bay Packers (GB) who play in Green Bay, WI';
            break;
        case 'SF':
            message = 'You selected the San Francisco 49ers (SF) who play in Santa Clara, CA';
            break;
        // Add more cases as needed for other teams
        default:
            message = 'Please select a team.';
            break;
    }

    // Update the message paragraph with the determined message
    const messageParagraph = document.getElementById('message');
    messageParagraph.textContent = message;
}

// Attach the click event listener to the button
document.getElementById('selectButton').addEventListener('click', onButtonClick);
