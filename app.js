const dinos = [
    {
        "species": "Triceratops",
        "weight": 13000,
        "height": 114,
        "diet": "herbivore",
        "where": "North America",
        "when": "Late Cretaceous",
        "fact": "First discovered in 1889 by Othniel Charles Marsh"
    },
    {
        "species": "Tyrannosaurus Rex",
        "weight": 11905,
        "height": 144,
        "diet": "carnivore",
        "where": "North America",
        "when": "Late Cretaceous",
        "fact": "The largest known skull measures in at 5 feet long."
    },
    {
        "species": "Anklyosaurus",
        "weight": 10500,
        "height": 55,
        "diet": "herbivore",
        "where": "North America",
        "when": "Late Cretaceous",
        "fact": "Anklyosaurus survived for approximately 135 million years."
    },
    {
        "species": "Brachiosaurus",
        "weight": 70000,
        "height": "372",
        "diet": "herbivore",
        "where": "North America",
        "when": "Late Jurasic",
        "fact": "An asteroid was named 9954 Brachiosaurus in 1991."
    },
    {
        "species": "Stegosaurus",
        "weight": 11600,
        "height": 79,
        "diet": "herbivore",
        "where": "North America, Europe, Asia",
        "when": "Late Jurasic to Early Cretaceous",
        "fact": "The Stegosaurus had between 17 and 22 seperate places and flat spines."
    },
    {
        "species": "Elasmosaurus",
        "weight": 16000,
        "height": 59,
        "diet": "carnivore",
        "where": "North America",
        "when": "Late Cretaceous",
        "fact": "Elasmosaurus was a marine reptile first discovered in Kansas."
    },
    {
        "species": "Pteranodon",
        "weight": 44,
        "height": 20,
        "diet": "carnivore",
        "where": "North America",
        "when": "Late Cretaceous",
        "fact": "Actually a flying reptile, the Pteranodon is not a dinosaur."
    },
    {
        "species": "Pigeon",
        "weight": 0.5,
        "height": 9,
        "diet": "herbivore",
        "where": "World Wide",
        "when": "Holocene",
        "fact": "All birds are living dinosaurs."
    }
];

const refreshBtn = document.querySelector('.refresh');

const submit = document.querySelector('.showGrid');

/**
* @description Randomize dinos using Fisher-Yates Shuffle
* @param {array} dinos array from dino.json
* @returns {array} randomized array of dino objects
*/
const randomizeDinos = dinos => {
  for (i = dinos.length - 1; i > 0; i -= 1) {
    j = Math.floor(Math.random() * (i + 1));
    temp = dinos[i];
    dinos[i] = dinos[j];
    dinos[j] = temp;
  }
  return dinos;
}
// Create Dino Constructor
/**
* @description Represents a dinosaur
* @constructor
* @param {object} dino - one of dinos passed from dino.json
*/
function Dino( dino) {
  this.species = dino.species;
  this.weight = dino.weight;
  this.height = dino.height;
  this.diet = dino.diet;
  this.where = dino.where;
  this.when = dino.when;
  this.fact = dino.fact;
}
// Create Human Object
/**
* @description Represents a human
* @constructor
*/
function Human () {
    this.name = '';
    this.weight = 0;
    this.height = 0;
    this.diet = '';
}

// Use IIFE to get human data from form
const createHuman = you => {
  (function(you) {
    const form = document.getElementById('dino-compare');
    const data = new FormData(form);
    const entries = Object.fromEntries(new FormData(form));
    //validation
    if (!(entries.name)|| !(entries.weight) || !(entries.feet) || !(entries.diet)) {
      return false;
    }
    you.name = entries.name;
    you.weight = parseInt(entries.weight);
    you.height = parseInt(entries.feet) * 12 + parseInt(entries.inches);
    you.diet = entries.diet;
  })(you);
}

/**
* @description Determines info to be shown
* @param {object} dino
* @param {object} human
* @returns {string} return from compareDisplay
*/

