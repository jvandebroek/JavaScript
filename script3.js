///////////////////////////////////////
// Lecture: Hoisting
/*
calculateAge(1965);//Works

function calculateAge(year) {
    console.log(2018 - year);
}

calculateAge(1990);

//retirement(1965); Doesnt work / crash: 'not a function' (undefined)

var retirement = function(year){
    console.log(65 - (2018 - year));
}
retirement(1990);

//Variable
console.log(age); //undefined
var age = 23;
var sage = 'sage'
console.log(age); //23

function foo(){
    console.log(sage); //'sage'
    console.log(age); //undefined <-- because it assumes you want the one in the function which is not defined...
    console.log(window.age); //23
    var age = 65;
    console.log(age); //65
}
foo();
console.log(age); //23
///////////////////////////////////////
// Lecture: Scoping


// First scoping example

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}
*/



// Example to show the differece between execution stack and scope chain

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    console.log(a + b + c + d);
}
*/


///////////////////////////////////////
// Lecture: The this keyword

console.log(this);//this window

calculateAge(1985);

function calculateAge(year){
    console.log(2016 - year);
    console.log(this);//this window
}
var john = {
    name: 'John',
    yearofbirth: 1990,
    calcAge: function(){
        console.log(this);//John
        function inner(){
            console.log(this);//Window? fuckin hell
        }
        inner();
    }
}
john.calcAge();//John

var Mike = {
    name: 'mike',
    yearofbirth: 1984,
}

Mike.calcAge = john.calcAge;
Mike.calcAge(); //Mike! "this" only defined when called!


















