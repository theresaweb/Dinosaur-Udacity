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
function Dino( species, weight, height, diet, where, when, fact ) {
  this.species = species;
  this.weight = weight;
  this.height = height;
  this.diet = diet;
  this.where = where;
  this.when = when;
  this.fact = fact;
}

// // Create Human Object
// function Human( name, weight, feet, inches, diet ) {
//   this.name = name;
//   this.weight = weight;
//   this.height = feet * 12 + inches;
//   this.diet = diet;
// }
// Use IIFE to get human data from form
function Human ( name, weight, feet, inches, diet ) {
    this.name = name;
    this.weight = weight;
    this.height = feet * 12 + inches;
    this.diet = diet;
};


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


// Generate Tiles for each Dino in Array

// Add tiles to DOM

// Remove form from screen


// On button click, prepare and display infographic
const submit = document.getElementById('btn');

submit.addEventListener('click', event => {
  event.preventDefault();
  let you = new Human();
  createHuman(you);
  console.log('you',you);
  let randomDinos = randomizeDinos(dinos);
  console.log('randos',randomDinos);
});
