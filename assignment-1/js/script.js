// Arrays for each part of the story
// Each array holds the different options the user can cycle through
let characters = [
    "The warrior of light",
    "Firion",
    "Maria",
    "Guy",
    "Cecil",
    "Kain",
    "Rosa",
    "Edge",
    "Yang",
    "Palom",
    "Porom",
    "Tellah",
    "Cid",
    "Tellah",
    "Edward",
    "Bartz",
    "Lenna",
    "Galuf",
    "Faris",
    "Krile", 
    "Terra",
    "Locke",
    "Edgar",
    "Sabin",
    "Celes",
    "Shadow",
    "Cyan",
    "Gau",
    "Setzer",
    "Strago",
    "Relm",
    "Mog",
    "Gogo",
    "Umaro",
    "Cloud",
    "Barret",
    "Tifa",
    "Aerith",
    "Red XIII",
    "Yuffie",
    "Cait Sith",
    "Vincent",
    "Cid",
    "Squall",
    "Rinoa",
    "Quistis",
    "Zell",
    "Selphie",
    "Irvine",
    "Zidane",
    "Garnet",
    "Dagger",
    "Vivi",
    "Steiner",
    "Freya",
    "Quina",
    "Eiko",
    "Amarant",
    "Tidus",
    "Yuna",
    "Auron",
    "Wakka",
    "Lulu",
    "Kimahri",
    "Rikku",
    "Vaan",
    "Penelo",
    "Ashe",
    "Balthier",
    "Fran",
    "Basch",
    "Lightning",
    "Snow",
    "Sazh",
    "Hope",
    "Vanille",
    "Fang",
    "Noctis",
    "Gladiolus",
    "Ignis",
    "Prompto",
    "Clive",
    "Torgal",
    "Jill",
    "Cid",
    "Joshua",
    "Byron",
    "Dion",
];

let actions = [
    "attempted to cook with",
    "tried to negotiate with",
    "got into an argument with", 
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
    "some malfunctioning magitek armor", 
    "a very lost blitzball player"
];

let locations = [
    "on the Moon",
    "in The Library of the Ancients",
    "at Balamb Garden",
    "in Midgar",
    "in Narshe",
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