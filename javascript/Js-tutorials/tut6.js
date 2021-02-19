// tut6 - Arrays and Objects in JavaScript
console.log("Arrays and Objects in JavaScript");

let marks = [1, 2, 3, 4, 5, 6, 7];
const fruits = ['orange', 'apple', 'banana'];
const mixed = [1, 2, 3, 'orange', [1, 5, 8]];
console.log(marks);
console.log(fruits);
console.log(mixed);

// to get the index number of any element
// console.log(marks.indexOf(3));

// mutating and modifing an array

// to insert a element in the last 
// console.log(marks.push(8));
// console.log(marks)

// to insert an element in the beginnig
// console.log(marks.unshift(1039));
// console.log(marks)

// to delelte an element from the end in an array
// console.log(marks.pop());
// console.log(marks);

// to delete an element from the begining from an array
// console.log(marks.shift());
// console.log(marks);


// to print in between element from an array by index number
// console.log(marks.splice(3,6));
// console.log(marks);

// to reverse an array
// console.log(marks.reverse());

// to add or concatenate two arrays
// let marks2 = [34,56,78];
// marks = marks.concat(marks2);
// console.log(marks);

// to find the length of an array
// console.log(fruits.length)

// to find it is an array or not
// console.log(Array.isArray([1,2,3,4,5]));


// to insert an element in an array at any position
// const arr = new Array(9,8,7,6,5,4,'orange');
// arr[3] = 'harry';
// let arrelement = arr[3];
// console.log('element :', arrelement);
// console.log(arr);



// Objects in array

let myObj = {
    firstName: "Mohammad",
    lastName: "Asif",
    marks3: 89,
    isGood: true
};
console.log(myObj);
console.log(myObj.lastName);
console.log(myObj['lastName']);

let myObj2 = {
    'First Name': "Irshad",
    'Last Name': "akram",
    marks4: 59,
}
console.log(myObj2);
console.log(myObj2['First Name']);
console.log(myObj2['Last Name']);
console.log(myObj2.marks4);