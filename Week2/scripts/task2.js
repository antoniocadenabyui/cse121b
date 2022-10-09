/* Lesson 2 */

/* VARIABLES */

// Step 1: declare and instantiate a variable to hold your name
const fullName = `Antonio Cadena`;

// Step 2: place the value of the name variable into the HTML file (hint: document.querySelector())
document.querySelector(`#name`).innerHTML = fullName;

// Step 3: declare and instantiate a variable to hold the current year
const year = new Date().getFullYear();

// Step 4: place the value of the current year variable into the HTML file
document.querySelector(`#year`).innerHTML = year;

// Step 5: declare and instantiate a variable to hold the name of your picture
const photo = 'images/photo.jpg';

// Step 6: copy your image into the "images" folder

// Step 7: place the value of the picture variable into the HTML file (hint: document.querySelector().setAttribute())
document.querySelector(`img`).setAttribute('src', photo);


/* ARRAYS */

// Step 1: declare and instantiate an array variable to hold your favorite foods
let favFood = ['Burritos',' Tacos', ` Roast`, ' Pho', ' Yogurt'];

// Step 2: place the values of the favorite foods variable into the HTML file
document.querySelector(`#food`).innerHTML = favFood;

// Step 3: declare and instantiate a variable to hold another favorite food
let addFood = ' Mango'

// Step 4: add the variable holding another favorite food to the favorite food array
favFood.push(addFood);

// Step 5: repeat Step 2
document.querySelector(`#food`).innerHTML = favFood;

// Step 6: remove the first element in the favorite foods array
favFood.shift();

// Step 7: repeat Step 2
document.querySelector(`#food`).innerHTML = favFood;

// Step 8: remove the last element in the favorite foods array
favFood.pop();

// Step 7: repeat Step 2
document.querySelector(`#food`).innerHTML = favFood;


