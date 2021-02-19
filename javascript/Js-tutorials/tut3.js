// Data Types in Javascripts
// javascript is a dynamically programming language 
console.log('Data types in javascripts');


/* there are two types of data types
1- primitive data types (memory allocation in stack)
like - strings, numbers, boolean, null, undefined, symbols

2- reference data types (memory allocation in heap(dynamic memory allocation))
like - array, object literals, functions, Dates.

*/


// Primitive Data Types

// String
let name = 'asif';
console.log(name);

// to add two strings or concatenate
console.log('my name is ' + name);
console.log(name, "data type is " + typeof (name));



// Numbers
let num = 54, num2 = 54.5
console.log(num, num2, "data type is " + typeof (num));
console.log('data type is ' + typeof (num));


// Boolean
let isPorgrammer = true;
console.log(isPorgrammer, "data type is " + typeof (isPorgrammer));

let isfunny = false;
console.log(isfunny, "data type is " + typeof (isfunny));


// Null
let start = null;
console.log(start, "data type is " + typeof (start));


// Undefined
let undef = undefined;
console.log(undef, "data type is " + typeof (undef));



// Reference Data Type :-

// Array
let a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(a, "data type is " + (typeof a));


// Object literals
let studMarks = {
      asif: 100,
      shabaj: 95,
      irshad: 12
};
console.log(studMarks, "data type is " + (typeof studMarks));

// Function

function main() {

}
console.log("data type is " + (typeof main));


// Date
let date = new Date();
console.log(date, "data type is " + (typeof date));
