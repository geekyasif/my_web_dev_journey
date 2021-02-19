// Typer conversion and Type coercion

console.log("Typer conversion and Type coercion");

// convert number into string
let number = 54;
number = String(54);
console.log(number, (typeof number));

//convert boolean into string
let boolean = true;
boolean = String(true);
console.log(boolean, (typeof boolean));

// convert date into string
let date = new Date;
date = String(new Date);
console.log(date, (typeof date));

// convert string into numbers
let string = "12333"
string = Number("12333");
console.log(string, (typeof string));

let str = Number("1234");
str = Number("asd23");
console.log(str, (typeof str));

// array into string
let a = [1, 2, 3, 4, 5, 6, 7];
a = String([1, 2, 3, 4, 5, 6, 7]);
console.log(a, (typeof a));

// number into string
{
    let a = 75;
    console.log(a.toString());
    // console.log(a.toExponential());
}


// float into string
let float = String("112.00922");
console.log(float, (typeof float));

// to print how many decimal number ( toFixed is use)  
let f = 112.00922;
console.log(f.toFixed(1));
console.log(f.toFixed(2));
console.log(f.toFixed(3));
console.log(f.toFixed(4));
console.log(f.toFixed(5));


// Type coercion

// convert a string into number and concatenate with another number 

let myNum = Number("1234");
num = 12;
console.log(myNum + num);
