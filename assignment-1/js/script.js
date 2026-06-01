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