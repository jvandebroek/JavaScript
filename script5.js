//Function constructor**************************
/*
var jonas = {
    name: 'Jonas',
    yearOfBirth: 1993,
    job: 'programmer'
};

var Person = function(name, yearOfBirth, job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person.prototype.calculateAge = function() {  //all people can calculate their age!
        console.log(2019 - this.yearOfBirth);
};

Person.prototype.lastName = 'Smith'; //all people have this last name!

var john = new Person('John', 1990, 'teacher');
var jane = new Person('Jane', 1969, 'designer');
var mark = new Person('Mark', 1948, 'retired');

john.calculateAge();
jane.calculateAge();
mark.calculateAge();

console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);
*/

//Object.create*********************************
/*
var personProto = {
    calculateAge: function(){
    console.log(2019- this.yearOfBirth);
    }
};

var john = Object.create(personProto);
john.name = 'John';
john.yearOfBirth = 1990;
john.job = 'teacher';

var jane = Object.create(personProto, {
    name: {value : 'Jane'},
    yearOfBirth: {value: 1969},
    job: {value: 'designer'}
});
*/

// Primitives vs Objects************************
/*
var a = 23;
var b = a; //a IS 23 not a pointer to 23
a = 46;
console.log(a, b); //46, 23


var obj1 = {
    name: 'John',
    age: 26
};
var obj2 = obj1; // obj1 is a pointer to the data for obj1
obj1.age = 30; //not both obj ages are 30

console.log(obj1.age, obj2.age); //30, 30

//functions:
var age = 27;
var obj = {
    name: 'John',
    city: 'Lisbon'
};
function change(a, b){
    a = 30; //cant change primitive variables on the outside via its function name.
    b.city = 'San Francisco'; //changes b.city value, actually changes object
}

change(age, obj);
console.log(age, obj.city);
*/

//Functions as arguments************************
/*
var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn){
    var arrRes = [];
    for (i = 0; i < arr.length; i++){
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAge(el){
    return 2016 - el;
}

function isFullAge(el){
    return el >= 18;
}

function maxHeartRate(el){
    if(el >= 18 && el <= 81){
        return Math.round(206.9 - (0.67 * el));
    }else{
        return -1;
    }
}

var ages = arrayCalc(years, calculateAge);
var fullAges = arrayCalc(ages, isFullAge);
var rates = arrayCalc(ages, maxHeartRate);

console.log(rates);
console.log(ages);
console.log(fullAges);
*/

//Functions returning Functions*****************
/*
function interviewQuestion(job) {
    if(job === 'designer'){
        return function(name){
            console.log(name + ', can you please explain design');
        }
    }else if (job === 'teacher'){
        return function(name){
            console.log('What do you teach, ' + name + '?');
        }
    }else{
        return function(name){
            console.log('Hello ' + name + ' What do you do?');
        }
    }
}

var teacherQuestion = interviewQuestion('teacher');
var designerQuestion = interviewQuestion('designer');
designerQuestion('Jonas');
teacherQuestion('John');

interviewQuestion('somedude')('Mark');
interviewQuestion('teacher')('Mirk');
*/

//IIFE******************************************
/*
function game() {
    var score = Math.random()*10;
    console.log(score >= 5);
}

game();

(function(){
    var score = Math.random()*10;
    console.log(score >= 5);
})();

(function(goodLuck){
    var score = Math.random()*10;
    console.log(score >= 5 - goodLuck);
})(4);

*/

//Closures**************************************
/*
function retirement(retirementAge){
    var a = ' years until retirement';
    return function(yearOfBirth) {
        var age = 2016 - yearOfBirth;
        console.log((retirementAge - age) + a); //inner function maintains vars from outter function even when called seperately!
    }
}

var retirementUS = retirement(66);
var retirementGermany = retirement(65);
var retirementIceland = retirement(67);

retirementIceland(1990);
retirementGermany(1990);
retirementUS(1990); //40 yrs to retire
retirement(70)(1990); //44 yrs to retire

function interviewQuestion(job) {
    return function(name){
        if (job === 'designer'){
            console.log(name + ', can you please explain design');
        }else if (job === 'teacher'){
            console.log('What do you teach, ' + name + '?');
        }else{
            console.log('Hello ' + name + ' What do you do?');
        }
    }
}

interviewQuestion('teacher')('John');
*/

//Bind, Call , Apply****************************
/*

var john = {
    name: 'John',
    age: 26,
    job:'teacher',
    presentation: function(style, timeOfDay){
        if (style === 'formal'){
            console.log('good '+ timeOfDay + ' Ladies and gentlemen, i\'m ' + this.name + ' , a ' + this.age + ' years old '+ this.job);
        }else if (style === 'friendly'){
            console.log('Hey! What\'s up I\'m '+ this.name + ' i\'m a ' + 26 + ' years old '+ this.job + ' have a nice ' + timeOfDay);
        }
    }
}

var emily = {
    name: 'Emily',
    age: 35,
    job: 'designer'
}

john.presentation('formal', 'morning');
john.presentation.call(emily, 'friendly', 'afternoon'); //one object can borrow a function from another with .call and using their name as first argument making them the "this" object.
//john.presentation.apply(emily, ['friendly', 'morning']); Apply uses array
var johnFriendly = john.presentation.bind(john, 'friendly'); //binds the inputs here permanently as the inputs of the function newly defined
johnFriendly('morning');

var emilyFormal = john.presentation.bind(emily, 'formal');
emilyFormal('poopshoop');

var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn){
    var arrRes = [];
    for (i = 0; i < arr.length; i++){
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAge(el){
    return 2016 - el;
}

function isFullAge(limit, el){
    return el >= limit;
}

var ages = arrayCalc(years, calculateAge);
//want to use isfullage now but it takes two args!
var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20)); //need this first!
console.log(fullJapan);
console.log(ages);
*/

//Code challenge 7******************************
/*
(function(){
    var score = 0;
    var Question = function(Q, A, C){
    this.Q = Q;
    this.A = A;
    this.C = C;
}
    Question.prototype.displayQ = function(){
    console.log(this.Q);
    for (i = 0; i < this.A.length; i++)
    console.log(i + ' ' + this.A[i]);
}
    Question.prototype.correct = function(Guess){
    if (Guess == this.C){
        console.log('Correct! Good Job!');
        score++;
    }else{
        console.log('Incorrect :(');
    }
}
    var Q1 = new Question('What is 5+5', ['7', '10', '5'], 1);
    var Q2 = new Question('What is 5*5', ['35', '50', '25'], 2);
    var Q3 = new Question('What is 5-5', ['7', '0', '5'], 1);
    var Q4 = new Question('What is 5/5', ['1', '10', '5'], 0);
    var Q5 = new Question('What is my name', ['Jim', 'Jonas', 'John'], 1);
    var Q6 = new Question('What is love', ['Baby', 'Don\'t', 'Hurt'], 2);
    var Q7 = new Question('How many answers does this have?', [1, 2, 3, 4, 5, 6], 5);
    var Qs = [Q1, Q2, Q3, Q4, Q5, Q6, Q7];
    while (true){
        rand = Math.floor(Math.random() * Qs.length);
        Qs[rand].displayQ();
        var Guess = prompt("enter your guess as a number.");
        if (Guess === 'Exit'){
            break
        }else{
            Qs[rand].correct(Guess);
            console.log('Your current score is: ' + score + '\n------------------------');
        }
    }
})()
*/
