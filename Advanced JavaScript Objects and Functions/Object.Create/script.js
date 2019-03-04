// Object.create
var personProto = {
    calculateAge: function() {
        console.log(2016 - this.yearOfBirth);
    }
}

//adds personProto to the john object as it's prototype
var john = Object.create(personProto, {
    name: {value: 'Jane'},
    yearOfBirth: {value: '1969'},
    job: {value: 'Designer'}
});