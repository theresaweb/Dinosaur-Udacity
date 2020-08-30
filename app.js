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

function randomizeDinos(dinos) {
  for (i = dinos.length - 1; i > 0; i -= 1) {
    j = Math.floor(Math.random() * (i + 1))
    temp = dinos[i]
    dinos[i] = dinos[j]
    dinos[j] = temp
  }
  return dinos;
}
// Create Dino Constructor
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
function Human ( name, weight, feet, inches, diet ) {
    this.name = name;
    this.weight = weight;
    this.height = feet * 12 + inches;
    this.diet = diet;
};

// Use IIFE to get human data from form
const createHuman = function( you ) {
  (function(you) {
    const form = document.getElementById('dino-compare');
    let data = new FormData(form);
    let entries = Object.fromEntries(new FormData(form));
    //validation
    if (!(entries.name)|| !(entries.weight) || !(entries.feet) || !(entries.diet)) {
      return false;
    }
    you.name = entries.name;
    you.weight = parseInt(entries.weight);
    you.height = parseInt(entries.feet) * 12 + parseInt(entries.inches);
    you.diet = entries.diet;
  })(you);
};

// Create Dino Compare Method 1
// NOTE: Weight in JSON file is in lbs, height in inches.
// Create Dino Compare Method 2
// NOTE: Weight in JSON file is in lbs, height in inches.
// Create Dino Compare Method 3
// NOTE: Weight in JSON file is in lbs, height in inches.
function cardInfo( dino, human ) {
  let pigeonFact = 'All birds are dinosaurs.';
  let compareWeight = function () {
    let comparison = dino.weight / human.weight;
    return `This dino is ${comparison.toFixed(2)} times heavier than ${human.name}`;
  };
  let compareHeight = function() {
    let comparison = human.height / dino.height;
    return `This dino is ${comparison.toFixed(2)} times taller than ${human.name}`;
  };
  let compareDiet = function() {
    if ( human.diet === dino.diet ) {
      return `You have the same diet as the ${dino.species}`;
    }
    return `You eat diferently than the ${dino.species}, he is a ${dino.diet}`;
  };
  let compareDisplay = function() {
      if (dino.species === 'Pigeon') {
        return pigeonFact;
      }
      let compareValue = Math.floor(Math.random() * 5);
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
function generateTiles(human,dinos) {
  for (let x = 0; x<=7; x++) {
    let thisDino = new Dino( dinos[x] );

    //create the child div
    let newTile = document.createElement("div");
    newTile.classList.add('grid-item');
    //add the image
    let img = document.createElement('img');
    img.setAttribute('src',`images/${thisDino.species}.png`);
    // create the outer p
    let outer = document.createElement("p");
    outer.classList.add('outer');
    // create the inner p content
    let newContent = document.createElement("p");
    newContent.classList.add('species');
    let content = document.createTextNode(thisDino.species);
    newContent.appendChild(content);
    //compare
    let compareContent = document.createElement("p");
    compareContent.classList.add('compare');
    let cardText = cardInfo( dinos[x], human);

    let compare = document.createTextNode(cardText.compareDisplay);

    compareContent.appendChild(compare);
    newTile.appendChild(img);
    outer.appendChild(newContent);
    outer.appendChild(compareContent);
    newTile.appendChild(outer);
    if ( x === 4 ) {
      //put human in the middle
      let humanTile = document.createElement("div");
      humanTile.classList.add('grid-item');
      // create outer p
      let outer = document.createElement("p");
      outer.classList.add('outer');
      // add inner p content
      let newContent = document.createElement("p");
      newContent.classList.add('species');
      let content = document.createTextNode(human.name);
      newContent.appendChild(content);
      outer.appendChild(newContent);
      humanTile.appendChild(outer);
      addTile(humanTile);
    }
    addTile(newTile);
  }
  refreshBtn.style.display = 'block';
}
// Add tiles to DOM
function addTile(tile) {
  const grid = document.getElementById('grid');
  grid.appendChild(tile);
}
// Remove form from screen
function removeForm() {
  document.getElementById('dino-compare').style.display = 'none';
}

// On button click, prepare and display infographic

submit.addEventListener('click', event => {
  event.preventDefault();
  let you = new Human();
  createHuman(you);
  let randomDinos = randomizeDinos(dinos);
  generateTiles(you,randomDinos);
  removeForm();
});

refreshBtn.addEventListener('click', event => {
  location.reload();
})
