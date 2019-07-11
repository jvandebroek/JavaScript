//Variables with Let and Const:
/*
//ES5:
var name5 = 'Jane Smith';
var age5 = 23;
name5 = 'Jane Miller';
console.log(name5);

//ES6:
const name6 = 'Jane Smith';
let age6 = 23;
//name6 = 'Jane Miller'; <---- cant be done!
//console.log(name6);

//ES5:
function driversLicense(passedTest){
    if (passedTest){
        var firstName = 'John';
        var yearOfBirth = 1990;
    }
    console.log(firstName + yearOfBirth + ' can drive');
}

driversLicense(true);

//ES6:
function driversLicense6(passedTest){
    if (passedTest){
        let firstName = 'John'; //Only accessible in the "block" not the function as before.
        const yearOfBirth = 1990;
    }
    console.log(firstName + yearOfBirth + ' can drive'); // Doesnt work.
}

driversLicense6(true); 

let i = 23;
for (let i = 0; i < 5; i++){
    console.log(i);
}
console.log(i);

var i = 23;
for (var i = 0; i < 5; i++){
    console.log(i);
}
console.log(i);
*/
//Blocks and IIFE:
/*
{
    const a = 1;
    let b = 2;
    var c = 3;
}
//console.log(a + b); //<--- cant access the variables in the "block"
console.log(c); //works!
*/
//Strings in ES6:
/*
let firstName = 'John';
let lastName = 'Smith';
const yearOfBirth = 1990;
function calcAge(year){
    return 2016 - year;
}

//ES5:
console.log('this is ' + firstName + ' ' + lastName + ' . He was born in ' + yearOfBirth + '....');
//ES6:
console.log(`This is ${firstName} ${lastName}. He was born in ${yearOfBirth} .... `);

const n = `${firstName} ${lastName}`;
console.log(n.startsWith('J')); //true
console.log(n.endsWith('th')); //true
console.log(n.startsWith('Z')); //false
console.log(n.includes('ohn')); //true
console.log(n.repeat(5)); //wow
console.log(`${n} `.repeat(5)); //ooooh
*/
//Arrow Function Basics:
/*
const years = [1990, 1965, 1982, 1937];

//ES5:
var ages5 = years.map(function(c){
    return 2016 - c;
});
console.log(ages5);

//ES6:
let ages6 = years.map(c => 2016 - c);
console.log(ages6);

ages6 = years.map((c, i) => `Age element ${i +1}: ${2016 - c}.`);
console.log(ages6);

ages6 = years.map((c, i) => {
    const now = new Date().getFullYear();
    const age = now - c;
    return `Age element ${i +1}: ${age}.`
});
console.log(ages6);
*/
//Arrow Functions 'this':
/*

//ES5:
var box5 = {
    color: 'green',
    position: 1,
    clickMe: function(){
            var self = this; //has access to box5 here
            document.querySelector('.green').addEventListener('click', function(){
                //no access in here
                var str = 'This is box number ' + self.position + ' and it is ' + self.color;
                alert(str);
        })
    }
}
//box5.clickMe();

//ES6:
const box6 = {
    color: 'green',
    position: 1,
    clickMe: function(){
 document.querySelector('.green').addEventListener('click', () => {
                //no access in here
                var str = 'This is box number ' + this.position + ' and it is ' + this.color;
                alert(str);
        })
    }
}
//box6.clickMe();
//Arrow is aware of its surroundings.
const box66 = {
    color: 'green',
    position: 1,
    clickMe: () => { //stops working as arrow shares value of window now?
 document.querySelector('.green').addEventListener('click', () => {
                //no access in here
                var str = 'This is box number ' + this.position + ' and it is ' + this.color;
                alert(str);
        })
    }
}
//box66.clickMe();

function Person(name){
    this.name = name;
}
//ES5:
Person.prototype.myFriends5 = function(friends){
    var arr = friends.map(function(c){
        return this.name + ' is friends with ' + c;
    }.bind(this));//wrong this so doesnt work rip no name. so we use bind to fix?
    console.log(arr);
}
var friends = ['bob', 'jane', 'mark'];
//new Person ('John').myFriends5(friends);

//ES6:
Person.prototype.myFriends6 = function(friends){
    var arr = friends.map(c => this.name + ' is friends with ' + c);
    console.log(arr);
}

new Person ('Joe').myFriends6(friends);
*/
//Destructuring:
/*
//ES5:
var john = ['John', 26];
var name = john[0];
var age = john[1];

//ES6:
const [name6, age6] = ['John', 26];
console.log(name6);
console.log(age6);

const obj = {
    firstName: 'John',
    lastName: 'Smith'
};
const {firstName, lastName} = obj;

console.log(firstName);
console.log(lastName);

const{firstName: a, lastName: b} = obj;
console.log(a);
console.log(b);

function calcAgeRetirement(year) {
    const age = new Date().getFullYear() - year;
    return [age, 65 - age];
}

const [agee, retirement] = calcAgeRetirement(1990);
console.log(agee);
console.log(retirement);
*/
//Arrays in ES6:
/*

const boxes = document.querySelectorAll('.box');

//ES5:
var boxesArr5 = Array.prototype.slice.call(boxes);
boxesArr5.forEach(function(c){
    c.style.backgroundColor = 'dodgerblue';
});



//ES6:

Array.from(boxes).forEach(c => c.style.backgroundColor = 'dodgerblue');

//Loops
//ES5:
for(var i = 0; i < boxesArr5.length; i++){
    if(boxesArr5[i].className === 'box blue'){
        continue;
    }
    boxesArr5[i].textContent = 'I changed to blue!';
}
//ES6:
var boxesArr6 = Array.from(boxes);

for (const c of boxesArr6) {
    if (c.className.includes('blue')){
        continue;
    }
    c.textContent = 'I changed to blue!';
}

//ES5
var ages = [12, 17, 8, 21, 14, 11];
var full = ages.map(function(c){
    return c >= 18;
});
console.log(full);
console.log(full.indexOf(true));
console.log(ages[full.indexOf(true)]);

//es6:
console.log(ages.findIndex(c => c >= 18));
console.log(ages.find(c => c >= 18));
*/
//Spread Operator enter arrays into functions:
/*
function addFourAges(a, b, c, d){
    return a + b + c + d;
}

var sum1 = addFourAges(18, 30, 12, 21);
console.log(sum1);

//ES5:
var ages = [18, 30, 12, 21];
var sum2 = addFourAges.apply(null, ages);
console.log(sum2);

const sum3 = addFourAges(...ages);
console.log(sum3);

const familySmith = ['Jogn', 'Jane', 'Mark'];
const familyMiller = ['Mary', 'Bob', 'Ann'];
const bigFamily = [...familySmith, 'Lily',  ...familyMiller];
console.log(bigFamily);

const h = document.querySelector('h1');
const boxes = document.querySelectorAll('.box');
const all = [h, ...boxes];

Array.from(all).forEach(c => c.style.color = 'purple');
*/
//Rest Parameters:
/*
//Array -> single values
//ES5:
function isFullAge5(){
    //console.log(arguments);
    var argsArr = Array.prototype.slice.call(arguments);
    
    argsArr.forEach(function(c){
        console.log((2016 - c) >= 18);
    })
}
isFullAge5(1990,1999,1965, 2016, 1987);
//ES6:
function isFullAge6(...years){
    years.forEach(c => console.log((2016-c) >= 18));
}
isFullAge6(1990,1999,1965, 2016, 1987);
//ES5:
function isFullAge5(limit){
    //console.log(arguments);
    var argsArr = Array.prototype.slice.call(arguments, 1);
    
    argsArr.forEach(function(c){
        console.log((2016 - c) >= limit);
    })
}
isFullAge5(21, 1990,1999,1965, 2016, 1987);
//ES6:
function isFullAge6(limit, ...years){
    years.forEach(c => console.log((2016-c) >= limit));
}
isFullAge6(10, 1990,1999,1965, 2016, 1987);
*/
//Default Parameters:
/*
//ES5:
function SmithPerson(firstName, yearOfBirth, lastName, nationality){
    
    lastName === undefined ? lastName = 'Smith' :lastName;
    nationality === undefined ? nationality = 'American' : nationality;
    
    this.firstName = firstName;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
    this.nationality = nationality;
}

var john = new SmithPerson('John', 1990);
var emily = new SmithPerson('Emily', 1983, 'Diaz', 'Spanish');

//ES6:
function SmithPerson6(firstName, yearOfBirth, lastName = 'Smith', nationality = 'American'){
    this.firstName = firstName;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
    this.nationality = nationality;
};
var john6 = new SmithPerson('John', 1990);
var emily6 = new SmithPerson('Emily', 1983, 'Diaz', 'Spanish');
*/
//Maps:
/*
const question = new Map();

question.set('question', 'What is the official name of the latest Javascript version?');
//set data
question.set(1, 'ES5');
question.set(2, 'ES6');
question.set(3, 'ES2015');
question.set(4, 'ES7');
question.set('correct', 3);
question.set(true, 'Correct Answer');
question.set(false, 'wrong');
//access data
console.log(question.get('question'));
console.log(question.size);
//delete data
console.log(question.has(4));
//question.delete(4); <----- delete one entry
console.log(question.has(4));
//question.clear(); <--- delete the whole thing

//question.forEach((value, key, entiremap) => //console.log(`this is ${key} set to ${value}`));

for (let [key, value] of question.entries()){
    if(typeof(key) === 'number'){
        console.log(`Answer ${key} ${value}`);
    }
}

const ans = parseInt(prompt('write the correct answer'));

console.log(question.get(ans === question.get('correct')));
*/
//Classes:
/*

//ES5
var Person5 = function(name, year, job){
    this.name = name;
    this.year = year;
    this.job = job;
}
Person5.prototype.calculateAge = function(){
    var age = new Date().getFullYear() - this.year;
    console.log(age);
}
var John5 = new Person5('John', 1990, 'teacher');
John5.calculateAge();

//ES6
class Person6 {
    constructor(name, year, job){
        this.name = name;
        this.year = year;
        this.job = job;
    }
    calculateAge(){
        var age = new Date().getFullYear() - this.year;
        console.log(age);
    }
    
    static greeting(){ //static means children dont inherit
        console.log('Hey There!');
    }
}
const John6 = new Person6('John', 1990, 'teacher');
John6.calculateAge();
Person6.greeting();
*/
//Classes with SubClasses:
/*
var Person5 = function(name, year, job){
    this.name = name;
    this.year = year;
    this.job = job;
}
Person5.prototype.calculateAge = function(){
    var age = new Date().getFullYear() - this.year;
    console.log(age);
}
var Athelete5 = function(name, year, job, olympics, medals){
    Person5.call(this, name, year, job);
    this.olympics = olympics;
    this.medals = medals;
}

Athelete5.prototype = Object.create(Person5.prototype);

Athelete5.prototype.wonMedal = function(){
    this.medals++;
    console.log(this.medals);
}


var JohnAth5 = new Athelete5('John', 1990, 'swimmer', 3, 10);

JohnAth5.calculateAge();
JohnAth5.wonMedal();

//ES6:
class Person6 {
    constructor(name, year, job){
        this.name = name;
        this.year = year;
        this.job = job;
    }
    calculateAge(){
        var age = new Date().getFullYear() - this.year;
        console.log(age);
    }
    
    static greeting(){ //static means children dont inherit
        console.log('Hey There!');
    }
}

class Athelete6 extends Person6 {
    constructor(name, year, job, olympics, medals){
        super(name, year, job);
        this.olympics = olympics;
        this.medals = medals;
    }
    wonMedal(){
        this.medals++;
        console.log(this.medals);
    }
}

let JohnAth6 = new Athelete6('Jonn', 1999, 'swimmer', 3, 30);
JohnAth6.calculateAge();
JohnAth6.wonMedal();
*/
//Code Challenge 8!

