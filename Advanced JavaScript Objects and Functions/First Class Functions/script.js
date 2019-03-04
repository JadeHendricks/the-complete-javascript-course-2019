// Passing functions as arguments
var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc (arr, fn) {
    var arrResult = [];
    //passing a function is done here.
    for (var i = 0; i < arr.length; i++) {
        arrResult.push(fn(arr[i]))
    }

    return arrResult;
}

function calculateAge (element) {
    return 2018 - element;
}

function isFullAge (element) {
    return element >= 18;
}

function maxHeartRate (element) {
    if (element >= 18 && element <= 81) {
        return Math.round(206.9 - (0.67 * element));
    } else {
        return -1;
    }
}

var ages = arrayCalc(years, calculateAge);
var isOfAge = arrayCalc(ages, isFullAge);
var rates = arrayCalc(ages, maxHeartRate);

console.log(ages);
console.log(isOfAge);




// Functions returning fucntions
function interviewQuestion (job) {
    if (job === 'designer') {
        return function (name) {
            console.log(`${name} can you please explain what UX design is?`);
        }
    } else if (job === 'teacher') {
        return function (name) {
            console.log(`What subject do you teach, ${name}?`);
        }
    } else {
        return function (name) {
            console.log(`Hello ${name} what do you do?`);
        }
    }
}

var teacherQuestion = interviewQuestion('teacher');
var designerQuestion = interviewQuestion('designer');
teacherQuestion('John');
designerQuestion('John');

//OR
interviewQuestion('teacher')('Mark');


//CLOSURE SOLUTION (CLEANER)
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