// Get the UI elements
const moodSelect = document.getElementById("mood-select");
const energyRange = document.getElementById("energy-range");
const symptomsTextarea = document.getElementById("symptoms-textarea");
const saveButton = document.getElementById("save-button");

// Create an empty array to hold the symptom entries
let entries = [];

// Define a function to save the current entry and update the UI
function saveEntry(event) {
  event.preventDefault();

  // Get the current values of the UI elements
  const mood = moodSelect.value;
  const energyLevel = energyRange.value;
  const symptoms = symptomsTextarea.value;

  // Create a new entry object and add it to the entries array
  const entry = { mood, energyLevel, symptoms };
  entries.push(entry);

  // Reset the UI elements
  moodSelect.value = "neutral";
  energyRange.value = "50";
  symptomsTextarea.value = "";

  // Log the entries array to the console for debugging
  console.log(entries);
}

// Add an event listener to the save button
saveButton.addEventListener("click", saveEntry);
