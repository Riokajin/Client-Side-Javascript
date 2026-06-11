// Arrays for each part of the story
// Each array holds the different options the user can cycle through with sub-arrays to make it easier to go through categories with more buttons

// FF1
let charactersFF1 = [
    "The warrior of light",
    "Black Mage",
    "white Mage",
    "Red Mage",
    "Monk",
    "Thief",
    "Knight",
    "Ninja",
    "Black Wizard",
    "White Wizard",
    "Red Wizard",
    "Master",
    "Princess Sarah",
    "King of Cornelia"
];

// FF2
let charactersFF2 = [
    "Firion",
    "Maria",
    "Guy",
    "Leon",
    "Minwu",
    "Josef",
    "Gordon",
    "Leila",
    "Ricard Highwind"
];

// FF3
let charactersFF3 = [
    "Luneth",
    "Arc",
    "Refia",
    "Ingus"
];

// FF4
let charactersFF4 = [
    "Cecil",
    "Kain",
    "Rosa",
    "Edge",
    "Yang",
    "Palom",
    "Porom",
    "Tellah",
    "Cid",
    "Edward"
];

// FF5
let charactersFF5 = [
    "Bartz",
    "Lenna",
    "Galuf",
    "Faris",
    "Krile"
];

// FF6
let charactersFF6 = [
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
    "Umaro"
];

// FF7
let charactersFF7 = [
    "Cloud",
    "Barret",
    "Tifa",
    "Aerith",
    "Red XIII",
    "Yuffie",
    "Cait Sith",
    "Vincent",
    "Cid",
    "Zack"
];

// FF8
let charactersFF8 = [
    "Squall",
    "Rinoa",
    "Quistis",
    "Zell",
    "Selphie",
    "Irvine"
];

// FF9
let charactersFF9 = [
    "Zidane",
    "Garnet",
    "Dagger",
    "Vivi",
    "Steiner",
    "Freya",
    "Quina",
    "Eiko",
    "Amarant"
];

// FF10
let charactersFF10 = [
    "Tidus",
    "Yuna",
    "Auron",
    "Wakka",
    "Lulu",
    "Kimahri",
    "Rikku"
];

// FF12
let charactersFF12 = [
    "Vaan",
    "Penelo",
    "Ashe",
    "Balthier",
    "Fran",
    "Basch"
];

// FF13
let charactersFF13 = [
    "Lightning",
    "Snow",
    "Sazh",
    "Hope",
    "Vanille",
    "Fang"
];

// FF15
let charactersFF15 = [
    "Noctis",
    "Gladiolus",
    "Ignis",
    "Prompto"
];

// FF16
let charactersFF16 = [
    "Clive",
    "Torgal",
    "Jill",
    "Cid",
    "Joshua",
    "Byron",
    "Dion"
];

// Basic Actions
let actionsBasic = [
    "attempted to cook with",
    "tried to negotiate with",
    "got into an argument with",
    "performed a ritual around",
    "tripped over",
    "attempted to repair",
    "stared intensely at",
    "ran away from",
    "posed dramatically beside",
    "took a selfie with",
    "attempted to recruit",
    "warned everyone about",
    "complained loudly about",
    "tried to hide behind",
    "attempted to ride",
    "threw something at",
    "investigated rumors about",
    "performed a dance around",
    "glared suspiciously at",
    "challenged to a duel",
    "sang a song to",
    "tried to steal from",
    "ran circles around",
    "took notes about",
    "declared eternal rivalry with",
    "attempted to bribe"
];

// Chaotic Actions
let actionsChaotic = [
    "mis-timed a QTE and angered",
    "got stuck in an unskippable cutscene involving",
    "got confused and attacked",
    "equipped a cursed accessory on",
    "got launched into the air by",
    "failed to dodge",
    "triggered a cutscene by examining",
    "activated a trap set by",
    "got lost in a side-quest chain involving",
    "failed to escape a battle started by"
];

// Battle Actions
let actionsBattle = [
    "launched a surprise attack on",
    "got KO'd by",
    "failed a limit break on",
    "triggered a random encounter with",
    "got wiped by a status effect from",
    "got one-shot by level 5 Death from",
    "hit their limit because of"
];

// Arcane Actions
let actionsArcane = [
    "accidentally summoned",
    "cast a spell at",
    "accidentally healed",
    "attempted to fuse with",
    "ran out of MP while trying to cast at",
    "attempted to brew a potion using",
    "attempted to decipher ancient glyphs about",
    "attempted to junction magic onto",
    "accidentally cast Reflect on"
];

// Adventure Actions
let actionsAdventure = [
    "attempted to communicate with",
    "opened a trapped treasure chest containing",
    "lost a Triple Triad match to",
    "failed a blitzball pass toward",
    "attempted to pilot an airship into",
    "got ambushed during a long hallway by",
    "tried to synthesize an item using"
];

