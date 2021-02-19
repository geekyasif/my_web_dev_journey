// variables in javascripts
// var, let, const.


// Rules for creating JavaScript Variables
/*
1. Cannot start with numbers
2. Can start with letter, numbers, _ or $
3. Are case sensitive
*/


/* Most common programming case types:

Basically it is a syntax to declare variables.

1. camelCase  
ex- intMarks, fruitName

2. kebab-case
ex- var-name, sub-marks, sub-teacher , main-body

3. snake_case 
ex - main_container, name_stud etc.

4. PascalCase 
ex - YourName, SubMarks, etc.
*/

console.log('variables in javascripts');

// Variable --> 1- var
var stringName = 'asif';
var number_marks = 35;
var BooLean = true;
var float = 35.5;

console.log(stringName, number_marks, BooLean, float);

var city = 'ballia';
console.log(city);

var fruit = 'apple';
var price = 70;
console.log(fruit, price);

// to add two numbers
var a = 5;
var b = 10;
console.log(a + b);

// or to add simply , basically console is also use like calculater 
console.log(5 + 10);



// Variable --> 2- let

// let variable is a scope variable
{
    let name = 'mohammad';
    city = 'lucknow';
    console.log(name, city);

    // to add two string or concatenate
    console.log(name + city);
}

{
    let name = 'irshad'
    city = 'kanpur'
    console.log(name, city);
}



// variable 3-const

const array = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(array);

// to add a number in the last
array.push(9);
console.log(array);



