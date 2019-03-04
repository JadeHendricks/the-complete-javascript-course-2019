// Arrow Functions Basics
const years = [1990, 1965, 1982, 1937];

//ES5 Example
var agesES5 = years.map(function(current, index, array){
    return 2018 - current;
});

console.log(agesES5);

//ES6 Example - 
//with one argument
let agesES6 = years.map(current => 2016 - current);
console.log(agesES6);

//ES6 Example - 
//with two argument
agesES6 = years.map((current, index) => `Age Element ${index}: ${2016 - current}`);
console.log(agesES6);

//ES6 Example - 
//when you have more than 1 line in you return statement you also have to use {} brackets
// or if you have no arguments you'll also need to add in {}
ages6 = years.map((current, index) => {
    const now = new Date().getFullYear();
    const age = now - current;

    return `Age element ${index + 1}: ${age}.`;
});

console.log(agesES6);