// System Actions
let actionsSystem = [
    "studied the behaviour of",
    "grinded for hours trying to farm",
    "accidentally triggered a boss phase change in"
];

// Moogle Stuff
let thingsMoogle = [
    "A moogle",
    "a confused moogle",
    "a sleepy moogle",
    "a moogle plush that looks emotionally done",
    "a moogle pom-pom",
    "a moogle charm",
    "a moogle timepiece",
    "a moogle cookie with uneven icing",
    "a moogle statue that judges you"
];

// Chocobo Stuff
let thingsChocobo = [
    "a chocobo",
    "a baby chocobo",
    "a timid chocobo",
    "a hyperactive baby chocobo",
    "a chocobo feather",
    "a chocobo whistle",
    "a chocobo kazoo",
    "a chocobo brush missing half its bristles",
    "a chocobo statue leaning slightly forward"
];

// Cactuar Stuff
let thingsCactuar = [
    "a cactuar",
    "a tiny cactuar",
    "a suspicious cactuar",
    "a train-conductor cactuar",
    "a cactuar that refuses to face forward",
    "a cactuar doll frozen mid-scream",
    "a single cactuar needle",
    "a cactuar fountain that sprays unpredictably"
];

// Tonberry Stuff
let thingsTonberry = [
    "a tonberry",
    "a very lost tonberry",
    "a suspiciously confident tonberry",
    "a tonberry lantern",
    "a tonberry holding a moogle as a lantern"
];

// Monster Stuff
let thingsMonsters = [
    "a bomb",
    "a territorial bomb",
    "a defensive mombomb",
    "a bomb trying very hard not to explode",
    "a sad giant bomb that can't fit in its home anymore",

    "a flan",
    "a suspiciously wobbly flan",
    "a flan that jiggles menacingly",
    "a delicious looking flan",
    "a princess flan jiggling uncontrollably atop a malboro",

    "a behemoth cub",
    "a confused behemoth",
    "a behemoth with a broken horn",
    "a king behemoth summoning comets",

    "a prowling coeurl",
    "a shy sahagin",
    "a wondering golem"
];

// Oddities (Mimics + Treasure Chests)
let thingsOddities = [
    "a mimic",
    "a startled mimic",
    "a mimic pretending to be a worse mimic",
    "an ordinary chest disguised as a mimic",
    "a treasure chest",
    "a treasure chest that keeps twitching",
    "a treasure chest that keeps trying to open itself"
];

// Item Stuff
let thingsItems = [
    "a phoenix down",
    "a phoenix down that won't stop glowing",

    "a potion",
    "a suspicious potion",
    "a mislabeled potion",
    "a glowing potion",
    "a stubborn potion bottle",
    "a potion bottle that keeps inching away",

    "a materia orb",
    "a glowing materia orb",

    "a cracked magicite shard"
];


// FF1
let locationsFF1 = [
    "in Cornelia",
    "in Provoka",
    "in Elfheim",
    "in Melmond",
    "at Crescent Lake",
    "in Gaia",
    "in Onrac",
    "in Lufenia",
    "inside the Chaos Shrine",
    "inside the Cavern of Earth",
    "inside the Cavern of Ice",
    "inside the Sunken Shrine",
    "inside the Mirage Tower",
    "inside the Flying Fortress",
    "on Mt. Gulg",
    "in the Citadel of Trials",
    "in the Western Keep",
    "in the Marsh Cave",
    "in the Ryukahn Desert"
];

// FF2
let locationsFF2 = [
    "in Altair",
    "in Fynn",
    "in Gatrea",
    "in Palamecia",
    "in Bafsk",
    "in Salamand",
    "in Poft",
    "in Paloom",
    "in Mysidia",
    "in the Rebel Camp",
    "inside the Semitt Falls",
    "inside the Snow Cavern",
    "inside Kashuan Keep",
    "inside the Coliseum",
    "inside the Dreadnought",
    "inside the Cyclone",
    "inside Castle Palamecia",
    "inside the Jade Passage",
    "inside Pandemonium",
    "at the Mysidian Tower",
    "at the Tropical Island",
    "on the Leviathan",
    "on the Desert of Palamecia"
];

// FF3
let locationsFF3 = [
    "in Ur",
    "in Kazus",
    "in Canaan",
    "in Tozus",
    "in Gysahl",
    "in Amur",
    "in Duster",
    "in Saronia",
    "in Replito",
    "in Falgabard",
    "inside the Altar Cave",
    "inside the Sealed Cave",
    "inside the Cave of Tides",
    "inside the Viking's Cove",
    "inside the Nepto Temple",
    "inside the Molten Cave",
    "inside the Goldor Manor",
    "inside the Tower of Owen",
    "inside the Temple of Time",
    "inside the Cave of Shadows",
    "on the Floating Continent",
    "inside the Ancient Ruins",
    "inside the Water Cave",
    "inside the Fire Crystal's Chamber",
    "inside the Earth Crystal's Chamber",
    "inside the Water Crystal's Chamber",
    "in the Village of the Ancients",
    "in the Dwarven Hollows",
    "in the Underwater Cave",
    "in the Saronia Catacombs",
    "inside the Crystal Tower",
    "inside Eureka",
    "inside the World of Darkness",
    "inside the Forbidden Land",
    "inside the Cave of the Ancients",
    "on the Invincible",
    "on the Enterprise",
    "on the Nautilus"
];

