// Bind, Call and Apply
// In short there allow us to call a function and set the this variable manually
var john = {
  name: 'John',
  age: 26,
  job: 'teacher',
  presentation: function (style, timeOfDay) {
    if (style === 'formal') {
      console.log(`Good ${timeOfDay} ladies and gentlemen! I'm ${this.name}, I'm a ${this.job} and I'm ${this.age}`);
    } else if (style === 'friendly') {
      console.log(`Hey! whatsup? I'm ${this.name}, I'm a ${this.job} and I'm ${this.age}. Have a lovely ${timeOfDay}`);
    }
  }
}
john.presentation('formal', 'morning');


var emily = {
  name: 'Emily',
  age: 35,
  job: 'designer',
}
// here we are using the presentation method inside of John for Emily
// this is called method borrowing
john.presentation.call(emily, 'friendly', 'afternoon');

//Bind returns a function
var johnFriendly = john.presentation.bind(john, 'friendly');
johnFriendly('morning');
johnFriendly('night');

var emilyFormal = john.presentation.bind(emily, 'formal');
emilyFormal('afternoon');


//Another Example
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

function isFullAge (limit, element) {
    return element >= limit;
}

var ages = arrayCalc(years, calculateAge);
var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));

console.log(ages);
console.log(fullJapan);
