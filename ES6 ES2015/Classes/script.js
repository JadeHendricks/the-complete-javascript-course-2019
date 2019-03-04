//Classes

//ES5
//Example
var PersonES5 = function (name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
}

PersonES5.prototype.calculateAge = function () {
  var ageES5 = new Date().getFullYear() - this.yearOfBirth;
  console.log(ageES5);
}

var johnES5 = new PersonES5('John', 1990, 'teacher');

//ES6
//Example
//All classes have to have the contructor method
class personES6 {
  constructor (name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
  }
  //this is the same as adding it into the prototype
  calculateAge() {
    let ageES6 = new Date().getFullYear() - this.yearOfBirth;
    console.log(ageES6);
  }

  static greeting () {
    console.log(`Hey there`);
  }

}
const johnES6 = new PersonES5('John', 1990, 'teacher');

//this is how we can call static methods
personES6.greeting();