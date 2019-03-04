//IIFE
//You can only call a IIFE once
//All we want here is to create a new scope to maintain data privacy 
(function (goodLuck) {
    var score = Math.random() * 10;
    console.log(score >= 5 - goodLuck);
})(5);

//this will return a undefined error
console.log(score);