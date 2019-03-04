var john = {
    name: 'John',
    yearOfBirth: 1990,
    job: 'teacher'
};

// Function Constructor
var Person = function (name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}
// inheritance using prototype
Person.prototype.calculateAge = function () {
    console.log(2018 - this.yearOfBirth);
}

// instanciation
// these objects here are instances of the person Object
var john = new Person('John', 1990, 'Teacher');
var jane = new Person('Jane', 1969, 'Designer');
var mark = new Person('Mark', 1948, 'Retired');

john.calculateAge();
jane.calculateAge();
mark.calculateAge();