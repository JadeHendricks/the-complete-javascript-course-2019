//Closures
//our inner function is able to use the outter variables after the outter function has returned - this is called a closure
function retirement(retirementAge) {
    var a  = 'Years left until retirment.'
    return function (yearOfBirth) {
        var age = 2018 - yearOfBirth;
        console.log(retirementAge - age + a);
    }
}

var retirementUS = retirement(66);
var retirementGermany = retirement(65);
var retirementIceland = retirement(65);

retirementUS(1990);
retirementGermany(1990);
retirementIceland(1990);


//Another example
function interviewQuestion (job) {
    return function (name) {
        if (name === 'teacher') {
            console.log(`What subject do you teach, ${name}?`);
        } else if (name === 'designer') {
            console.log(`${name}, can you please explain what UX design is?`)
        } else {
            console.log(`Hello ${name}, what do you do?`)
        }
    }
}