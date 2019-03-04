//Arrays with ES6 / ES2015
const boxes = document.querySelectorAll('.box');


//ES5
//turning the list into an array
var boxesArrayES5 = Array.prototype.slice.call(boxes);
//turns all the boxes to blue
boxesArrayES5.forEach(function(current, index, array){
  current.style.backgroundColor = 'dodgerblue';
});


//ES6
//Example
// we can create an array using the Array.from
var boxesArrayES6 = Array.from(boxes);
boxesArrayES6.forEach(current => current.style.backgroundColor = 'lightblue');

//A issue with looping in ES5 is that we are not able to use the break or continue statement in a:
// map / forEach loops, so we would use a regular old for loop, which forces us to write alot of code for a simple loop


//ES5
// Only change the text of the first and 3rd box
var boxesArray2ES5 = Array.prototype.slice.call(boxes);
for (var i = 0; i < boxesArray2ES5.length; i++) {
    if (boxesArray2ES5[i].className === 'box blue') {
      //continue will skip the iteration that we chose
      //break will break the loop and don't continue - so only the first one would change
      continue;
    }
    //this will only change the first and third boxes
    boxesArray2ES5[i].textContent = "I changed to blue!";
}


//ES6
//using the for in loop
//what's being said here is..."this is a element of the boxesArrayES6" on each iteration
//We do not need to say [i] as we just need current
for (const current of boxesArrayES6) {
  if (current.className.includes('blue')) {
    continue;
  }
  current.textContent = "I changed to blue!";
}


//ES5
//Here we are going to find the one person that is of age in an array in ES5

var ages = [12, 17, 8, 21, 14, 11];

var full = ages.map(function(current) {
  return current >= 18; 
});
console.log(full);
console.log(full.indexOf(true));
console.log(ages[full.indexOf(true)]);


//ES6
//Usefull array methods that allow us to find stuff in an array
//Here we are going to find the one person that is of age in an array using ES6
//FindIndex Method
const personOfInterest = ages.findIndex((current, index, array) => current >= 18);
//this will show the index
console.log(personOfInterest);

//find Method
//this will show the actual value
console.log(ages.find(current => current >= 18));