// FF4
let locationsFF4 = [
    "in Baron",
    "in Mist Village",
    "in Kaipo",
    "in Damcyan",
    "in Fabul",
    "in Mysidia",
    "in Troia",
    "in Agart",
    "in Eblan",
    "in the Dwarven Castle",
    "in Tomra",
    "in the Land of Summons",
    "in the Magnetic Cavern",
    "on Mount Hobs",
    "on Mount Ordeals",
    "on the Lunar Path",
    "on the Moon",
    "inside the Mist Cave",
    "inside the Waterway",
    "inside the Antlion Cave",
    "inside the Lodestone Cavern",
    "inside the Eblan Cave",
    "inside the Tower of Zot",
    "inside the Tower of Babil",
    "inside the Giant of Babil",
    "inside the Cave of Summons",
    "inside the Sealed Cave",
    "inside the Sylph Cave",
    "inside the Feymarch",
    "in the Underworld",
    "in the Lunar Subterrane",
    "inside the Crystal Palace",
    "inside the Lunar Core"
];

// FF5
let locationsFF5 = [
    "in Tule",
    "in Carwen",
    "in Walse",
    "in Karnak",
    "in Crescent",
    "in Jacole",
    "in Lix",
    "in Regole",
    "in Surgate",
    "in Castle Tycoon",
    "inside the Wind Shrine",
    "inside the Walse Tower",
    "inside the Fire Powered Ship",
    "inside the Library of the Ancients",
    "inside the Ronka Ruins",
    "inside the Ancient Library",
    "in the Ship Graveyard",
    "inside North Mountain",
    "in the Meteor Crater",
    "in Exdeath's Castle",
    "in Castle Bal",
    "in Quelb",
    "in Moore",
    "in Rugor",
    "in Ghido's Cave",
    "in the Moogle Village",
    "inside the Barrier Tower",
    "in the Forest of Moore",
    "on the Big Bridge",
    "inside the Gil Cave",
    "in Drakenvale",
    "inside the Island Shrine",
    "in Phantom Village",
    "in Mirage Village",
    "in the Interdimensional Rift",
    "inside the Pyramid of Moore",
    "inside the Great Sea Trench",
    "inside the Fork Tower",
    "inside the Void",
    "in the Cleft of Dimension"
];

// FF6
let locationsFF6 = [
    "in Narshe",
    "at Figaro Castle",
    "in South Figaro",
    "in Kohlingen",
    "in Jidoor",
    "in Zozo",
    "in Maranda",
    "in Nikeah",
    "in Albrook",
    "in Tzen",
    "in Mobliz",
    "in Vector",
    "in Thamasa",
    "inside the Magitek Research Facility",
    "inside the Imperial Palace",
    "in the Imperial Base",
    "at the Sealed Gate",
    "on the Veldt",
    "in the Serpent Trench",
    "in the Phantom Forest",
    "inside the Phantom Train",
    "inside Mt. Kolts",
    "inside the Returner's Hideout",
    "on the Floating Continent",
    "inside the Phoenix Cave",
    "inside the Ancient Castle",
    "inside the Cultist's Tower",
    "in the Opera House Basement",
    "in the Zone Eater",
    "in the Yeti's Cave",
    "in the Dragon's Neck Coliseum",
    "inside Kefka's Tower"
];

// FF7
let locationsFF7 = [
    "in Midgar",
    "in Sector 1",
    "in Sector 5",
    "in Sector 7",
    "at the Sector 7 Pillar",
    "in the Train Graveyard",
    "inside the Shinra Building",
    "in the Sector 5 Slums",
    "in Wall Market",
    "inside the Sewers",
    "in the Train Tunnels",
    "in Kalm",
    "at the Chocobo Ranch",
    "in the Mythril Mine",
    "at Fort Condor",
    "in Junon",
    "at the Underwater Reactor",
    "in Costa del Sol",
    "on Mt. Corel",
    "in North Corel",
    "at the Gold Saucer",
    "in Gongaga",
    "in Cosmo Canyon",
    "in Nibelheim",
    "on Mt. Nibel",
    "in Rocket Town",
    "in Wutai",
    "at the Wutai Pagoda",
    "at the Da Chao Statue",
    "in Mideel",
    "in Icicle Inn",
    "on the Great Glacier",
    "inside the Crystal Cave",
    "on Gaea's Cliff",
    "in the Temple of the Ancients",
    "in the Forgotten Capital",
    "inside the Northern Crater",
    "inside the Planet's Core",
    "inside the Cave of the Gi",
    "at the Gongaga Reactor",
    "underwater at the Sea Floor",
    "inside the Sunken Gelnika",
    "inside the Ancient Forest",
    "inside the Round Island Cave"
];

