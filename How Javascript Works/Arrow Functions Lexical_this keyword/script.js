// Lexical This with arrow functions

//ES5
//Example
var boxES5 = {
  color: 'green',
  position: 1,
  clickMe: function () {
    //this will work because it is on the method call
    console.log(this.color);
    //this wont work because it's a function inside of a method and will point "this" to the window
    document.querySelector('.green').addEventListener('click', function(){
      var str = 'This box number is ' + this.position + ' and it is ' + this.color;
      alert(str);
    });
  }
}

//this will return undefined for both this.postition and this.color
//because only in a method call the "this" keyword points to the object, but in a regular function call it points to the window
boxES5.clickMe();


//ES5
//Example 2 - Fixing the "this" issue with a very common ES5 pattern
var box2ES5 = {
  color: 'green',
  position: 1,
  clickMe: function () {
    //this will work now because we are storing self as the this keyword inside of the method which would point to the object
    // and we can now use self which is the obj inside of our callback function
    var self = this;
    document.querySelector('.green').addEventListener('click', function(){
      var str = 'This box number is ' + self.position + ' and it is ' + self.color;
      alert(str);
    });
  }
}
//this will now work because of self
box2ES5.clickMe();


//ES6
//With lexical This scope example
const boxES6 = {
  color: 'green',
  position: 1,
  clickMe: function () {
    //now that we are using a arrow function, we now have a this keyword that is shared with it's surroundings. Being the object.
    //in short, the arrow function shares it's lexical "this" keyword with it's surroundings
    // always use arrow functions if you want to preserve the value of the this keyword
    document.querySelector('.green').addEventListener('click', () => {
      let str = `This box number is ${this.position} and it is ${this.color}.`;
      alert(str);
    });
  }
}

//this will now, because of arrow functions
boxES6.clickMe();


//ES6
//ANOTHER EXAMPLE
const box2ES6 = {
  color: 'green',
  position: 1,
  // Here we have changed the function into a arrow function
  //This will not preserve the "this" keyword because now it will point to the window because the surrounding of "this" is the window
  // because it was not set and shares only
  clickMe: () => {
    document.querySelector('.green').addEventListener('click', () => {
      let str = `This box number is ${this.position} and it is ${this.color}.`;
      alert(str);
    });
  }
}

//this will not work because we are using a arrow function as a method call and this is not being set, 
//except it is being shared
box2ES6.clickMe();


//ES5
//EXAMPLE
function Person (name) {
  this.name = name;
}

Person.prototype.myFriendsES5 = function (friends) {
  //this will point to the object over here
  var arr = friends.map(function(current, index, array){
    //the name here will not be defined, because this is inside of the call back funtion
    return this.name + ' is friends with ' + current;
  });

  console.log(arr);
}

var friends = ['Bob', 'Jane', 'Mark'];
new Person('John').myFriendsES5(friends);


//ES5
//EXAMPLE -The BIND FIX
function Person2 (name) {
  this.name = name;
}

Person2.prototype.myFriends2ES5 = function (friends) {
  var arr = friends2.map(function(current, index, array){
    return this.name + ' is friends with ' + current;
    //Here we are using bind to make a copy of the fucntion and set our own "this variable"
    //the bind is just outside of the callback function so it has access to the object and brings it into the callback fucntion
  }.bind(this));

  console.log(arr);
}

var friends2 = ['Bob', 'Jane', 'Mark'];
new Person2('John').myFriends2ES5(friends2);


//ES6
//EXAMPLE -The BIND FIX
function Person2 (name) {
  this.name = name;
}

//this is also a mthod call BTW
Person3.prototype.myFriendsES6 = function (friends) {
  //this does not have it's own this keyword so it shares the this keyword of the object
  //because we are inside a method call - prototype
  let arr = friends3.map((current, index, array) => `${this.name} is friends with ${current}`);

  console.log(arr);
}

var friends3 = ['Bob', 'Jane', 'Mark'];
new Person3('John').myFriendsES6(friends3);