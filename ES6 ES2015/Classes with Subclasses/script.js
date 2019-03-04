//Classes with Subclasses

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

//in a sub object that you want to use to inherit from a diffrent object...you need to add in their paramters as well
var athleteES5 = function (name, yearOfBirth, job, olympicGames, medals) {
  //now in this subclass..the first thing we'll need to do is call the super class
  //we are using .call() here because the "this" keyword will point to the new empty object. Because of the "new" keyword
  //and then we all the function constructor of PersonES5.call(), so after this all the properties will be set in the new athlete object when we use the "new" keyword
  PersonES5.call(this, name, yearOfBirth, job);

  this.olympicGames = olympicGames;
  this.medals = medals;
}

//remember that object.create allows us to manually set the prototype of an object
//and we want the prototype of a athlete to be the prototype of the personES5, so that they can become connected
//So we have access to both of them, but they are still seperate
athleteES5.prototype = Object.create(PersonES5.prototype);

//this will only be inherited by the athlete instances,
//because they are only in the athleteES5 prototype property
//this needs to be after we connect the 2 prototypes
athleteES5.prototype.wonMedal = function () {
  this.medals++;
  console.log(this.medals);
}


var johnAthleteES5 = new athleteES5('John', 1990, 'swimmer', 3, 10);
johnAthleteES5.calculateAge();
johnAthleteES5.wonMedal();

console.log(johnAthleteES5);


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
}

//here we just use extends
class athleteES6 extends personES6 {
  constructor(name, yearOfBirth, job, olympicGames, medals) {
    //this is the same as doing this PersonES5.call(this, name, yearOfBirth, job);
    super(name, yearOfBirth, job);

    this.olympicGames = olympicGames;
    this.medals = medals;
  }

  wonMedal() {
    this.medals++;
    console.log(this.medals);
  }
}

const johnAthleteES6 = new athleteES6('John', 1990, 'swimmer', 3, 10);

johnAthleteES6.wonMedal();
johnAthleteES6.calculateAge();