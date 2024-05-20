const teams = {
    "DAL": { name: "Dallas Cowboys", location: "Arlington, TX" },
    "NE": { name: "New England Patriots", location: "Foxborough, MA" },
    "GB": { name: "Green Bay Packers", location: "Green Bay, WI" },
    "DEN": { name: "Denver Broncos", location: "Denver, CO" }
    // Add more teams as needed
};

// Get references to HTML elements
const teamSelect = document.getElementById('team-select');
const selectButton = document.getElementById('select-button');
const messageParagraph = document.getElementById('message');

// Function to add default and team options to the dropdown
function loadTeamOptions() {
    // Add the default "Select a team" option
    const defaultOption = document.createElement('option');
    defaultOption.value = "";
    defaultOption.textContent = "Select a team";
    teamSelect.appendChild(defaultOption);

    // Add team options
    for (const teamCode in teams) {
        const option = document.createElement('option');
        option.value = teamCode;
        option.textContent = teams[teamCode].name;
        teamSelect.appendChild(option);
    }
}

// Load team options when the page loads
loadTeamOptions();

// Add event listener to the button
selectButton.addEventListener('click', function() {
    // Get the selected team value
    const selectedTeamValue = teamSelect.value;

    // Check if the "Select a team" option is selected
    if (selectedTeamValue === "") {
        // Clear the message area
        messageParagraph.textContent = "";
    } else {
        // Get the details of the selected team
        const selectedTeam = teams[selectedTeamValue];

        // Create the message
        const message = `You selected the ${selectedTeam.name} (${selectedTeamValue}) who play in ${selectedTeam.location}`;

        // Display the message in the paragraph
        messageParagraph.textContent = message;
    }
});