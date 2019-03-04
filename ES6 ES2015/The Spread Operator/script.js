//The Spread Operator

//ES5
//EXAMPLE
function addFourAges (a, b,c ,d) {
  return a + b + c + d;
}

var sum1 = addFourAges(18, 30, 12, 21);
console.log(sum1);


//ES5
//EXAMPLE on how to pass an entire array to a function
var ages = [18, 30, 12, 21];
//remember what the apply method does it to set the "this variable" and recieve an array
// it calls the function that apply is used on, using the elements of the array as arguments
var sum2 = addFourAges.apply(null, ages);
console.log(sum2);


//ES6
//EXAMPLE on how to pass an entire array to a function
//what this does is expand the array into the functions arguments
const sum3 = addFourAges(...ages);
console.log(sum3);

//ES6 
//joining two arrays with the spread operator
//plus added in a random name in the middle
const familySmith = ['John', 'Jane', 'Mark'];
const familyMiller = ['Mary', 'Bob', 'Ann'];

const bigFamily = [...familySmith, 'Anything can go here too', ...familyMiller];
console.log(bigFamily);

//ES6 
//using the spread operator on a node list. A node list is what querySelector all returns
const h = document.querySelector('h1');
const boxes = document.querySelectorAll('.box');

//this adds the heading and bozes into the node list
const all = [h, ...boxes];
Array.from(all).forEach(cur => cur.style.color = 'purple');
