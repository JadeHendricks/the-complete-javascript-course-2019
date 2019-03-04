//Default Parameters

//ES5
//Example
function SmithPerson (firstName, yearOfBirth, lastName, nationality) {

  //A ES5 version of default parameters
  lastName === undefined ? lastName = 'Smith' : lastName;
  nationality === undefined ? nationality = 'World' : lastName;

  this.firstName = firstName;
  this.yearOfBirth = yearOfBirth;
  this.lastName = lastName;
  this.nationality = nationality;
}

//Javscript allows us to call any function without specifying all of the arguments
//and simply sets the others to undefined
var john = new SmithPerson('John', 1990);
console.log(john);

//We are now overwritting the defaults in ES5
var emily = new SmithPerson('Emily', 1983, 'Diaz', 'Spanish');
console.log(emily);


//ES6
//Example
//Here we jsut set it right into the parameters of the function with ES6
function SmithPerson2 (firstName, yearOfBirth, lastName = 'Smith', nationality='world') {
  this.firstName = firstName;
  this.yearOfBirth = yearOfBirth;
  this.lastName = lastName;
  this.nationality = nationality;
}

const john2 = new SmithPerson('John', 1990);
console.log(john2);
const emily2 = new SmithPerson('Emily', 1983, 'Diaz', 'Spanish');
console.log(emily2);