var names = ['Zmitser', 'Dimas', "Dmitriy"];

names.forEach(function (name) {
    console.log('forEach', name);
});

names.forEach((name) => {
    console.log('arrowFunc', name)
});

names.forEach((name) => console.log(name));

var returnMe = (name) => 'My name is '  + name;
console.log(returnMe('Zmitser'));

var person = {
    name: 'Alex',
    greet: function () {
        names.forEach((name) => {
            console.log(this.name + ' say hi to ' + name);
        })
    }
};

person.greet();

//Challenge
function sum(a,b){
    return a + b
}

console.log(sum(1, 9));
console.log(sum(1, 0));
var addExpression= (a, b) => a + b;
var addStatement = (a, b) => {
    return a + b;
};
console.log(addExpression(1, 7));
console.log(addStatement(1, 14));