// FF8
let locationsFF8 = [
    "in Balamb Garden",
    "in Galbadia Garden",
    "in Trabia Garden",
    "in Balamb Town",
    "in Timber",
    "in Deling City",
    "in Dollet",
    "in Fishermans Horizon",
    "in Winhill",
    "in Shumi Village",
    "in Esthar City",
    "inside the Dollet Communications Tower",
    "inside the Galbadia Missile Base",
    "inside the D-District Prison",
    "inside the Lunatic Pandora Laboratory",
    "inside the Deep Sea Research Center",
    "in the Fire Cavern",
    "in the Timber Maniacs HQ",
    "on the Great Plains of Galbadia",
    "on the Kashkabald Desert",
    "on the Centra Ruins",
    "on the Island Closest to Heaven",
    "on the Island Closest to Hell",
    "inside the Lunar Gate",
    "inside the Lunar Base",
    "inside the Ragnarok",
    "inside Ultimecia's Castle",
    "inside the Time Compression Realm"
];

// FF9
let locationsFF9 = [
    "in Alexandria",
    "inside Alexandria Castle",
    "in the Theater District",
    "in the Industrial District",
    "in the Business District",
    "in Lindblum",
    "inside Lindblum Castle",
    "in Dali",
    "in Treno",
    "inside the Treno Auction House",
    "in Burmecia",
    "inside Cleyra",
    "in Gizamaluke's Grotto",
    "in Daguerreo",
    "inside Ipsen's Castle",
    "in Quan's Dwelling",
    "inside the Ice Cavern",
    "inside the Evil Forest",
    "at the South Gate",
    "at the North Gate",
    "in Fossil Roo",
    "in Conde Petie",
    "in the Black Mage Village",
    "in Madain Sari",
    "inside the Iifa Tree",
    "on the Mountain Path",
    "inside the Conde Petie Mountain Path",
    "in Oeilvert",
    "in Esto Gaza",
    "in Mount Gulug",
    "inside the Desert Palace",
    "in the Qu's Marsh",
    "in the Snowfield",
    "on the Shimmering Island",
    "in Bran Bal",
    "in Pandemonium",
    "on Terra",
    "inside Memoria",
    "inside the Crystal World"
];

// FF10
let locationsFF10 = [
    "in Dream Zanarkand",
    "in the Ruins of Zanarkand",
    "in Besaid Village",
    "inside the Besaid Temple",
    "on the Besaid Beach",
    "in Kilika Port",
    "inside the Kilika Temple",
    "in the Kilika Woods",
    "in Luca",
    "inside the Luca Stadium",
    "on the Mi'ihen Highroad",
    "inside the Mushroom Rock Road",
    "inside the Djose Temple",
    "on the Moonflow",
    "at the Moonflow North Wharf",
    "in Guadosalam",
    "inside the Farplane",
    "in the Macalania Woods",
    "inside the Macalania Temple",
    "at the Calm Lands",
    "inside the Cavern of the Stolen Fayth",
    "on Mount Gagazet",
    "inside the Gagazet Mountain Caves",
    "inside the Zanarkand Dome",
    "inside the Zanarkand Cloister of Trials",
    "inside the Dome of the Fayth",
    "inside Sin",
    "in the City of Dying Dreams",
    "inside the Final Aeon Chamber"
];

// FF12
let locationsFF12 = [
    "in Rabanastre",
    "inside the Royal Palace of Rabanastre",
    "in Lowtown",
    "on the Dalmasca Estersand",
    "on the Dalmasca Westersand",
    "inside the Garamsythe Waterway",
    "inside the Barheim Passage",
    "on the Ogir-Yensa Sandsea",
    "on the Nam-Yensa Sandsea",
    "inside the Tomb of Raithwall",
    "inside the Raithwall Cloister of Flame",
    "in Bhujerba",
    "inside the Lhusu Mines",
    "in Archades",
    "inside the Draklor Laboratory",
    "in Old Archades",
    "in the Giza Plains",
    "in Jahara",
    "inside the Ozmone Plain",
    "inside the Henne Mines",
    "on the Paramina Rift",
    "in Mt. Bur-Omisace",
    "inside the Stilshrine of Miriam",
    "in the Golmore Jungle",
    "in Eruyt Village",
    "in the Feywood",
    "inside Giruvegan",
    "inside the Great Crystal",
    "inside the Pharos at Ridorana",
    "inside the Ridorana Cataract",
    "inside the Sky Fortress Bahamut"
];
// FF13
let locationsFF13 = [
    "in Bodhum",
    "in the Hanging Edge",
    "inside the Pulse Vestige",
    "in Palumpolum",
    "in Nautilus",
    "in Eden",
    "inside the Vile Peaks",
    "inside the Gapra Whitewood",
    "inside the Sunleth Waterscape",
    "inside the Fifth Ark",
    "inside Taejin's Tower",
    "inside the Euride Gorge",
    "on the Archylte Steppe",
    "inside the Vallis Media",
    "inside the Mah'habara Subterra",
    "inside the Sulyya Springs",
    "inside the Yaschas Massif",
    "inside the Oerba Village",
    "inside Orphan's Cradle",
    "inside the Narthex",
    "inside the Prologue Pathways"
];