class Street{
    constructor(length, size = 'normal', year, name){
        this.length = length;
        this.size = size;
        this.year = year;
        this.name = name;
    }
}

class Park{
    constructor(name, year, numTrees, area){
        this.name = name;
        this.year = year;
        this.numTrees = numTrees;
        this.area = area;
    }
    density(){
        return this.numTrees / this.area;
    }
}
const S1 = new Street(10, 'small', 1990, 'Pine Brook');
const S2 = new Street(102, 'huge', 1980, 'Elm st');
const S3 = new Street(30, 'normal', 1890, 'Main st');
const S4 = new Street(20, 'normal', 1999, 'Street st');

const P1 = new Park('park1', 1967, 987, 20);
const P2 = new Park('treepark', 1990, 1987, 10);
const P3 = new Park('peeark', 2016, 5, 200);

let streets = [S1, S2, S3, S4];
let parks = [P1, P2, P3];

function avgYear(Arr){
        let sum = 0;
        for(i = 0; i < Arr.length; i++){
            sum+= Arr[i].year; 
            console.log(Arr[i]);
            console.log(Arr.length);
        }
        return sum/Arr.length;
    }
function avgL(Arr, val){
        let sum = 0;
        for(i = 0; i < Arr.length; i++){
            sum+= Arr[i].length; 
            console.log(Arr[i].val);
        }
        return sum/Arr.length;
    }
function sum(Arr){
        let sum = 0;
        for(i = 0; i < Arr.length; i++){
            sum+= Arr[i].length; 
            
        }
        return sum;
    }

function finalReport(S, P){
    let stL = 0;
    console.log(`-----PARKS REPORT-----`);
    console.log(`Our ${P.length} parks have an average age of ${(2019 - avgYear(P))} years.`);
    for (i = 0; i < P.length; i++){
        console.log(`${P[i].name} has a tree density of ${P[i].density()} trees per sq km`);
    };
    for (i = 0; i < P.length; i++){
        if(P[i].numTrees >= 1000){
            console.log(`${P[i].name} has more than 1000 trees!`);
        };
    };
    console.log(`======Street Report======`);
    console.log(`Our ${S.length} streets have a total length ${sum(S)}, with an average of ${avgL(S, length)} km.`);
    for (i = 0; i < S.length; i++){
        console.log(`${S[i].name} built in ${S[i].year} is a ${S[i].size} street`);
    };
}
finalReport(streets, parks);



















