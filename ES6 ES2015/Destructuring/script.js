//Destructuring

//ES5
//EXAMPLE 
var john = ['John', 26];
//Image that we had 5 or 10 items in the array and how impractical this solution would be everytime.
var name = john[0];
var age = john[1];


//ES6
//INCOMES DESTRUCTURING

//What this is going to do is create a const called name and one called year
//and the data will be stored in each of those variables
// Shortcut
const [nameES6, ageES6] = ['John', 26];

console.log(nameES6);
console.log(ageES6);


//ES6
//DESTRUCTURING WITH OBJECTS
//The destructuring variables need to be the exact same name as the object keys
const obj = {
  firstName: 'John',
  lastName: 'Smith'
}

//now we have stored the data outside of the object
const {firstName, lastName} = obj;

console.log(firstName);
console.log(lastName);


//ES6
//If we don't want to match the variables with the keys in a object we would have to write it like this
//now the firstName key will be stored in a variable called A and lastName will be stored in B
const {firstName: a, lastName: b} = obj;

console.log(a);
console.log(b);

//=============================================================================================================================================


//ES6
// A more practical example
function calcAgeRetirement (year) {
  const age = new Date().getFullYear() - year;

  return [age, 65 - age];
}

const [personAge, retirementAge] = calcAgeRetirement(1990);

//current age
console.log(personAge);
//years until retirment
console.log(retirementAge);