///////////////////////////////////////
// Lecture: Hoisting

// calling a function before it has been declared
// Hoisting on works with function declarations
calculateAge(1993);

function calculateAge (year) {
    console.log(2018 - year);
}

// calling a function expression before it has been declared will not work here 
// as hoisting only works with function declaration
var retirementAge = function(year) {
    console.log(65 - (2018 - year));
}

retirementAge(1990);

// You cannot use variables before it gets defined, as all variables are set to undefined during the creation phase
// Javascript knows that the variables exsists, but for now it will have no value
console.log(age);
// this variable age is defined in the variable object of the global execution context object
console.log(age);


function foo () {
    //undefined
    console.log(age);
    // this variable age is defined in the variable object of the execution context object of the foo fucntion
    var age = 65;
    //this will show us 65
    console.log(age);
}

foo();
// this will show us 25 because we do not have access to the function scope
// So we are getting this value from the global execution object
console.log(age);