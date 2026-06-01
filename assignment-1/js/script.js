// Arrays for each part of the story
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

storyOutput.textContent = 
    `${characters[charIndex]} ${actions[actionIndex]} ${things[thingIndex]} ${locations[locationIndex]} ${endings[endingIndex]}`;

// Index counters for cycling through each array
let charIndex = 0;
let actionIndex = 0;
let thingIndex = 0;
let locationIndex = 0;
let endingIndex = 0;

// Grab all the buttons and output spans from the page
const charBtn = document.querySelector("#charBtn");
const actionBtn = document.querySelector("#actionBtn");
const thingBtn = document.querySelector("#thingBtn");
const locationBtn = document.querySelector("#locationBtn");
const endingBtn = document.querySelector("#endingBtn");

const charOut = document.querySelector("#charOut");
const actionOut = document.querySelector("#actionOut");
const thingOut = document.querySelector("#thingOut");
const locationOut = document.querySelector("#locationOut");
const engingOut = document.querySelector("#endingOut");

const showStoryBtn = document.querySelector("#showStoryBtn");
const storyOutput = document.querySelector("#storyOutput");
