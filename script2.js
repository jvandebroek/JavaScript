/*
Variables and data types lecture!
*/
/*
var firstName = 'John';
console.log(firstName);

var lastName = 'Smith';
var age = 28;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

// Variable Naming rules
job = 'Teacher';
console.log(job);
*/
/**********************************
*Variable mutation and type coercion


var firstName = 'John';
var age = 28;
//Type coercion
console.log(firstName + ' ' + age);

var job, isMarried;
job = 'Teacher';
isMarried = false;

console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

//Variable Mutation
age = 'twenty eight';
job = "Driver";

alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

var lastName = prompt('what is his last name?');
console.log(firstName + ' ' + lastName);
*/
/***********************************
Basic Operators
//math operators
var now = 2018;
var yearJohn = now - 28;
var yearMark = now - 33;
console.log(yearJohn);
console.log(now + 2);
console.log(now * 2);
console.log(now / 10);

//Logical operators:
ageJohn = 28;
ageMark = 33;

var johnOlder = ageJohn != ageMark;
console.log(johnOlder);

//typeof operator
console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof 'ageJohn');
var x;
console.log(typeof x);
*/
/********************************
*Operator Precedence
var now = 2018;
var yearJohn = 1989;
var fullAge = 18;

//Multiple operators
var isFullAge = now - yearJohn >= fullAge; //true
console.log(isFullAge);

//Grouping
var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(average);

//Multiple Assignments
var x, y;
x = y = (3 + 5) * 4 - 6;//8*4-6 // 32-6 // 26
console.log(x, y);

// More operators
x *= 2; //x*2
console.log(x);
x += 10; //x + 10
console.log(x);
x++; //x + 1
console.log(x);
*/
/*************************
*Code challenge 1
//BMI = mass / (Height * Height)
var heightJohn, heightMark, massJohn, massMark;
heightJohn = 2;
heightMark = 2.4; //meters
massJohn = 92; //kg
massMark = 78;
var BMIMark = massMark / (heightMark * heightMark);
var BMIJohn = massJohn / (heightJohn * heightJohn);
var markHigherBMI = BMIMark > BMIJohn;
console.log(markHigherBMI);
console.log(BMIMark);
console.log(BMIJohn);
*/
/*************************
*If/ else statements

var firstName = 'John';
var civilStatus = 'single';

if (civilStatus === 'married'){
    console.log(firstName + ' is married!');
} else{
    console.log(firstName + ' will hopefully marry soon :)');
}

var isMarried = true;
if (isMarried){
    console.log(firstName + ' is married!');
} else{
    console.log(firstName + ' will hopefully marry soon :)');
}
var heightJohn, heightMark, massJohn, massMark;
heightJohn = 2;
heightMark = 2.4; //meters
massJohn = 92; //kg
massMark = 78;
var BMIMark = massMark / (heightMark * heightMark);
var BMIJohn = massJohn / (heightJohn * heightJohn);
if(BMIMark > BMIJohn){
    console.log('Mark\'s BMI is higher than John\'s')
}else{
    console.log('John\'s BMI is higher than Mark\'s')
}
//var markHigherBMI = BMIMark > BMIJohn;
//console.log(markHigherBMI);
//console.log(BMIMark);
//console.log(BMIJohn);
*/
/****************************
*Boolean Logic
var firstName = 'John';
var age = 21;
if (age<13){
    console.log(firstName + ' is a boy');
}else if(13 <= age && age < 20){
    console.log(firstName + ' is a teen');
}else if (age >= 20 && age < 30){
    console.log(firstName + ' is a young man');
}
else{
    console.log(firstName + ' is a Man');
}
*/
/****************************
*Ternary Operator and Switch Statements
var firstName = 'John';
var age = 45;

//Ternary Operator:
age >= 18 ? console.log(firstName + ' drinks beer.') :console.log(firstName + ' drinks Juice.');
var drink = age >= 18 ? 'beer' : 'juice';
console.log(firstName + ' drinks ' + drink);

//Switch Statement:
var job = 'instructor';
switch (job) {
    case 'teacher':
    case 'instructor':    
        console.log(firstName + ' teaches');
        break;
    case 'driver':
        console.log(firstName + ' drives');
        break;
    case 'designer':
        console.log(firstName + ' designs');
        break;
    default:
        console.log(firstName + ' is unemployed :(');
}
switch (true){
        case age < 13:
            console.log(firstName + ' is a boy');
            break;
        case age >= 13 && age < 20:
            console.log(firstName + ' is a teen');
            break;
        case age >= 20:
            console.log(firstName + ' is a man');
            break;
}
*/
/****************************
*Ternary Operator and Switch Statements
*truthy and falsy values and equality operators
//falsy values: undefined, null, 0, '', NaN
//truthy values: NOT falsy values.
var height;
height = 23;
if (height || height === 0){
    console.log('variable is defined');
}else{
    console.log('variable is not defined');
}

if(height == '23'){
    console.log('the == operator does type coercion!');
}
*/
/***************************
*coding challenge 2
//John scores:
var j1, j2, j3;
j1 = 100;
j2 = 120;
j3 = 103;
var jAverage = (j1 + j2 + j3)/3;
//Mike scores:
var m1, m2, m3;
m1 = 10;
m2 = 94;
m3 = 123;
var mAverage = (m1 + m2 + m3)/3;
//Mary scores:
var ma1, ma2, ma3;
ma1 = 100;
ma2 = 120;
ma3 = 103;
var maAverage = (ma1 + ma2 + ma3)/3;
if (maAverage === mAverage && jAverage === maAverage){
    console.log('all teams have the same average score of '+ jAverage);
}else if (maAverage >= mAverage && maAverage >= jAverage){
    if (maAverage === mAverage){
        console.log('Mary and Mark are tied for the highest average score at ' + maAverage);
    }else if (maAverage === jAverage){
        console.log('Mary and John are tied for the highest average score at ' + maAverage);
    }else{
        console.log('Mary has the highest average score at ' + maAverage);
    }
}else if (jAverage >= mAverage && jAverage >= maAverage){
    if (jAverage === mAverage){
        console.log('John and Mark are tied for the highest average score at ' + jAverage);
    }else if (maAverage === jAverage){
        console.log('John and John are tied for the highest average score at ' + jAverage);
    }else{
        console.log('John has the highest average score at ' + jAverage);
    }
}else if (mAverage >= maAverage && mAverage >= jAverage){
    if (maAverage === mAverage){
        console.log('Mark and Mary are tied for the highest average score at ' + mAverage);
    }else if (mAverage === jAverage){
        console.log('Mark and John are tied for the highest average score at ' + mAverage);
    }else{
        console.log('Mark has the highest average score at ' + mAverage);
    }
}
*/
/**************************
*Functions
function calculateAge(birthyear){
    return 2019 - birthyear;
}
var ageJohn = calculateAge(1993);
console.log(ageJohn);

function yearsUntilRetirement(birthyear, firstname){
    var age = calculateAge(birthyear);
    var retirement = 65 - age;
    console.log(firstname + ' retires in ' + retirement + ' years');
}
yearsUntilRetirement(1990, 'John');
yearsUntilRetirement(1969, 'Mike');
yearsUntilRetirement(1948, 'Jimmy');
*/
/*********************
*function statements and expressions


var whatDoYouDo = function (job, firstName) {
    switch (job) {
    case 'teacher':
    case 'instructor':    
        return firstName + ' teaches';
    case 'driver':
        return firstName + ' drives';
    case 'designer':
        return firstName + ' designs';
    default:
        return firstName + ' is unemployed :(';
    }
}
console.log(whatDoYouDo('teacher', 'John'));
console.log(whatDoYouDo('Sits around', 'Mark'));
console.log(whatDoYouDo('driver', 'Jim'));

*/
/*********************
*Arrays

var names = ['John', 'Mark', 'Jane'];
var years = new Array(1990, 1969, 1948);
console.log(names[0]);
console.log(names.length);
console.log(names);

names[1] = 'Ben';
console.log(names);
names[names.length] = 'Mary';
console.log(names);

var john = ['John', 'Smith', 1990, 'teacher', false];
john.push('blue'); //add to end
john.unshift('Mr. '); //add to start
john.pop(); //remove from end
john.shift(); //remove from start
console.log(john);
console.log(john.indexOf(1990));//tells where element is -1 if not in.
var isdesigner = john.indexOf('designer') === -1 ? 'John not a designer' : 'John is designer';
console.log(isdesigner);
*/
/********************
*Coding challenge 3
function tipAmt(bill){
    if (bill < 50){
        return bill * 0.2;
    }else if (bill <= 200){
        return bill * 0.15
    }else{
        return bill * 0.1
    }
}
var bills = [124, 48, 268];
var tips = [tipAmt(bills[0]), tipAmt(bills[1]), tipAmt(bills[2])];
var tCost = [(bills[0] + tips[0]), (bills[1] + tips[1]), (bills[2] + tips[2])];

console.log(bills, tips, tCost);
*/
/********************
*Objects and properties

var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false
};
console.log(john);
console.log(john.birthYear);
console.log(john['lastName']);
var x = 'birthYear';
console.log(john[x]);
john.job = 'designer';
john['isMarried'] = true;
console.log(john);

var jane = new Object();
jane.name = 'Jane';
jane.birthYear = 1969;
jane['lastName'] = 'Smith';
console.log(jane);
*/
/********************
*Object methods
var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false,
    calcAge: function(){
        this.age = 2019 - this.birthYear;
    }
};

console.log(john);
john.calcAge();
console.log(john);
*/
/********************
*Code challenge 4
var john = {
    firstName: 'John',
    lastName: 'Smith',
    mass: 60,
    height: 2.3,
    BMIcalc: function(){
        this.BMI = this.mass / (this.height * this.height);
        return this.BMI
    }
};
var mark = {
    firstName: 'mark',
    lastName: 'Simon',
    mass: 70,
    height: 2,
    BMIcalc: function(){
        this.BMI = this.mass / (this.height * this.height);
        return this.BMI
    }
};

if(mark.BMIcalc() > john.BMIcalc()){
    console.log(mark.firstName + ' ' + mark.lastName + ' has a higher BMI of ' + mark.BMI);
}else if (john.BMIcalc() > mark.BMIcalc()){
    console.log(john.firstName + ' ' + john.lastName + ' has a higher BMI of ' + john.BMI);
}else{
    console.log('they have the same BMI: ' + john.BMI);
}
*/
/***************************
*Iterations and loops


//For
for (var i = 0; i < 10; i++){
    console.log(i);
}

var john = ['John', 'Smith', 1990, 'teacher', false];
for (var i = 0; i < john.length; i++){
    console.log(john[i]);
}

//while
var i = 0;
while(i < john.length){
    console.log(john[i]);
    i++;
}
//continue and break:
var john = ['John', false, 'Smith', 1990, 'teacher', false];

for (var i = 0; i < john.length; i++){
    if(typeof john[i] === 'number') break;
    if(typeof john[i] !== 'string') continue;
    console.log(john[i]);
}
*/
/*********************
*code challenge 5
var john = {
    bills: [124, 48, 268, 180, 42],
    tips: [],
    tCost: [],
    calcTips: function(){
        for(var i = 0; i < this.bills.length; i++){
            if (this.bills[i] < 50){
                this.tips[i] = this.bills[i] * .2;
                this.tCost[i] = this.tips[i] + this.bills[i];
            }else if (this.bills <= 200){
                this.tips[i] = this.bills[i] * .15;
                this.tCost[i] = this.tips[i] + this.bills[i];
            }else{
                this.tips[i] = this.bills[i] * .1;
                this.tCost[i] = this.tips[i] + this.bills[i];
            }
        }
        return [this.tips, this.tCost];
    }
}
var mark = {
    bills: [77, 375, 110, 45],
    tips: [],
    tCost: [],
    calcTips: function(){
        for(var i = 0; i < this.bills.length; i++){
            if (this.bills[i] < 100){
                this.tips[i] = this.bills[i] * .2;
                this.tCost[i] = this.tips[i] + this.bills[i];
            }else if (this.bills <= 300){
                this.tips[i] = this.bills[i] * .1;
                this.tCost[i] = this.tips[i] + this.bills[i];
            }else{
                this.tips[i] = this.bills[i] * .25;
                this.tCost[i] = this.tips[i] + this.bills[i];
            }
        }
        return [this.tips, this.tCost];
    }
}
function averageTip(intArray){
    var total = 0;
    for(var i = 0; i < intArray.length; i++){
        total+= intArray[i];
    }
    return total/intArray.length;
}

console.log('mark------' +mark.calcTips() +'\nJohn---   ' + john.calcTips());
if (averageTip(mark.tips) > averageTip(john.tips)){
    console.log('Mark tipped on average more, with an average of: ' + averageTip(mark.tips));
}else if (averageTip(mark.tips) < averageTip(john.tips)){
    console.log('John tipped on average more, with an average of: ' + averageTip(john.tips));
}else{
    console.log('they tip the same: ' + averageTip(john.tips));
}
*/