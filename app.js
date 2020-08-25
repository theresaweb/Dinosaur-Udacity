
    // Create Dino Constructor
    function Dino( weight, height, diet, where, when, fact ) {
        this.weight = weight;
        this.height = height;
        this.diet = diet;
        this.where = where;
        this.when = when;
        this.fact = fact;
    }

    // Create Dino Objects
    const dinos = getDinos(data => console.log("The data is:", data));

    // Create Human Object
    function Human( weight, height, diet, where, when, fact ) {
        this.weight = weight;
        this.height = height;
        this.diet = diet;
        this.where = where;
        this.when = when;
        this.fact = fact;
    }
    // Use IIFE to get human data from form
    function getDinos(callback) {
      var xhr = new XMLHttpRequest();

      xhr.onreadystatechange = (e) => {
        if (xhr.readyState !== 4) {
          return;
        }

        if (xhr.status === 200) {
          console.log('SUCCESS', xhr.responseText);
          callback(JSON.parse(xhr.responseText));
        } else {
          console.warn('request_error');
        }
      };

      xhr.open('GET', 'dino.json');
      xhr.send();
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