// FF15
let locationsFF15 = [
    "in Insomnia",
    "inside the Citadel",
    "in the Crown City Underground",
    "in Hammerhead",
    "in Galdin Quay",
    "inside the Keycatrich Trench",
    "inside the Balouve Mines",
    "inside the Daurell Caverns",
    "in Lestallum",
    "at the Disc of Cauthess",
    "inside the Fociaugh Hollow",
    "inside the Greyshire Glacial Grotto",
    "inside the Crestholm Channels",
    "in Old Lestallum",
    "in Cape Caem",
    "inside the Rock of Ravatogh",
    "inside the Myrlwood",
    "inside the Steyliff Grove",
    "inside the Vesperpool",
    "in Altissia",
    "in the Altissia Arena",
    "in the Palazzo Colliseum",
    "in Gralea",
    "inside Zegnautus Keep",
    "in the Aracheole Stronghold",
    "in the Formouth Garrison",
    "inside the Astral Realm",
    "in the Pitioss Ruins",
    "inside the World of Ruin Insomnia"
];

// FF16
let locationsFF16 = [
    "in Rosaria",
    "inside Phoenix Gate",
    "in Martha's Rest",
    "on the Greensheaves",
    "on Rhiannon's Ride",
    "in the Holy Capital Oriflamme",
    "inside the Imperial Palace",
    "on the Imperial Province of Rosaria Borderlands",
    "inside Drake's Head",
    "in Northreach",
    "in Waloed",
    "inside Drake's Spine",
    "in the Kingdom of Waloed Heartlands",
    "inside the Night's Dominion",
    "in the Dhalmekian Republic",
    "in the city of Boklad",
    "inside Drake's Fang",
    "on the Fields of Corava",
    "inside the Titan's Wake",
    "in the Dominion of Ash",
    "inside Drake's Tail",
    "inside the Reverie",
    "in the port of Kanver",
    "in Cid's Hideaway",
    "inside the Mothercrystal Ruins",
    "inside Origin",
    "inside the Interdimensional Rift",
    "inside the Heart of Origin"
];

// Universal
let endingsUniversal = [
    "for absolutely no reason.",
    "and nobody learned anything.",
    "while everyone watched.",
    "because chaos demanded it.",
    "which was honestly impressive.",
    "and it somehow worked out.",
    "and nobody will ever speak of it again.",
    "and chaos was achieved.",
    "and the world collectively shrugged.",
    "and destiny filed a complaint.",
    "and the gods pretended not to notice.",
    "and nobody questioned it afterward.",
    "and destiny quietly updated its paperwork.",
    "and the universe politely looked away.",
    "and the winds carried the rumor across continents.",
    "and the stars pretended not to notice.",
    "and the moment was immediately forgotten by everyone except one flan."
];

// Cute
let endingsCute = [
    "and the moogle gave a tiny cheer.",
    "and a chocobo immediately adopted them.",
    "and the cactuar posed proudly.",
    "and the moogle's pom-pom wiggled approvingly.",
    "and someone got a free potion out of it.",
    "and the carbuncle sparkled with joy.",
    "and a baby behemoth tried to imitate them.",
    "and the moogles added it to their gossip canon.",
    "and a chocobo chick chirped proudly.",
    "and the sylphs applauded politely.",
    "and a flan offered them a hug.",
    "and a moogle knitted them a tiny scarf.",
    "and the chocobo offered them a friendship feather.",
    "and a sylph tried to braid their hair.",
    "and the flan jiggled in celebration.",
    "and a carbuncle nuzzled their ankle.",
    "and the moogles held a tiny parade.",
    "and a chocobo chick tried to follow them home.",
    "and the sylphs declared them friend-shaped.",
    "and a baby malboro tried to give them a flower.",
    "and a tiny tonberry offered them a lantern glow of approval.",
    "and the faeries whispered compliments about their bravery."
];

