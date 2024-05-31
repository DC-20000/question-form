// Define an array of locations
const locations = [
    'Location 1',
    'Location 2',
    'Location 3',
    'Location 4',
    'Location 5',
    // Add more locations here
];

// Function to populate a dropdown list with options
function populateDropdown(selectElement, options) {
    options.forEach(option => {
        const optionElement = document.createElement('option');
        optionElement.value = option;
        optionElement.textContent = option;
        selectElement.appendChild(optionElement);
    });
}

// Get references to the dropdown lists
const workplaceAreaDropdown = document.getElementById('workplace-area');
const schoolAreaDropdown = document.getElementById('school-area');
const socialAreaDropdown = document.getElementById('social-area');
const preferredLocationsDropdown1 = document.getElementById('preferred-locations-1');
const preferredLocationsDropdown2 = document.getElementById('preferred-locations-2');
const preferredLocationsDropdown3 = document.getElementById('preferred-locations-3');

// Populate the dropdown lists
populateDropdown(workplaceAreaDropdown, locations);
populateDropdown(schoolAreaDropdown, locations);
populateDropdown(socialAreaDropdown, locations);
populateDropdown(preferredLocationsDropdown1, locations);
populateDropdown(preferredLocationsDropdown2, locations);
populateDropdown(preferredLocationsDropdown3, locations);
