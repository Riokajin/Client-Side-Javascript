// Arrays for each part of the story
// Each array holds the different options the user can cycle through
let characters = [
    "Cecil", 
    "Bartz", 
    "Terra", 
    "Cloud", 
    "Squall", 
    "Zidane"
];

let actions = [
    "fought", 
    "argued with", 
    "accidentally hugged", 
    "ran from", 
    "teamed up with", 
    "stole from"
];

let things = [
    "a confused moogle", 
    "an angry cactuar", 
    "a dancing tonberry", 
    "a giant chocobo", 
    "a malfunctioning magitek armor", 
    "a very lost blitzball player"
];

let locations = [
    "in Midgar",
    "at Balamb Garden",
    "on the Highwind",
    "in Zanarkand",
    "at the Gold Saucer",
    "in Alexandria"
];

let endings = [
    "for absolutely no reason.",
    "because destiny said so.",
    "while everyone watched.",
    "because chaos demanded it."
];

// Index counters for cycling through each array
// These keep track of which item is currently selected
let charIndex = 0;
let actionIndex = 0;
let thingIndex = 0;
let locationIndex = 0;
let endingIndex = 0;

// Grab all the buttons and output spans from the page
// These let us update the text beside each button
const charBtn = document.querySelector("#charBtn");
const actionBtn = document.querySelector("#actionBtn");
const thingBtn = document.querySelector("#thingBtn");
const locationBtn = document.querySelector("#locationBtn");
const endingBtn = document.querySelector("#endingBtn");

const charOut = document.querySelector("#charOut");
const actionOut = document.querySelector("#actionOut");
const thingOut = document.querySelector("#thingOut");
const locationOut = document.querySelector("#locationOut");
const endingOut = document.querySelector("#endingOut");

const showStoryBtn = document.querySelector("#showStoryBtn");
const storyOutput = document.querySelector("#storyOutput");

// Button for generating a random story
const randomBtn = document.querySelector("#randomBtn");

// Cycle through the characters array
charBtn.addEventListener("click", function() {
    charIndex++;
    if (charIndex >= characters.length) {
        charIndex = 0; // wrap back to start
    }
    charOut.textContent = characters[charIndex];
});

// Cycle through the actions array
actionBtn.addEventListener("click", function() {
    actionIndex++;
    if (actionIndex >= actions.length) {
        actionIndex = 0;
    }
    actionOut.textContent = actions[actionIndex];
});

// Cycle through the things array
thingBtn.addEventListener("click", function() {
    thingIndex++;
    if (thingIndex >= things.length) {
        thingIndex = 0;
    }
    thingOut.textContent = things[thingIndex];
});

// Cycle through the locations array
locationBtn.addEventListener("click", function() {
    locationIndex++;
    if (locationIndex >= locations.length) {
        locationIndex = 0;
    }
    locationOut.textContent = locations[locationIndex];
});

// Cycle through the endings array
endingBtn.addEventListener("click", function() {
    endingIndex++;
    if (endingIndex >= endings.length) {
        endingIndex = 0;
    }
    endingOut.textContent = endings[endingIndex];
});

// Pick a random item from each array and show the story
randomBtn.addEventListener("click", function() {
    // Generate random indexes for each array
    charIndex = Math.floor(Math.random() * characters.length);
    actionIndex = Math.floor(Math.random() * actions.length);
    thingIndex = Math.floor(Math.random() * things.length);
    locationIndex = Math.floor(Math.random() * locations.length);
    endingIndex = Math.floor(Math.random() * endings.length);

    // Update the spans so the user sees the chosen words
    charOut.textContent = characters[charIndex];
    actionOut.textContent = actions[actionIndex];
    thingOut.textContent = things[thingIndex];
    locationOut.textContent = locations[locationIndex];
    endingOut.textContent = endings[endingIndex];

    // Build the final story
    storyOutput.textContent = 
    `${characters[charIndex]} ${actions[actionIndex]} ${things[thingIndex]} ${locations[locationIndex]} ${endings[endingIndex]}`;
});


// Build the final story using template literals
// This uses whatever options the user has selected
showStoryBtn.addEventListener("click", function() {
    storyOutput.textContent = 
    `${characters[charIndex]} ${actions[actionIndex]} ${things[thingIndex]} ${locations[locationIndex]} ${endings[endingIndex]}`;
});