// Silly
let endingsSilly = [
    "and then immediately tripped over a tonberry.",
    "and the behemoth just sighed.",
    "and the cactuar fled at Mach 3.",
    "and the moogle declared it canon.",
    "and the chocobo pretended not to see it.",
    "and a flan tried to high-five them.",
    "and the void applauded politely.",
    "and the airship crew unanimously voted 'not it'.",
    "and an aeon filed a complaint.",
    "and the crystals dimmed in embarrassment.",
    "and the cactuar union demanded hazard pay.",
    "and a moogle tried to sell tickets.",
    "and the chocobo wrote a strongly worded letter.",
    "and the behemoth rolled its eyes so hard it leveled up.",
    "and the tonberry took this very personally.",
    "and the behemoth filed a formal complaint.",
    "and the cactuar attempted a dramatic monologue.",
    "and the moogle tried to sell autographs.",
    "and the chocobo pretended to faint.",
    "and the flan demanded royalties.",
    "and the airship crew immediately blamed the intern.",
    "and the tonberry slowly nodded in approval.",
    "and the malboro tried to give unsolicited advice.",
    "and the bomb enemy exploded out of sheer excitement.",
    "and the goblins started a betting pool.",
    "and the cactuar attempted a victory dance and fell over."
];

// Scary / Ominous
let endingsScary = [
    "and the shadows whispered their name.",
    "and something ancient stirred.",
    "and the crystal dimmed in warning.",
    "and the air grew unnaturally still.",
    "and a cold voice said 'again'.",
    "and the void took interest.",
    "and fate marked the moment.",
    "and the stars blinked out for a heartbeat.",
    "and the ground whispered warnings.",
    "and the sky briefly forgot its color.",
    "and something watched from beyond the veil.",
    "and the moon stared back.",
    "and the wind whispered warnings in a forgotten tongue.",
    "and the shadows moved on their own.",
    "and something behind them smiled.",
    "and the crystal pulsed like a heartbeat.",
    "and the ground trembled in recognition.",
    "and the sky whispered their fate.",
    "and the void leaned closer.",
    "and the airship instruments all went silent at once.",
    "and the world seemed to hold its breath in fear.",
    "and the light flickered as if afraid.",
    "and the darkness answered."
];

// Serious / Dramatic
let endingsSerious = [
    "and history would remember it differently.",
    "and the world shifted ever so slightly.",
    "and a new legend quietly began.",
    "and the crystal acknowledged their resolve.",
    "and destiny took a new shape.",
    "and the echoes of it lingered for ages.",
    "and the world was never quite the same.",
    "and the winds carried the tale onward.",
    "and the stars bore silent witness.",
    "and the crystal's light shone a little brighter.",
    "and the world held its breath.",
    "and the crystal recognized their courage.",
    "and a new chapter quietly began.",
    "and destiny shifted course.",
    "and the echoes of their choice shaped the ages.",
    "and the world remembered their name.",
    "and the crystal's light grew steadier.",
    "and the winds carried their story far beyond the horizon.",
    "and the land itself seemed grateful.",
    "and the sky opened in quiet approval.",
    "and the future changed in that moment."
];

// Chaotic
let endingsChaotic = [
    "and the universe politely asked them to stop.",
    "and reality took 5d6 psychic damage.",
    "and the timeline folded itself in half.",
    "and the gods started taking notes.",
    "and three multiverses filed restraining orders.",
    "and Chaos personally high-fived them.",
    "and the laws of physics resigned.",
    "and the narrator refused to continue.",
    "and the world briefly became turn-based.",
    "and the sun took the day off.",
    "and the concept of gravity filed a complaint.",
    "and the universe rolled for initiative.",
    "and the timeline rage-quit.",
    "and the laws of magic unionized.",
    "and the concept of time took a vacation.",
    "and the narrator switched genres mid-sentence.",
    "and the world briefly became a rhythm game.",
    "and the sun filed a formal resignation.",
    "and the universe asked them to roll again with disadvantage.",
    "and the world glitched for dramatic effect.",
    "and the battle theme started playing for no reason.",
    "and the universe soft-locked.",
    "and the laws of causality took a coffee break."
];

// Greg / Gilgamesh
let endingsGreg = [
    "and Gilgamesh stole their weapon mid-sentence.",
    "and Greg declared it 'a worthy duel!'",
    "and Gilgamesh tripped into another dimension again.",
    "and Greg insisted this counted as a victory.",
    "and Gilgamesh added it to his collection of questionable tales.",
    "and Greg challenged the nearest tree to a duel.",
    "and Gilgamesh shouted 'ENKIDU, BEHOLD!'",
    "and Greg demanded a rematch nobody agreed to.",
    "and Gilgamesh claimed this was canon now.",
    "and Greg left through the wrong portal again.",
    "and Gilgamesh mistook them for Bartz again.",
    "and Greg tried to recruit them into his multiversal fan club.",
    "and Gilgamesh challenged the nearest boulder to a duel.",
    "and Greg tried to trade them the Excalipoor.",
    "and Gilgamesh claimed this counted as a side quest.",
    "and Greg vanished in a puff of misplaced confidence.",
    "and Gilgamesh insisted this was 'training'.",
    "and Greg attempted a dramatic exit but tripped into a portal.",
    "and Gilgamesh shouted 'THIS WILL MAKE A FINE TALE!'.",
    "and Greg tried to autograph their weapon.",
    "and Gilgamesh declared them his new rival without asking.",
    "and Greg attempted a heroic pose and pulled something."
];

