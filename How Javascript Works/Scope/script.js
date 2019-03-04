///////////////////////////////////////
// Lecture: Scoping

var a = 'Hello';
first();

// Has access to the global scope
function first() {
    var b = 'Hi!';
    second();
    // Has access to the first function and the global scope
    function second() {
        var c = 'Hey!';
        // Hello, hey, Hi
        console.log(a + b + c);
    }
}


///////////////////////////////////////
//An example showing the difference between the exeution stack and the scope chain
var a = 'Hello';
first();

// Has access to the global scope
function first() {
    var b = 'Hi!';
    second();
    // Has access to the first function and the global scope
    function second() {
        var c = 'Hey!';
        //We can call the third function because of scoping
        third();
    }
}

function third() {
    var d = 'John';
    //we do not have access to C here
    // we only have access to varible A and D
    console.log(c);
}