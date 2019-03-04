// Rest Parameters


//ES5
//Emaples - receives years and prints to the console all the people who are full age
//this is how we can handle if we don't know how many areguments we are going to have
function isFullAgeES5 () {
  //console.log(arguments)
  //all functions have a "arguments" key that we can use
  var agesArray = Array.prototype.slice.call(arguments);
  agesArray.forEach(function(curr){
    console.log((2016 - curr) >= 18);
  })
}

isFullAgeES5(1990, 1999, 1965);
isFullAgeES5(1990, 1999, 1965, 2016, 1987);


//ES6
//EXAMPLE
//what this is going to do is thatg...as soon as we call the function it will transform the arguments into an array and then pass it into this function
function isFullAgeES6 (...years) {
  //years is the array
  years.forEach(curr => console.log((2016 - curr) >= 18));
}

//we can add as much as we want and the rest will just store them into an array to be used
isFullAgeES6(1990, 1999, 1965, 2016, 1987);


//ES5 
//Another Example where we can add a age we are looking
function isFullAge2ES5 (limit) {
  //we can usenthe slice method here to cut a peiece of an array and only return that in this case 1
  var agesArray2 = Array.prototype.slice.call(arguments, 1);
  agesArray2.forEach(function(curr){
    console.log((2016 - curr) >= limit);
  })
}

//age limit here is 21
isFullAge2ES5(21, 1990, 1999, 1965);
//age limit here is 18
isFullAge2ES5(18, 1990, 1999, 1965, 2016, 1987);


//ES6
//Another Example where we can add a age we are looking
//this way it will take the first [0] and add it to limit and will spread the remaining array afterwards
//so ES6 does everything for us
function isFullAge2ES6 (limit, ...years) {
  years.forEach(curr => console.log((2016 - curr) >= limit));
}
//limit - ...years
isFullAge2ES6(18, 1990, 1999, 1965, 2016, 1987);