// Villain
let endingsVillain = [
    "and Kefka laughed way too hard about it.",
    "and Sephiroth appeared for no discernible reason.",
    "and Ultimecia whispered 'time... compresses...'.",
    "and Ardyn applauded sarcastically.",
    "and Emet-Selch muttered 'remember us'.",
    "and Sin briefly surfaced, unimpressed.",
    "and Chaos approved of their nonsense.",
    "and Kefka demanded an encore.",
    "and Garland promised to knock them down again.",
    "and Kuja dramatically posed in the background.",
    "and Seymour pretended this was all part of his plan.",
    "and Vayne gave a speech nobody asked for.",
    "and Caius just stared knowingly.",
    "and Ultros tried to photobomb the moment.",
    "and Hojo took notes he absolutely should not have.",
    "and Kefka painted the sky a different color out of spite.",
    "and Sephiroth slowly walked away without explaining anything.",
    "and Ultimecia tried to compress the moment for dramatic effect.",
    "and Ardyn narrated the entire thing like a stage play.",
    "and Emet-Selch sighed 'you really are hopeless'.",
    "and Kuja dramatically adjusted his hair.",
    "and Chaos muttered that this was mildly impressive.",
    "and the Emperor judged their technique from the afterlife.",
    "and the Cloud of Darkness approved with a quiet, ominous hum.",
    "and Golbez watched from afar, conflicted as always.",
    "and Zeromus whispered that hatred grows stronger today.",
    "and Exdeath applauded the return of pure, unfiltered nonsense.",
    "and Jenova twitched approvingly.",
    "and Rufus Shinra talked about fear.",
    "and Seifer claimed this counted as a victory for the Disciplinary Committee.",
    "and Adel glared with cosmic disappointment.",
    "and Necron briefly manifested, then decided it wasn't worth it.",
    "and Yunalesca approved from her unsettling throne.",
    "and Doctor Cid applauded the chaos like a proud parent.",
    "and Venat observed silently, calculating outcomes.",
    "and Barthandelus monologued for several minutes about this moment.",
    "and Ifrit glared with fiery disdain.",
    "and Barnabas smiled in unsettling approval.",
    "and Ultima whispered that this was 'inevitable.'."
];

// FF-Themed Universal
let endingsFFThemed = [
    "and the crystal chose violence.",
    "and the summon refused to comment.",
    "and the airship crew pretended it was normal.",
    "and the ancient texts warned about this.",
    "and the l'cie brand pulsed ominously.",
    "and the chocobo sensed EXP potential.",
    "and the crystal hummed in approval.",
    "and the void whispered 'not bad'.",
    "and the airship autopilot refused to engage afterward."
];

// Grouping arrays into objects to they can be easily accessed.
const characters = {
    ff1: charactersFF1,
    ff2: charactersFF2,
    ff3: charactersFF3,
    ff4: charactersFF4,
    ff5: charactersFF5,
    ff6: charactersFF6,
    ff7: charactersFF7,
    ff8: charactersFF8,
    ff9: charactersFF9,
    ff10: charactersFF10,
    ff12: charactersFF12,
    ff13: charactersFF13,
    ff15: charactersFF15,
    ff16: charactersFF16
};

const locations = {
    ff1: locationsFF1,
    ff2: locationsFF2,
    ff3: locationsFF3,
    ff4: locationsFF4,
    ff5: locationsFF5,
    ff6: locationsFF6,
    ff7: locationsFF7,
    ff8: locationsFF8,
    ff9: locationsFF9,
    ff10: locationsFF10,
    ff12: locationsFF12,
    ff13: locationsFF13,
    ff15: locationsFF15,
    ff16: locationsFF16
};

const endings = {
    universal: endingsUniversal,
    cute: endingsCute,
    silly: endingsSilly,
    scary: endingsScary,
    serious: endingsSerious,
    chaotic: endingsChaotic,
    gilgamesh: endingsGreg,
    villain: endingsVillain,
    ffthemed: endingsFFThemed
};

//mega arrays to use for random buttons, made with the ... spread operator.
const allCharacters = [
    ...charactersFF1,
    ...charactersFF2,
    ...charactersFF3,
    ...charactersFF4,
    ...charactersFF5,
    ...charactersFF6,
    ...charactersFF7,
    ...charactersFF8,
    ...charactersFF9,
    ...charactersFF10,
    ...charactersFF12,
    ...charactersFF13,
    ...charactersFF15,
    ...charactersFF16
];

const allActions = [
    ...actionsBasic,
    ...actionsChaotic,
    ...actionsBattle,
    ...actionsArcane,
    ...actionsAdventure,
    ...actionsSystem
];

const allThings = [
    ...thingsMoogle,
    ...thingsChocobo,
    ...thingsCactuar,
    ...thingsTonberry,
    ...thingsMonsters,
    ...thingsOddities,
    ...thingsItems
];

