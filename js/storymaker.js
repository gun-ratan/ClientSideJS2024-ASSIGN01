// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Constants for main button query selectors
const noun1Button = document.getElementById('noun1');
const verbButton = document.getElementById('verb');
const adjectiveButton = document.getElementById('adjective');
const noun2Button = document.getElementById('noun2');
const prepositionButton = document.getElementById('preposition');
const settingButton = document.getElementById('setting');

// Constants for p tag to display query selectors
const choosenNoun1 = document.getElementById('choosenNoun1');
const choosenVerb = document.getElementById('choosenVerb');
const choosenAdjective = document.getElementById('choosenAdjective');
const choosenNoun2 = document.getElementById('choosenNoun2');
const choosenPreposition = document.getElementById('choosenPreposition');
const choosenSetting = document.getElementById('choosenSetting');

// Constants for final buttons and p tags
const generateBtn = document.getElementById('generateBtn');
const resetBtn = document.getElementById('resetBtn');
const playbackBtn = document.getElementById('playback');
const randomBtn = document.getElementById('random');

// Variables for pre-defined arrays
const nouns = ['dog', 'cat', 'bird', 'tree', 'mountain'];
const verbs = ['runs', 'jumps', 'flies', 'sings', 'swims'];
const adjectives = ['happy', 'sad', 'playful', 'tall', 'small'];
const places = [' the park', ' the beach', ' the forest', ' the city', ' the mountaintop'];
const prepositions = ['on', 'in', 'at', 'by', 'with', 'for', 'to', 'of', 'from', 'about', 'between', 'among', 'through', 'under', 'above', 'below', 'beside', 'along', 'across', 'around', 'against', 'toward', 'before', 'after', 'during', 'without', 'within', 'throughout', 'except', 'since', 'until', 'upon', 'behind', 'beneath', 'inside', 'outside', 'onto', 'underneath', 'amongst', 'amid', 'unto'];


// Variables for count to grab array elements
let noun1Count = 0;
let verbCount = 0;
let adjectiveCount = 0;
let noun2Count = 0;
let prepositionCount = 0;
let settingCount = 0;

const studentIdParagraph = document.getElementById('studentId');
const studentId = "200551703"; 

studentIdParagraph.textContent = `Student ID: ${studentId}`;
/* Functions
-------------------------------------------------- */
function chooseWord(wordType, count, displayElement) {
    const word = wordType[count % wordType.length];
    displayElement.textContent = `Chosen ${capitalize(displayElement.id)}: ${word}`;
    return word;
}

function noun1_on_click() {
    console.log('Noun 1 button clicked');
    chooseWord.noun1 = chooseWord(nouns, noun1Count++, choosenNoun1);
}


function verb_on_click() {
    chooseWord.verb = chooseWord(verbs, verbCount++, choosenVerb);
}

function adjective_on_click() {
    chooseWord.adjective = chooseWord(adjectives, adjectiveCount++, choosenAdjective);
}

function noun2_on_click() {
    chooseWord.noun2 = chooseWord(nouns, noun2Count++, choosenNoun2);
}


function preposition_on_click() {
    chooseWord.preposition = chooseWord(prepositions, prepositionCount++, choosenPreposition);
}

function setting_on_click() {
    chooseWord.setting = chooseWord(places, settingCount++, choosenSetting);
}


function playback_on_click() {
    const storyContainer = document.getElementById('story');
    storyContainer.textContent = `${chooseWord.noun1} ${chooseWord.verb} ${chooseWord.adjective} ${chooseWord.noun2} ${chooseWord.preposition} ${chooseWord.setting}.`;
}
// grabbing random element from arrays, concatenate and display
function random_on_click() {
    resetStory();
    chooseWord.noun1 = getRandomElement(nouns);
    chooseWord.verb = getRandomElement(verbs);
    chooseWord.adjective = getRandomElement(adjectives);
    chooseWord.noun2 = getRandomElement(nouns);
    chooseWord.preposition = getRandomElement(prepositions);
    chooseWord.setting = getRandomElement(places);

    generateStory();
}

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function getRandomElement(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}


function resetStory() {
    // Reset counters
    noun1Count = 0;
    verbCount = 0;
    adjectiveCount = 0;
    noun2Count = 0;
    prepositionCount = 0;
    settingCount = 0;

    // Clear displayed words
    document.getElementById('story').textContent = '';
}



/* Event Listeners
-------------------------------------------------- */
noun1Button.addEventListener('click', noun1_on_click);
verbButton.addEventListener('click', verb_on_click);
adjectiveButton.addEventListener('click', adjective_on_click);
noun2Button.addEventListener('click', noun2_on_click);
prepositionButton.addEventListener('click', preposition_on_click);
settingButton.addEventListener('click', setting_on_click);
randomBtnBtn.addEventListener('click', playback_on_click);
resetBtn.addEventListener('click', resetStory);
playbackBtn.addEventListener('click', playback_on_click);
randomBtn.addEventListener('click', random_on_click);
