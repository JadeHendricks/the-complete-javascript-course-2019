// Strings with ES6

let firstName = 'John';
let lastName = 'Smith';
const yearOfBirth = 1990;

function calculateAge (year) {
    return 2018 - year;
}

//we can now wrap our text in back ticks and access vvaribales like below easly.
console.log(`This is ${firstName} ${lastName}. He was born in ${yearOfBirth}. Today, he is ${calculateAge(yearOfBirth)} years old.`);


//New string methods of ES6
//EXAMPLE
const n = `${firstName} ${lastName}`;

//startsWith - 
//this will return true or false and this is also case sensitive
console.log(n.startsWith('J'));

//endsWith - 
//this will return true or false and this is also case sensitive
console.log(n.endsWith('th'));

//includes -
//this is able to find things in the middle of strings and return true or false
console.log(n.includes(' '));

//repeat -
//this will allow you to repeat a string to the amount that you have set
console.log(`${firstName} `.repeat(5));