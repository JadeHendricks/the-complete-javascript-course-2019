///////////////////////////////////////
// Lecture: This Keyword

//The window object
console.log(this);


calculateAge(1985);

//the object that this function is attached to is the glabal object 
function calculateAge(year) {
    console.log(2016 - year);
    //The window object, because this is a regular function call and not a method
    console.log(this);
}

///////////////////////////////////////
//An example showing this with functions on objects
var john = {
    name: 'John',
    yearOfBirth: 1990,
    calculateAge: function(year) {
        //The John Object
        console.log(this);
        console.log(2018 - this.yearOfBirthyear);

        function innerFunction () {
            //the window object, because the rule is. When a regular function call happens the default object is the global object
            console.log(this);
        }

        innerFunction();
    }
}

john.calculateAge();

///////////////////////////////////////
//An example showing that the this variable is only assigned a value as soon as a object calls a method

var mike = {
    name: 'Mike',
    yearOfBirth: 1984
}

//Method Borrowing
mike.calculateAge = john.calculateAge;

//we call the method here and even though we have borrowed the method from john, 
// the this keyword is set to the mike object, because the this keyword is only assigned a value as soon as a object calls a method
mike.calculateAge();