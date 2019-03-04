// Primitives vs Objects

//Example of Primities
var a = 23;
var b = a;

a = 46;

console.log(a);
//46
console.log(b);
//23
//they are different because each var holds their own copy of the data and do not reference anything


//Exmaple of Objects
var obj1 = {
    name: 'John',
    age: 26
};

var obj2 = obj1;
obj1.age = 30;

console.log(obj1.age);
//30
console.log(obj2.age);
//30

// When obj1 = obj2 we did not create a new object, all we did was to create a new reference that points to the first object
// so that's why if we make a change on Object 1 that change is also reflected on Obeject 2


//Exmaple of passing a primitive and an Object to a function
var age = 27;
var obj = {
    name: 'Jonas',
    city: 'Lisbon'
};

function change (a , b) {
    a = 30;
    b.city = 'San Fransisco'
}

change(age, obj);

console.log(age);
//27
console.log(obj.city);
//San Fransisco

// So this shows us that when we pass a primitive to a function a simple copy is create, so you can change "A" as much as you want but it will never affect the variable on the outside.
// But when we pass the object, we are not really passing the object but a reference to that object...which is why we are able to change it within a fuuntion