const allLocations = [
    ...locationsFF1,
    ...locationsFF2,
    ...locationsFF3,
    ...locationsFF4,
    ...locationsFF5,
    ...locationsFF6,
    ...locationsFF7,
    ...locationsFF8,
    ...locationsFF9,
    ...locationsFF10,
    ...locationsFF12,
    ...locationsFF13,
    ...locationsFF15,
    ...locationsFF16
];

const allEndings = [
    ...endingsUniversal,
    ...endingsCute,
    ...endingsSilly,
    ...endingsScary,
    ...endingsSerious,
    ...endingsChaotic,
    ...endingsGreg,
    ...endingsVillain,
    ...endingsFFThemed
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

// Random button selectors
const randomCharBtn = document.querySelector("#randomCharBtn");
const randomActionBtn = document.querySelector("#randomActionBtn");
const randomThingBtn = document.querySelector("#randomThingBtn");
const randomLocationBtn = document.querySelector("#randomLocationBtn");
const randomEndingBtn = document.querySelector("#randomEndingBtn");

// Utility: pick a random item from any array
function pickRandom(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

// Utility: update the game logo based on selected game
function updateGameLogo(game) {
    const logo = document.getElementById("gameLogo");
    logo.src = `img/${game}.png`; // expects img/ff7.png etc.
}

// Character Subsection (Event Delegation)
document.getElementById("charSubButtons").addEventListener("click", (event) => {
    if (event.target.tagName !== "BUTTON") return;

    const game = event.target.dataset.game; // "ff7"
    charOut.textContent = pickRandom(characters[game]);
    updateGameLogo(game);
});

// Location Subsection
document.getElementById("locationSubButtons").addEventListener("click", (event) => {
    if (event.target.tagName !== "BUTTON") return;

    const game = event.target.dataset.game;
    locationOut.textContent = pickRandom(locations[game]);
    updateGameLogo(game);
});

// Ending Subsection
document.getElementById("endingSubButtons").addEventListener("click", (event) => {
    if (event.target.tagName !== "BUTTON") return;

    const type = event.target.dataset.game;
    endingOut.textContent = pickRandom(endings[type]);
});


// Cycle through the FF1 characters by default
charBtn.addEventListener("click", function() {
    charIndex++;
    if (charIndex >= charactersFF1.length) {
        charIndex = 0; // wrap back to start
    }
    charOut.textContent = charactersFF1[charIndex];
});

// Cycle through basic actions
actionBtn.addEventListener("click", function() {
    actionIndex++;
    if (actionIndex >= actionsBasic.length) {
        actionIndex = 0;
    }
    actionOut.textContent = actionsBasic[actionIndex];
});

// Cycle through the moogle things by default
thingBtn.addEventListener("click", function() {
    thingIndex++;
    if (thingIndex >= thingsMoogle.length) {
        thingIndex = 0;
    }
    thingOut.textContent = thingsMoogle[thingIndex];
});

// Cycle through FF1 locations by default
locationBtn.addEventListener("click", function() {
    locationIndex++;
    if (locationIndex >= locationsFF1.length) {
        locationIndex = 0;
    }
    locationOut.textContent = locationsFF1[locationIndex];
});

// Cycle through universal endings by default
endingBtn.addEventListener("click", function() {
    endingIndex++;
    if (endingIndex >= endingsUniversal.length) {
        endingIndex = 0;
    }
    endingOut.textContent = endingsUniversal[endingIndex];
});

// Pick a random item from each array and show the story
randomBtn.addEventListener("click", function() {
    // Generate random indexes for each array
    charOut.textContent = pickRandom(allCharacters);
    actionOut.textContent = pickRandom(allActions);
    thingOut.textContent = pickRandom(allThings);
    locationOut.textContent = pickRandom(allLocations)
    endingOut.textContent = pickRandom(allEndings);

    storyOutput.textContent =
        `${charOut.textContent} ${actionOut.textContent} ${thingOut.textContent} ${locationOut.textContent} ${endingOut.textContent}`;
});

// Random Character
randomCharBtn.addEventListener("click", () => {
    charOut.textContent = pickRandom(allCharacters);
});

// Random Action
randomActionBtn.addEventListener("click", () => {
    actionOut.textContent = pickRandom(allActions);
});

// Random Thing
randomThingBtn.addEventListener("click", () => {
    thingOut.textContent = pickRandom(allThings);
});

// Random Location
randomLocationBtn.addEventListener("click", () => {
    locationOut.textContent = pickRandom(allLocations);
});

// Random Ending
randomEndingBtn.addEventListener("click", () => {
    endingOut.textContent = pickRandom(allEndings);
});


// Build the final story using template literals
// This uses whatever options the user has selected
showStoryBtn.addEventListener("click", function() {
    storyOutput.textContent = 
    `${charOut.textContent} ${actionOut.textContent} ${thingOut.textContent} ${locationOut.textContent} ${endingOut.textContent}`;
});