const cardInfo = ( dino, human ) => {
  const pigeonFact = 'All birds are dinosaurs.';
  const compareWeight = function () {
    const comparison = dino.weight / human.weight;
    if ( comparison > 1 ) {
      return `This dino is ${comparison.toFixed(2)} times heavier than ${human.name}`;
    } else {
      return `${human.name} is ${comparison.toFixed(2)} times heavier than this Dino.`;
    }
  };
  const compareHeight = function() {
    const comparison = dino.height / human.height;
    if ( comparison > 1 ) {
      return `This dino is ${comparison.toFixed(2)} times taller than ${human.name}`;
    } else {
      return `${human.name} is ${comparison.toFixed(2)} times taller than this Dino.`;
    }
  };
  const compareDiet = function() {
    if ( human.diet === dino.diet ) {
      return `You have the same diet as the ${dino.species}`;
    }
    return `You eat diferently than the ${dino.species}, he is a ${dino.diet}`;
  };
  const compareDisplay = function() {
      if (dino.species === 'Pigeon') {
        return pigeonFact;
      }
      const compareValue = Math.floor(Math.random() * 5);
      switch (compareValue) {
        case 0:
          compare = compareWeight();
          break;
        case 1:
          compare = compareHeight();
          break;
        case 2:
          compare = compareDiet();
          break;
        case 3:
          compare = `This species was found in ${dino.where}`;
          break;
        case 4:
          compare = `This species lived in the ${dino.when} era`;
        case 5:
          compare = dino.fact;
        default:
          compare = dino.fact;
      }
      return compare;
    }
    return {
      compareDisplay: compareDisplay()
  };
}

// Generate Tiles for each Dino in Array
/**
* @description generate tiles for infographic
* @param {object} human
* @param {array} dinos
*/
const generateTiles = ( human, dinos ) => {
  for (let x = 0; x<=7; x++) {
    const currentDino = dinos[x];
    const thisDino = new Dino( currentDino );

    //create the child div
    const newTile = document.createElement('div');
    newTile.classList.add('grid-item');
    //add the image
    const img = document.createElement('img');
    img.setAttribute('src',`images/${thisDino.species}.png`);
    img.setAttribute('alt',thisDino.species);
    // create the outer p
    const outer = document.createElement('p');
    outer.classList.add('outer');
    // create the inner p content
    const newContent = document.createElement('p');
    newContent.classList.add('species');
    const content = document.createTextNode(thisDino.species);
    newContent.appendChild(content);
    //compare
    const compareContent = document.createElement('p');
    compareContent.classList.add('compare');
    const cardText = cardInfo( thisDino, human);
    const compare = document.createTextNode(cardText.compareDisplay);
    compareContent.appendChild(compare);
    // a div to hold all facts to show on hover
    const allFacts = getAllFacts(thisDino);

    newTile.appendChild(img);
    outer.appendChild(newContent);
    outer.appendChild(compareContent);
    outer.appendChild(allFacts);
    newTile.appendChild(outer);
    if ( x === 4 ) {
      //put human in the middle
      const humanTile = document.createElement('div');
      humanTile.classList.add('grid-item');
      // create outer p
      const outer = document.createElement('p');
      outer.classList.add('outer');
      // add inner p content
      const newContent = document.createElement('p');
      newContent.classList.add('species');
      const content = document.createTextNode(human.name);
      newContent.appendChild(content);
      // a div to hold all facts to show on hover
      const allFacts = getAllFacts( human );
      outer.appendChild(newContent);
      outer.appendChild(allFacts);
      humanTile.appendChild(outer);
      addTile(humanTile);
    }
    addTile(newTile);
  }
  refreshBtn.style.display = 'block';
}
// Add tiles to DOM
/**
* @description append tile to grid
* @param {object} tile
*/
const addTile = ( tile ) => {
  const grid = document.getElementById('grid');
  grid.appendChild(tile);
}
// Get All Facts
/**
* @description get all facts to show on hover
* @param {object} object
*/
const getAllFacts = ( object ) => {
  // a div to hold all facts to show on hover
  const allFacts = document.createElement('p');
  allFacts.classList.add('allFacts');
  const facts = Object.keys(object);
  for (const fact of facts) {
    let thisFact = object[fact];
    switch (fact) {
      case 'weight':
        thisFact = thisFact.toLocaleString()+' lbs.';
        break;
      case 'height':
        thisFact = thisFact.toLocaleString()+' in.';
        break;
    }
    if ( fact === 'species' || fact === 'name' ) {
      continue;
    }
    const factContent = document.createElement('p');
    factContent.classList.add('factoid');
    const thisText = document.createTextNode(`${fact}: ${thisFact}`);
    factContent.appendChild(thisText);
    allFacts.appendChild(factContent)
  }
  return allFacts;
}
// Remove form from screen
/**
* @description hide the form
*/
const removeForm = () => {
  document.getElementById('dino-compare').style.display = 'none';
}

// On button click, prepare and display infographic
submit.addEventListener('click', event => {
  event.preventDefault();
  const you = new Human();
  createHuman(you);
  const randomDinos = randomizeDinos(dinos);
  generateTiles(you,randomDinos);
  removeForm();
});

// click to refresh page
refreshBtn.addEventListener('click', event => {
  location.reload();
})
