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

// Create Human Object
function Human( name, weight, feet, inches, diet ) {
  this.name = name;
  this.weight = weight;
  this.height = feet * 12 + inches;
  this.diet = diet;
}
// Use IIFE to get human data from form
function getDinosFromJSON(callback) {
  var xhr = new XMLHttpRequest();

  xhr.onreadystatechange = (e) => {
    if (xhr.readyState !== 4) {
      return;
    }

    if (xhr.status === 200) {
      //console.log('SUCCESS', xhr.responseText);
      let dinos = JSON.parse(xhr.responseText);
      callback(dinos);
    } else {
      console.warn('request_error');
    }
  };
  xhr.open('GET', 'dino.json');
  xhr.send();
}
function randomizeDinos(dinos) {
  console.log('data sent to randomize',dinos);
  var i = 0, j = 0, temp = null
  for (i = dinos.length - 1; i > 0; i -= 1) {
    j = Math.floor(Math.random() * (i + 1))
    temp = dinos[i]
    dinos[i] = dinos[j]
    dinos[j] = temp
  }
  console.log('returning these dinos',dinos);
  return dinos;
}
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
  const form = document.getElementById('dino-compare');
  let data = new FormData(form);
  let human = Object.fromEntries(new FormData(form));
  if (!(human.name)|| !(human.weight) || !(human.feet) || !(human.diet)) {
    return false;
  }
  let you = new Human( human.name, parseInt(human.weight), parseInt(human.feet), parseInt(human.inches), human.diet );
  // Create Dino Objects
  getDinosFromJSON(randomizeDinos);
  debugger;
  console.log(dinos);
});
