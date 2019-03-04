//ES5
// (function(){})();


//IIFEs with ES6
{
    const a  = 1;
    let b = 2;
    var c = 3;
}

// You would get a error here, because we do not have access to the data inside of the block
console.log(a + b);

// this will work because variable declarations with the var keywords are function scoped and not blocked scoped
console.log(c);